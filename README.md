# Hexnode Android MDM Solution Clone

This project is a recreation of the Hexnode Android MDM Solution webpage. The webpage was built using React as part of an interview assessment. The objective was to replicate the page’s layout, responsiveness, styling, and interactive features.

The goal was to closely match the design of the Hexnode Android MDM Solution webpage while ensuring:

Responsive design for desktop, tablet, and mobile views.
Interactive elements such as sliders, dropdowns, or tabs were implemented using custom code.
Performance optimization and web accessibility practices, including ARIA attributes, were applied.
Technologies Used
React: Main framework for building the webpage.
CSS5: For styling the components.
HTML5: For structuring the components.
JavaScript (ES6+): For interactivity and logic.
React Hooks: For managing state and lifecycle methods.
Flexbox & Grid: For responsive layout design.
ARIA Roles and Accessibility: To enhance the page's usability for all users.
Getting Started
Prerequisites
To run this project locally, you need to have the following installed:

Node.js (version 14.x or higher)
npm (comes with Node.js) or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/MonishaPugazhendhi/hexnode.git
cd hexnode-mdm-solution-clone
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000/ to view the webpage.

Running the Project
Development mode: To run the project in development mode, use:

bash
Copy code
npm start
Build for production: To create a production build, run:

bash
Copy code
npm run build

Features

Responsive Layout: The page is responsive across all device sizes, using media queries and CSS Flexbox/Grid techniques.
Interactive Elements: Custom dropdowns, sliders, and tabs were implemented to mimic the original page’s behavior.
Accessibility: The page includes ARIA roles and follows best practices for keyboard navigation.
Challenges and Approach
Layout and Responsiveness
The primary challenge was ensuring that the layout adapts seamlessly across different screen sizes. To tackle this:

Flexbox and Grid were used for structuring layouts.
Media queries were used to handle different breakpoints.
Interactivity
For dropdowns, sliders, and other interactive elements, I avoided third-party plugins and implemented custom React components.

Performance Optimization
Images were optimized for faster loading.
The page was designed to be lightweight by minimizing JavaScript and CSS usage.
Bonus Enhancements
Hover Effects: Added subtle animations to buttons and links for a more engaging user experience.
Lazy Loading: Implemented lazy loading for images to improve performance.
SEO Enhancements: Improved page structure with semantic HTML.



Live Demo 
https://hexnode.vercel.app/



