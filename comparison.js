$(document).ready(function () {
  const SDG_GOALS = {
    0: "Composite Score - Comparison",
    1: "No Poverty - Comparison",
    2: "Zero Hunger - Comparison",
    3: "Good Health and Well-being - Comparison",
    4: "Quality Education - Comparison",
    5: "Gender Equality - Comparison",
    6: "Clean Water and Sanitation - Comparison",
    7: "Affordable and Clean Energy - Comparison",
    8: "Decent Work and Economic Growth - Comparison",
    9: "Industry, Innovation, and Infrastructure - Comparison",
    10: "Reduced Inequalities - Comparison",
    11: "Sustainable Cities and Communities - Comparison",
    12: "Responsible Consumption and Production - Comparison",
    13: "Climate Action - Comparison",
    14: "Life Below Water - Comparison",
    15: "Life on Land - Comparison",
    16: "Peace, Justice, and Strong Institutions - Comparison",
    17: "Partnerships for the Goals - Comparison",
  };

  $("[data-goal-btn]").click(function () {
    const target = $(this).attr("data-goal-btn");
    $("[data-goal-btn]").removeClass("active");
    $(this).addClass("active");
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
    ],
    legend: {
      enabled: false, // Disable the legend
    },
  });
});
