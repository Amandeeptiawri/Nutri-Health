import React from 'react'
import './About.css'
import FooterQutes from './FooterQutes';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Dr. Jessica Olson',
      title: 'Nutritionist',
      image: 'https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/h3-team-img-1.jpg', // Replace with actual image URL
    },
    {
      name: 'Dr. Dorothy Wheeler',
      title: 'Nutritionist',
      image: 'https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/h3-team-img-2.jpg',
    },
    {
      name: 'Dr. Helen Turner',
      title: 'Dietitian',
      image: 'https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/team-img3.jpg',
    },
    {
      name: 'Dr. Tammy Silva',
      title: 'Nutritionist',
      image: 'https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/team-img4.jpg',
    },


    {
      name: 'Dr. Jane Mason',
      title: 'Dietitian',
      image: 'https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/team-img5.jpg', // Replace with actual image URL
    },
    {
      name: 'Dr. Anna Deaconr',
      title: 'Nutritionist',
      image: 'https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/team-img6.jpg',
    },
    {
      name: 'Dr. Paula Davis',
      title: 'Dietitian',
      image: 'https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/team-img7.jpg',
    },
    {
      name: 'Dr. Amanda Lin',
      title: 'Nutritionist',
      image: 'https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/team-img8.jpg',
    },
  ];
  return (
    <div>
    <div className=' container-fluid pt-5'>
                <div className="container">
                <div className='text-center mx-auto mt-5 about-main text-wrap'>
                <h1 className='mb-4 fw-normal'>Our Team</h1>

                <p className='black about-p1 w-75  mx-auto text-center' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt adhuc persius.</p>
                </div>



                {/*  Card */}



                <div className="container my-5">
                
                <div className="row ">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="col-lg-3 col-md-6 mb-5">
                      <div className="card text-center shadow-sm">
                        <img src={member.image} className="card-img-top" alt={member.name} />
                        <div className="card-body">
                          <h5 className="card-title">{member.name}</h5>
                          <p className="card-text text-muted">{member.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              
    
    </div>
    </div>
    <FooterQutes></FooterQutes>
    </div>
  )
}

export default OurTeam