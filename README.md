## Demo
![Screenshot 2021-10-30 160804](https://user-images.githubusercontent.com/87964976/139527187-0f9f47bc-2101-4a68-9c64-beb3a69fe643.png)
![Screenshot 2021-10-30 160909](https://user-images.githubusercontent.com/87964976/139527192-93eb6bd8-95f7-4b8f-b759-337d48145ffe.png)
![Screenshot 2021-10-30 160932](https://user-images.githubusercontent.com/87964976/139527193-dd083322-8c3c-4d00-b801-fd900d04b024.png)
![Screenshot 2021-10-30 160958](https://user-images.githubusercontent.com/87964976/139527195-1253cb1e-2ae0-47ec-a88b-4a2b2e8918fd.png)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Analysis

```
App

|__ Header
|__ SearchBox
|__ Body
|__ Footer

Header
|__ props: n/a
|__ state: list of header item / active
|__ render: Header item

HeaderItem
|__ props: name, active
|__ state: n/a
|__ render:

SearchBox:
|__ props: onChange, onBlur, value, error
|__ state: na
|__ render

Footer
|__ props: n/a
|__ state: list of item
|__ render: list of FooterItem + copyright

FooterItem
|__ props: name, item
|__ state: n/a
|__ render: Item

BodyLayout: 1 type (other)

Homepage:
|__ props: n/a
|__ state: film
|__ render: FilmList, List of SideBar

FilmList:
|__ props
|__ state
|__ render: (HeaderFilmList + List of FilmCard + )

HeaderFilmList
|__ props: name, list filter ([{name: "Tat ca film", active: true}])
|__ state
|__ render

FilmCard
|__ props: images, score, start, name, category, slug
|__ state
|__ render

Sidebar
|__ props: nameheader, list film
|__ state:
|__ render
```

## Structure app

```
src
|__ api
|   |__ axiosClient
|   |__ ...
|__ constant
|__ assets
|__ components
|   |__ Header: index.js, Header.scss
|   |__ HeaderItem: index.jsx, HeaderItem.scss
|   |__ Footer: index.js, Footer.scss
|   |__ FooterItem: index.jsx, FooterItem.scss
|   |__ FilmCard: index.jsx, FilmCard.scss
|__ layout
|__ pages
|   |   |__ HomePage
|   |   |__ TypePage
|   |   |__ SearchPage
|   |   |__ DetailPage
|   |__ routes.js
```

linear-gradient(180deg,#081b27,rgba(8,27,39,.8))
linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)),
