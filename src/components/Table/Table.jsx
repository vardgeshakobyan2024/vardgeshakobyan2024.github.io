import TableItem from './TableItem/TableItem';
import './table.css';

const Table = () => {
    const tableItem = [
        "Տուրիզմի ոլորտում 10 և ավելի տարիների փորձ",
        "Շուրջ 100 ավարտած ուսանողներ",
        "Ժասմին Թրավել ՍՊԸ-ի հիմնադիր",
        "Դասընթացը անցկացնում է Հասմիկ Պետրոսյանը՝ Դասախոս Հայ-Հունական Պետական Քոլեջում"
    ];

    return (
        <div className="tableSite">
            {
                tableItem.map((item, idx) => {
                    return (
                        <TableItem 
                            key={idx}
                            text={item}
                        />
                    )
                })
            } 
        </div>
    )
}

export default Table;