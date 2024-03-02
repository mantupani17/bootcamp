export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
      host: process.env.MONGO_CONNECTION_URL,
      dbName: process.env.MONGO_DB
    },
    awsConfig: {
      secretAccessKey: process.env.AWS_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      region: process.env.AWS_REGION
    },
    cloudWatchConfig: {
      awsOptions: {
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_ACCESS_KEY,
        },
        region: process.env.CLOUDWATCH_AWS_REGION
      },
      name: "Cloudwatch Logs",
      logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
      logStreamName: process.env.CLOUDWATCH_STREAM_NAME,
    },
    cognitoConfig: {
      apiVersion: process.env.COGNITO_API_VERSION,
      credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_ACCESS_KEY
      },
      region: process.env.AWS_REGION
    },
    cognitoClientId: process.env.COGNITO_CLIENT_ID,
    cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
    jwkUrI: process.env.COGNITO_JWK_URL,
    issuer: `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`
});