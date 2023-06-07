import style from "./card.module.css";
import Info from "./info/Info";
const Card = ({src, title, desc,color}) => {
	return (
	<>
        <div className={style.card}>
             <div className={`${style.header} ${style[color]}`}></div>
             <Info src={src} title={title} desc={desc}/>
        </div >
	</>
	);
};

export default Card;