import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');
  const [user, setUser] = useState(true);
  const [eror, setEror] = useState('');

  const navigate = useNavigate();

  return (
    <div>
      <NavLink to="/">LogIn</NavLink>
      <div>SignUp</div>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        min="8"
        max="20"
        placeholder="email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        min="6"
        max="20"
        placeholder="password"
      />
      <input
        onChange={(e) => {
          setRepeatPassword(e.target.value);
        }}
        type="password"
        min="6"
        max="20"
        placeholder="Repeat password"
      />
      <button onClick={signUp}>SignUp</button>
      <p>{eror}</p>
    </div>
  );

  async function signUp() {
    if (password === repeatpassword) {
      await fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
        .then((response) => response.json())
        .then((users) => {
          if (users.length !== 0) {
            setEror('Такой пользователь уже существует');
          } else {
            fetch('http://localhost:3001/users', {
              method: 'POST',
              body: JSON.stringify({
                email: email,
                password: password,
                createdAt: formatDate(new Date())
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });
            navigate('/');
          }
        });
    } else {
      setEror('Пороли не совпадают');
    }
  }
}

function formatDate(date) {
  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}
