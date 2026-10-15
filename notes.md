# Notes

## 1. Work Completed So Far

### Manual Product Audit
- Manually inspected Travel.pk's public website.
- Identified usability issues with mobile scrolling after cookie consent, the Religious category button, hover-only quotation actions, and selected-package context.
- Identified gaps in the Umrah customer journey, accommodation discovery, and the next step for unavailable domestic flight routes.
- Captured screenshots and screen recordings in `proof/screenshots/`.

### Audit and Recommendations
- Documented observed behaviour, expected behaviour, potential business impact, severity, and estimated effort.
- Recommended improvements to the Umrah package-discovery and quotation journey.
- Defined a preliminary measurement plan, including a proposed form-completion improvement target.
- Documented assumptions, dependencies, and limitations where internal data or technical access was unavailable.

### Standalone Prototype
- Created a standalone prototype using HTML, CSS, and JavaScript.
- Added three planning options: Flights, Family Room, and Ramadan Travel.
- Implemented a separate flight-search form.
- Implemented a shared Umrah planning form for Family Room and Ramadan Travel.
- Added a review summary that displays the selected option title and entered preferences.
- Added validation to prevent combined Makkah and Madinah nights from exceeding the selected trip duration.
- Kept the prototype independent of Travel.pk's production website and services.

## 2. Current Limitations

- Flight search does not retrieve live flight results.
- The prototype does not connect to hotel inventory, supplier availability, prices, or Travel.pk's quotation system.
- Findings have not been verified against source code or internal analytics.
- The root cause of the mobile scrolling issue remains unknown.
- The proposed improvement in form completion has not been measured through a live experiment.

## 3. Potential Future Work

- Validate findings across more devices, browsers, screen sizes, and cookie-consent scenarios.
- Investigate the technical cause of the mobile scrolling failure.
- Fix and test the Religious category interaction.
- Make quotation actions clearly visible on touchscreen devices.
- Improve the Umrah journey by connecting package selection, accommodation preferences, and quotation submission.
- Ensure the selected package and customer preferences are retained in the enquiry received by the team.
- Explore an assisted-booking option for unavailable flight routes, subject to operational support.
- Integrate verified flight and accommodation data if suitable APIs and supplier information are available.
- Establish baseline analytics and conduct usability testing to evaluate whether the proposed changes improve form completion.

## 4. Assessment Boundaries

All completed work is based on manual inspection of the public website and a standalone prototype. Future improvements are proposals, not completed integrations or verified production fixes. No live bookings, payments, or enquiries were submitted.

## 5. AI Use Disclosure

AI tools were used to assist with generating and refining prototype code, making targeted CSS adjustments, and drafting and improving written content across the assessment documents.

The website audit and identification of usability issues were conducted manually through browser testing. AI assistance was used to help structure and communicate the findings and recommendations.

The prototype code and generated content were reviewed and adjusted during development. The prototype was tested manually to verify its implemented interactions.