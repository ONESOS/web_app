const firebaseConfig = {
    apiKey: "AIzaSyBJmNa9uOAhVCCU_J7QP9ouPWNSrSpB6EY",
    authDomain: "myren-5a547.firebaseapp.com",
    databaseURL: "https://myren-5a547-default-rtdb.firebaseio.com",
    projectId: "myren-5a547",
    storageBucket: "myren-5a547.appspot.com",
    messagingSenderId: "789517072518",
    appId: "1:789517072518:web:a66e632d485fb5d8cd7907",
    measurementId: "G-LK0MPPR0X0"
};

firebase.initializeApp(firebaseConfig);

function IDcheck(){
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
        alert("로그인 후 이용하세요");
        location.href = "Login.html";
        }
    });
}

function Logout(){
    firebase.auth().signOut().then(() => {
        location.href="Login.html"
        console.log("Logout success")
    }).catch((error) => {
        });
}