import { Routes, Route } from 'react-router-dom';
import SignUp from './routes/SignUp';
import LogIn from './routes/LogIn';
import Dashboard from './routes/Dashboad/Dashboard';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
