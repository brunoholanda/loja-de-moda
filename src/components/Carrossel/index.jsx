import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carrossel.module.scss';
import bag from './bag-1.png';
import vestido from './vestido-3.png';
import bag2 from './bag-2.png';
import Divisoria from 'components/Divisoria';

export default class Carrossel extends Component {

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
      
    };


    return (
      <div className={styles.carrossel}>
        <h1>JUST FOR YOU</h1>
        <Divisoria />
        <Slider {...settings}>
          <div className={styles.carrossel__card}>
            <img src={bag} alt="" />
            <p>Harris Tweed Three button</p>
            <p>Jacket</p>
            <p>$120</p>
          </div>
          <div className={styles.carrossel__card}>
            <img src={vestido} alt="" />
            <p>Harris Tweed Three button</p>
            <p>Jacket</p>
            <p>$120</p>
          </div>
          <div className={styles.carrossel__card}>
            <img src={bag2} alt="" />
            <p>Harris Tweed Three button</p>
            <p>Jacket</p>
            <p>$120</p>
          </div>
        </Slider>
      </div>
    );
  }
}
