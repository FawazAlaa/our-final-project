import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Log_in.css'
export default function Log_in() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState("");
  const navigate = useNavigate();

  async function Login() {

    if (email === "" || password === "") {
      setError("يرجى ملء جميع الحقول");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("البريد الإلكتروني غير صالح");
      return;
    }

    if (password.length < 8 || !password.match(/[0-9]/)) {
      setError("كلمة المرور يجب أن تكون على الأقل 8 أحرف وتحتوي على الأرقام");
      return;

    }
    let item = { email, password };
    let res = await fetch("https://dummyjson.com/users/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)

    });
    res = await res.json();
    localStorage.setItem("user-info", JSON.stringify(res.users[0]))
    navigate("/")
  }

  return (
    <center>
      <div className='form' >
        <h1>Log_in</h1>
        <br />
        <input type="email" name='email' id=' email ' onChange={(e) => {
          setEmail(e.target.value)
        }} placeholder='Email' className='from_control' />
        <br />
        <br />
        <input type="password" onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder='Password' className='from_control' />

        <br />
        <br />

        <button onClick={Login} className='btn btn-primary'>Log_in</button>
        <br />
        {error &&
          <p style={{ color: ' rgba(255, 255, 255, 0.651)' }}> {error} </p>}
        {isLogin && <p style={{ color: 'green' }}> {isLogin} </p>}
      </div>

    </center>
  )
}
