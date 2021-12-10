exports.handler = (event, context, callback) => {
  // insert code to be executed by your lambda trigger

  // save a new user to DynamoDB
  callback(null, event);
};
