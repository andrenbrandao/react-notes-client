const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-notes-api-uploads",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jj9cw8fmki.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_RY4qXTouo",
    APP_CLIENT_ID: "3h5pavt16le5glk34emtbr0ddo",
    IDENTITY_POOL_ID: "us-east-1:26dc4278-5321-47ee-ada9-b2eb78ee1776",
  },
};

export default config;