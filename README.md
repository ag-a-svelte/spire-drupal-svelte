# Drupal-Sapper-Svelte Demo

If you find GatsbyJS, ReactJS, Angular, NextJS/NuxtJS, REST & GraphQL
interesting then this demo is for you. We show how to marry 3 wonderful
platforms to build insanely fast, offline-first, mobile-friendly, interactive
Single Page Applications (SPA) / web sites.

- Drupal is great as a CMS, and even better as a headless/decoupled CMS.
- [Svelte](https://svelte.dev) is compiler that compiles HTML+CSS+JavaScript into pure JavaScript
  that is executable on client (browser) as well as server (NodeJS). The code
  it produces does not use Virutal DOM, does not need a runtime framewok, and
  thus produces very small bundles that run faster than alternatives such as
  ReactJS and Angular. As a bonus, the developer experience is extremely
  pleasant, due to the simplicity of Svelte programming model.
- [Sapper](https://sapper.svelte.dev) is a client- as well as server-side framework that lets you create
  high performance websites that can fetch content or data from RESTful
  backends and render them either client-side or server-side with Svelte. And
  blurs the line between the client and the server by rendering either on
  client or server.

## Benefits

- Content rich and easy to manage because is Drupal!
- Fast performance due to Sapper's prefetching and Svelte's SSR (server-side rendering)
- SEO ready due to server-side rendering (SSR)
- Mobile ready and offline-first due to Sapper's service worker.
- All the sweetness of Svelte, which makes it super easy to build highly interactive JavaScript driven sites.

## Project Setup

- Clone this repo
- Make sure you make the following changes to your Drupal 8 setup:
  - install and enable GraphQL and GraphQL Core module
  - give the following permissions to Anonymous User under GraphQL module: "Execute arbitrary GraphQL requests" and "Bypass field security"
  - in sites/default directory, copy default.services.yml to services.yml and enable CORS
```
...
  cors.config:
    enabled: true
    allowedHeaders: ['x-csrf-token','authorization','content-type','accept','origin','x-requested-with', 'access-control-allow-origin']
    allowedMethods: ['*']
    allowedOrigins: ['*']
```
- Edit `src/config.js` to point the URL to your Drupal 8 site
- Run `npm install`
- Run `npm run dev` or `npm start` or `npm run build` or any of the npm scripts in `pacakge.json`