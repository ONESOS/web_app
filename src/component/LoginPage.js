import React, {useState} from 'react'

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="loginregister">
            <form>
                <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
                <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
                <div><button type="submit" onSubmit={onSubmit} class="loginregister__button">로그인</button></div>
                <div>계정 찾기</div>
                <div>비밀번호 찾기</div>
                <div>회원가입</div>
            </form>
        </div>
    );
}

export default LoginPage;