import React from 'react'
import { Link } from 'react-router-dom'
import './Info.css';

const Info = () => {
  return (
    <>
        <div className='container-fluid p-0 m-0  mt-5 main-info '  style={{background:'#F0FAF0'}}>
         
                <div className='row '>
                    <div className='col-lg-6  '>
                        <img src='https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/h2-img-1-1.jpg' className='img-fluid' alt=''>

                        </img>
                    </div>

                    <div className='col-lg-6 pt-5 mt-5 '>

                    <div className='  mx-auto w-75 text'>

                        <h3 className=' '>It's time to kick start a new lifestyle. Start eating, feeling & living better today. Build good habits with us in no time.</h3>
                        <p className='pt-3'>It's time to kick start a new lifestyle. Start eating, feeling & living better today. Build good habits with us in no time.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et mea accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum bonum.</p>

                       
                       <div className='learn-more'>
                       <Link className="learn-btn hh2" to='/about'>Learn More</Link>
                       </div>
                   
                       
                          
                        
                    </div>

                      
                    </div>


                </div>

               
           
        </div>
    </>
  )
}

export default Info