(function () {
  "use strict";
  var root = document.documentElement;
  var choice = "system";
  try {
    var saved = localStorage.getItem("appearance");
    if (saved === "light" || saved === "dark") choice = saved;
  } catch (_) {}

  function apply(value) {
    if (value === "light" || value === "dark") root.setAttribute("data-theme", value);
    else root.removeAttribute("data-theme");
  }

  apply(choice);

  document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("appearance");
    if (!container) return;
    var buttons = container.querySelectorAll("[data-theme-value]");
    if (!buttons.length) return;

    function syncButtons() {
      for (var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        btn.setAttribute("aria-pressed", btn.getAttribute("data-theme-value") === choice ? "true" : "false");
      }
    }

    syncButtons();
    container.hidden = false;

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        choice = this.getAttribute("data-theme-value") || "system";
        apply(choice);
        syncButtons();
        try { localStorage.setItem("appearance", choice); } catch (_) {}
      });
    }
  });
})();
