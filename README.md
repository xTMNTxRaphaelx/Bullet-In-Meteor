# Bullet-In-Meteor

Assignment given for Job interview.


#Assignment is to Create a Bulletin Board in meteor.






Using an all-packages approach.

a. `app-lib` package accomplishes the following:

1. Includes core library that your components depend on. This library does not depend on any other code in your app, and don't have any startup code. This builds the 1st layer. This is usually used as a library of common dependencies, and is ideal for defining an interface which your modules can use to communicate with each other.

2. Defines your main namespace: `MyApp = {};` and `api.export('MyApp')` in `package.js` which your app and modules will have access to.

3. defines all packages your app depends on in one place: `var packages = ['pkg:1','pkg:2',...]` and `api.use(packages); api.imply(packages);`.  This also makes their namespaces available everywhere.

b. Create all your modules, making sure to include the `app-lib` dependency first, as well other modules which this module depends on. This creates the 2nd layer of packages - the modules layer

c. Last, you have `app-core` which usually has your startup code, layout, css, main router, global helpers, and configs. This should `api.use` all of your modules from the 2nd layer, with `app-lib` first.  Also add `api.imply` which makes all other packages available in your app. This creates the 3rd layer which should ideally define the application of your modules. Your app only needs to depend on `app-core` to be fully functional, leaving you with a cleanly separated application.

