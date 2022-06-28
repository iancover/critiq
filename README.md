# [critIQ](https://critiq-react-app.netlify.app)

## React App for Ratings and Reviews

[![Netlify Status](https://api.netlify.com/api/v1/badges/33351f97-a8a9-485d-9276-297b36cecf2d/deploy-status)](https://app.netlify.com/sites/critiq-react-app/deploys)

---

A mock [React](https://reactjs.org/docs/getting-started.html#try-react) UI for submitting _ratings_ and _reviews_, bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can view the production `build` live demo here: [deployed to Netlify](https://www.netlify.com/?utm_source=google&utm_medium=paid_search&utm_campaign=12755510784&adgroup=118788138897&utm_term=netlify&utm_content=aud-1596644761615:kwd-371509120223&creative=516906172749&device=c&matchtype=e&location=9028317&gclid=Cj0KCQjwntCVBhDdARIsAMEwACnUWdPiqrRkB5_Xgj_En8rWNSmoir0z_Tm_oEAUaq1D99EacTlCojMaAh8xEALw_wcB).

> _Note: the live demo only stores data in the browser so it resets to the initial state on page reload._

---

## Production

### Run Scripts

To start the production ready app setup in development simply run

```sh
npm start
```

which uses the data in `/src/data/ReviewData.js`

To start the production environment before deployment, which bundles the app into a `/build` folder run

```sh
npm run build
```

and see instructions below how to serve this static folder.

### Setup

To run the production build and serve the static `/build` folder you can use the [npm](https://npmjs.com) package [Serve](https://www.npmjs.com/package/serve), just install it globally in your local environment like

```sh
npm install serve -g
```

and from the project folder run it with the `--single` or `-s` option

```sh
serve -s build
```

---

## Development

### Run Scripts

To start the development setup, view the instructions below first, then from the project directory run

```bash
npm run dev
```

then in your browser open [http://localhost:3000](http://localhost:3000) to view the [React](https://reactjs.org/docs/getting-started.html#try-react) UI running, and the _fake server_ should be running on [PORT: 5000](http://localhost:5000)

The mock backend [json-server](https://www.npmjs.com/package/json-server) will serve the _JSON_ in the `/db.json` file and runs simultaneously with the _frontend_ using [Concurrently](https://www.npmjs.com/package/concurrently).

> _Note: In order to run the app in **development** some code in the `/src/context/ReviewContext.js`file must be refactored. Simply comment/uncomment the annotated lines of code._

Installing dependencies, i.e.

```bash
npm i concurrently json-server
```

And in your `package.json` configure a `proxy` to make the _api_ requests

```json
"proxy": "http://localhost:5000"
```

and add the following _scripts_

```json
"scripts": {
  // don't remove the standard scripts, just add...
  "server": "json-server --watch db.json --port 5000",
  "dev": "concurrently \"npm run server\" \"npm start\""
}
```

_additionally, if you get an error while running the app, i.e._

```sh
[1] Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
[1]  - options.allowedHosts[0] should be a non-empty string.
```

create an `.env` file in your **_root_** project folder and add this variable

```sh
DANGEROUSLY_DISABLE_HOST_CHECK=true
```
