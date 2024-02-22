import linkIcon from '../../../assets/linkIcon.svg';
import Button from '../../../components/Button';
import '../../../styles/linkAddBar.css';
/*
  폴더페이지에서 Header 컴포넌트 아래의
  링크추가 영역 컴포넌트입니다.
*/
function LinkAddBar() {
  const placeholder = '링크를 추가해 보세요';
  const buttonProps = {
    width: '80px',
    text: '추가하기',
  };
  return (
    <div className="link-add">
      <form className="link-add__bar">
        <div>
          <img
            className="link-add__bar--img"
            src={linkIcon}
            alt="linkIcon"
          ></img>
          <input
            className="link-add__bar--input"
            placeholder={placeholder}
          ></input>
        </div>
        <Button props={buttonProps} />
      </form>
    </div>
  );
}
export default LinkAddBar;