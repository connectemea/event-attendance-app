# Event Attendance App

## Description
This is a comprehensive event attendance collection app designed for college clubs. The app allows college clubs to request accounts, which are then verified by an admin. Once verified, club coordinators can access their accounts to create events, record student attendance, and export attendance data in both PDF and Excel formats. The project is currently in the development stage and aims to streamline the management and tracking of event attendance for college clubs.

## Features

### Admin Features
- **Admin Verification:** Admins can verify and approve club account requests.
- **User Management:** Create, edit, disable, and list users.
- **Student Management:** Create, edit, delete, and list students. Upload student data via Excel sheets.
- **Event Management:** Create, edit, delete, and list events. Approve or reject event attendance sheets.
- **User Request Management:** View and manage user registration requests.
- **Export Data:** Export attendance data to PDF and Excel formats.

### Club Coordinator Features
- **Account Management:** Register and log in to the app. Request account approval or reverse registration requests.
- **Event Creation:** Create, edit, and delete events.
- **Attendance Recording:** Add student attendance to events. Scan student ID cards for quick attendance recording.
- **Export Attendance:** Export attendance data to PDF and Excel formats.
- **Profile Management:** View and update profile details, including changing passwords.

## Stack

### Front-End
- **Framework:** Next.js
- **UI Library:** Material UI

### Back-End
- **Framework:** NestJS
- **ORM:** Prisma
- **Database:** MongoDB

## Installation

### Prerequisites
- Node.js and npm installed on your machine

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/connectemea/event-attendance-register.git
    ```
2. Navigate to the project directory:
    ```sh
    cd event-attendance-register
    ```
3. Install the required dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables. Create a `.env` file in the root directory and add the following:
    ```sh
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXTAUTH_URL=your_nextauth_url
    ```
5. Generate Prisma client:
    ```sh
    npx prisma generate --schema=./src/prisma/schema.prisma
    ```
6. Start Prisma Studio (optional):
    ```sh
    npx prisma studio --schema=./src/prisma/schema.prisma
    ```
7. Open your web browser and navigate to `http://localhost:5555`.
### Usage
1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your web browser and navigate to `http://localhost:3000`.

### Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

### License
This project is licensed under the [MIT License](LICENSE).
