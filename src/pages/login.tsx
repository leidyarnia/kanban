import { ChangeEvent, MouseEvent, useState } from "react";
import { loginService } from "../services/user";
import { useNavigate, Link } from "react-router-dom";
import {
  LoginContainer,
  Title,
  LoginForm,
  FormGroup,
  Label,
  Input,
  Button,
  SignupLink,
} from "../styles/styled-components";

type Values = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Values>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setErrors({
      email: "",
      password: "",
    });

    if (values.email === "") {
      setErrors((prev) => ({
        ...prev,
        email: "*email é obrigatório",
      }));
    }

    if (values.password === "") {
      setErrors((prev) => ({
        ...prev,
        password: "*digite sua senha!",
      }));
    }

    if (values.email === "" || values.password === "") {
      return;
    }

    try {
      
      const result = await loginService(values);
      localStorage.setItem('TOKEN', result.token)
      localStorage.setItem ('USER', result.name)
     navigate("/dashboard");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <LoginContainer>
      {error !== "" && <h3>{error}</h3>}
      <Title>Arnia Trello</Title>
      <LoginForm>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            required
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </FormGroup>
        <FormGroup>
          <Button type="submit" onClick={handleLogin}>
            Entrar
          </Button>
        </FormGroup>
      </LoginForm>
      <SignupLink>
        <Link to="/cadastro">Cadastre-se</Link>
      </SignupLink>
    </LoginContainer>
  );
}
