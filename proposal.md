# Product Improvement Proposal: Travel.pk

## 1. Problem Statement

The audit identified usability issues across Travel.pk's package discovery and enquiry journeys. The most significant observed issue was mobile scrolling stopping after cookie consent on a Vivo V23e using Chrome. Other issues included a non-functioning Religious category interaction, a quotation action visible only on hover, and a generic enquiry subject that did not reflect the selected package.

The Umrah journey also lacks a clear path from exploring package options to communicating accommodation preferences and requesting a quotation. Visitors may need to navigate between pages or repeat information before the team can understand their requirements.

## 2. Proposed Solution

Develop a clearer, responsive Umrah planning and quotation experience that helps visitors communicate their requirements in one place.

The proposed experience includes:

- A dedicated flight-search form with trip type, departure and destination cities, dates, passenger count, and cabin class.
- An Umrah planning form for Family Room and Ramadan Travel options.
- Fields for departure date, trip duration, nights in Makkah and Madinah, traveller numbers, room arrangements, and preferred hotel distance.
- Optional budget and additional-requirements fields.
- A review step that displays the selected option's title and entered preferences before submission.
- Basic validation to prevent inconsistent trip-duration and accommodation-night selections.

The interface should clearly communicate that it is a planning and enquiry experience, not a live booking system.

## 3. Prototype Delivered

A standalone HTML, CSS, and JavaScript prototype has been created to demonstrate the proposed interaction.

The prototype includes three selectable options: Flights, Family Room, and Ramadan Travel. Flights displays its own form, while Family Room and Ramadan Travel share the Umrah planning form. The review summary retains the selected option's title and displays the entered preferences.

The prototype does not connect to Travel.pk's production website, live flight results, hotel inventory, supplier data, or quotation services. No live booking or enquiry is submitted.

## 4. Expected Benefits

- Make the path from Umrah planning to quotation clearer.
- Reduce uncertainty about which package or option the visitor selected.
- Help customers provide more complete travel and accommodation requirements.
- Reduce the need for follow-up questions caused by missing enquiry details.
- Provide a foundation for testing whether a more structured planning experience improves enquiry completion.

These are expected benefits and have not yet been measured in production.

## 5. Measurement Plan

**Primary metric:** Quotation form completion rate.

**Definition:** The percentage of visitors who start the quotation form and successfully complete it.

**Baseline:** Not available from the public website audit. Existing analytics would be required to establish it.

**Proposed success threshold:** A 20% relative improvement in form completion rate compared with the established baseline, subject to sufficient sample size.

**Supporting measures:**
- Form abandonment rate.
- Percentage of enquiries containing sufficient information to prepare a relevant quotation.
- Usability-test completion rate and feedback.

**What would challenge the hypothesis:** No meaningful improvement in completion rates, or evidence that other factors are the primary causes of abandonment.

## 6. Dependencies and Risks

- Access to existing analytics and form-submission data.
- Confirmation of Travel.pk's current quotation workflow.
- Confirmation of available accommodation options and supplier data.
- Technical investigation of the mobile scrolling issue.
- Validation of the existing category and quotation interactions.
- Privacy-conscious handling of customer contact details and travel preferences.

Hotel names, prices, distances, and availability should only be displayed when supported by verified data. Any production integration would require the relevant APIs, supplier information, and operational approval.

## 7. Recommended Next Steps

1. Investigate and resolve the mobile scrolling issue.
2. Fix and retest the Religious category interaction and hover-dependent quotation action.
3. Validate the prototype with representative users on desktop and mobile.
4. Confirm the feasibility of integrating the planning form with the existing quotation workflow.
5. Establish baseline metrics before implementing a production change.
6. Run a controlled evaluation, where feasible, to determine whether the new journey improves quotation completion.

## 8. Scope and Limitations

This proposal is based on manual inspection of Travel.pk's public website and a standalone prototype. The prototype demonstrates a possible user experience rather than a production-ready solution. Technical root causes, internal conversion data, supplier capabilities, and actual business outcomes remain unverified.