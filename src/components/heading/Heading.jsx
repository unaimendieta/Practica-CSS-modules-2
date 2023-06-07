import style from "./heading.module.css";

const Heading = () => {
	return (
	<>
	    <div className={style.heading}>
            <h3  className={style.titleH3}>Reliable, efficient delivery</h3>
            <h2  className={style.titleH2}>Powered by Technology</h2>
            <div className={style.captionContainer}>
                <p  className={style.caption}>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>

            </div>
	    </div>
	</>
	);
};

export default Heading;
