import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home" >
            <div className="home__container">
                <img className="home__image" src="https://images.indianexpress.com/2020/08/the-boys-season-2-trailer-759.jpg" alt="" />
                 <div className="home__row">
                     <Product id="12321340" title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                     <Product id="12321341" title="Xbox Series X" price={499.99} image="https://images-na.ssl-images-amazon.com/images/I/61Zv%2BoNJlTL._SL1200_.jpg" rating={5} />
                 </div>

                 <div className="home__row">
                    <Product id="12321342" title="PowerColor Red Devil AMD Radeon RX 5700 XT 8GB" price={439.99} image="https://images-na.ssl-images-amazon.com/images/I/71i2Kqc1t2L._AC_SL1500_.jpg" rating={5} />
                    <Product id="12321343" title="The lean startupASUS F512DA-EB51 VivoBook 15 Slate Gray " price={571.00} image="https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg" rating={5} />
                    <Product id="12321344" title="Google Pixel 4aJust Black " price={388.99} image="https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SL1500_.jpg" rating={4} />
                 </div>

                 <div className="home__row">
                     <Product id="12321345" title="Sony X800H 85 Inch TV: 4K Ultra HD Smart LED TV - 2020 Model " price={1999.99} image="https://images-na.ssl-images-amazon.com/images/I/71tjBJd65uL._AC_SL1080_.jpg" rating={4} />
                 </div>

            </div>
        </div>
    )
}

export default Home;
