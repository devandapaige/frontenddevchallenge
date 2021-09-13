# Front End Developer Intern Challenge

-- Winter 2022 Spacestagram: Image-sharing from the final frontier --
-- a Shopify Internship Challenge --

[Link to Deployed Site](https://nasa-potd-self.vercel.app/)

[Link to Whimsical Wireframe](https://whimsical.com/nasa-spacestagram-3zU7YRjbffYjxEz7qKokuE)

Thank you for the consideration,

**Amanda Nelson**

[Portfolio](http://amanda-nelson.com)

## Steps to Create Project:

1. Used `npx create-react-app .` to make a blank React project in my created repository. I also installed dotenv for my API token from NASA.

2. Created a simple [wireframe](https://whimsical.com/nasa-spacestagram-3zU7YRjbffYjxEz7qKokuE) using Whimsical for what I want my React App to look like and then formatted the React App components to match my wireframe.

3. Before pulling data I created my Header, Footer, MainContent, LikesContainer, and DatePicker components to match the wireframe. I installed React-Bootstrap for this project to make the mobile version of the site work without too much extra work. I plan to pull the API request in the MainContent component to feed the data into the ImageContainer.

   -- Alternatively, I may use React-Redux to create a loading state and make the GET request that way. Still decided at this point while I build out the pre-state components.

4. Filled the MainContent component with the Image Container and Date Picker. While creating I decided that I will be making my axios request within the Image Container so I can pass the date variable into teh axios call smoothly. Then I can put the data into the Description Container via props.

5. Created an input date selector in the Date Picker component and will also add the Random and Today buttons to this component as well.

6. Created an axios GET request adding parameters for the selected date and private dotenv API token. Then styled the Image and Description containers per my wireframe.

7. Added the Likes Container to the ImageContainer and created a animated button that will count the number of likes any photo has.

8. Tested the application and then touched up the styling with CSS and less to make sure all React-Bootstrap components and regular components are responsive.
