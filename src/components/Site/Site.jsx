import ClassTable from '../ClassTable/ClassTable';
import HeaderSite from '../HeaderSite/HeaderSite';
import MainSite from '../MainSite/MainSite';
import './site.css';
import callIcon from '../../images/call.png';
import Package from '../Package/Package';
import ImagesSlider from '../ImagesSlider/ImagesSlider';
import Card from '../Card/Card';

const Site = () => {
    return (
        <div className="site">
            <HeaderSite />
            <MainSite />
            <ClassTable />
            {/* <Package /> */}
            <Card />
            <ImagesSlider />
            
            <a href="tel:+37499888021" className="call">
                <img src={callIcon} alt="call"/>
            </a>
        </div>
    )
}

export default Site;