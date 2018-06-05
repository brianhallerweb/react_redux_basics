### This is a personal reference for creating applications with react, react-router, and react-redux.

#### React Router

React router is dynamic client side routing. I haven't yet learned the details, but I believe that the library uses the HTML5 history API in order to control typical browser functionality like the url bar and the back button.

#### Webpack configuration

The dev server needs configuring so that index.html is sent whenever there would otherwise be a 404.

```devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  }
```

#### React Router API Basics

BrowserRouter wraps the entire app and does all its work behind the scenes. Switch just turns the routes into conditional statements such that the first match is returned. This behavior makes it easy to render a custom 404 page if the user enters a url with no match. Route specifies which components will render for a given url. Link and NavLink are essentially anchor tags. Links create a "link" to a route defined in a Route component. NavLink is basically the same as Link except for it has an attribute called isLinkActive which makes it easy to have a navbar with special styling for active links.

#### Route Props

Routes do not simply render components. They also send props to the components. That is important to access the full functionality of a browser. The props include history, query strings, and parameters. They can be accessed thought the same familiar props object that is passed to each component.

#### Organization

This app uses a separate folder called routes for a single AppRouter component. That component is effectively the root component - it gets passed to reactDOM.render.
