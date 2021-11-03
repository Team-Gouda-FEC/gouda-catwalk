<h1 align="center" Gouda Catwalk </h1>

## Contributors

<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/80839958?v=4" width="44" height="44" alt="@bexter89">

**Rebekah Cruz**<br>
[GitHub](https://github.com/bexter89) • [LinkedIn](https://www.linkedin.com/in/rebekah-cruz/)

<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/80354714?s=88&amp;v=4" width="44" height="44" alt="@mariaykim">

**Maria Kim**<br>
[GitHub](https://github.com/mariaykim) • [LinkedIn](https://www.linkedin.com/in/mariakim21/)

<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/50255466?v=4" width="44" height="44" alt="@robwilliams-it">

**Mattew Sewell**<br>
[GitHub](https://github.com/thechosenginger) • [LinkedIn](https://www.linkedin.com/in/matthew-sewell-75470262/)


<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/85043190?s=88&amp;v=4" width="44" height="44" alt="@robwilliams-it">

**Rob Williams**<br>
[GitHub](https://github.com/robwilliams-it) • [LinkedIn](https://www.linkedin.com/in/rob-williams-swe/)

## Table of Contents
 - [About](#about)
 - [Installation](#install)
 - [Technologies](#technologies)
 - [Product Overview (Rebekah Cruz)](#overview)
 - [Related Products & Outfit List (Maria Kim)](#products)
 - [Questions & Answers (Matthew Sewell)](#questions)
 - [Ratings and Reviews (Rob Williams)](#reviews)
 
## About<a name="about"></a>

**Project Overview**

>Given a set of business requirements, the team was tasked with re-designing a landing page for an online clothing store. We used the React framework with Material UI for our frontend build, and integrated it with an Express server to grab data from a provided API.

## Installation <a name="install"></a>

1. Download the repo using git
```
git clone https://github.com/Team-Gouda-FEC/gouda-catwalk.git
```
2. Install dependencies
```
npm install
```
3. Create a `config.js` file in the root directory
```
module.exports = {
  TOKEN: 'YOUR TOKEN HERE',
};
```
* Note, this file is ignored in .gitignore but is required in order to pull data from the API.

4. Run the Webpack compiler
```
npm run build
```

5. Run the App
```
npm start
```

## Technologies <a name="technologies"></a>
- [NodeJS](https://nodejs.org/en/)
- [Express ](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Axios](https://www.npmjs.com/package/axios)
- [Material UI](https://mui.com/)

## Product Overview (Rebekah Cruz) <a name="overview"></a>

## Related Products & Outfit Section (Maria Kim) <a name="products"></a>
**Related Products Section**
* A React-Grid-Carousel component displays four products related to the featured product in the overview section
* Each product is represented in a Material UI Card component
* To change the featured product, the customer will click on a related product card
* The star icon located at the top of a product card when clicked will popup a modal comparing the featured products details with the related product details

**Outfits Section**
* A React-Grid-Carousel component displays at most three outfits that the customer has indicated they are interested in
* Customers can add or remove products from their Outfits Section by clicking on the star icon

## Questions and Answers (Matthew Sewell) <a name="questions"></a>

## Ratings and Reviews (Rob Williams) <a name="reviews"></a>
* Material UI Grid components segment the product rating from the reviews

**Ratings Section**
* Ratings are rendered based on the meta data recieved from the server via Axios requests
* Each product has different "characteristics" which are displayed below the star rating

**Reviews Section**
* Each review is displayeed in a card component with review body, and other data positioned using grid and flex display
* Reviews are conditionally rendered based on a stateful counter which increments in intervals of 2 when "more reviews" is clicked on
* "Add A Review" will display a form which will capture any inputs within state
* When clicking the "submit" button, the form will validate that the input criteria matches the requirements for the field prior to submitting a post request for the associated product.
