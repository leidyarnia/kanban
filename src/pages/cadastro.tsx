import { ChangeEvent, MouseEvent, useState } from "react";
import { registerService } from "../services/register";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  Title,
  LoginForm,
  FormGroup,
  Label,
  Input,
  Button,
  SubTitle,
} from "../styles/styled-components";

type Values = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState<Values>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Values>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setErrors({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    if (values.fullName === "") {
      setErrors((prev) => ({
        ...prev,
        fullName: "Nome completo é obrigatório",
      }));
    }

    if (values.email === "") {
      setErrors((prev) => ({
        ...prev,
        email: "Email é obrigatório",
      }));
    }

    if (values.password === "") {
      setErrors((prev) => ({
        ...prev,
        password: "Senha é obrigatório",
      }));
    }

    if (values.confirmPassword === "") {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "A confirmação de senha é obrigatório",
      }));
    }

    if (values.password !== values.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "A senha e a confirmação de senha não correspondem",
      }));
    }

    if (
      values.fullName === "" ||
      values.email === "" ||
      values.password === "" ||
      values.confirmPassword === "" ||
      values.password !== values.confirmPassword
    ) {
      return;
    }

    try {
      const result = await registerService(values);
      console.log(result);
      navigate("/");
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
      <SubTitle> Cadastro</SubTitle>
      <LoginForm>
        <FormGroup>
          <Label htmlFor="fullName">Nome Completo</Label>
          <Input
            type="text"
            name="fullName"
            required
            onChange={handleChange}
          />
          <p>{errors.fullName}</p>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
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
            name="password"
            required
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirmar Senha</Label>
          <Input
            type="password"
            name="confirmPassword"
            required
            onChange={handleChange}
          />
          <p>{errors.confirmPassword}</p>
        </FormGroup>
        <FormGroup>
          <Button type="submit" onClick={handleRegister}>
            Cadastrar
          </Button>
        </FormGroup>
      </LoginForm>
    </LoginContainer>
  );
}
