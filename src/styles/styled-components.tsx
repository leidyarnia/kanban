import styled from "styled-components";
export const LoginContainer = styled.div`
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 567px;
  height:861px;
  background: #3A72F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
export const Title =styled.h1`
  justify-content: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #FFFFFF;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  width: 288px;
  height: 36px;
  left: 501px;
  top: 207px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;
`;
export const Input = styled.input`
  width: 438px;
  height: 59px;
  margin-bottom:20px;
  left: 501px;
  top: 252px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;
export const Button = styled.button`
  width: 209px;
  height: 59px;
  background: #0A2668;
  border-radius: 25px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;   
`;
export const SignupLink = styled.p`
  width: 209px;
  height: 36px;
  margin-bottom:50%;
  left: 616px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
`;
export const SubTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 18px;
  color: #ffffff;
  margin-top: 0; 
  margin-bottom:10px; 
`
export const Row =styled.div`
display: flex;
  gap: 1rem;
`
export const Column =styled.div`
background-color:#EAEAEA;
  width: max(25%, 120px);
  height: 80vh;
  margin-top:50px;
  border-radius: 7px;
`
export const H1 =styled.h1`
font-size:32px;
font-weight:700;
color:#3a72f8;
margin-left:9%;
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const NewCardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom:20px;
  height: 231px;
  width: 100%;
  max-width: 281px; 
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
  position:relative;
 

  input {
    width: 80%;
    padding: 10px;
    gap: 20px;
    margin-top:10px;
    border: 1px solid #ccc;
    border-radius: 10px;

  }

  textarea {
    width: 80%;
    height:40%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

  button {
    border:none;
    cursor: pointer;
    background:transparent;
  }
  .edit-button {
    position: absolute;
    top: 30px;
    right: 30px;
    transform: translate(50%, -50%);
  }
  .left-button{
    position:absolute;
    bottom:10px;
    left:10px
  }
  .right-button{
    position:absolute;
    bottom:10px;
    right:10px;
  }
  .delete-button{
    position:absolute;
    bottom:10px;
  }
`;

