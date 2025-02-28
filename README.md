# Cafe Menu System

A web application where cafes and restaurants can create their menus, and customers can quickly view these menus.

---

## **Installation**

Follow the steps below to run the application in your local environment:

### 1. **Download the Project Files**

Download the source files of the project from GitHub or another source to your computer.

```bash
git clone https://github.com/akifgoktas/Cafe-Menu-System.git
cd Cafe-Menu-System
```

### 2. **Backend (Laravel) Installation**

-   Ensure that **PHP** and **Composer** are installed on your computer.
-   To install dependencies for the Laravel application, run the following command:

```bash
composer install
```

-   Copy the `.env` file and configure the necessary settings:

```bash
cp .env.example .env
```

-   Configure the database and run the migrations:

```bash
php artisan migrate
```

### 3. **Frontend (Vue) Installation**

-   Ensure that **Node.js** and **npm/yarn** are installed on your computer.
-   To install dependencies for the Vue application, run the following command:

```bash
npm install
```

or

```bash
yarn install
```

-   Start the project in development mode:

```bash
npm run dev
```

or

```bash
yarn dev
```

### 4. **API and Frontend Integration**

-   Make sure the CORS settings are configured correctly for smooth communication between the Laravel API and the frontend.
-   Update the API URL settings in the `.env` file to match the Vue application's configuration.

---

## **Technologies and Used Packages**

-   **Backend (Laravel)**:
    -   Laravel 11
    -   MySQL
    -   Laravel Sanctum (Token-based authentication for API)
    -   Eloquent ORM (Database operations)
-   **Frontend (Vue)**:

    -   Vue 3
    -   Pinia (State management)
    -   Vue Router (Page routing)
    -   Axios (For making API requests)
    -   Bootstrap (CSS Framework)

-   **Other Tools**:
    -   Vite (Development server)
    -   Postman (API testing)

---

## **Application Features**

-   **User Login and Logout:** User login can be done via the Vue and Laravel backend API.
-   **Form Management:** Dynamic form elements allow user interaction.
-   **Database Integration:** The Laravel backend performs CRUD operations on the database.

---

## **Images**

### 1. **Login Screen**

![Homepage](/resources/js/img/projectview/login.png)

---

## **Contact**

For more information about the project or to ask questions, feel free to reach out to me.

-   Email: **akif.gokts@gmail.com**
-   GitHub: [https://github.com/akifgoktas](https://github.com/akifgoktas)
