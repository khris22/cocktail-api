# Requirements

[X]The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.
    ---> used html to render the page of my api, applied div classes and other html elements to produce the pa
[X]The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.
    ---> Each model has their own constructor to create objects and uses the word .this to call an instance of it
[X]The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.
    ---> (1) Cocktail has_many Liquors, (2) Liquor has_many Cocktails through (3) Liquor-Cocktails(join table)
[X]The backend and frontend must collaborate to demonstrate Client-Server Communication. 
    [X] Your application should have at least 3 AJAX calls, 
            ---> fetch call for Cocktails to view index (list of cocktails) 
            ---> fetch call for Liquors to get all liquors in the db
            ---> fetch call to create (POST) an instance of a Cocktail
            ---> fetch call to delete an instance of a Cocktail
    [X] covering at least 2 of Create, Read, Update, and Delete (CRUD). 
            ---> Create, Read & Delete for Cocktails
            ---> Read for Liquors
    [X] Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.
            ---> fetch call to create (POST) an instance of a Cocktail ---> create method in Rails model
            ---> fetch call to delete an instance of a Cocktail --->delete method in Rails model
# JavaScript
 [X] Use classes and functions to organize your code into reusable pieces.

 [X] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.

 [X] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).

# Rails
 [X] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.

 [X] Well-named variables and methods

 [X] Short, single-purpose methods

# Git
 [X] Aim for a large number of small commits - commit frequently!

 [X] Add meaningful messages to your commits. When you look back 
 at your commits with git log, the messages should describe each change.
 
 [X] Don't include changes in a commit that aren't related to the commit message