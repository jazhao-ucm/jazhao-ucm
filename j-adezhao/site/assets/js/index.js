(() => {
  const chips = Array.from(document.querySelectorAll(".chip[data-filter]"));
  const panels = Array.from(document.querySelectorAll("[data-panel-category]"));

  if (!chips.length || !panels.length) return;

  const normalize = (value) => value.trim().toLowerCase();

  const applyFilter = (filter) => {
    const target = normalize(filter);

    panels.forEach((panel) => {
      const categories = normalize(panel.getAttribute("data-panel-category") || "");
      const show = target === "all" || categories.includes(target);
      panel.classList.toggle("is-hidden", !show);
    });

    chips.forEach((chip) => {
      const active = normalize(chip.dataset.filter || "") === target;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => applyFilter(chip.dataset.filter || "all"));
  });

  // PBJ default: show everything, minimal assumptions.
  applyFilter("all");
})();
