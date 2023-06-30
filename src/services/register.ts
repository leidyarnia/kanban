import axios from 'axios';

type CadastroParams = {
  fullName: string;
  email: string;
  password: string;
};

type CadastroResponse = {
  message: string;
};

export const registerService = async ({ fullName, email, password }: CadastroParams): Promise<CadastroResponse> => {
  try {
    const response = await axios.post('https://arnia-kanban.vercel.app/api/user', {
      name:fullName,
      email,
      password,
    }, {
      headers: {
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      return { message: 'Cadastro realizado com sucesso' };
    }

    if (response.status === 400) {
      throw new Error('Dados inválidos');
    }

    throw new Error('Ocorreu um erro, tente novamente mais tarde!');
  } catch (error) {
    throw new Error('Ocorreu um erro, tente novamente mais tarde!');
  }
};