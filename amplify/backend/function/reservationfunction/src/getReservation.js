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


function getReservation(event, callback) { 

    const userID = event.arguments.id

    var params = {
        TableName: ddb_table_name,
        FilterExpression : 'userID = :id',
        ExpressionAttributeValues : {':id' : userID}
    };
    console.log(params);

    documentClient.scan(params, function(err, data){
        if (err) console.log(err);
        else {
            console.log("Success")
            console.log(data)
            callback(err, data.Items)
        }
    });


}; 

module.exports = getReservation