import {DivStyle} from './style'
import {ImgStyle} from './style'

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <DivStyle onClick={reproduzVideo}>
      {/* className="box-pagina-principal"  */}
      <ImgStyle src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </DivStyle>
  );
}

export default CardVideo;
