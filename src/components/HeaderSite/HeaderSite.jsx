import './headerSite.css';
import hasmikIntro from '../../images/hasmik1.png';
import facebookIcon from '../../images/faceicone.png';

const HeaderSite = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="imgBlock">
                        <div className="headerTop">
                            <h1>Տուրիզմի և Ամադեուսի օնլայն դասընթացներ</h1>

                            <p>դասընթացներ սկսնակների <br /> համար</p>
                        </div>

                        <img src={hasmikIntro} alt="page author and travel seo"/>

                        <a href="https://www.facebook.com/jasminetravel.am" target="_blank">
                            <img src={facebookIcon} />
                            jasminetravel
                        </a>

                        <div className="headerBottom">
                            <p>առաջին անգամ <br /> Հայաստանում</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderSite;