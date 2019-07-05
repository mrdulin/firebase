import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const bigben = functions.https.onRequest((request, response) => {
  const hours = (new Date().getHours() % 12) + 1; // London is UTC + 1hr;
  response.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${"BONG ".repeat(hours)}
    </body>
  </html>`);
});
