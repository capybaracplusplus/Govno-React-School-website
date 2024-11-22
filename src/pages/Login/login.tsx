import React,{useState} from 'react';


function Login() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (formData.password !== formData.confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/auth/sing-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Ошибка:', errorData.error);
                alert(`Ошибка: ${errorData.error}`);
                return;
            }

            const data = await response.json();
            console.log('Успех:', data);
            alert('Регистрация успешна!');
        } catch (error) {
            console.error('Ошибка сети:', error);
            alert('Ошибка сети. Проверьте подключение к серверу.');
        }
    };

        return (
            <main className="Main">
                <h1>Регистрация</h1>
                <input
                    name="username"
                    placeholder="Введите username"
                    onChange={handleChange}
                    value={formData.username}
                />
                <br/>
                <input
                    name="email"
                    placeholder="Введите email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <br/>
                <input
                    type="password"
                    name="password"
                    placeholder="Введите password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <br/>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Повторите password"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                />
                <br/>
                <button onClick={handleSubmit}>Зарегистрироваться</button>
            </main>
        )
}

export default Login;