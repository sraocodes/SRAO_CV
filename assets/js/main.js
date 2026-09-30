/* drsrao.com — progressive enhancement only.
 *
 * Every feature here degrades to working HTML: filters start visible, search
 * starts empty, the theme falls back to the system preference. No framework,
 * no bundler, roughly 3 KB.
 */
(function () {
  "use strict";

  /* ---- Theme -------------------------------------------------------------
   * The inline snippet in <head> has already applied the stored theme to avoid
   * a flash. This only wires up the toggle and keeps the label in sync.
   */
  var root = document.documentElement;

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function currentTheme() {
    return root.getAttribute("data-theme") || (systemPrefersDark() ? "dark" : "light");
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* private mode */ }

    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    applyTheme(currentTheme());
    toggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  /* ---- Mobile menu ------------------------------------------------------- */
  var menuBtn = document.querySelector(".menu-btn");
  var mobileNav = document.querySelector(".mobile-nav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = mobileNav.getAttribute("data-open") === "true";
      mobileNav.setAttribute("data-open", open ? "false" : "true");
      menuBtn.setAttribute("aria-expanded", open ? "false" : "true");
    });

    // Escape closes the menu and returns focus to the button.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.getAttribute("data-open") === "true") {
        mobileNav.setAttribute("data-open", "false");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
      }
    });
  }

  /* ---- Filtering + search ------------------------------------------------
   * Any container with [data-filterable] gets theme buttons and/or a search
   * box. Items carry data-theme-key and data-search text.
   */
  document.querySelectorAll("[data-filterable]").forEach(function (scope) {
    var items = Array.prototype.slice.call(scope.querySelectorAll("[data-item]"));
    var buttons = Array.prototype.slice.call(scope.querySelectorAll(".filter"));
    var input = scope.querySelector("[data-search-input]");
    var empty = scope.querySelector("[data-empty]");
    var counter = scope.querySelector("[data-count]");
    var activeTheme = "all";

    function run() {
      var q = input ? input.value.trim().toLowerCase() : "";
      var shown = 0;

      items.forEach(function (item) {
        var themeOk = activeTheme === "all" ||
          (item.getAttribute("data-theme-key") || "").split(" ").indexOf(activeTheme) !== -1;
        var textOk = !q || (item.getAttribute("data-search") || "").toLowerCase().indexOf(q) !== -1;
        var visible = themeOk && textOk;

        item.setAttribute("data-hidden", visible ? "false" : "true");
        if (visible) shown++;
      });

      if (empty) empty.setAttribute("data-hidden", shown === 0 ? "false" : "true");
      if (counter) counter.textContent = shown;

      // Group headings whose children are all filtered out should disappear too.
      scope.querySelectorAll("[data-group]").forEach(function (group) {
        var any = group.querySelectorAll('[data-item][data-hidden="false"]').length;
        group.setAttribute("data-hidden", any === 0 ? "true" : "false");
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeTheme = btn.getAttribute("data-filter") || "all";
        buttons.forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        run();
      });
    });

    if (input) {
      var t;
      input.addEventListener("input", function () {
        clearTimeout(t);
        t = setTimeout(run, 120);
      });
    }

    run();
  });

  /* ---- Research view switch (Theme vs Timeline) -------------------------- */
  document.querySelectorAll("[data-viewswitch]").forEach(function (scope) {
    var tabs = Array.prototype.slice.call(scope.querySelectorAll("[data-view-btn]"));
    var panels = Array.prototype.slice.call(scope.querySelectorAll("[data-view-panel]"));

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-view-btn");
        tabs.forEach(function (t) {
          t.setAttribute("aria-pressed", t === tab ? "true" : "false");
        });
        panels.forEach(function (p) {
          p.setAttribute("data-hidden", p.getAttribute("data-view-panel") === target ? "false" : "true");
        });
      });
    });
  });
})();
