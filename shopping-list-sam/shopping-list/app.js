const { getAll } = require("./service/shopping-list.service");


exports.lambdaHandler = (event, context, callback) => {
    const id = event.pathParameters? event.pathParameters.id : undefined;
    console.log('received http request', event.httpMethod)
    switch(event.httpMethod) {
        case 'POST':
            // TODO
        case 'GET':
            if (id) {

            } else {
                getAll(callback);
            }
        case 'PUT':
            // TODO
        case 'DELETE':
            // TODO        
    }
};
