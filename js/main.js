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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getDB(){
    // const dbRef = firebase.database().ref();
    const userUid=localStorage.getItem('currentUser')
    var accidentRecord1=0;
    var accidentRecord2=0;
    var accidentRecord3=0;
    console.log(userUid);
    firebase.database().ref('MyRen/UserAccount/' + userUid).once('value').then((snapshot) => {
        if (snapshot.exists()) {
            const user = firebase.auth().currentUser;
            var data = snapshot.val();
            var dbname = data.name;
            var dbtype = data.displacement;
            var dbcarnumber = data.carNumber;
            var dbmodel = data.carType;
            var dbfuel = data.fuel;
            var dbinsurance = data.insuranceCompany;
            document.getElementById("userIntro").innerHTML="<strong>"+dbname+"</strong>님<br> 안녕하세요! <br>좋은 하루 되세요~"
            document.getElementById("car-number").innerHTML = dbcarnumber;
            document.getElementById("car-insurance").innerHTML = dbinsurance;
            document.getElementById("car-cata").innerHTML = dbtype;
            document.getElementById("car-oil-type").innerHTML=dbfuel;
            document.getElementById("car-model").innerHTML=dbmodel
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    firebase.database().ref('MyRen/DrivingRecord').once('value').then((snapshot) => {
        var data
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                var childData = childSnapshot.val();

                    if (childData.key == userUid && childData.accidentType == "충돌 감지") {
                        accidentRecord1+=1;
                        console.log(accidentRecord1);

                    }

                    if (childData.key == userUid && childData.accidentType == "가벼운 접촉" ||
                        childData.key == userUid && childData.accidentType == "추돌 • 충돌" ||
                        childData.key == userUid && childData.accidentType == "대인사고") {
                        accidentRecord2+=1;
                    }

                    if (childData.key == userUid && childData.accidentType == "자동차 급정거" ||
                        childData.key == userUid && childData.accidentType == "자동차 급감속" ||
                        childData.key == userUid && childData.accidentType == "자동차 급가속" ||
                        childData.key == userUid && childData.accidentType == "자동차 급출발") {
                        accidentRecord3+=1;
                    }


            });


        }

        else {
            console.log("No data available");
        }
        document.getElementById("yesterday-driving-distance").innerHTML = accidentRecord1;
        document.getElementById("today-driving-distance").innerHTML=accidentRecord3;
        document.getElementById("pridict").innerHTML=accidentRecord3;
    }).catch((error) => {
        console.error(error);
    });

}

getDB();