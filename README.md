## This is a personal reference for creating applications with react, react-router, and react-redux.

### React Router

React router is dynamic client side routing. I haven't yet learned the details, but I believe that the library uses the HTML5 history API in order to control typical browser functionality like the url bar and the back button.

#### Webpack configuration

The dev server needs configuring so that index.html is sent whenever there would otherwise be a 404.

```
devServer: {
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

### React Redux

React Redux is a library that is used to connect React Components to Redux. It is very small - as far as I know, it only includes a Provider component and the connect function. Provider is a component that wraps your entire app. It takes the store as a prop. It "provides" the store to all components. Connect is a function that connects an individual component to the store. It gives that component access to the state of the store as well as to the dispatch function used to send actions (the objects returned from action creator functions) through the reducer to be incorporated into the store.

#### Higher Order Components

I don't know very much about higher order components except that they are components that return components. That concept is central to React Redux, altough I don't understand it well enough to say exactly how. The example of higher order components that I have learned is centered aroundcomponent reuse. For example, imagine a component that should only be shown if a user is authenticated. Using a higher order component is helpful in this situation because it can handle the conditional rendering.

---

#### App Diagram 

![Alt text](/app_diagram.jpg)

---
