import * as fb from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAtvcwLKECDTr-GBtD89kepfPXY3fZKvR0",
    authDomain: "tramcontrollerindicator.firebaseapp.com",
    databaseURL: "https://tramcontrollerindicator.firebaseio.com",
    storageBucket: "tramcontrollerindicator.appspot.com"
};

export class Firebase{
    constructor(){
        console.log('Firebase mounted')
        this.message = "hi";
        this.login = this.login.bind(this);
        fb.initializeApp(firebaseConfig);
    }

    signIn(username, password, mail){

        console.log(username,password,mail)
        fb.auth().createUserWithEmailAndPassword(mail, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage);
        }).then(() => console.log("Connected"));
    }

    login(mail, password){
        console.log("Connected !");
        fb.auth().signInWithEmailAndPassword(mail, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
}