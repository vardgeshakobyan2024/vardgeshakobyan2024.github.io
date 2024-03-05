import './mainSite.css';
import hasmikImg from '../../images/hasmikintro.png';
import Table from '../Table/Table';

const MainSite = () => {
    return (
        <main>
            <div className="container">
                <div className="main">
                    <h2>Հասմիկ <br /> Պետրոսյան</h2>

                    <img src={hasmikImg}/>

                    <Table />
                </div>
            </div>
        </main>
    )
}

export default MainSite;