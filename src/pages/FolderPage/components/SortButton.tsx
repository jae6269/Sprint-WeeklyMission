import styled from 'styled-components';
import { ClickFunctionType } from '../../../types/functionsType';
import { SortButtonProps } from '../../../types/interfaces/props';
/*
  즐겨찾기 버튼의 styled component 입니다.
*/

function SortButton({
  id,
  text,
  handleClick,
  isClicked = false,
}: SortButtonProps) {
  const handleSendSelectedFolder: ClickFunctionType = (e) => {
    const newFolder = {
      id: id,
      name: text,
    };
    handleClick(newFolder);
  };

  return (
    <StyledButton onClick={handleSendSelectedFolder} isclicked={isclickedProp}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $isClicked: boolean }>`
  display: flex;
  padding: 0.5rem 0.75rem;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: ${(props) =>
    props.isclicked
      ? 'var(--Linkbrary-primary-color)'
      : 'var(--Linkbrary-white)'}; // 배경색 변경
  color: ${(props) => (props.isclicked ? 'white' : 'black')}; // 글자색 변경
  cursor: pointer;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export default SortButton;
