CivicFix — Complete Figma Blueprint

Concept: A digital platform connecting residents with municipal infrastructure teams.

Core idea:

See it. Report it. Track it. Fix it.

The prototype should demonstrate two complete journeys:

RESIDENT
Login → Home → Report Issue → Location → Evidence → Submit
       ↓
My Reports → Track Progress → Community Confirmation

ADMIN
Login → Dashboard → Review → Prioritise → Assign
       ↓
Track Work → Resolve → Analytics
1. Design System
🎨 Colour Palette

I'd use a modern deep navy + civic blue + warm amber palette.

Purpose	Colour	Hex
Primary	Deep Navy	#0B1220
Primary Blue	Civic Blue	#2563EB
Accent	Amber	#F59E0B
Success	Green	#16A34A
Danger	Red	#DC2626
Background	Off White	#F8FAFC
Card	White	#FFFFFF
Text	Dark	#111827
Secondary Text	Slate	#64748B
Border	Light Slate	#E2E8F0
Status colours
Submitted       → Blue
Under Review    → Purple
Assigned        → Amber
In Progress     → Orange
Resolved        → Green
Closed          → Grey
Urgent          → Red
2. Typography

Use:

Inter

It is clean, modern and works extremely well for dashboards.

Suggested sizes
Page heading       32 px / Bold
Section heading    24 px / Semibold
Card heading       18 px / Semibold
Body               16 px
Secondary text     14 px
Small labels        12 px
Buttons             14–16 px
3. Component Library

Before designing the screens, create reusable Figma components.

Buttons
Primary
Secondary
Outline
Danger
Icon button
Inputs
Text field
Password field
Search
Dropdown
Text area
Location input
Cards
Issue card
Statistic card
Notification card
Status card
User card
Navigation
Resident bottom navigation
Admin sidebar
Other
Status badge
Priority badge
Issue category icon
Progress indicator
Map marker
Avatar
Modal
Toast notification
Confirmation dialog

This will make your prototype look like a real design system rather than 20 unrelated screens.

4. Screen-by-Screen Blueprint
SCREEN 01 — Splash Screen

Frame: Mobile 390 × 844

Content

Centered:

CivicFix

Making communities better, one report at a time.

Logo/icon above the name.

Bottom:

Your community. Your voice. Your city.

Behaviour

After a short delay:

Splash
 ↓
Welcome
5. Welcome Screen
Header

CivicFix

Main heading

Help improve your community.

Description

See an infrastructure problem? Report it, track it and help your municipality respond faster.

Buttons

Report an Issue

Sign In

Secondary

New to CivicFix? Create an account

Visual

Use a subtle illustration/map showing:

Pothole
Water leak
Streetlight
6. Register Screen
Heading

Create your CivicFix account

Fields

Full Name

Enter your full name

Email Address

Enter your email

Phone Number

Enter your phone number

Password

Create a password

Confirm Password

Confirm your password

Checkbox

☐ I agree to the Terms & Privacy Policy

Button

Create Account

Bottom

Already have an account? Sign in

7. Login Screen
Heading

Welcome back

Fields

Email

Password

Options

☐ Remember me

Forgot password?

Button

Sign In

Bottom

Don't have an account? Create one

8. Resident Home Dashboard

This is one of the most important screens.

Header

Good morning, Nicholas 👋

Let's make your community better.

Top-right:

🔔 Notifications

Main CTA

Large card:

See something that needs fixing?

+ Report an Issue

Quick categories

Four cards:

🕳️ Pothole

💧 Water Leak

💡 Streetlight

🏗️ Other

My Reports

Your recent reports

Card:

Water Leak

24 Church Street

🟠 In Progress

View report →

Community impact

Small card:

Community Impact

127 issues resolved this month

9. Report Issue — Choose Category
Heading

What needs attention?

Cards

🕳️

Pothole

Road damage or potholes

💧

Water Leak

Burst pipes or leaking water

💡

Streetlight

Broken or damaged lighting

🚮

Illegal Dumping

Waste dumped in public areas

🌳

Public Space

Parks, sidewalks or facilities

⚠️

Other

Something else

Button

Selecting a card automatically enables:

Continue

10. Report Issue — Add Details
Heading

Tell us what happened

Issue

Pothole

Text area

Describe the problem

Placeholder:

Tell us what you noticed...

Severity

How serious is the problem?

Options:

🟢 Low

🟡 Medium

🔴 High

Question

Is this causing immediate danger?

Yes / No

Button

Continue

11. Report Issue — Add Photo
Heading

Add some evidence

Description:

A photo helps the municipality understand the problem faster.

Large upload area

📷

Take a Photo

or

Upload from Gallery

Preview

Show uploaded image.

Buttons:

Retake

Remove

Bottom

Continue

Secondary

Skip for now

12. Report Issue — Location

This should be visually strong.

Heading

Where is the problem?

Large map.

Marker:

📍

Location card

Current location

24 Church Street
Pretoria, Gauteng

Button:

Use My Current Location

Alternative:

Search for a location

Important option

Drag the pin to the exact location.

Button

Confirm Location

13. Report Issue — Review
Heading

Review your report

Show:

Issue

🕳️ Pothole

Description

Large pothole near the intersection...

Photo

[Image]

Location

📍 Church Street, Pretoria

Priority

🔴 High

Button

Submit Report

Secondary:

Edit

14. Report Submitted

This needs to feel satisfying.

Large checkmark:

✓

Heading

Report submitted!

Description

Thanks for helping improve your community.

Report number

CF-2026-00128

Status

🔵 Submitted

Buttons

Track My Report

Back to Home

Extra

We'll notify you when the status changes.

15. My Reports

Bottom navigation:

Home | Reports | Map | Notifications | Profile
Heading

My Reports

Search

Search reports...

Filter chips

All

Active

Resolved

Cards
CF-2026-00128

🕳️ Pothole

Church Street

🔵 Submitted

CF-2026-00112

💡 Streetlight

Nelson Mandela Drive

🟠 In Progress

CF-2026-00098

💧 Water Leak

Arcadia

🟢 Resolved

16. Report Details / Tracking

This is another key differentiator.

Header

← Back

Report CF-2026-00128

Issue

Large photo.

Pothole

📍 Church Street

Status
✓ Submitted
   │
✓ Under Review
   │
● Assigned
   │
○ In Progress
   │
○ Resolved
Current status

Assigned

A municipal maintenance team has been assigned to this issue.

Report information

Reported: 8 September 2026

Priority: High

Category: Road damage

Community confirmation

Are you also experiencing this problem?

Buttons:

👍 I see this too

👎 Not anymore

This is one of your unique features.

17. Community Map

Bottom navigation → Map

Heading

Issues near you

Full-screen map.

Markers:

🔴 Critical

🟠 High

🟡 Medium

🔵 Low

Filter button

Filter

Filter options:

Potholes
Water leaks
Streetlights
Other
Active only
Resolved
Map marker interaction

Tap marker →

Bottom sheet:

Pothole

Church Street

🔴 High Priority

23 residents confirmed this issue

View Report

18. Notifications
Heading

Notifications

Cards:

🔧 Report update

Your pothole report has been assigned to a maintenance team.

10 min ago

✓ Issue resolved

The streetlight you reported has been marked as resolved.

Yesterday

📢 Community update

12 residents confirmed the water leak you reported.

19. Profile
Header

Avatar

Nicholas Masango

Resident

Menu

My Reports

Notifications

Saved Locations

Privacy & Security

Help & Support

About CivicFix

Button

Sign Out

ADMIN EXPERIENCE

Now we move into the more powerful side of the system.

The administrator interface should be desktop-first.

Frame:

1440 × 1024

20. Admin Login

Same visual language but more professional.

Heading

CivicFix Administration

Fields

Email

Password

Button

Sign In

Small text:

Authorised municipal personnel only.

21. Admin Dashboard

This should be your hero screen for the presentation.

Sidebar
CivicFix

Dashboard
Reports
Map
Assignments
Analytics
Residents
Notifications

────────────

Settings
Help
Header

Good morning, Admin

Here's what's happening in your municipality.

Statistics

Four cards:

Total Reports

1,284

↑ 12% this month

Pending Review

86

In Progress

143

Resolved

1,055

22. Priority Queue

Large section:

Needs Attention

Table:

Issue	Location	Priority	Age	Status
Water Leak	Sunnyside	🔴 Critical	3h	Review
Pothole	Arcadia	🔴 High	2d	Assigned
Streetlight	Hatfield	🟡 Medium	4d	Review

Button:

View All Reports

23. Admin Reports
Heading

Infrastructure Reports

Search:

Search by report ID, location...

Filters

Category

Priority

Status

Date

Area

Table

Columns:

Report
Category
Location
Priority
Reported
Status
Action

Example:

CF-2026-00128

Pothole

Church Street

🔴 High

8 Sep

Under Review

View

24. Admin Report Details

This screen should give the administrator everything needed to make a decision.

Left

Issue photo.

Right

Pothole

CF-2026-00128

📍 Church Street

Description

Large pothole approximately 1 metre wide...

Intelligence section

Community confirmations

👥 23 residents

Nearby reports

4 similar reports

Time unresolved

2 days

This is where your system starts becoming more unique.

25. Smart Priority Panel

Instead of simply letting an admin choose:

Low / Medium / High

show:

Recommended Priority

🔴 HIGH

Why?
+ High severity
+ 23 community confirmations
+ Near busy intersection
+ 2 days unresolved
Button

Accept Priority

or

Change Priority

This is a great feature to discuss with your mentor as a decision-support feature.

26. Assign Issue
Heading

Assign Maintenance Team

Issue summary

Pothole
Church Street

Select department

Road Maintenance

Select team

Road Team A

Assigned staff

Dropdown:

Thabo Mokoena

Estimated completion

12 September 2026

Button

Assign Issue

27. Update Status

Admin sees:

Submitted
   ↓
Under Review
   ↓
Assigned
   ↓
In Progress
   ↓
Resolved

Button:

Update Status

Dropdown:

In Progress

Comment:

Maintenance team has started work.

Button:

Save Update

28. Admin Map

Full-screen municipal map.

Markers based on priority.

Left filter panel

Issue Types

☐ Potholes

☐ Water

☐ Streetlights

☐ Other

Status

☐ Open

☐ Assigned

☐ In Progress

☐ Resolved

Priority

☐ Critical

☐ High

☐ Medium

☐ Low

Map marker

Click:

Water Leak

17 reports nearby

🔴 Critical

View Cluster

29. Analytics Dashboard

This is important for your Data Analysis background.

Heading

Infrastructure Intelligence

KPI cards

Reports This Month

342

Average Resolution Time

3.4 days

Top Issue

Potholes

Highest Reporting Area

Sunnyside

Chart 1

Reports by Issue Type

Potholes       █████████████
Water Leaks    ████████
Streetlights   ██████
Other          ███
Chart 2

Reports Over Time

Line graph.

Chart 3

Issues by Area

Bar chart.

30. Residents Screen
Heading

Residents

Search:

Search residents...

Table:

Name
Email
Reports
Resolved
Last Activity
Status

Example:

Resident

Nicholas Masango

12 reports

9 resolved

Active

31. Admin Notifications

Examples:

🔴

Critical water leak reported in Sunnyside.

2 minutes ago

🟠

18 residents confirmed an existing pothole.

20 minutes ago

✓

Maintenance team marked report CF-2026-00092 as resolved.

32. Admin Settings

Sections:

Municipality Profile

Departments

Maintenance Teams

Priority Rules

Notification Settings

User Permissions

33. Your UNIQUE CivicFix Features

