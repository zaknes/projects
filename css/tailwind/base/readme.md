## Base Tailwind Project
This is a Tailwind project including a blank template ready for quick use. Includes PurgeCSS to remove any unused classes, shrinking the file size substantially. Uses Laravel Mix to compile all of the assets.

### Installation
To create a new project using this template, first install the npm packages.

```
npm install
```

You must then generate the tailwind configuration file.

```
node_modules/.bin/tailwind init
```

That's it! Now run `npm run watch` to watch for changes you make to the files, or run `npm run production` to compile all assets, complete with PurgeCSS, for production.
