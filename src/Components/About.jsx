import React from 'react'
import "./About.css"
import FooterQutes from './FooterQutes'



const about = () => {
    return (

        <>
            {/*  Section 1 */}
            <div className=' container-fluid pt-5'>
                <div className="container">
                    <div> <img src="https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/about-img-1.jpg" alt="" className='img-fluid' /></div>
                <div className='text-center mx-auto mt-5 about-main text-wrap'>
                <h1 className='about-h1 mb-4'>I’m Hannah Wilson, a nutrition consultant and award winning author.</h1>

                <p className='black about-p1  mx-auto text-center' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                </div>



               



                {/*  Section 2 */}


            <div className="row pt-4">

                         {/*  Column 1 */}
                         <div className='col-12 col-lg-6'>
                         <h4 className='pb-1 black about-main-2-head'>How I work</h4>


                         <p className='pb-3  black ' >  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>

                         
                         <p className='pb-3 black  '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.  </p>

                       <h5 className='pb-1 about-main-3-head'>How we can work together</h5>
                       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>


                         </div>
         
             {/*  Column 2 */}

                        <div  className='col-12 col-lg-6'>  

                        <div className='pt-5 pb-2'  > <img src="https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/about-img-2.jpg" alt="image" className='img-fluid
                        ' /></div>
                        
                        <h5 className='pb-1 about-main-3-head'>How I stay energized and well</h5>

                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum</p>

                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum sum dixit.
                      </p>


                      <h6 className='dr'>Dr. Hannah Wilson </h6>
                      <p className='text-gray text-muted'>Nutritionist</p>

                        </div>
            
            </div>
       
           


            </div>  </div>




            
             {/*  Section 3 */}


             <FooterQutes></FooterQutes>






            
            
            
            </>

    )
}

export default about