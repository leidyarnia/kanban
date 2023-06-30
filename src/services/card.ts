import axios from 'axios';

export const getCards = async () => {
    const TOKEN = localStorage.getItem('TOKEN') || '';


  try {
    const response = await axios.get('https://arnia-kanban.vercel.app/api/card', {
      headers: {
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        'Content-Type': 'application/json',
        Authorization: TOKEN
      }
    });

    if (response.status === 200) {
      return response.data; // Retorna os cartões obtidos do servidor
    } else {
      throw new Error('Erro ao obter os cartões');
    }
  } catch (error) {
    console.error('Erro ao obter os cartões', error);
    throw error;
  }
};

export const ApiCard = async (title:string, content:string) => {
  const TOKEN = localStorage.getItem('TOKEN') || '';
 

  try {
    const response = await axios.post('https://arnia-kanban.vercel.app/api/card', {
      title,
      content
    },
     {
      headers: {
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        'Content-Type': 'application/json',
        Authorization:TOKEN
      }
    });

    if (response.status === 200) {
      return { title, content };
    } else {
      throw new Error('Error');
    }
  } catch (error) {
    throw new Error('Error');
  }
};

export const updateCard = async (cardId: string, updatedData: { title?: string, content?: string }) => {
    const TOKEN = localStorage.getItem('TOKEN') || '';
 

  try {
    const response = await axios.put(`https://arnia-kanban.vercel.app/api/card/${cardId}`, updatedData, {
      headers: {
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        'Content-Type': 'application/json',
        Authorization: TOKEN
      }
    });

    if (response.status === 200) {
      console.log('Cartão atualizado com sucesso');
    } else {
      throw new Error('Erro ao atualizar o cartão');
    }
  } catch (error) {
    console.error('Erro ao atualizar o cartão', error);
    throw error;
  }
};

export const deleteCard = async (cardId:string) => {
  try {
    const response = await axios.delete(`https://arnia-kanban.vercel.app/api/card/${cardId}`);

    if (response.status === 200) {
      console.log('Cartão excluído com sucesso');
    } else {
      console.error('Erro ao excluir o cartão');
    }
  } catch (error) {
    console.error('Erro ao excluir o cartão', error);
  }
};