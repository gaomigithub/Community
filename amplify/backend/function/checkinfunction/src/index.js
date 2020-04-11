/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageCheckintableName = process.env.STORAGE_CHECKINTABLE_NAME
var storageCheckintableArn = process.env.STORAGE_CHECKINTABLE_ARN

Amplify Params - DO NOT EDIT */

const createDogCheckIn = require('./createDogCheckIn');
const deleteDogCheckIn = require('./deleteDogCheckIn');
const getCheckInList = require('./getCheckInList')

exports.handler = function (event, _, callback) {
    if (event.typeName === 'Mutation') {
        if (event.fieldName === 'createDogCheckIn') {
            createDogCheckIn(event, callback);
        }
        if (event.fieldName === 'deleteDogCheckIn') {
            deleteDogCheckIn(event, callback);
        }
    }
    if (event.typeName === 'Query') {
        getCheckInList(event, callback)
      }
};
