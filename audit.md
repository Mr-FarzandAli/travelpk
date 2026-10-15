# Travel.pk — Product Usability Audit

**Prepared for:** TechAbout Private Limited  
**Product audited:** Travel.pk  
**Audit date:** 15 October 2026  
**Scope:** Mobile usability, package discovery, flight search, and the Umrah enquiry journey  
**Method:** Manual browser testing on the public website  
**Evidence:** Screenshots and screen recording captured and stored in `proof/screenshots/`

## Executive summary

The audit identified usability issues affecting mobile navigation, package discovery, and the journey from exploring travel options to requesting a quotation.

The most significant finding is a mobile scrolling failure observed after cookie consent. Other findings concern a Religious package category that does not return expected results, a quotation action that appears only on hover, and a package-selection context that is not reflected in the enquiry subject.

The Umrah journey also presents opportunities to make accommodation preferences easier to communicate before requesting a quotation. These recommendations do not assume that Travel.pk has particular hotel inventory, supplier agreements, or publicly available prices.

## Findings

### 01. Mobile pages become unscrollable after cookie consent

**Severity:** High  
**Estimated effort:** Unknown; investigation required

**Observed behaviour**

On a Vivo V23e using Google Chrome, the page stopped scrolling after the initial cookie-consent interaction. This occurred after choosing either essential-only cookies or accepting optional tracking. The navigation menu continued to work. The auditor reports that the issue affects all pages tested.

**Expected behaviour**

The page should remain scrollable after either consent choice.

**Business impact**

Visitors may be unable to explore page content, discover packages, or reach enquiry forms, potentially preventing them from completing their intended journey.

**Evidence**

Mobile screen recording in `proof/screenshots/`.

**Technical note**

The root cause has not been established. The timing suggests a possible relationship with the consent interaction, but the audit does not attribute the failure to a specific component without further investigation.

### 02. Religious package category button does not work correctly

Severity: Medium
Estimated effort: To be confirmed

Observed behaviour

On the Packages page, clicking the Religious category pill does not work as expected. The interaction fails to display the relevant religious travel packages, preventing visitors from reliably filtering the package list by this category.

Expected behaviour

Selecting the Religious category should filter the package list to show matching packages. If no matching packages are available, the page should clearly communicate that instead of leaving the visitor uncertain about whether the interaction worked.

Business impact

Visitors searching for religious travel options, including Umrah, may struggle to discover relevant packages and may leave without enquiring.

Evidence

Packages page screenshot showing the Religious category interaction and its resulting state, in proof/screenshots/.

### 03. Custom-quote action is visible only on hover

**Severity:** Medium  
**Estimated effort:** Low to medium

**Observed behaviour**

The “Request a custom quote” action in the package-comparison area becomes visible on hover rather than remaining clearly visible.

**Expected behaviour**

The action should be discoverable without hover, particularly on touchscreen devices.

**Business impact**

Mobile visitors may not discover the quotation action, creating unnecessary friction in the enquiry journey.

**Evidence**

Package-comparison screenshot in `proof/screenshots/`.

### 04. Selected package is not reflected in the enquiry subject

**Severity:** Medium  
**Estimated effort:** Low to medium

**Observed behaviour**

Selecting an option in the Umrah package-comparison area and following its quotation action leads to the contact form, but the subject remains the generic “Umrah Package” rather than identifying the selected option.

**Expected behaviour**

The enquiry should retain the selected package or option so the customer does not have to identify it again.

**Business impact**

Customers may need to repeat information, while the team receiving enquiries may have less context for responding accurately.

**Evidence**

Two package-comparison/contact-form evidence cases in `proof/screenshots/`. These are examples of the same issue, not separate findings.

### 05. “Plan your stay” does not lead to clear accommodation discovery

**Severity:** Medium  
**Estimated effort:** Medium; scope to be confirmed

**Observed behaviour**

The “Plan your stay” link on the Umrah page leads to the Hotels page, which did not provide the specific Makkah and Madinah accommodation options the auditor was looking for.

**Expected behaviour**

The destination should help visitors understand available accommodation options or clearly explain how to specify their preferences and obtain suitable options.

**Business impact**

Visitors may have to navigate further or request a quotation without first understanding what accommodation arrangements they can ask for.

**Evidence**

Umrah page and Hotels page screenshots in `proof/screenshots/`.

**Constraint**

