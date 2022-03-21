export const environment = {
  production: true,
  appName: 'IDP-VPI',
  version: '1.0.0',
  backendUrl: 'https://api-mng-gip.azure-api.net/gip-mon',
  authClientId: '30',
  authBaseUrl: 'https://api-mng-gip.azure-api.net/gip-scsauth',
  forgotPasswordUrl: 'https://idpusrauth-api.azurewebsites.net',
  forgotPasswordConfirmationUrl: 'http://localhost:4200/reset-password',
  reportUrl: 'https://api-mng-gip.azure-api.net/gip-rpt',
  reportServiceUrl: 'https://api-mng-gip.azure-api.net/gip-rpt-svc',
  authUserTokenValidationUrl: 'https://api-mng-gip.azure-api.net/gip-scs',
  authServiceTokenValidationUrl: 'https://api-mng-gip.azure-api.net/gip-scsauth',
  redirectOnExitingApp: 'login',
  pipUrl: 'https://portal.interplayers.com.br/pip/app'
};
