import './button.css';
import styled from 'styled-components';

const ButtonSimple = ({ children, style, onClick }) => {
  return (
    <Button style={style} onClick={onClick}>
      <span>{children}</span>
    </Button>
  );
};

export default ButtonSimple;

const Button = styled.button.attrs({
  className:
    'inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800',
})``;
