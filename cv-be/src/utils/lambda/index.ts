import * as aws from 'aws-sdk'
const lambda = new aws.Lambda({
    apiVersion: process.env.AWS_LAMBDA_API_VERSION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_KEY
    },
    region: process.env.AWS_REGION
})

lambda.invoke({
    FunctionName: 'logData',
    Payload: JSON.stringify({message: "Hello world from the application"})
}, (err, data)=>{
    if (err) {
        console.error(err);
    } else {
        console.log('Data:', data);
    }
})

export const lambdaService = {}