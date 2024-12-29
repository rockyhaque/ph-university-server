# PH University Management Project

## Requirement Analysis

([Requirement Analysis - 👈 Click Here](https://docs.google.com/document/d/10mkjS8boCQzW4xpsESyzwCCLJcM3hvLghyD_TeXPBx0/edit?usp=sharing))


## Entity-Relationship (ER) Diagram

![ER Diagram](./ER_Diagram.png)

*Description*: This diagram represents the entities and their relationships in the system.

![UPDATED ER DIAGRAM](./Final.png)

![UPDATED ER DIAGRAM](./Final2.png)


Description: This is an updated diagram illustrates the relationships among User, Student, Admin, Faculty, Academic Semester, Academic Faculty, Academic Department.


## Functional Requirements

### Authentication

**Student:**
- Students can log in and log out securely.
- Students can update their password.

**Faculty:**
- Faculty can log in and log out securely.
- Faculty can update their password.

**Admin:**
- Admin can log in and log out securely.
- Admin can update their password.

### Profile Management

**Student:**
- Students can manage and update their profile.
- Students can update certain fields.

**Faculty:**
- Faculty can manage and update their profile.
- Faculty can update certain fields.

**Admin:**
- Admin can manage and update their profile.
- Admin can update certain fields.

### Academic Process

**Student:**
- Students can enroll in offered courses for a specific semester.
- Students can view their class schedule.
- Students can see their grades.
- Students can view notice boards and events.

**Faculty:**
- Faculty can manage student grades.
- Faculty can access student’s personal and academic information.

**Admin:**
- Admin can manage multiple processes:
  - Semester
  - Course
  - Offered Course
  - Section
  - Room
  - Building

### User Management

**Admin:**
- Admins can manage multiple accounts.
- Admin can block/unblock users.
- Admin can change user passwords.

---

## Data Model

### User

- `_id`
- `id` (generated)
- `password`
- `needsPasswordChange`
- `role`
- `status`
- `isDeleted`
- `createdAt`
- `updatedAt`

### Student

- `_id`
- `id` (generated)
- `name`
- `gender`
- `dateOfBirth`
- `email`
- `contactNo`
- `emergencyContactNo`
- `presentAddress`
- `permanentAddress`
- `guardian`
- `localGuardian`
- `profileImage`
- `admissionSemester`
- `isDeleted`
- `createdAt`
- `updatedAt`

### Faculty

- `_id`
- `id` (generated)
- `designation`
- `name`
- `gender`
- `dateOfBirth`
- `email`
- `contactNo`
- `emergencyContactNo`
- `presentAddress`
- `permanentAddress`
- `profileImage`
- `academicFaculty`
- `academicDepartment`
- `isDeleted`
- `createdAt`
- `updatedAt`

### Admin

- `_id`
- `id` (generated)
- `designation`
- `name`
- `gender`
- `dateOfBirth`
- `email`
- `contactNo`
- `emergencyContactNo`
- `presentAddress`
- `permanentAddress`
- `profileImage`
- `managementDepartment`
- `isDeleted`
- `createdAt`
- `updatedAt`

### Academic Semester

- `_id`
- `name`
- `year`
- `code`
- `startMonth`
- `endMonth`
- `createdAt`
- `updatedAt`

### Academic Faculty

- `_id`
- `name`
- `createdAt`
- `updatedAt`

### Academic Department

- `_id`
- `name`
- `academicFaculty`
- `createdAt`
- `updatedAt`

---

## API Endpoints

### User

- `users/create-student` (POST)
- `users/create-faculty` (POST)
- `users/create-admin` (POST)

### Student

- `students` (GET)
- `students/:id` (GET)
- `students/:id` (PATCH)
- `students/:id` (DELETE)
- `students/my-profile`

### Faculty

- `faculties` (GET)
- `faculties/:id` (GET)
- `faculties/:id` (PATCH)
- `faculties/:id` (DELETE)
- `faculties/my-profile`

### Admin

- `admins` (GET)
- `admins/:id` (GET)
- `admins/:id` (PATCH)
- `admins/:id` (DELETE)
- `admins/my-profile`

### Auth

- `auth/login`
- `auth/refresh-token`
- `auth/change-password`
- `auth/forgot-password`
- `auth/reset-password`
