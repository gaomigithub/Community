/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiCommunityGraphQLAPIIdOutput = process.env.API_COMMUNITY_GRAPHQLAPIIDOUTPUT
var apiCommunityGraphQLAPIEndpointOutput = process.env.API_COMMUNITY_GRAPHQLAPIENDPOINTOUTPUT
var storageUsertableName = process.env.STORAGE_USERTABLE_NAME
var storageUsertableArn = process.env.STORAGE_USERTABLE_ARN

Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
