- Run `yarn dev`

  - `yarn dev` does the following:
    1. builds the typescript files into `/dist`
    2. builds the client bundle rooted at `/react-app/client/index.tsx` and places the bundle at `/public/bundle.js` (watching & bundling client)
    3. runs a nodemon based on `/dist/index.js` (watching & refreshing server)

- Go to http://localhost:3000/ and see the counter app is working as intended
- Use `curl localhost:3000` and see the initial render has the correct HTML paint for the counter app!
