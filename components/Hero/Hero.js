import React from 'react'
import styles from "./Hero.module.css";
import Slider from 'react-slick';

const images = [
  'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/804605/pexels-photo-804605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1858115/pexels-photo-1858115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>FIRST IN THE FAMILY</h1>
        <p className={styles.description}>They are the global citizens of tomorrow. Start your study abroad journey today.</p>
        <div className={styles.liveOn}>
            <span className={styles.head}>Live on</span>
            <img src="https://asset.brandfetch.io/idh5Jct7tV/idqU3ch8ih.png" alt="Disney+ Hotstar Logo"></img>
        </div>
        <div className={styles.buttons}>
            <button className={styles.btnBlue}>Get Your Shortlist for FREE</button>
            <button className={styles.btnWhite}>Talk to an Expert</button>
        </div>
        <p className={styles.footerText1}>95% of our students get an admit in less than 4 weeks</p>
        <p className={styles.footerText2}>Our students finished university to work at global offices  of:</p>
        <div className={styles.company}>
            <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg"  alt="google"></img>
            <img src="https://www.vectorlogo.zone/logos/barclays/barclays-ar21.svg" alt="barclays"></img>
            <img src="https://www.vectorlogo.zone/logos/ey/ey-icon.svg" alt="barclays"></img>
            <img src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" alt="barclays"></img>
            <img src="https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg" alt="barclays"></img>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <Slider {...settings}>
            {images.map((src, index) => (
                <div key={index} className={styles.carouselItem}>
                <img src={src} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero