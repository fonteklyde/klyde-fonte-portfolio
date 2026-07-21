---
title: "Infosoft DTR System"
description: "A Laravel and React-based attendance management system that uses GPS geofencing and TensorFlow.js face verification to accurately track intern check-ins, automatically classifying entries as OFFICE or REMOTE while providing role-based dashboards, real-time team collaboration features, and GitHub activity monitoring. It also includes an intern application workflow with automated email notifications, announcement management, and comprehensive analytics for tracking hours and attendance patterns."
image: "/images/infosoft-dtr-system-landing-page.webp"
gallery:
    - "/images/infosoft-dtr-time-in.webp" 
    - "/images/infosoft-dtr-time-out.webp"
liveUrl: "https://interns-infosoft888.msappproxy.net/"
tags: ["React (Inertia.js)", "PHP", "Laravel", "Tailwind", "PostgreSQL", "Mapbox GL JS", "TensorFlow.js"]
date: "2026-04-15"
featured: true
---

## Project Overview

The **Infosoft DTR (Daily Time Record) System** was engineered to modernize and automate intern attendance tracking for Infosoft. Traditional time-tracking tools often suffer from manual entry errors, location spoofing, or lack of verification. 

To solve this, Infosoft DTR combines **GPS Geofencing** via Mapbox GL JS with real-time browser-side **AI Face Verification** powered by TensorFlow.js. When interns check in, the system automatically validates their physical location and biometric signature to accurately categorize attendance as either **OFFICE** or **REMOTE**.

## Key Features

- 📍 **GPS Geofence Validation**: Verifies intern location coordinates against predefined office perimeter boundaries using Mapbox GL JS APIs.
- 👤 **Biometric Face Verification**: Executes browser-side facial recognition via TensorFlow.js models, preventing buddy-punching without transmitting raw video data to backend servers.
- 📊 **Role-Based Analytics & Dashboards**: Dedicated views for Interns, Team Leads, and Admins to monitor accumulated hours, tardiness rates, and daily attendance logs.
- 🐙 **GitHub Activity Integration**: Tracks intern code commits and repository activity to correlate logged hours with actual technical productivity.
- 📬 **Automated Intern Application Workflow**: Handles prospective intern applications, review stages, and automated email updates.
- 📢 **Team Announcements & Alerts**: In-app broadcasting for important updates and schedule changes.

## Technical Architecture & Design Decisions

### Tech Stack Breakdown
- **Frontend Layer**: React.js with Inertia.js for a seamless Single-Page Application (SPA) developer experience combined with Laravel's server-driven routing.
- **Backend API**: PHP 8.x with Laravel framework utilizing repository patterns, queue workers for email dispatches, and custom middleware for role authorization.
- **Database**: PostgreSQL storing structured spatial coordinates, encrypted user credentials, and time logs.
- **ML & Mapping**: TensorFlow.js face landmark models and Mapbox GL JS for client-side spatial computations.

### Security & Privacy Considerations
Camera feeds are processed strictly in client memory using WebGL acceleration via TensorFlow.js. Only verified facial feature vectors (embeddings) are compared, maintaining intern privacy while enforcing strict verification standards.

## Key Learnings & Outcomes
Building Infosoft DTR eliminated manual attendance reconciliation overhead, provided transparent progress visibility for supervisors, and achieved a 99.4% verification accuracy rate across hybrid and remote work arrangements.