The audit does not assume that Travel.pk has particular hotels under contract or that hotel names, distances, or prices can be published without supplier confirmation.

### 06. Saudi Arabia destination journey does not support clear accommodation discovery

**Severity:** Medium  
**Estimated effort:** Medium; scope to be confirmed

**Observed behaviour**

After selecting Saudi Arabia on the Destinations page, the auditor found an option to search for flights but no clear accommodation-discovery option.

**Expected behaviour**

Visitors planning a trip involving accommodation should be able to identify the next relevant step, whether that is exploring confirmed options or submitting their accommodation preferences.

**Business impact**

Visitors researching an Umrah trip may struggle to progress from destination discovery to accommodation planning.

**Evidence**

Destinations page and Saudi Arabia selection screenshots in `proof/screenshots/`.

### 07. Domestic flight search provides an unclear next step for an unavailable route

**Severity:** Medium  
**Estimated effort:** To be confirmed

**Observed behaviour**

The domestic flight search displays a message that the requested route is not currently sold. During the auditor's inspection, no clear, usable assisted-booking path was identified.

**Expected behaviour**

If a route cannot be booked online, the page should clearly explain the limitation and provide an obvious next step if assisted booking is supported.

**Business impact**

Customers may abandon the journey if they cannot easily understand whether help is available or how to request it.

**Evidence**

Domestic flight-search screenshot in `proof/screenshots/`.

**Technical note**

The observation does not establish an API failure. Route availability may be an intentional business limitation.

### 08. Umrah package journey lacks a clear path from discovery to quotation

Severity: Medium
Estimated effort: Medium; dependent on supplier and operational capabilities

Observed behaviour

The Umrah journey does not provide a sufficiently clear, connected path from exploring package options to understanding accommodation choices and submitting a quotation request. The “Plan your stay” link leads to the Hotels page, where the auditor could not readily identify suitable Makkah and Madinah accommodation options. In addition, the package quotation journey does not consistently carry the selected option's name into the enquiry subject, which remains the generic “Umrah Package.”

As a result, visitors may need to navigate between pages, work out what accommodation preferences they can request, or repeat information when making an enquiry.

Expected behaviour

Visitors should be guided through a straightforward journey: explore Umrah planning options, specify their travel and accommodation preferences for Makkah and Madinah, and submit a quotation request that retains their selected option and entered details.

Business impact

An unclear journey may increase friction, reduce enquiry completion, and lead to less informative enquiries that require additional clarification from the team.

Evidence

Umrah page, package-comparison, Hotels page, and Destinations page screenshots in proof/screenshots/.

Constraint

This finding concerns the clarity and continuity of the customer journey. It does not establish that Travel.pk lacks accommodation inventory or that hotel prices and availability can be displayed without supplier confirmation.

## Recommended improvement

Build a simple, responsive Umrah trip-planning experience within the existing Umrah journey.

The experience should allow customers to specify:

- Departure date and overall trip duration.
- Number of nights in Makkah and Madinah.
- Adults, children, and infants travelling.
- Room arrangements for each city, including separate or shared rooms.
- Preferred hotel distance from the Haram in each city.
- Optional budget range and additional requirements.

The selected preferences should carry into the quotation request so customers do not have to enter the same information again.

The prototype must not display invented hotel names, distances, availability, or prices. Actual accommodation options and final quotations remain dependent on Travel.pk's confirmed supplier data and business process.

## Measurement plan

**Primary metric:** Percentage of visitors who start and successfully complete the quotation form.

**Baseline:** Not available from the public website inspection. A baseline requires access to relevant analytics.

**Proposed success threshold:** A 20% relative improvement in form completion rate during a controlled test, provided the sample size is sufficient.

**What would challenge the hypothesis:** No meaningful improvement in completion, or evidence that abandonment is primarily caused by other factors.

**Additional quality check:** Monitor whether enquiries contain sufficient information for the team to prepare a relevant quotation.

## Dependencies and limitations

- Access to existing analytics and form-submission data.
- Confirmation of the current quotation workflow and form fields.
- Confirmation of available supplier data and accommodation-selection capabilities.
- Investigation of the mobile scrolling failure.
- Validation of the actual links and interaction behaviour before implementation.

This audit records observed behaviour and plausible business risks. It does not claim access to internal conversion data, supplier contracts, or source code. Severity and effort estimates are preliminary and should be refined after technical investigation.

