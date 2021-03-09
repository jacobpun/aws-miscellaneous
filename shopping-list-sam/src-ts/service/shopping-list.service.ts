import * as AWS from 'aws-sdk';
import { AWSError } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Item } from 'aws-sdk/clients/simpledb';
var docClient = new AWS.DynamoDB.DocumentClient();

export const getAll = callback => {
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

export const addItem = (item: Item, callback) => {
    const { TABLE_NAME } = process.env;
    const params = { 
        TableName: TABLE_NAME,
        Item: item
    };

    docClient.put(
        params,
        (err, result) => {
            if (err) {
                errorResp(callback, err);
            } else {
                successResp(callback, item)
            }
        }
    )
}

const  successResp = (callback, result) => {
    callback(undefined, {
        statusCode: 200,
        body: JSON.stringify(result)
    });
}

const errorResp = (callback, err) => {
    callback({
        statusCode: 400,
        body: JSON.stringify(err)
    })
}