/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageUsertableName = process.env.STORAGE_USERTABLE_NAME
var storageUsertableArn = process.env.STORAGE_USERTABLE_ARN

Amplify Params - DO NOT EDIT */

var AWS = require('aws-sdk');
const uuid = require('uuidv4')
var region = process.env.REGION
AWS.config.update({region: region});
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var ddb_table_name = process.env.STORAGE_USERTABLE_NAME

async function createUser(event, callback) { 

    const args = { ...event.arguments, id: uuid()}
  
    var params = {
        TableName: ddb_table_name,
        Item: args
    };
    console.log(params);

    try {
        await ddb.putItem(params).promise();
        console.log("Success");
    } catch (error) {
        console.log("Error", error);
    }
}; 

module.exports = createUser
