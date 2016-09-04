# mvc-express
An extremely simplified MVC Framework in Node.JS. It's a skeleton for an MVC app of any complexity. 
This version ships with few bolt-ons to demonstrate howto's, but generally you can start any project development extrmely easy

# Idea / Purpose

The idea is to create simple web framework where everyone can start off. It's not something developed to be sold or replace
anything, I just needed some project I can start off to develop 1-week applications that would not even have solid database 
or authentication.


# Application

## Starting
Should be as simple as that

```
npm install
node app --configuration=dev (Configuration param is not really required)
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

`src` - Source files for your JS/CSS code vefore compilation

# What's included?

By default, Express MVC includes routers, global config and global models. Model and routing are located in `bootstraps/system` folder,
and you can totally change/remove them as well.


# Extras (You can remove everything here)

This section describes basic extensions provided on top of framework. If you remove all those extensions, server will still launch and work.
Those extras provide some typical funcitonality you get in each MVC framework, so they are generally worth keeping.

**NOTE: Be careful when removing extras. For example, if you remove grunt config, but don't touch grunt bootstrap, you are likely
to run into an issue with application starting. E.g. use with caution**

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