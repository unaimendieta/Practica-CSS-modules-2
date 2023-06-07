import style from "./cards.module.css";

import Card from "./card/Card";

import { CARDS } from "../../constants/cards";

const Cards = () => {
    
    
    return (
        <>
        <div className={style.cards}> 
            {
                CARDS.map(card=>(
                    <Card 
                        key={card.id}
                        src={card.src} 
                        title={card.title} 
                        desc={card.desc} 
                        color={card.color} />
                ))
            }
        </div>
        </>
        );
}
export default Cards;
