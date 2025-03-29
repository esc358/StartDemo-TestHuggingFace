# Team Hugging Face :smiley:

# In-class Start Files Demo :book: :open_book:

## Goal of this in class files:

The goal is to create a text generator web app, using [HuggingFace](https://huggingface.co) and model model: "google/gemma-2-2b-it".

## What we have so far

1. Files have been created through `npx express-generator --view=hbs`.
2. Dotenv npm is already installed.
3. `npm audit fix --force` has been executed.
4. A .env file is created with `ACCESS_TOKEN=`.
5. A folder configs and inside it access.js file has been created. Access.js contains the following code

```
require("dotenv").config();
const accessToken = process.env.ACCESS_TOKEN;

//export the configuration object
module.exports = accessToken;
```

6. Views/index.hbs contains the necessary html code for this application.
7. Public/stylesheet/style.cs has been modified to provide to index.hbs.
8. public/javascripts/script.js file has been created and it targets the html elements by id.

## What we are going to work on

1. Install `npm install @huggingface/inference`
2. Create an API Key with [HuggingFace](https://huggingface.co)
3. Work on script.js and index.js.
4. Run application.
