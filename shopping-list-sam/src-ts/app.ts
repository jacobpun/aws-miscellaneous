import { 
    APIGatewayProxyEvent, 
    APIGatewayProxyResult 
} from "aws-lambda";
import { Item } from "aws-sdk/clients/simpledb";

import { addItem, getAll } from './service/shopping-list.service'  

export const lambdaHandler = (event: APIGatewayProxyEvent, context, callback) => {
    const id = event.pathParameters? event.pathParameters.id : undefined;
    const item:Item = JSON.parse(event.body);

    switch(event.httpMethod) {
        case 'POST':
            addItem(item, callback);
            break;
        case 'GET':
            if (id) {

            } else {
                getAll(callback);
            }
            break;
        case 'PUT':
            // TODO
            break;
        case 'DELETE':
            // TODO     
            break;   
    }
};
