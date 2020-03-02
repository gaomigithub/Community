/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageUsertableName = process.env.STORAGE_USERTABLE_NAME
var storageUsertableArn = process.env.STORAGE_USERTABLE_ARN

Amplify Params - DO NOT EDIT */

var AWS = require('aws-sdk');
// const uuid = require('uuidv4')
var region = process.env.REGION
AWS.config.update({region: region});

// var accessKeyId = process.env.DYNAMODB_ACCESS_KEY_ID;
// var secretAccessKey = process.env.DYNAMODB_SECRET_ACCESS_KEY;

var documentClient = new AWS.DynamoDB.DocumentClient({region: region});
var ddb_table_name = process.env.STORAGE_USERTABLE_NAME


function getCurrentUser(event, callback) { 

    const userID = event.arguments

    var params = {
        TableName: ddb_table_name,
        Key: userID
    };
    console.log(params);

    documentClient.get(params, function(err, data){
        if (err) console.log(err);
        else {
            console.log("Success")
            console.log(data)
            callback(err, data.Item)
        }
    });


}; 

module.exports = getCurrentUser