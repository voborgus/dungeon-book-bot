const {bot} = require('../logic/bot');
const responseHeaders = {'Access-Control-Allow-Origin': '*'}

module.exports.eventHandler = async event => {
    try {
        console.log(event.body);
        await bot.handleUpdate(JSON.parse(event.body));
        return {
            statusCode: 200,
            headers: responseHeaders,
            body: JSON.stringify(
                {
                    message: 'Ok',
                })
        };
    } catch (error) {
        console.log("Error: ", error);
        return {
            statusCode: error.statusCode ? error.statusCode : 500,
            headers: responseHeaders,
            body: JSON.stringify({
                error: error.name ? error.name : "Exception",
                message: error.message ? error.message : "Unknown error"
            })
        }
    }
}