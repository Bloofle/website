import { AzureFunction, Context, HttpRequest } from "@azure/functions"

interface apiResponse {
    name?: string,
    count: number,
    imageUrlPrefix: string,
    error?: string,
}

const accessChecker: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Received an authorization request.');
    const accessCode = ((req.query && req.query.accessCode) || (req.body && req.body.accessCode));
    const name = ((req.query && req.query.name) || (req.body && req.body.name));

    if (accessCode === '' || accessCode === null || accessCode !== process.env.secretCode) {
        const responseData: apiResponse = {
            name: name,
            count: 0,
            imageUrlPrefix: '',
            error: 'Sorry, your access Code does not work'
        }

        context.res = {
            status: 200,
            body: responseData
        }
    }
    else {
        const responseData: apiResponse = {
            name: name,
            count: 7,
            imageUrlPrefix: 'https://bloofleblob.file.core.windows.net/awards/George_Awards'
        }

        context.res = {
            status: 200,
            body: responseData
        }
    }
};

export default accessChecker;