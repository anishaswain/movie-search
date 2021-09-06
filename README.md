## Foreword

The project is a web-based platform for creating a Search page for popular movies.

## Scaffolding

```bash
├── public
│   └── index.html                  # HTML Template
├── src
│   ├── actions                     # redux actions
│   ├── components                  # component definitions and their stylesheets
│   ├── config                      # API configurations
│       ├── apikey.js               # Holds API ket for the movie API
│   │   └── endpoint.js             # Contains endpoint for the movie API
│   ├── services                    # redux services to fetch data from API
│   ├── reducers                    # reducer definitions
│   ├── utils                       # utility scripts
│   ├── App.js                      # entrypoint of the component
│   └── Aapp.css                     # CSS definition for App component
├── .eslintrc.js                    # js linting configuration
├── .gitignore
├── package.json                    # project dependencies
└── README.md

```

## Installation

Install Dependencies

`yarn` is the default dependency manager used for installing and building the application.

```bash
$ yarn install
```

Start Development Server

```bash
$ yarn start
```

This will automatically open the application on [http://localhost:3000](http://localhost:8000).

## Local Development

Both the production and development builds of the dashboard require API endpoint configurations in order to query data from specific datastores.

1. Add the `API_KEY` in `./src/config/apikey.js`

2. `src/config/endpoint.js` contains references to API required to visualize data. Please reference the following example for required configuration fields:

```JavaScript
const endpoints = {
  basePath: `https://api.themoviedb.org/3/movie/`,
  // base path to query movies

  movieDataPath: `https://api.themoviedb.org/3/movie/popular`,
  // path to query popular movies

  imagePath: "https://image.tmdb.org/t/p/",
  // path to fetch images

  genrePath: `https://api.themoviedb.org/3/genre/movie/list`,
  // path to fetch genres for catagories

  queryPath: `https://api.themoviedb.org/3/search/movie`,
  // path for query params for search input
};
```

## Requirements

Install yarn

```
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo -o /etc/yum.repos.d/yarn.repo
dnf/yum install yarn
```

## Build

Build Application

```bash
$ yarn build
```

This will generate the `dist` folder in the root directory, which contains packaged files such as `***.js`, `***.css`, and `index.html`.

## Template

This application is based on v4 of Ant Design which is a production-ready UI solution for admin interfaces. For more information regarding the foundation and template of the application, please visit [https://ant.design/components/overview/](https://ant.design/components/overview/).
