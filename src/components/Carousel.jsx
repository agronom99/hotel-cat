import Carousel from 'react-bootstrap/Carousel';
import Kot from '../assets/img/Rectangle20.jpg'
import Kot2 from '../assets/img/Rectangle20(2).jpg'
import Kot3 from '../assets/img/Rectangle20(3).jpg'

import Fich from '../assets/img/fish.svg'
import Ellipse from "../assets/img/Ellipse12.svg";
import RawInv from "../assets/img/paw_inv.svg";


function UncontrolledExample() {
  return (
    
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block  foto"
          src={Fich}
          alt="First slide"
        />
         <img
          className="d-block  foto1"
          src={Kot}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carousel-h3'>Номера</h3>
          <div className="ul">
          <ul className="ul-li">
            <li>
              <h4> Економ плюс</h4>
            </li>
            <li>
              <ul style={{ listStyleImage: `url(${Ellipse})` }}>
                <li>Площа - 0,90 м2</li>
                <li>Розміри (ШхГхВ) — 90х100х180 см</li>
                <li>Ціна на день: 20$</li>
              </ul>
            </li>
            <li>
              <button>
                <p>Бронювання</p>
                <img src={RawInv} alt="pawInv" />
              </button>
            </li>
          </ul>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  foto"
          src={Fich}
          alt="First slide"
        />
         <img
          className="d-block  foto1"
          src={Kot2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carousel-h3'>Номера</h3>
          <div className="ul">
          <ul className="ul-li">
            <li>
              <h4> Комфорт</h4>
            </li>
            <li>
              <ul style={{ listStyleImage: `url(${Ellipse})` }}>
                <li>Площа - 1,13 м2</li>
                <li>Розміри (ШхГхВ) — 100х125х180 см</li>
                <li>Ціна на день: 25$</li>
              </ul>
            </li>
            <li>
              <button>
                <p>Бронювання</p>
                <img src={RawInv} alt="pawInv" />
              </button>
            </li>
          </ul>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  foto"
          src={Fich}
          alt="First slide"
        />
         <img
          className="d-block  foto1"
          src={Kot3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carousel-h3'>Номера</h3>
          <div className="ul">
          <ul className="ul-li">
            <li>
              <h4> С`ют</h4>
            </li>
            <li>
              <ul style={{ listStyleImage: `url(${Ellipse})` }}>
                <li>Площа - 1,56 м2</li>
                <li>Розміри (ШхГхВ) — 125х125х180 см</li>
                <li>Ціна на день: 35$</li>
              </ul>
            </li>
            <li>
              <button>
                <p>Бронювання</p>
                <img src={RawInv} alt="pawInv" />
              </button>
            </li>
          </ul>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    
    
     
    </Carousel>
  );
}

export default UncontrolledExample;