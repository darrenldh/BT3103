import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyCN4WkFYvsLMIn4TLPW-gHYeiJLcgr8BQQ",
    authDomain: "countries-b4230.firebaseapp.com",
    databaseURL: "https://countries-b4230.firebaseio.com",
    projectId: "countries-b4230"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;