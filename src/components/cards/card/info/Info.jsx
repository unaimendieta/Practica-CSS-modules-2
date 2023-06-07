import style from "./info.module.css";
const Info = ({src, title, desc}) => {
	return (
	<>
        <div className={style.infoContainer}>
            <div className={style.info}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.desc}>{desc}</p>
            </div>
            
            <div className={style.image}>
                <img src={src} alt="" />
            </div>      
        </div >
	</>
	);
};

export default Info;