# course-viewer-solutions
course-viewer-solutions is a React powered course details entry and management

  - Home page is an introduction page. 
  - courses page, where we display all the courses details in a table format and we can add, update and delete the courses.
  - About page is an information page.

### Tech

course-viewer-solutions uses a number of open source projects to work properly:

* [ReactJs](https://reactjs.org/) - HTML enhanced for stateful web apps!
* [Ant Design of React](https://ant.design/docs/react/introduce) - React Ant Design components for design in React.
* [Redux](https://redux.js.org/) - for globally maintain state.

course-viewer-solutions uses npm packages like [react-router](https://www.npmjs.com/package/react-router) for routings, and [antd](https://www.npmjs.com/package/antd) for Ant Design components for design in React, [redux](https://www.npmjs.com/package/redux) for global state management, [react-redux](https://www.npmjs.com/package/react-redux) for using redux with react, [redux-thunk](https://www.npmjs.com/package/redux-thunk) for asynchronous API calls, [bootstrap](https://www.npmjs.com/package/bootstrap) for using bootstrap components of react.
and of course course-viewer-solutions itself is open source with a [public repository](https://github.com/Vasanthi-Gopavarapu/course-viewer-solutions) on GitHub.


### Installation

course-viewer-solutions is build on [React - 16.13.1](https://reactjs.org/) and [Redux - 4.0.5](https://redux.js.org/)

Install the dependencies and devDependencies and start the frontend server and backend server in two diff terminals

Terminal 1
```sh
$ cd course-viewer
$ npm install
$ npm start
```
Terminal 2
```sh
$ cd backend
$ node mockData.js
$ node apiServer.js
```

### Todos

 - 1.	Courses
      Actions:
          I.	 Add course button takes you to a page where you can Add a new Course details with authors provided, with the catageries and save it.
          II.	 By clicking on the Title of the course you update the course details and save it.
          III. Also delete any course through delete button.


License
----

MIT
