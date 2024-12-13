$(document).ready(function () {
  const SDG_GOALS = {
    0: "Overall SDG India Index - Comparison",
    1: "No Poverty - SDG India Index - Comparison",
    2: "Zero Hunger - SDG India Index - Comparison",
    3: "Good Health and Well-being - SDG India Index - Comparison",
    4: "Quality Education - SDG India Index - Comparison",
    5: "Gender Equality - SDG India Index - Comparison",
    6: "Clean Water and Sanitation - SDG India Index - Comparison",
    7: "Affordable and Clean Energy - SDG India Index - Comparison",
    8: "Decent Work and Economic Growth - SDG India Index - Comparison",
    9: "Industry, Innovation, and Infrastructure - SDG India Index - Comparison",
    10: "Reduced Inequalities - SDG India Index - Comparison",
    11: "Sustainable Cities and Communities - SDG India Index - Comparison",
    12: "Responsible Consumption and Production - SDG India Index - Comparison",
    13: "Climate Action - SDG India Index - Comparison",
    14: "Life Below Water - SDG India Index - Comparison",
    15: "Life on Land - SDG India Index - Comparison",
    16: "Peace, Justice, and Strong Institutions - SDG India Index - Comparison",
    17: "Partnerships for the Goals - SDG India Index - Comparison",
  };

  $("[data-goal-btn]").click(function () {
    const target = $(this).attr("data-goal-btn");
    $("[data-goal-btn]").removeClass("active");
    $(`[data-goal-btn=${target}]`).addClass("active");
    $("[data-selected-goal-color]").attr("data-selected-goal-color", target);
    $("[data-selected-goal-color] h4").html(SDG_GOALS[target]);
  });

  Highcharts.chart("comparison-graph", {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    // subtitle: {
    //   text:
    //     'Source: <a target="_blank" ' +
    //     'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
    // },
    xAxis: {
      categories: [2020, 2021, 2022, 2023],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    tooltip: {
      //   valueSuffix: " (1000 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true, // Enable data labels
          format: "{y}", // Show the value of the bar
        },
      },
    },
    series: [
      {
        name: "India",
        data: [
          { y: 54, color: "#FFC000" }, // Blue for 2020
          { y: 80, color: "#009900" }, // Blue for 2021
          { y: 40, color: "#DC3746" }, // Red for 2022
          { y: 54, color: "#FFC000" }, // Blue for 2023
        ],
      },
      {
        name: "J&K",
        data: [
          { y: 80, color: "#009900" }, // Green for 2020
          { y: 85, color: "#009900" }, // Green for 2021
          { y: 94, color: "#009900" }, // Green for 2022
          { y: 72, color: "#009900" }, // Green for 2023
        ],
      },
      {
        name: "Kerala",
        data: [
          { y: 52, color: "#FFC000" }, // Yellow for 2020
          { y: 54, color: "#FFC000" }, // Yellow for 2021
          { y: 55, color: "#FFC000" }, // Yellow for 2022
          { y: 31, color: "#DC3746" }, // Red for 2023
        ],
      },
      {
        name: "Chandigarh",
        data: [
          { y: 75, color: "#009900" }, // Yellow for 2020
          { y: 68, color: "#009900" }, // Yellow for 2021
          { y: 79, color: "#009900" }, // Yellow for 2022
          { y: 55, color: "#FFC000" }, // Red for 2023
        ],
      },
    ],
    legend: {
      enabled: false, // Disable the legend
    },
  });
  loadExcelFile();
  function handleSecondaryFilter() {
    const docScrollTop = $(document).scrollTop();
    if (docScrollTop > 130) {
      $(".sticky-goals-filter").removeClass("hide-filter");
    } else {
      $(".sticky-goals-filter").addClass("hide-filter");
    }
  }
  $(document).on("scroll", handleSecondaryFilter);
  handleSecondaryFilter();
});

// Function to load and parse the Excel file
function loadExcelFile() {
  //   const fileUrl = "Financial Sample.xlsx"; // URL to the Excel file on your server
  const fileUrl = "UT Profile Deep Dive Analysis.xlsx"; // URL to the Excel file on your server

  // Fetch the file from the server
  fetch(fileUrl)
    .then((response) => response.arrayBuffer()) // Get the file as an array buffer
    .then((data) => {
      const workbook = XLSX.read(data, { type: "array" }); // Read the Excel file
      const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Get the first sheet
      const html = XLSX.utils.sheet_to_html(sheet); // Convert the sheet to HTML

      // Add the generated HTML to the modal
      const contentDiv = document.getElementById("excelContent");
      contentDiv.innerHTML = html;

      // Add a class for styling the table
      const table = contentDiv.querySelector("table");
      if (table) {
        table.classList.add("excel-table");
      }
    })
    .catch((error) => {
      console.error("Error loading Excel file:", error);
      document.getElementById("excelContent").innerHTML =
        "Failed to load Excel file.";
    });
}
