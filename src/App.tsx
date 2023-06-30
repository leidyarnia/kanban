
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Register from './pages/cadastro';
import Dashboard from './pages/dashboard'; 

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route element={<LoginPage />} path="/" />
        <Route element={<Register />} path="/cadastro" />
        <Route element={<Dashboard />} path="/dashboard" /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;


