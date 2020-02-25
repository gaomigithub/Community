/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageUsertableName = process.env.STORAGE_USERTABLE_NAME
var storageUsertableArn = process.env.STORAGE_USERTABLE_ARN

Amplify Params - DO NOT EDIT */

const createUser = require('./createUser')
const getUser = require('./getUser')

exports.handler = async (event, _, callback) => {
    if (event.typeName === 'Mutation') {
        createUser(event, callback)
    }

    if (event.typeName === 'Query') {
        getUser(event, callback)
    }
};
