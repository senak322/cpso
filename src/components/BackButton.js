import { BiArrowBack } from "react-icons/bi"; 
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button className="home__back" type="button" onClick={goBack}>
      <BiArrowBack />
      Назад
    </button>
  );
}

export default BackButton;
