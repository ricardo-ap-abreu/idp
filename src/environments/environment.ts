export const environment = {
  production: false,
  appName: 'IDP-VPI',
  version: '1.0.0',
  backendUrl: 'https://idpmon-api.azurewebsites.net',
  authClientId: '30',
  authBaseUrl: 'https://idp-api-gtw.azure-api.net/scs-auth',
  forgotPasswordUrl: 'https://idpusrauth-api.azurewebsites.net',
  forgotPasswordConfirmationUrl: 'http://localhost:4200/reset-password',
  reportUrl: 'https://idprpt-api.azurewebsites.net',
  reportServiceUrl: 'https://idprpt-api.azurewebsites.net',
  authUserTokenValidationUrl: 'https://idpusrauth-api.azurewebsites.net',
  authServiceTokenValidationUrl: 'https://idp-api-gtw.azure-api.net/svc-auth',
  redirectOnExitingApp: 'login',
  redirectToHome: 'home',
  pipUrl: 'https://idp-pip-app.azurewebsites.net/pip/app'
};

