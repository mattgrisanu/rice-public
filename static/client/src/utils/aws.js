export default function getSecureApiClient() {
  const awstoken = localStorage.getItem('awsCredentials');

  return apigClientFactory.newClient({
  	accessKey: awstoken.AccessKeyId,
    secretKey: awstoken.SecretAccessKey,
    sessionToken: awstoken.SessionToken,
    region: 'us-west-2' // Set to your region
  });
}