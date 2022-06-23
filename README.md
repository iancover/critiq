# [critIQ](https://critiq-react-app.netlify.app)

## React App for Ratings and Reviews

[![Netlify Status](https://api.netlify.com/api/v1/badges/33351f97-a8a9-485d-9276-297b36cecf2d/deploy-status)](https://app.netlify.com/sites/critiq-react-app/deploys)

---

To view the live demo deployed to [Netlify](https://www.netlify.com/?utm_source=google&utm_medium=paid_search&utm_campaign=12755510784&adgroup=118788138897&utm_term=netlify&utm_content=aud-1596644761615:kwd-371509120223&creative=516906172749&device=c&matchtype=e&location=9028317&gclid=Cj0KCQjwntCVBhDdARIsAMEwACnUWdPiqrRkB5_Xgj_En8rWNSmoir0z_Tm_oEAUaq1D99EacTlCojMaAh8xEALw_wcB) click the title or the badge above.

A [React](https://reactjs.org/docs/getting-started.html#try-react) application for submitting ratings and reviews, it runs a mock **_REST api_** using [json-server](https://www.npmjs.com/package/json-server) to provide fake data for demo purposes. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Run Scripts

To install dependencies to run the application

```bash
npm install
```

To start the application in the development environment, from the project directory run

```bash
npm run dev
```

which uses [Concurrently](https://www.npmjs.com/package/concurrently) to run the [json-server](https://www.npmjs.com/package/json-server) in your local environment on [PORT: 5000](http://localhost:5000) and the [React](https://reactjs.org/docs/getting-started.html#try-react) app on [PORT: 3000](http://localhost:3000)

---

## Setup

To configure a `proxy` server in your `package.json` add this

```json
"proxy": "http://localhost:5000"
```

and if you get an error while running the app like

```sh
[1] Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
[1]  - options.allowedHosts[0] should be a non-empty string.
```

create an `.env` file in your **_root_** project folder and add this variable

```sh
DANGEROUSLY_DISABLE_HOST_CHECK=true
```
