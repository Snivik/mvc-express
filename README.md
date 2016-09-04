# mvc-express
An extremely simplified MVC Framework in Node.JS. It's a skeleton for an MVC app of any complexity. Boilerplate functionality
includes routing & EJS template engine (which is removable), and ElasticSearch connectivity.

Default providers (EJS & ElasticSearch) are removable, making framework dependency list as short as 2 (with EJS and elastic it's 4)


# Idea / Purpose

The idea is to create simple web framework where everyone can start off. It's not something developed to be sold or replace
anything, I just needed some project I can start off to develop 1-week applications that would not even have solid database 
or authentication.

## Cleaning up for fresh start
If you want to get rid of all sample code and have a fresh start

Remove following files:
```
# All controllers should go
./controllers/*.js

# All models should go
./models/*.js

# All views should go, except layout.ejs (if you are not removing ejs support)
./view/index/*.ejs
./view/index/

# All assets should go
./assets/**/*
./src/**/*


```

Also remove all routes from `config/routes.js`

## Removing EJS

1. Remove `bootstraps/ejs.js`

2. Remove `views/layout.ejs`


## Removing ElasticSearch

1. Remove `bootstraps/elastic.js`

2. Remove corresponding configurations from `config/configurations.js`, e.g. whole elasticsearch object from each environment.

## Removing smart routing

1. Remove `bootstraps/routeAdapter.js`

2. Remove all string routes from `config/routes.js`

# Application

## Starting

Should be as simple as that

```
npm install
node app
```

## Lifecycle

Current lifecycle follows the following model. You might want to refer it when developing bootstraps

**Init**
1. Get express
2. Get requireall 

**Application indexing
3. Getting local map of bootstraps
4. Assigning global `config`, `models`, `app`
5. Loading bootstraps and sorting by order
6. **Executing *before* bootstraps**
    - Executing controllers
    - Executing models
7. Executing *system* bootstraps
8. Executing the rest of the bootstraps
9. Starting server



# Folder Structure

`assets` - Folder with assets. By default Express MVC doesn't package anything on start. Typically it's a job of a packaging/compiling
stack you choose. You can definitely make a bootstrap that will package/minify/... CSS/LESS/JS files for you, but that's optional.

`public` - Public facing folder. Put images and fonts there

`bootstrap` - Set of JS files that are going to be executed after/before controllers/models are initialized. Exists for introduction of side-seervices. Bootstrap is where you major cutomizations are happening

`config` - Various launch configurations. later accessed via global.config.<name>, if needed in bootstrapper (dev/prod)

`controllers` - Controllers, you know, like in regular MVC

`model` - Data models. Models are available through global.models.<name>. Ideally, your model follows pattern of your data connector, and you have bootstrapper that extends each model with DB functionality (if required) and puts in global access. That way it follows SailsJS pattern, and is easily recognizable by other developers

`views` - Your views

`src` - Source files for your JS/CSS code before compilation

# What's included?

By default, Express MVC includes routers, global config and global models. Model and routing are located in `bootstraps/system` folder,
and you can totally change/remove them as well.


# Extras (You can remove everything here)

This section describes basic extensions provided on top of framework. If you remove all those extensions, server will still launch and work.
Those extras provide some typical funcitonality you get in each MVC framework, so they are generally worth keeping.

**NOTE: Be careful when removing extras. For example, if you remove grunt config, but don't touch grunt bootstrap, you are likely
to run into an issue with application starting. E.g. use with caution**

## EJS Renderer
Renders EJS files inside layout. In 2 sections, one is body, another is scripts. Scripts will be executed after libraries are loaded
While HTML code will go before. 

## Route Adapter
Allows you to specify routes in key:pair manner, e.g. ` 'get /index/:param1/:param2' : 'controller.method'  `, where 
`controller.method` can be burrowed deeper, if needed, like `controller.api.method`

## Elasric Search
*Still Implementing*

ElasticSearch DB adapter. Still under construction.


## Bootstraps

As an example on how to properly work with bootstraps inside this engine, there are several basic bootstraps:
`greetings.js` - Simple welcome that will be printed when server is starting


## Models

All models are extra and are not needed

## Controllers

All controllers are provided for default functionality

## Config



# Global variables

Besides native express variables, here are some extras that might be useful

`global.configuration` - Configuration for the current runtime

`global.models` - All the models from Models folder

`global.config` - All the configurations from config folder

`global.controllers` - All controllers in controllers folder

`global.app` - Express application

`global.requireall` - Returns modules in folder as hashmap of objects