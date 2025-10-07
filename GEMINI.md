# Project: Personal Portfolio Website

## Project Overview

This project is a modern, responsive, and data-driven personal portfolio website. It is built with vanilla HTML, CSS, and JavaScript, and is designed to be easily configurable by editing a single JavaScript file.

**Key Technologies:**

*   **HTML:** The main structure of the website is defined in `index.html`.
*   **CSS:** Styling is handled by `styles.css`.
*   **JavaScript:** The website is made dynamic by `script.js`, which loads all the portfolio data from `data.js`.

**Architecture:**

The architecture is simple and effective, separating data from presentation:

*   `data.js`: Acts as a database, storing all personal information, skills, experience, projects, and other content in a single JavaScript object.
*   `index.html`: Serves as a template with placeholder elements that are populated by `script.js`.
*   `script.js`: Contains the logic to read the data from `data.js` and dynamically generate the HTML content.

## Building and Running

This is a static website and does not require a build process.

To run the project, simply open the `index.html` file in a web browser.

## Development Conventions

*   **Data-Driven:** All content is managed in the `portfolioData` object in `data.js`. To update any information on the website, you should only need to edit this file.
*   **Separation of Concerns:** The roles of the main files are clearly defined:
    *   `index.html`: Structure and layout.
    *   `styles.css`: Visual styling.
    *   `script.js`: Dynamic functionality and data loading.
    *   `data.js`: All user-facing content.
*   **Images:** All images and assets should be placed in the `assets` directory.
