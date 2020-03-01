/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiCommunityGraphQLAPIIdOutput = process.env.API_COMMUNITY_GRAPHQLAPIIDOUTPUT
var apiCommunityGraphQLAPIEndpointOutput = process.env.API_COMMUNITY_GRAPHQLAPIENDPOINTOUTPUT
var storageUsertableName = process.env.STORAGE_USERTABLE_NAME
var storageUsertableArn = process.env.STORAGE_USERTABLE_ARN

Amplify Params - DO NOT EDIT */

const createNewDog = require('./createNewDog')
const getCurrentDog = require('./getCurrentDog')
const updateCurrentDog = require('./updateCurrentDog')

exports.handler = function (event, _, callback) {
    if (event.typeName === 'Mutation') {
        if (event.fieldName === "createNewDog") {
            createNewDog(event, callback)
        }
        if (event.fieldName === "updateCurrentDog") {
            updateCurrentDog(event, callback)
        }
    }
    if (event.typeName === 'Query') {
        getCurrentDog(event, callback)
      }
};
