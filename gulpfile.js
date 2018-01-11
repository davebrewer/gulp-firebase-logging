let gulp = require('gulp');
let firebase = require('firebase');
let moment = require('moment-timezone');

let firebaseConfig = require('./config');

// Initialize firebase
firebase.initializeApp(firebaseConfig);

gulp.task('default', function(){
  // create timestamp
  let ts = moment().tz("UK/London").format("YYYY-MM-DD-h:mm:ss");

  // Get a reference to the database service
  var database = firebase.database();
  firebase.database().ref('log-event-'+ts).set({
    timestamp: timestamp,
    log: 'log info'
  }).then(() => {
    console.log('Write succeeded!');
  });
});
