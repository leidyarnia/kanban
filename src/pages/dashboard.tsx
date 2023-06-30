import { useState, useEffect } from "react";
import Header from "../components/header";
import { Row, Column as StyledColumn, NewCardForm } from "../styles/styled-components";
import Column from "../components/column";
import { Card } from "../Types/cards";
import { ApiCard, deleteCard, getCards, updateCard } from "../services/card";
import deleteIcon from "../assets/save/delete.svg";
import editIcon from "../assets/save/edit.svg";
import leftArrowIcon from "../assets/save/left-arrow.svg";
import rightArrowIcon from "../assets/save/right-arrow.svg";
import plusIcon from "../assets/save/plus.svg"

export default function Kanban() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [next, setNext] = useState(0);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const cardsData = await getCards();
      setCards(cardsData);
    } catch (error) {
      console.error(error);
    }
  };

  const addCard = async () => {
    try {
      const data = await ApiCard(title, content);
      const newCard: Card = { _id: next.toString(), title: data.title, content: data.content, column: 'TODO' };
      setCards((prevCards) => [...prevCards, newCard]);
      setNext((prevId) => prevId + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addCard();
    setTitle('');
    setContent('');
  };

  const moveCard = (cardId: string, direction: string) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card._id === cardId) {
          switch (direction) {
            case 'left':
              return { ...card, column: getPreviousColumn(card.column) };
            case 'right':
              return { ...card, column: getNextColumn(card.column) };
            default:
              return card;
          }
        }
        return card;
      })
    );
  };

  const getPreviousColumn = (currentColumn: string):string => {
    switch (currentColumn) {
      case 'TODO':
        return 'NOVO';
      case 'DOING':
        return 'TODO';
      case 'DONE':
        return 'DOING';
      default:
        return currentColumn;
    }
  }
  
  const getNextColumn = (currentColumn: string): string => {
    switch (currentColumn) {
      case 'TODO':
        return 'DOING';
      case 'DOING':
        return 'DONE';
      case 'DONE':
        return ''; 
      default:
        return currentColumn;
    }
  };

  const handleUpdateCard = async (cardId: string, updatedCard: Card) => {
    try {
      await updateCard(cardId, updatedCard);
      setCards((prevCards) =>
        prevCards.map((card) => {
          if (card._id === cardId) {
            return { ...card, ...updatedCard };
          }
          return card;
        })
      );
      console.log("cartão atualizado");
    } catch (error) {
      console.error('Erro ao atualizar o cartão:', error);
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    const confirmDelete = window.confirm('ESSE CARTÃO SERÁ EXCLUÍDO! VOCÊ QUER MESMO FAZER ISSO?');
    if (confirmDelete) {
      try {
        await deleteCard(cardId);
        setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
        console.log("cartão deletado");
        alert(`Cartão ${cardId} excluído com sucesso`);
      } catch (error) {
        console.error('Erro ao deletar o cartão:', error);
      }
    }
  };

  const renderCards = (column: string) =>
  cards
    .filter((card) => card.column === column)
    .map((card) => (
          <NewCardForm>
            <div className='card' key={card._id}>
              <h2>{card.title}</h2>
              <p>{card.content}</p>
              <div>
                {column !== '' && (
                  <>
                  {column !== 'TODO'&&(<button className="left-button" onClick={() => moveCard(card._id, 'left')}>
                      <img src={leftArrowIcon} alt="Left Arrow" />
                    </button>
                    )}
                    <button className="delete-button" onClick={() => handleDeleteCard(card._id)}>
                      <img src={deleteIcon} alt="Delete" />
                    </button>
                  </>
                )}
                {column !== 'DONE' && (
                  <button className="right-button" onClick={() => moveCard(card._id, 'right')}>
                    <img src={rightArrowIcon} alt="Right Arrow" />
                  </button>
                )}
                <button className="edit-button" onClick={() => handleUpdateCard(card._id, { _id: card._id, column: card.column, title: "New Title", content: "New Content" })}>
                  <img src={editIcon} alt="Edit" />
                </button>
              </div>
            </div>
         </NewCardForm>
     
      
    ));

  return (
    <div>
      <Header />
      <Row>
        <StyledColumn>
          <Column title="NOVO">
            <NewCardForm onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Conteúdo"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
             <button type="submit">
                <img src={plusIcon} alt="Plus" /> 
             </button>
            </NewCardForm>
          </Column>
        </StyledColumn>
        <StyledColumn>
          
          <Column title="TO DO">{renderCards('TODO')}</Column>
        </StyledColumn>
        <StyledColumn>
          <Column title="DOING">{renderCards('DOING')}</Column>
        </StyledColumn>
        <StyledColumn>
          <Column title="DONE">{renderCards('DONE')}</Column>
        </StyledColumn>
      </Row>
    </div>
  );
}