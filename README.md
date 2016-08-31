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

`bootstrap` - Set of JS files that are going to be executed after controllers/models are initialized. Exists for introduciton of side-seervices

`config` - Various launch configurations. later accessed via global.config.<name>, if needed in bootstrapper (dev/prod)

`controllers` - Controllers, you know, like in regular MVC

`model` - Data models. Models are avaiable through global.models.<name>. Ideally, your model follows pattern of your data connector, and you have bootstrapper that extends each model with DB functionality (if required) and puts in global access. That way it follows SailsJS pattern, and is easily recognizable by other developers

`views` - Your views
