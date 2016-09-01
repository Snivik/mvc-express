# mvc-express
An extremely simplified MVC Framework

# Idea / Purpose

The idea is to create simple web framework where everyone can start off. It's not something developed to be sold or replace
anything, I just needed some project I can start off to develop 1-week applications that would not even have solid database 
or authentication.


# Starting Application

Should be as simple as that

```
npm install
node app
```



# Folder Structure

`assets` - public facing assets folder. Anything put here available for public consumption

`bootstrap` - Set of JS files that are going to be executed after/before controllers/models are initialized. Exists for introduction of side-seervices. Bootstrap is where you major cutomizations are happening

`config` - Various launch configurations. later accessed via global.config.<name>, if needed in bootstrapper (dev/prod)

`controllers` - Controllers, you know, like in regular MVC

`model` - Data models. Models are available through global.models.<name>. Ideally, your model follows pattern of your data connector, and you have bootstrapper that extends each model with DB functionality (if required) and puts in global access. That way it follows SailsJS pattern, and is easily recognizable by other developers

`views` - Your views


# Provided Basics

This section describes basic extensions provided on top of framework. If you remove all those extensions, server will still launch and work.
Default providers are nothing but useful addition to basic boilerplate. You can safely remove all of them.
**DISCLAIMER: If you are removing something not listed in this section that you didn't create, you're doing it at your own risk. Some files are required!**
**DISCLAIMER 2: Sample controllers & models depend on each other, so make sure if you do remove them, you remove them all**
## Bootstraps

As an example on how to properly work with bootstraps inside this engine, there are several basic bootstraps:
`greetings.js` - Simple welcome that will be printed when server is starting


## Models

TODO

## Controllers

TODO

## Config

