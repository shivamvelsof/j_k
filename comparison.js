$(document).ready(function () {
  const SDG_GOALS = {
    0: "All Goals",
    1: "No Poverty",
    2: "Zero Hunger",
    3: "Good Health and Well-being",
    4: "Quality Education",
    5: "Gender Equality",
    6: "Clean Water and Sanitation",
    7: "Affordable and Clean Energy",
    8: "Decent Work and Economic Growth",
    9: "Industry, Innovation, and Infrastructure",
    10: "Reduced Inequalities",
    11: "Sustainable Cities and Communities",
    12: "Responsible Consumption and Production",
    13: "Climate Action",
    14: "Life Below Water",
    15: "Life on Land",
    16: "Peace, Justice, and Strong Institutions",
    17: "Partnerships for the Goals",
  };

  $("[data-goal-btn]").click(function () {
    const target = $(this).attr("data-goal-btn");
    $("[data-goal-btn]").removeClass("active");
    $(this).addClass("active");
    $("[data-selected-goal-color]").attr("data-selected-goal-color", target);
    $("[data-selected-goal-color] h4").html(SDG_GOALS[target]);
  });
});
