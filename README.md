#### Demo using JWT, bcrypt, and httpOnly cookies

1. Make sure that locally you `createDb bcryptJwtCookies`
2. Also dont forget to `npm install`
3. To seed the database run `npm run seed`
4. To start the server run `npm run start:dev`

#### httpOnly

This prevents XSS attacks on your localStorage, and making your token vulnerable
