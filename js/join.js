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

    $('#register').click(function () {
        var email = $('#email_input').val();
        var password = $('#password_input').val();

        var email_2 = document.getElementById("email_input");
        var password_2 = document.getElementById("password_input");
        var password_confirm_2 = document.getElementById("password_confirm_input");
        
        function email_check(email) {
            var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
            return reg.test(email);

        }

        if(email_2.value == ""){
            alert("이메일 주소를 입력하세요.");
            email_input.focus()
            return false;
        }
        else{
            if(!email_check(email_2.value)){
                alert("이메일 형식이 맞지않습니다.");
                return false;
            }
        }

        //if(password.value != )
        if(password_2.value == ""){
            alert("비밀번호를 입력하세요.");
            password_input1.focus()
            return false;
        }

        if(password_2.value != password_confirm_2.value){
            alert("비밀번호가 같지 않습니다.");
            password_input2.focus()
            return false;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
				console.log("성공");
			}).catch((result) => {
				alert("이메일 중복입니다. 다른 이메일을 입력하세요.");
			});
        
    });