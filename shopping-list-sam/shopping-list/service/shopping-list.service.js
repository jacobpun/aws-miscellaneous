const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();

exports.getAll = callback => {
    const { TABLE_NAME } = process.env;
    const params = { TableName: TABLE_NAME };
    docClient.scan(
        params, 
        (err, result) => {
            if (err) {
                errorResp(callback, err);
            } else {
                successResp(callback, result)
            }
        }
    );
}


function successResp(callback, result) {
    callback(undefined, {
        statusCode: 200,
        body: JSON.stringify(result)
    });
}

function errorResp(callback, err) {
    callback({
        statusCode: 400,
        body: JSON.stringify(err)
    })
}