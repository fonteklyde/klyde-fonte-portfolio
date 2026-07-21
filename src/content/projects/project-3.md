---
title: "LogiHub"
description: "A web-based logistics platform built with ASP.NET, C#, HTML, CSS, JavaScript and SQL Server that allows vendors to sell products from suppliers, enables customers to place and track orders, and provides admins with warehouse inventory management."
image: "/images/logihub-customer-dashboard.webp"
gallery:
    - "/images/logihub-customer-orders.webp" 
    - "/images/logihub-inventory.webp"
liveUrl: "https://logisticshub.runasp.net/"
githubUrl: "https://github.com/fonteklyde/IT15_FINAL_PROJ"
tags: ["ASP.NET Core", "C#", "HTML", "CSS", "SQL Server"]
date: "2025-03-20"  
featured: true
---

## Project Overview

**LogiHub** is an end-to-end supply chain and e-commerce logistics management application constructed with enterprise-grade .NET technology stack. It connects suppliers, multi-tenant vendors, and retail customers within a single unified platform.

The platform streamlines product sourcing, stock management, order processing, and shipment fulfillment across multiple warehouse nodes.

## Key Features

- 🏪 **Vendor & Supplier Portal**: Vendor management dashboard allowing merchant businesses to source products directly from registered suppliers and manage product catalog listings.
- 📦 **Multi-Warehouse Inventory Control**: Real-time SQL Server stock tracking with automated reorder alerts, batch tracking, and SKU management.
- 🚚 **Order Placement & Shipment Tracking**: Customer checkout portal with order status pipelines (`Processing`, `In-Transit`, `Out for Delivery`, `Delivered`).
- 🔐 **Role-Based Access Control (RBAC)**: Strict permission boundaries for System Administrators, Warehouse Managers, Vendors, and Customers built using ASP.NET Identity.

## Technical Architecture

- **Core Framework**: ASP.NET Core MVC (C#) enforcing Model-View-Controller design patterns.
- **Data Layer**: Microsoft SQL Server with Entity Framework Core ORM for query optimization and transactional safety.
- **Frontend UI**: Modular HTML5/CSS3 and Vanilla JavaScript with responsive grid layouts.

## Engineering Highlights

Implemented database transactions to ensure strict ACID compliance during simultaneous order placements and inventory decrements, preventing stock over-selling under heavy traffic load.