import CardItem from '../CardItem/CardItem';
import './card.css';

const Card = () => {
    const cardInform = [
        {
            id: 1,
            cardNumber: "1660 0191 2616 0100",
            name: "Hasmik Petrosyan",
            images: "data:image/png;base64,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"
        },
        {
            id: 2,
            cardNumber: "1660 0191 2616 0100",
            name: "Hasmik Petrosyan",
            images: "https://play-lh.googleusercontent.com/lxDemct3KdfMZvQTfYOK0ztyBe1pokhM6QRESRHtT0tTgAQTkcyYq97GSXHIkubIgrdr"
        },
        {
            id: 3,
            cardNumber: "1660 0191 2616 0100",
            name: "Hasmik Petrosyan",
            images: "https://play-lh.googleusercontent.com/QsT_a6TbGXgbeU4RZBgmlh-sPb8qCb7fZItMQgsywX7HqZyw2kIuE-Ai7XdceXTiwJA"
        }
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
                </div>
            </div>
        </div>
    )
}

export default Card;