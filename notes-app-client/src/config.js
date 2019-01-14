export default {
  MAX_ATTACHMEN_SIZE: 5000000,
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'scratch-serverless'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://t2y3aelrqb.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_roSxOWeBD',
    APP_CLIENT_ID: '4itq2chvjipv83fb44p98tr96v',
    IDENTITY_POOL_ID: 'us-east-2:3e8d6e30-e737-4512-9483-625757ae1ad1'
  }
};
