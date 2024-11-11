# Shopping Cart

## About This Project

This project is an entirely front end based e-commerce mock sports apparel website for the NBA franchise Toronto Raptors. It utilizes the Javascript library React to
build various components that make up the web pages of the site and takes advantage of prop drilling to deliver the state of user purchases across the site. 
It also has a dynamic home page with a text animation timed to match an iconic video from the franchise, after which users can see a picture slideshow that dives through
the team's history. 

Web pages and features developed for this project include: 

* A responsive navigation bar with links to web pages and the user's shopping cart (which also displays number of items in the cart).
* A home page with a multimedia syncronized experience to greet users.
* Merchandise pages broken down by cateogry, with an info-bar to navigate categories and responsive product cards that
  change images upon hover, deliver important product information, and link to the respective product page when clicked.
* Product pages that include a slideshow of pictures, product name, price, size selection (when applicable), quanitity input selector, 
  and links to add selected quantity of product to cart or to go back to the main shop page.
* An about us page detailing the founding story and values of the mock e-commerce store.
* A checkout cart page with itemized breakdown of products (with product details, subtotal, ability to update quantity selected, and remove product from cart). It also has
  a total price breakdown with shipping fees, taxes, and a link to finalize order.
* Site footer with mock links to company social media accounts, customer service and privacy/refund policies, career page, and a newsletter signup.

A live link to the site can be found in the repository's about section.

## Key Learnings

This was my first project using React functional components and prop drilling state across components on a large scale, which provided the opportunity to learn how to do the following:

* Deciding which variables to include in the main state of the router file (a full inventory of clothing items, items in the cart, and total number of items) and building functions that can be passed to smaller components, allowing the state to be updated through them.
* How to nest route paths properly and use the outlet component to populate pages with sub components.
* Structuring various onClick functions within html elements (buttons, inputs) to update the local state.
* Mapping a list of unique items based on an array of objects within the return statement of a component.
* Deploying the site to github pages.

## Future Opportunities

Revisiting this project in the future there are a couple of features I would like add, including: 

* Developing a simple backend with data models for a user and their cart that stores items on their wishlist and purchase/refund history.
* Creating a state variable and function that allows the user to click back to the clothing category they were seeing from a product page
  as opposed to the first default category.
* Utilizing an email as the username, have a mock newsletter be sent to the email after signing up for it in the footer information bar.

## Acknowledgements 

Resources that were helpful in creating this application.

* <a href="https://www.npmjs.com/package/uniqid" target="blank">Uniqid</a>
* <a href="https://www.npmjs.com/package/react-image-gallery" target="blank">React Image Gallery</a>
* <a href="https://www.npmjs.com/package/react-player" target="blank">React Player</a>

## About Me 

Visit my <a href="https://github.com/mulcharv" target="blank">about me</a> page to learn what I'm up to and contact me.



