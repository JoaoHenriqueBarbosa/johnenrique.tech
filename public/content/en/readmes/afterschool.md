# AfterSchool: CRM for After-School Programs

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Features](#features)
4. [Setup and Installation](#setup-and-installation)
5. [Configuration](#configuration)
6. [Running the Application](#running-the-application)
7. [Usage](#usage)

## Introduction

The AfterSchool is a comprehensive ecosystem designed for after-school programs, available on both mobile and desktop platforms. It includes features such as student registration, teacher registration, course management, student schedule management, attendance tracking for teachers, a dashboard for coordination and administration, and various reports.

## Technologies

- **Programming Language**: TypeScript
- **Framework**: Next.js
- **ORM**: Prisma
- **Database**: PostgreSQL

## Features

### General

- Real-time look and feel using Tanstack's React Query and optimistic updates throughout the system.

### Student Management

- Interactive DataGrid-style table for registrations.
- Permissions-based access for altering, deleting, or viewing records.
- View and register student images.
- View student schedules and daily attendance status.
- Context menu options such as "Generate registration form" (PDF with information and signature fields).
- Option to send the student's schedule via WhatsApp to the registered contact number.

### Dashboard for Coordination and Administration

- Quick search with keyboard shortcuts (⌘+P).
- Modules available:
  - Dashboard
  - Students
  - Workshops
  - Staff
  - Auxiliary bases
  - Attendance list
  - Electronic point
  - Reports
  - Student schedules
  - Staff roles
- Statistics and reports:
  - Active, inactive students, students with family allowance, priority students.
  - Students present today (morning/afternoon).
  - Students by bus stop, workshop, day of the week, age, and school.

### Teacher Management

- Similar to student management with interactive DataGrid.
- Permissions-based access for viewing, altering, and deleting records.

### Course Management

- Management of courses offered by the school.
- Associating students with courses.

### Student Schedule Management

- Management of students' schedules.
- Viewing and updating as necessary.

### Attendance for Teachers

- Digital attendance list.
- Recording student attendance.

### Reports

- Various managerial and operational reports.
- Exporting reports in formats such as PDF.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Install dependencies using npm, pnpm, yarn, or bun:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

## Configuration

Set the environment variables in the `.env` file:
```env
CLOUDINARY_URL=
EDGE_CONFIG=
NEXTAUTH_SECRET=
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_NEXT_URL="http://localhost:3000"
NEXT_URL="http://localhost:3000"
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
```

## Running the Application

Run the project using the appropriate package manager:
```bash
npm run dev
# or
pnpm run dev
# or
yarn run dev
# or
bun run dev
```

## Usage

### Dashboard Overview

- Search functionality with keyboard shortcuts.
- Access to various modules for managing students, staff, courses, attendance, and reports.
- Real-time statistics and data visualization for efficient administration.

### Managing Students and Staff

- Register and manage student and staff information with ease.
- Use context menus for generating PDFs and sending schedules via WhatsApp.

### Attendance and Scheduling

- Keep track of student attendance and schedules.
- Generate and view various reports for better decision-making.