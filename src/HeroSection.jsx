import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section pt-5 ">
        <div className='container-fluid'>

            <div className="container">
                <div className="row align-items-center ">
                    {/* Left text area */}
                    <div className="col-lg-6 col-12">

                    <div className='hero-content  '>
                        <h1>
                            "Healthy Cooking Tips" &<br /> "The Right Nutrition"
                        </h1>
                        <p className="author-text">by Hannah Wilson</p>
                        <p className="hero-description">
                            Lorem ipsum dolor sit amet, omnis sonet ea mei, mei seam sit in.
                            Dolorem ancillae accumsan his ut, vix constituam vel complectitur cu,
                            mundi consequat.
                        </p>
                        <div className="hero-book-img  ">
                            <img src="https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/h1-rev-img-2.png" className='img-fluid '  alt="Book 1" />
                            <img src="https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/h1-rev-img-1.png" className='img-fluid ' alt="Book 2" />
                        </div>
                        </div>

                    </div>

                    {/* Right side image */}
                    <div className="col-lg-6 col-12 hero-right-img position-relative">
                      <img src='https://templatekit.jegtheme.com/nutritist/wp-content/uploads/sites/160/2021/09/ketogenic-diet-buddha-bowl-dish-with-meatloaf-chic-DR67PNF.png' className='img-fluid' alt=''></img>

                      <img src='https://templatekit.jegtheme.com/nutritist/wp-content/uploads/sites/160/2021/09/spinach-on-the-isolated-white-WPM8S7F.png ' className='img-fluid leaf  d-none d-lg-block' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;
