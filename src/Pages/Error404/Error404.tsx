import "./style.scss";
import { errorImage } from './Assets/Images/index'
import { Typography } from "../../Components";

export function Error404() {
  return (
    <div className="errorContainer">
    <img className='imgError' src={errorImage}></img>
    <div className="textErrorDiv">
    <Typography color="#2E3092" variant="TypographySubtitle" width="fit-content">OPS, Ocorreu um erro!</Typography>
    <Typography variant="TypographySubtitle" id="textFontAdjust" width="450px">Parece que houve um erro por aqui, tente acessar outra página</Typography>
    </div>
    </div>
  );
}
