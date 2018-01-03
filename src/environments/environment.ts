// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyC3l4B6iM312uMX2X4yVPURbInU8kTl2wA',
    authDomain: 'testmap-50ed1.firebaseapp.com',
    databaseURL: 'https://testmap-50ed1.firebaseio.com',
    projectId: 'testmap-50ed1',
    storageBucket: 'testmap-50ed1.appspot.com',
    messagingSenderId: '1094826546734'
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoianJiYXJ0IiwiYSI6ImNqYjZlaXhyZzBvbTIycXBuZTQ4M2dmeGsifQ.Ib2pWIm25xjOq3tYkXn4ig'
  }
};
