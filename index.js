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
    }
  });
});
