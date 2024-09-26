import React from 'react';
import './Items.css'

const Items = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='container '>

                    {/* heading */}
                    <div className='item-heading mx-auto col-lg-5 text-center pt-3 mt-5'>
                        <h1 className='fs-1 '>Popular Items</h1>
                        <p className=' text-wrap'>Lorem ipsum dolor sit amet, consetetur sadipiscing elitr sed diam nonumy eimod tempor invidunt Lorem ipsum dolor sit  .</p>
                    </div>

                    {/*cards  */}
                    <div className='row'>

                        <div className='col-lg-3 col-md-6 col-12  mt-5 mb-5'>

                            <div className='popular-items'>
                                <div className='item-card'>
                                    <img src='https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/shop-img-1.jpg' className='img-fluid' alt=''></img>


                                    <h2 className='text-nowrap fs-5 pt-4'>The Power Of Fruits</h2>
                                    <div>     <span class = "fa fa-star checked"></span>  
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star checked"></span>  
                                    <span class = "fa fa-star unchecked"></span> 
                                    </div>
                                    <h5>₹ 350</h5>
                                </div>
                            </div>
                        </div>

                        {/* card -2 */}

                        <div className='col-lg-3 col-md-6  col-12  mt-5'>

                            <div className='popular-items'>
                                <div className='item-card'>
                                    <img src='https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/shop-img-9.jpg' className='img-fluid'alt=''></img>
                                    <h2 className='text-nowrap fs-5 pt-4'>Metabolism Myths</h2>
                                      <div >     <span class = "fa fa-star checked"></span>  
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star unchecked"></span>
                                    <span class = "fa fa-star unchecked"></span>
                                    </div>
                                    <h5>₹ 750</h5>

                                </div>
                            </div>
                        </div>

                        {/* card-3 */}

                        <div className='col-lg-3 col-md-6 col-12  mt-5'>

                            <div className='popular-items'>
                                <div className='item-card'>
                                    <img src='https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/shop-img-2.jpg' className='img-fluid' alt=''></img>
                                    <h2 className='text-nowrap fs-5 pt-4'>Weight and Wellbeing</h2>
                                  
                                    <div >  
                                       <span class = "fa fa-star checked"></span>  
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star checked"></span>
                                    </div>
                                    <h5>₹ 499</h5>

                                </div>
                            </div>
                        </div>

                        {/* card-3 */}


                        <div className='col-lg-3  col-md-6 col-12 mt-5'>

                            <div className='popular-items'>
                                <div className='item-card'>
                                    <img src='https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/shop-img-7.jpg' className='img-fluid'alt=''></img>
                                    <h2 className='text-nowrap fs-5  pt-4'>Nutrition Bible</h2>
                                    <div className='text-warning' >
                                    <span class = "fa fa-star checked"></span>  
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star checked"></span>
                                    <span class = "fa fa-star checked"></span>
                                    </div>

                                    <h5>₹ 450</h5>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Items