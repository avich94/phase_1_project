Powder Hounds Weather

-Overview
Powder Hounds Weather is a web application that provides static weather information (from a local JSON server) for various resorts. This application fetches data, displays resort details on the webpage, and allows users to interact by liking their favorite resorts conditions and leaving comments.

-Features
Resort Weather Display:
The application fetches weather data from http://localhost:3000/resortData and creates cards for each resort, showing information such as temperature, snowfall, wind speed, and an image of the resort.

Interactive Like Feature:
Users can express their appreciation for a particular resort's conditions by clicking the "Like" button on each resort card. The number of likes is displayed, providing a sense of how the conditions are among users.

Comments Section:
Users can leave comments by entering text in the comment input field and clicking the submit button. Comments are displayed below, allowing for a community discussion about the resorts.

Powder Day Alert:
A special section changes its content when the user hovers over it, providing a fun alert indicating a "It's a POW day!"

Styling:
The application is styled with a clean and responsive design using Aqua as the background color. Resort cards created with a border, padding, and a green box shadow.
Images in the resort cards are displayed with a maximum size of 100x100 pixels.

Usage:
Clone the repository: git clone (repository URL).
Open index.html in your web browser.
Dependencies

This project relies on a backend API at http://localhost:3000/resortData for resort weather data. Ensure that the API is running and accessible.

Getting Started:
Include the provided JavaScript file (index.js) in your HTML.
Link the provided CSS file (styles.css) for styling.
Customize the API endpoint if needed in the fetchAllData function. Open the HTML file in a web browser to view the Powder Hounds Weather application.
