/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageReservationtableName = process.env.STORAGE_RESERVATIONTABLE_NAME
var storageReservationtableArn = process.env.STORAGE_RESERVATIONTABLE_ARN

Amplify Params - DO NOT EDIT */

var AWS = require("aws-sdk");
var region = process.env.REGION;
AWS.config.update({ region: region });
var documentClient = new AWS.DynamoDB.DocumentClient({ region: region });
var ddb_table_name = process.env.STORAGE_RESERVATIONTABLE_NAME

function write(params, event, callback) {
  documentClient.put(params, function(err, data) {
    if (err) {
      callback(err);
    } else {
      callback(null, event.arguments.input);
    }
  });
}

function createReservation(event, callback) {
  const reservation = event.arguments.input;

  var params = {
    TableName: ddb_table_name,
    Item: reservation,
  };
  console.log(params);

  if (Object.keys(event.arguments).length > 0) {
    write(params, event, callback);
  }
}

module.exports = createReservation;