exports.handler = async (event) => {
    console.log('received event:', event);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify({event}),
    };
    return response;
};
