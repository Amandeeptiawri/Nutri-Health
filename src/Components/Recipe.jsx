import React from 'react'
import './Recipe.css';
import  { Link } from 'react-router-dom';
const Recipe = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='container'>

             {/* heading */}
                   <div className='item-heading mx-auto col-lg-5 text-center pt-3 mt-5'>
                        <h1 className='fs-1 '>Popular Recipes</h1>
                        <p className=' text-wrap'>Lorem ipsum dolor sit amet, consetetur sadipiscing elitr sed diam nonumy eimod tempor invidunt Lorem ipsum dolor sit  .</p>
                    </div>
                <div className='row'>

                <div class="container my-5">
    <div class="row">
    
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card hover-card">
          <img src="https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/recipes-img-02-1.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text text-uppercase">Diet • 25 minutes • Easy</p>
            <h5 class="card-title">5 Ways Restricting Calories Can Be Harmful</h5>
            <div className='learn-more'>
                       <Link className="learn-btn" to='/about'>Learn More</Link>
                       </div>          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card hover-card">
          <img src="https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/recipes-img-03.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text text-uppercase">Diet • 8 minutes • Easy</p>
            <h5 class="card-title">Is Dieting Slowing Down Your Metabolism?</h5>
            <div className='learn-more'>
                       <Link className="learn-btn" to='/about'>Learn More</Link>
                       </div>          </div>
        </div>
      </div>

  
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card hover-card">
          <img src="https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/recipes-img-04.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text text-uppercase">Diet • 10 minutes • Easy</p>
            <h5 class="card-title">Vegan & Gluten Free Chocolate Chip Cookie</h5>
            <div className='learn-more'>
                       <Link className="learn-btn" to='/about'>Learn More</Link>
                       </div>          </div>
        </div>
      </div>

   
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card hover-card">
          <img src="https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/recipes-img-05.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text text-uppercase">Diet • 10 minutes • Easy</p>
            <h5 class="card-title">Fitness-Friendly Snacks When Working Out</h5>
            <div className='learn-more'>
                       <Link className="learn-btn" to='/about'>Learn More</Link>
                       </div>
          </div>
        </div>
      </div>
    </div>
  </div>

                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Recipe