This is where I would deliberately separate your project from a basic reporting platform.

1. Community Confirmation

Instead of duplicate reports:

“I see this too”

Multiple residents can confirm the same issue.

2. Smart Priority

The system calculates a recommendation using:

Severity
+
Community confirmations
+
Location importance
+
Issue age
+
Issue category

Then:

Recommended Priority: HIGH

The administrator still makes the final decision.

3. Duplicate / Nearby Issue Detection

When a resident reports something:

⚠️ There may already be a report nearby.

A pothole was reported 80m from this location.

Options:

View Existing Report

Report New Issue

This can reduce duplicate municipal cases.

4. Transparent Resolution Timeline

Residents don't just see:

“Pending”

They see exactly where their report is:

✓ Reported
✓ Verified
✓ Assigned
● Maintenance
○ Resolved
5. Civic Impact Score

Eventually you could have:

Community Impact

For example:

Your reports have helped identify 12 infrastructure issues.

This encourages residents to participate without turning the system into a social-media platform.

34. Exact Figma Prototype Flow

Don't prototype every screen independently.

Create these connected flows.

FLOW A — Resident reports a pothole
Splash
 ↓
Welcome
 ↓
Login
 ↓
Home
 ↓
Report Issue
 ↓
Pothole
 ↓
Details
 ↓
Photo
 ↓
Location
 ↓
Review
 ↓
Submitted
 ↓
Track Report
FLOW B — Resident checks existing report
Home
 ↓
My Reports
 ↓
Report Card
 ↓
Report Details
 ↓
Timeline
 ↓
Community Confirmation
FLOW C — Resident discovers nearby problems
Home
 ↓
Map
 ↓
Tap Marker
 ↓
Issue Preview
 ↓
View Report
FLOW D — Administrator handles report
Admin Login
 ↓
Dashboard
 ↓
Priority Queue
 ↓
Report Details
 ↓
Smart Priority
 ↓
Assign Issue
 ↓
Update Status
 ↓
In Progress
FLOW E — Administrator analyses municipality
Admin Dashboard
 ↓
Analytics
 ↓
Reports by Category
 ↓
Reports by Area
 ↓
Resolution Time
35. Figma Page Structure

I'd create your Figma file like this:

📁 CivicFix

01 — Cover
02 — Design System
03 — Components

04 — Resident
    ├── Splash
    ├── Welcome
    ├── Register
    ├── Login
    ├── Home
    ├── Report
    ├── Location
    ├── Review
    ├── Success
    ├── My Reports
    ├── Report Details
    ├── Map
    ├── Notifications
    └── Profile

05 — Administrator
    ├── Login
    ├── Dashboard
    ├── Reports
    ├── Report Details
    ├── Priority
    ├── Assignment
    ├── Map
    ├── Analytics
    ├── Residents
    ├── Notifications
    └── Settings

06 — Prototype Flows
07 — Presentation Screens
36. The Screens I'd Prioritise First

Don't build all 30+ screens immediately.

For your first Figma presentation, create these 12 polished screens:

Welcome
Resident Dashboard
Choose Issue
Report Details
Location
Review & Submit
Report Submitted
Report Tracking
Admin Dashboard
Admin Report Details
Smart Priority / Assignment
Analytics Dashboard

Those 12 screens can tell the entire story of your solution.

Your presentation story becomes:

A resident sees a pothole.

↓

They open CivicFix.

↓

They report it with a photo and location.

↓

CivicFix checks for nearby reports and community confirmations.

↓

The system recommends a priority.

↓

An administrator reviews it.

↓

The administrator assigns a maintenance team.

↓

The resident tracks the progress.

↓

The municipality uses analytics to identify problem areas and improve resource allocation.

That is a much stronger concept than simply “an app where residents report potholes.” It becomes a municipal infrastructure management and decision-support system.

For the actual Figma work, I would start with Screen 01 → Screen 12 in order, using the same components throughout, and only then build the admin screens.