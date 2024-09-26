import React from 'react';
import './Slider.css';  // Custom CSS for styling
import Carousel from 'react-bootstrap/Carousel';
import FooterQutes from './FooterQutes';


function Slider() {
    return (
        <>
            <div className="carousel-container mt-3 ">
                {/* Background image */}
                <div className="carousel-bg-image mt-4" style={{ backgroundImage: `url(https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/h1-img-3.jpg)` }} />

                {/* Carousel text content */}
                <Carousel className="carousel-content" interval={2000} indicators={false} controls={false} slide>
                    <Carousel.Item>
                        <div className="carousel-text">
                            <div className="quote-icon">❝</div>
                            <h3>Omnium labitur fierent at vel.</h3>
                            <p>Contentio fugit ubique et est, eos no regione probatus
                                Contentio fugit ubique et est, eos no regione probatus.</p>
                            <div className="author">George Upthorn</div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-text">
                            <div className="quote-icon">❝</div>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="author">John Doe</div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-text">
                            <div className="quote-icon">❝</div>
                            <h3>Praesent commodo cursus magna.</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl
                                raesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            <div className="author">Jane Doe</div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>


<FooterQutes></FooterQutes>

           
        </>
    );
}

export default Slider;