import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const accessChecker: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Received an authorization request.');
    const accessCode = ((req.query && req.query.accessCode) || (req.body && req.body.accessCode));
    const name = ((req.query && req.query.name) || (req.body && req.body.name));

    if (accessCode === '' || accessCode === null || accessCode !== 'bloofle128600') {
        context.res = {
            status: 403 //Forbidden
        }
    }
    else {
        const responseMessage = name
            ? "Hello, " + name + ". Welcome to my secret page!"
            : "We don't know your name, but you are still welcome";

        context.res = {
            status: 200,
            body: responseMessage
        }
    }
};

export default accessChecker;