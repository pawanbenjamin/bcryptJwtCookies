### Demo using JWT, bcrypt, and httpOnly cookies

#### First

1. Make sure that locally you `createDb bcryptJwtCookies`
2. Also dont forget to `npm install`
3. To seed the database run `npm run seed`
4. To start the server run `npm run start:dev`

#### To try to set it up yourself
```git checkout startingPoint``` to try and build it yourself!

#### Also...

There is a branch `git checkout reactFrontEnd`, which shows you how to add
a react-app inside of our repository, and use express to serve the build folder
in production

#### httpOnly

This prevents XSS Cross-Site-Scripting attacks on your site... localStorage is vulnerable!


