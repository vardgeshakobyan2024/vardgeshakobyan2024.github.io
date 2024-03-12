import CardItem from '../CardItem/CardItem';
import './card.css';
import Evoca from '../../images/evoca.png';
import Acba from '../../images/acba.jpg';
import Idram from '../../images/idram.png';

const Card = () => {
    const cardInform = [
        {
            id: 1,
            cardNumber: "1660 0191 2616 0100",
            name: "Hasmik Petrosyan",
            images: Evoca
        },
        {
            id: 2,
            cardNumber: "1660 0191 2616 0100",
            name: "Hasmik Petrosyan",
            images: Acba
        },
        {
            id: 3,
            cardNumber: "1660 0191 2616 0100",
            name: "Hasmik Petrosyan",
            images: Idram
        }
    ]

    const tableInfo = [
        "Գումարը փոխանցելուն պես կապնվեք ինձ հետ մեր facebook - ով` jasminetravel",
        "Դասերի մեկնարկը Փետրվարի 2-ից",
        "Դասերը անցնելու են telegram-ի փակ ալիքում:",
        "Կապը whats app-ով"
    ]
    return (
        <div className="cardParent">
            <div className="container">
                <div className="card">
                    <h6 className='cardHeader'>ՔԱՐՏԻՑ ՔԱՐՏ ՓՈԽԱՆՑՈՒՄ <br /> ՀՀ ԲԱՆԿԵՐԻ ՄԻՋԵՎ</h6>

                    {
                        cardInform.map((el) => {
                            return (
                                <CardItem 
                                    key={el.id}
                                    images={el.images}
                                    cardNumber={el.cardNumber}
                                    name={el.name}
                                />
                            )
                        })
                    }

                    <div className="table" id="table">
                        {
                            tableInfo.map((el, idx) => {
                                return (
                                    <div className="tableItem" key={idx}>
                                        <p>{el}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;