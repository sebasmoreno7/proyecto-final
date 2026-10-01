# Fun Food Friends · React exercise

Historical React prototype with a form for a name and an item to bring. Submitting the form now adds the item to an in-memory list. Items disappear when the page reloads; this is an unfinished exercise, not a working shared list.

## Stack

React 16 and Create React App, as declared in `package.json`. A Firebase file exists in `src/`, but it is not integrated into the visible app flow.

## Explore locally

From the repository root, run `yarn install` and `yarn start`. Run `CI=true yarn test --watch=false --runInBand` for the form tests. This historical Create React App version may need `NODE_OPTIONS=--openssl-legacy-provider yarn build` on Node 20.

The original Create React App scaffold documentation was replaced with this project-specific summary.
