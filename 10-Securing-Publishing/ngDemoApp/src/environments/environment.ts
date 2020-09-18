export const environment = {
  production: false,
  authEnabled: false,
  title: 'ngSecurity',
  markdownPath: '/assets/markdown/',
  api: 'http://localhost:3000/',
  firebaseConfig: {
    apiKey: 'AIzaSyD0Gp-E3YlCZqSuwcBxNYiPWMPIKha7b7w',
    authDomain: 'ngang-2155f.firebaseapp.com',
    databaseURL: 'https://ngang-2155f.firebaseio.com',
    projectId: 'ngang-2155f',
    storageBucket: 'ngang-2155f.appspot.com',
    messagingSenderId: '113228886038',
    appId: '1:113228886038:web:59a593244decfb18094537',
    measurementId: 'G-0QCMS6EGEF',
  },
  o365Config: {
    tenant: 'd92b247e-90e0-4469-a129-6a32866c0d0a',
    clientId: '4e60c128-a813-4031-bd99-cf4327cce885',
    cacheLocation: 'localStorage',
    endpoints: {
      graphApiUri: 'https://graph.microsoft.com',
      sharePointUri: 'https://integrationsonline.sharepoint.com',
    },
    returnUrl: 'https://localhost:4200',
  },
};
