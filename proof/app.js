
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const optionCards = Array.from(
    document.querySelectorAll(".option-card")
  );

  const selectedOptionInput = document.getElementById("selected-option");
  const flightForm = document.getElementById("flight-form");
  const umrahForm = document.getElementById("umrah-form");
  const formMessage = document.getElementById("form-message");

  const modal = document.getElementById("review-modal");
  const reviewTitle = document.getElementById("review-title");
  const reviewDetails = document.getElementById("review-details");
  const closeButton = document.getElementById("review-close");
  const doneButton = document.getElementById("review-done");

  const tripFormSection = document.getElementById("trip-form");

  if (
    !optionCards.length ||
    !selectedOptionInput ||
    !flightForm ||
    !umrahForm ||
    !modal ||
    !reviewTitle ||
    !reviewDetails
  ) {
    console.error("A required prototype element is missing.");
    return;
  }

  const ramadanNote =
    "Ramadan travel — please confirm suitable dates and accommodation availability.";

  function setOption(option, shouldScroll = true) {
    const selectedCard = optionCards.find(
      (card) => card.dataset.option === option
    );

    if (!selectedCard) return;

    // Update selected card and accessibility state.
    optionCards.forEach((card) => {
      card.setAttribute(
        "aria-pressed",
        String(card === selectedCard)
      );
    });

    // Keep the selected package name in the hidden field.
    selectedOptionInput.value = option;

    // Flights has its own form. The other two share the Umrah form.
    flightForm.hidden = option !== "Flights";
    umrahForm.hidden = option === "Flights";

    // Update the selection status.
    document.getElementById("selection-status")?.remove();

    const status = document.createElement("p");
    status.id = "selection-status";
    status.className = "selection-status";
    status.setAttribute("role", "status");
    status.textContent = `${option} selected.`;

    selectedCard
      .closest(".option-grid")
      ?.insertAdjacentElement("afterend", status);

    // Clear any previous form message.
    if (formMessage) {
      formMessage.textContent = "";
      formMessage.className = "form-message";
    }

    // Apply Ramadan defaults without replacing existing user input.
    const duration = document.getElementById("trip-duration");
    const extra = document.getElementById("additional-requirements");

    if (option === "Ramadan Travel") {
      if (duration) {
        duration.value = "14 days";
      }

      if (extra && !extra.value.trim()) {
        extra.value = ramadanNote;
      }
    } else if (
      option === "Family Room" &&
      extra &&
      extra.value === ramadanNote
    ) {
      extra.value = "";
    }

    if (shouldScroll) {
      tripFormSection?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  // Connect all three option cards.
  optionCards.forEach((card) => {
    card.addEventListener("click", () => {
      setOption(card.dataset.option);
    });
  });

  function openReview() {
    const option = selectedOptionInput.value || "Family Room";

    // Put the selected package name at the top of the popup.
    reviewTitle.textContent = option;
    reviewDetails.replaceChildren();

    // Collect every field from the shared Family/Ramadan form.
    const fields = Array.from(
      umrahForm.querySelectorAll("input, select, textarea")
    ).filter((field) => field.type !== "hidden");

    fields.forEach((field) => {
      const label = umrahForm.querySelector(
        `label[for="${field.id}"]`
      );

      const name = label
        ? label.textContent.trim()
        : field.name || field.id;

      let value = field.value.trim();

      if (
        field.tagName === "SELECT" &&
        field.selectedIndex >= 0
      ) {
        value = field.options[field.selectedIndex].text.trim();
      }

      if (!value) {
        value = "Not provided";
      }

      const dt = document.createElement("dt");
      const dd = document.createElement("dd");

      dt.textContent = name;
      dd.textContent = value;

      reviewDetails.append(dt, dd);
    });

    modal.hidden = false;
    closeButton?.focus();
  }

  function closeReview() {
    modal.hidden = true;
  }

  // Review button: validate required fields, then show the summary.
  umrahForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!umrahForm.reportValidity()) {
      return;
    }

    openReview();
  });

  // Close popup using its buttons.
  closeButton?.addEventListener("click", closeReview);
  doneButton?.addEventListener("click", closeReview);

  // Close popup when clicking the dark backdrop.
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeReview();
    }
  });

  // Close popup with Escape.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeReview();
    }
  });

  // Default state: Family Room selected on page load.
  setOption("Family Room", false);
});
