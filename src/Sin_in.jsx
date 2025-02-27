import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Log_in.css'
export default function Sin_in() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    async function SinIp() {
        if (!email.includes("@")) {
            setError("البريد الإلكتروني غير صالح");
            return;
        }
        if (password.length < 8 || !password.match(/[0-9]/)) {
            setError("كلمة المرور يجب أن تكون على الأقل 8 أحرف وتحتوي على الأرقام");
            return;
        }
        if (!name || !email || !password) {
            setError("يرجى إدخال جميع المعلومات المطلوبة");
            return;
        }

        try {
            const item = { name, email, password };
            const response = await fetch("https://dummyjson.com/users/", {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem("user-info", JSON.stringify(result));
                setSuccess("تم تسجيل الدخول بنجاح");
                navigate("/App");
            } else {
                setError("حدث خطأ أثناء تسجيل الدخول");
            }
        } catch (error) {
            setError("حدث خطأ أثناء تسجيل الدخول");
            console.error(error);
        }
    }

    return (
        <center><div className='form'>
            <h1> Sin in </h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='From_control' placeholder='name' />
            <br />
            <br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='From_control' placeholder='Passowrd' />
            <br />
            <br />
            <input type="email" name="email" id="" value={email} onChange={(e) => setEmail(e.target.value)} className='From_control' placeholder='email' />
            <br />
            <br />
            <button onClick={SinIp} className='btn btn-primary'>Submit</button>
            {error && <p style={{ color: 'rgba(255, 255, 255, 0.651)' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
        </center>
    );
}
