const Voice2txt = require('./index.js');
Voice2txt.globalConfig({
  speechClientConfig: {
    projectId: 'talk2text-197217',
    jsonKeyFilename: './Talk2Text-88a3a307e1f6.json'
  },
  timeSeconds: 3,
  countTime: true,
  languageCode: 'pl-PL',
  log: true
});

Voice2txt.startRecord().then((text) => {
  console.log('Text: ' + text);
});