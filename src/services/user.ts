import axios from 'axios';

type LoginParams = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  name:string;
};

export const loginService = async ({ email, password }: LoginParams): Promise<LoginResponse> => {
  try {
    const response = await axios.post('https://arnia-kanban.vercel.app/api/user/login', {
      email,
      password,
    }, {
      headers: {
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('TOKEN') ||''
      },
    });

    if (response.status === 200) {
        
           return response.data;
    }

    throw new Error('Ocorreu um erro na requisição!');
  } catch (error) {
    throw new Error('Ocorreu um erro, tente novamente mais tarde!');
  }
};