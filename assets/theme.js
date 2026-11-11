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
                                          var control = document.getElementById("theme");
                                              var container = document.getElementById("appearance");
                                                  if (!control || !container) return;
                                                      control.value = choice;
                                                          container.hidden = false;
                                                              control.addEventListener("change", function () {
                                                                    choice = control.value;
                                                                          apply(choice);
                                                                                try { localStorage.setItem("appearance", choice); } catch (_) {}
                                                                                    });
                                                                                      });
                                                                                      })();
