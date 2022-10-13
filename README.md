# react-ssr-example

- `yarn dev`: builds the typescript files into `/dist` and runs a nodemon based on `/dist/index.js`
- `yarn client:build`: builds the client bundle rooted at `/react-app/client/index.tsx` and places the bundle at `/public/bundle.js`

# Try out SSR!
- Go to http://localhost:3000/ and see the counter app is working as intended
- Use `curl localhost:3000` and see the initial render has the correct HTML paint for the counter app!
