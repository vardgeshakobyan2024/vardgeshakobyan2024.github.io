import './tableItem.css';

const TableItem = ({text}) => {
    return (
        <div className="item">
            <div className="itemText">
                <b>{text}</b>
            </div>
        </div>
    )
}

export default TableItem;