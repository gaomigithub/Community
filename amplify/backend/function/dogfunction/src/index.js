/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageDogtableName = process.env.STORAGE_DOGTABLE_NAME
var storageDogtableArn = process.env.STORAGE_DOGTABLE_ARN

Amplify Params - DO NOT EDIT */

const createDog = require('./createDog');
const deleteDog = require('./deleteDog');
const getDogs = require('./getDogs');
const getDog = require('./getDog');

exports.handler = function (event, _, callback) {
    if (event.typeName === 'Mutation') {
        if (event.fieldName === 'createDog') {
            createDog(event, callback);
        }
        if (event.fieldName === 'deleteDog') {
            deleteDog(event, callback);
        }
    }
    if (event.typeName === 'Query') {
        if (event.fieldName === 'getDogs') {
            getDogs(event, callback)
        }
        if (event.fieldName === 'getDog') {
            getDog(event, callback)
        }
      }
};
