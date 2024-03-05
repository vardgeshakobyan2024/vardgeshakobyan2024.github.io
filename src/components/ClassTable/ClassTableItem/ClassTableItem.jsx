import './classTableItem.css';

const ClassTableItem = ({number, text}) => {
    return (
        <div className="item">
            <div className="number">
                {number}
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ClassTableItem;