### Demo using JWT, bcrypt, and httpOnly cookies

#### First

1. Make sure that locally you `createDb bcryptJwtCookies`
2. Also dont forget to `npm install`
3. To seed the database run `npm run seed`
4. To start the server run `npm run start:dev`

#### To try to set it up yourself

`git checkout startingPoint` to try and build it yourself!

## Add a Front End!

There is a branch `git checkout reactFrontEnd`, which shows you how to add
a react-app inside of our repository, and use express to serve it's build folder
in production

##### If you do this...

...make sure to run `npm run build` first, becuase that is what's getting served in our express app

#### httpOnly

This prevents XSS Cross-Site-Scripting attacks on your site... localStorage is vulnerable!
