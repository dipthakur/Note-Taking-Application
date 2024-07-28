# Simple Note Taking App

A simplified web application for taking notes that utilizes local storage for data persistence. This application demonstrates front-end development skills including CRUD operations, pagination, and a responsive design.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

- **Create Notes**: Add new notes via a form.
- **Read Notes**: View all notes with pagination (10 notes per page).
- **Update Notes**: Edit existing notes.
- **Delete Notes**: Remove notes permanently.
- **Search Notes**: Filter notes by title or content.
- **Timestamps**: Record and display the creation or last modification time for each note.

## Technologies Used

- **Front-End**: React.js
- **Data Handling**: Local Storage

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/note-taking-app.git
    cd note-taking-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the development server**:
    ```sh
    npm start
    ```

## Usage

1. **Open the application**:
   Open your browser and navigate to `http://localhost:3000`.

2. **Create a new note**:
   Click on the "Add Note" button, fill in the note details, and submit.

3. **Edit a note**:
   Click on the "Edit" button next to the note you want to modify, make your changes, and submit.

4. **Delete a note**:
   Click on the "Delete" button next to the note you want to remove.

5. **Search for a note**:
   Use the search bar to filter notes by title or content.

## Deployment

To deploy the application on Netlify:

1. **Build the project**:
    ```sh
    npm run build
    ```
2. **Deploy on Netlify**:
    - Go to [Netlify](https://www.netlify.com/)
