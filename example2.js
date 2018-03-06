const Voice2txt = require('./index.js');
Voice2txt.globalConfig({
  speechClientConfig: {
    projectId: 'talk2text-197217',
    jsonKeyFilename: './Talk2Text-88a3a307e1f6.json'
  }
});

console.log('3s, start talking:');

var instance = Voice2txt.config({
  // log: true,
  languageCode: 'pl-PL'
}).then((text) => {
  console.log('Text: ' + text);
}).catch(() => {
  console.log(`I didn't uanderstand what you've said`);
}).startRecord();


setTimeout(instance.stopRecord.bind(instance), 3000);