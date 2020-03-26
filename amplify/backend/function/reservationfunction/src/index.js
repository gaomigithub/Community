/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageReservationtableName = process.env.STORAGE_RESERVATIONTABLE_NAME
var storageReservationtableArn = process.env.STORAGE_RESERVATIONTABLE_ARN

Amplify Params - DO NOT EDIT */

const createReservation = require('./createReservation');
const getReservation = require('./getReservation');
const checkReservation = require('./checkReservation');
const deleteReservation = require('./deleteReservation')

exports.handler = function (event, _, callback) {
    if (event.typeName === 'Mutation') {
        if (event.fieldName === 'createReservation') {
            createReservation(event, callback);
        }
        if (event.fieldName === 'deleteReservation') {
            deleteReservation(event, callback);
        }
    }
    if (event.typeName === 'Query') {
        if (event.fieldName === 'getReservation') {
            getReservation(event, callback);
        }
        if (event.fieldName === 'checkReservation') {
            checkReservation(event, callback);
        }
    }
};