import '../styles/folderOptionBar.css';
import shareIcon from '../../../assets/shareIcon.svg';
import renameIcon from '../../../assets/renameIcon.svg';
import deleteIcon from '../../../assets/deleteIcon.svg';
import OptionButton from './OptionButton';
/*
  폴더의 이름과 공유, 이름변경, 삭제 버튼이 표시되는
  FolderOptionBar 컴포넌트.

  text는 현재 폴더의 이름,
  selectedFolderId는 선택된 폴더의 id값입니다.
*/
function FolderOptionBar({ text, selectedFolderId }) {
  const buttonProps = [
    {
      id: 1,
      svg: shareIcon,
      text: '공유',
    },
    {
      id: 2,
      svg: renameIcon,
      text: '이름 변경',
    },
    {
      id: 3,
      svg: deleteIcon,
      text: '삭제',
    },
  ];

  return (
    <div className="folder__option-bar">
      <span className="folder__option-bar--text">{text}</span>
      <div className="folder__option-bar--buttons">
        {
          //id 가 1인 '전체'폴더가 선택되면 옵션 버튼이 안보이도록 설정.
          selectedFolderId !== 1 &&
            buttonProps.map((prop) => (
              <OptionButton
                key={prop.id}
                svg={prop.svg}
                text={prop.text}
              ></OptionButton>
            ))
        }
      </div>
    </div>
  );
}
export default FolderOptionBar;