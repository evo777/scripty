# scripty

## Styleguide
__Components__
Keep components as concise and modular as possible.

Use props to make small changes in components, particularly around styling and text content, rather than a specific component.

Only use stateful class components when necessary, otherwise use functional components.

Break functionality into small, specific functions.

If you're passing a function prop that utilizes parent state, don't forget to bind the context to the function.


If there are blocks of JSX in a parent component, it's time to break that out into a child.

Every view should have a single parent component that handles functionality and rendering for smaller, more specific child components.

Parent components should have concise return statements primarily containing custom child components (rather than nested View and Text elements) that each handle their own styling and content.

__Styling__
All styling is done inline.

It's better to repeat ourselves for the sake of clarity and ease-of-access to styles than to be confused or have to go searching for styles in another document.

All views should have a background, even if it's the default white, so that the navigation animations work nicely.

__Destructuring__
Do it wherever you can.

Destructuring should be denoted by spaces between the outermost variables and the curly braces. This avoids any confusion between destructured variables and JSX properties and allows for easy reference to the variables we have access to within a given component.

Good: { prop1, prop2 }
Bad: {prop1, prop2}


__React Native__
For the most part, React Native is just React.

A few differences:

A __View__ is a div.

A __Text__ element is a p (or any size of text, depending on your styling)

A __TouchableHighlight__ is a View that can be pressed. Style it the same way and use the onPress prop for interactions.

A __ScrollView__ is just a scrollable View. Other than being able to scroll, it works the same way as a normal View.

A __Navigator__ creates a stack that you push a routeName to in order to navigate to that view, and pop() to go back.

You use a chain of if else statements to determine which route has been passed and, accordingly, which component to render.

It comes with built-in sliding animations for changing views.

Don't forget to pass the navigator prop into any views you render.

If you're working on a specific component, don't waste time navigating to that view every time the simulator reloads, just change the Navigator's Initial Route prop to the view you're working on.


## Api routes

These routes currently exist to cover the width and breadth of CRUD actions. As written they may not all be useful nor specified correctly. Feel free to change the heck out of them.

| Complete | URL                | Method | Request Body | Result                                                          |
|:--------:|:------------------:|:------:|:------------:|:---------------------------------------------------------------:|
| ✓        | /api/lessons       | GET    | empty        | JSON of all lessons' titles, descriptions and ids.              |
| ✓        | /api/lessons/:id   | GET    | empty        | JSON of the lesson with `id`, as well as its readings/questions.|
|          | /api/lessons       | POST   | JSON         | Create a new lesson in the db.                                  |
|          | /api/lessons/:id   | PUT    | JSON         | Update an existing lesson with `id`, if it exists.              |
|          | /api/lessons/:id   | DELETE | empty        | Delete an existing lesson with `id`, if it exists.              |
|:--------:|:------------------:|:------:|:------------:|:---------------------------------------------------------------:|
|          | /api/users         | GET    | empty        |                                                                 |
|          | /api/users/:id     | GET    | empty        |                                                                 |
|          | /api/users         | POST   | JSON         |                                                                 |
|          | /api/users/:id     | PUT    | JSON         |                                                                 |
|          | /api/users/:id     | DELETE | empty        |                                                                 |
|:--------:|:------------------:|:------:|:------------:|:---------------------------------------------------------------:|
|          | /api/content/:type | GET    | empty        |                                                                 |
|          | /api/content/:id   | GET    | empty        |                                                                 |
|          | /api/content       | POST   | JSON         |                                                                 |
|          | /api/content/:id   | PUT    | JSON         |                                                                 |
|          | /api/content/:id   | DELETE | empty        |                                                                 |
