# Leaf Site • 1.0.0

The Leaf marketing site. Written in Pug and deployed to Github pages. Caching/performance is provided by Cloudflare.

## Installation
 1. Install [node.js](https://nodejs.org/). You can get this from the official site, **or** via [homebrew](http://brew.sh/) using nvm - node version manager (recommended).
 2. Clone this project to your local machine with `git clone git@github.com:weareleaf/leaf-site.git` from your terminal.
 4. In your terminal `cd` into the `leaf-site` project
 5. Type `npm install` to install the node packages required to run the project.

## Working with the project
```
npm run start    // Start the development server with live rebuilding/reloading
npm run test     // Run any JS tests
npm run build    // Force a rebuild of all code
npm run deploy   // Deploy the site to Github pages
```

### Automated building
Source code written in the `./code/` directory is converted and moved over to `./dist/` as part this template's build process. The following conversions are automated:

 - **Automatic compilation of Pug/Jade:** Any `.pug` or `.jade` files in `./code/` and its subdirectories will be converted.
 - **Automatic compilation of Sass:** Any `.scss` files in `./code/` and its subdirectories will be converted.
 - **Automatic compilation of JavaScript:** A JS module starting from `./code/scripts/index.js` will be webpacked and minified into a single bundle.
 - **Automatic optimisation of images:** Any `.jpg` files in `./code/` and its subdirectories will be optimised.