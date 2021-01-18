import * as functions from "firebase-functions";

function add(num1: number, num2: number) {
  return num1 + num2;
}

exports.getSum = functions.https.onCall((data, context) => {
  return {
    result: add(data.num1, data.num2),
  };
});
