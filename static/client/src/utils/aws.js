export default function getSecureApiClient() {
  const awsAccessKey = localStorage.getItem('awsAccessKey');
  const awsSecretKey = localStorage.getItem('awsSecretKey');
  const awsSessionToken = localStorage.getItem('awsSessionToken');

  return apigClientFactory.newClient({
    accessKey: awsAccessKey,
    secretKey: awsSecretKey,
    sessionToken: awsSessionToken,
    region: 'us-west-2'// Set to your region
  });
}
