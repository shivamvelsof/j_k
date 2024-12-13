$(document).ready(function () {
  $("[data-banner-button]").click(function () {
    const btnValue = $(this).attr("data-banner-button");
    $("[data-banner-button]").removeClass("active");
    $(this).addClass("active");
    if (btnValue === "ut_index") {
      $("#sdg-rotating-wheel-handler").addClass("show-rotating-wheel");
    } else {
      $("#sdg-rotating-wheel-handler").removeClass("show-rotating-wheel");
    }
    if (btnValue === "sdg_india_index") {
      window.location.href = "comparison.html";
    } else if (btnValue === "oomf_index") {
      window.location.href = "oomf.html";
    }
  });
  const myModalEl = document.getElementById("goal_indicator_score");
  myModalEl.addEventListener("show.bs.modal", (event) => {
    const btnValue = $("[data-banner-button].active").attr(
      "data-banner-button"
    );
    if (btnValue === "ut_index") {
      $("[data-ut-note]").removeClass("d-none");
      $(`#goal_indicator_score [data-toggle-tab-btn="2"]`).click();
      $(`#goal_indicator_score [data-toggle-tab-btn="2"]`).removeClass(
        "d-none"
      );
      $(`#goal_indicator_score [data-toggle-tab-btn="1"]`).addClass("d-none");
    } else {
      $("[data-ut-note]").addClass("d-none");
      $(`#goal_indicator_score [data-toggle-tab-btn="1"]`).click();
      $(`#goal_indicator_score [data-toggle-tab-btn="1"]`).removeClass(
        "d-none"
      );
      $(`#goal_indicator_score [data-toggle-tab-btn="2"]`).addClass("d-none");
    }
  });

  //

  const xAxisLabels = [
    {
      img: "./assets/images/no-poverty.png",
      title: "No Poverty",
      class: "",
    },
    {
      img: "./assets/images/zero-hunger.png",
      title: "Zero hunger",
      class: "",
    },
    {
      img: "./assets/images/good-health.png",
      title: "Good health and well-being",
      class: "",
    },
    {
      img: "./assets/images/quality-education.png",
      title: "Quality education",
      class: "",
    },
    {
      img: "./assets/images/gender-equality.png",
      title: "Gender equality",
      class: "",
    },
    {
      img: "./assets/images/clean-water.png",
      title: "Clean water and sanitation",
      class: "",
    },
    {
      img: "./assets/images/affordable.png",
      title: "Affordable and clean energy",
      class: "",
    },
    {
      img: "./assets/images/decent-work.png",
      title: "Decent work and economic growth",
      class: "",
    },
    {
      img: "./assets/images/industry-innovation.png",
      title: "Industry, Innovation and Infrastructure",
      class: "",
    },
    {
      img: "./assets/images/reduced.png",
      title: "Reduced inequality",
      class: "",
    },
    {
      img: "./assets/images/sustainable.png",
      title: "Sustainable cities and communities",
      class: "",
    },
    {
      img: "./assets/images/responsible.png",
      title: "Responsible consumption and production",
      class: "",
    },
    {
      img: "./assets/images/climate-action.png",
      title: "Climate action",
      class: "",
    },
    {
      img: "./assets/images/goal_14.png",
      title: "Life below water",
      class: "disabled-goal",
    },
    {
      img: "./assets/images/life-on-land.png",
      title: "Life on land",
      class: "",
    },
    {
      img: "./assets/images/peace-justice.png",
      title: "Peace, justice and strong institutions",
      class: "",
    },
    {
      img: "./assets/images/goal_17.png",
      title: "Partnership for the Goals",
      class: "disabled-goal",
    },
  ];

  const sunriseCategories = [];

  for (let index = 0; index < xAxisLabels.length; index++) {
    const element = xAxisLabels[index];
    sunriseCategories.push(
      `<div class="label_wrapper ${element.class}">
        <img class="label_img" src="${element.img}" />
        <div class="label_text">${element.title}</div>
      </div>`
    );
  }

  Highcharts.chart(
    "sunrise-graph",
    {
      chart: {
        polar: true,
        type: "column",
        marginBottom: -350,
      },
      title: {
        text: "",
      },
      legend: {
        // margin: 20, // Add bottom margin to legends
        y: -100, // Adjust the legend position upwards
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        size: "85%", // Adjust size to allow for proper spacing
      },
      xAxis: {
        tickInterval: 20,
        min: 0,
        max: 340,
        //categories: sunriseCategories,
        // gridLineWidth: 0,
        // gridLineColor: "transparent",
        lineWidth: 0,
        tickmarkPlacement: "on", // Adjust tickmark placement for better alignment
        labels: {
          useHTML: true,
          distance: 40,
          formatter: function () {
            return sunriseCategories[this.value / 20];
          },
          // allowOverlap: true,
          style: {
            // width: "140px", // Adjust label width if necessary
            textAlign: "center", // Center align text
            zIndex: 0,
          },
        },
      },
      yAxis: {
        min: -10,
        // gridLineWidth: 0,
        labels: {
          enabled: false,
          zIndex: 0,
          // allowOverlap: true,
        },
      },
      plotOptions: {
        series: {
          stacking: "normal",
          pointStart: 0,
          pointInterval: 20,
          cursor: "pointer",
          point: {
            events: {
              click: function () {
                $("#indicatorClassificationInnerPopup").modal("show");
              },
            },
          },
        },
        column: {
          pointStart: 10,
          pointInterval: 20,
          stacking: "normal",
          borderWidth: 0,
          borderColor: "transparent",
          // pointPadding: 0.05,
          groupPadding: 0.05,
          pointPadding: 0,
          // groupPadding: 0,
          pointPlacement: "on", // Change to 'on' for alignment
        },
      },
      series: [
        {
          type: "column",
          name: "Not Applicable",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 10],
          color: "#ccc", // Grey color for the background
          // enableMouseTracking: false, // This disables interactions such as tooltips for this series
          // showInLegend: false, // Optional: Hide from legend
          tooltip: {
            pointFormatter: function () {
              return '<span style="color:#000;">This goal is not applicable for J&K</span>';
            },
            headerFormat: "", // Remove header
            footerFormat: "", // Remove footer
            formatter: function () {
              // Prevent the default tooltip
              return false;
            },
          },
        },
        {
          type: "column",
          name: "Best Performers",
          data: [5, 7, 6, 5, 4, 3, 2, 1, 6, 7, 4, 5, 4, 0, 2, 1, 0],
          color: "#62AA24",
          tooltip: {
            headerFormat: "", // Remove header
            footerFormat: "", // Remove footer
            zIndex: 99999,
          },
        },
        {
          type: "column",
          name: "Requires Attention",
          data: [2, 1, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 0, 7, 6, 0],
          color: "#FDD617",
          tooltip: {
            headerFormat: "", // Remove header
            footerFormat: "", // Remove footer
            zIndex: 99999,
          },
        },
        {
          type: "column",
          name: "Requires Immediate Action",
          data: [3, 2, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 0, 1, 3, 0],
          color: "#D8191E",
          tooltip: {
            headerFormat: "", // Remove header
            footerFormat: "", // Remove footer
            zIndex: 99999,
          },
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 565,
            },
            chartOptions: {
              chart: {
                marginBottom: 0,
              },
              pane: {
                size: "75%", // Adjust size to allow for proper spacing
              },
            },
          },
        ],
      },
    },
    function (chart) {
      // on complete

      // Calculate center position
      var centerX = chart.plotLeft + chart.plotWidth * 0.5;
      var centerY = chart.plotTop + chart.plotHeight * 0.5 - 45;
      var width = 223; // Width of the image
      var height = 150; // Height of the image

      let mobileMedia = window.matchMedia("(max-width: 565px)");

      if (mobileMedia.matches) {
        centerY = chart.plotTop + chart.plotHeight * 0.5 - 17;
        width = 60; // Width of the image
        height = 40; // Height of the image
      }

      chart.renderer
        .image(
          "./assets/images/semi-sgd.png",
          centerX - width / 2,
          centerY - height / 2,
          width,
          height
        )
        .attr({
          zIndex: 10, // Ensures the image is above most chart elements
        })
        .add();
    }
  );
});
