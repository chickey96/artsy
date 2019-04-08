# Artsy

## Background and Overview
Artsy is an Etsy clone that functions as a platform for artists to sell their work. All of the seed data is my original artwork with the exception of my cousin's flower arrangements.

## Functionality
* View and search for products
* Add products to cart, view and edit cart
* See all comments on a product, add, edit or delete comments

## MVP
* user authentication
  * make accounts, login, logout
  * user auth required to view cart and add/edit/delete comments    
* products
  * case insensitive search filters products by media-type, artist, title, or     price
  * links always accessible to view products by media-type
* comments 
  * view all comments for any given product
  * logged in users can add comments
  * logged in users can edit/delete their own comments
  * logged in users can add products to their cart
  * logged in users can view cart, edit product quantity, or delete items

## Technologies
* AWS/CloudFront
  * product images are stored with Amazon Web Services, with CloudFront           deployed to reduce load time
* Postgres database
  * all data other than product images is stored and accessed using a postgres    database
* Ruby on Rails/ React
  * Artsy uses Ruby on Rails on the backend with React on the frontend 

## Contributing

If you are interested in contributing to Artsy, please fork the repository and use a feature branch. Pull requests are always welcome. 

## Links

- Project homepage: https://artsy-00.herokuapp.com/#/
- Repository: https://github.com/chickey96/artsy
- Related projects:
  - Alexandria: http://alexandria-book.herokuapp.com/#/
  - Operation: https://chickey96.github.io/operation/dist/index.html



