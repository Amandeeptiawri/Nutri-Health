

import "./BmiCalculator.css"
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterQutes from "./FooterQutes";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [activity, setActivity] = useState("1.375");
  const [bmi, setBMI] = useState(null);
  const [bmr, setBMR] = useState(null);
  const [bmrWithActivity, setBMRWithActivity] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    const bmrValue =
      gender === "Male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    setBMR(bmrValue.toFixed(2));

    const bmrWithActivityValue = (bmrValue * activity).toFixed(2);
    setBMRWithActivity(bmrWithActivityValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setStatus("Healthy");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };
  return (
    <div>


<div className='container-f pt-5  pb-5 mt-5 '>

<div className='bmi-head pt-5 d-none d-lg-block d-md-block  '>
<div className='text-center mx-auto w-50  '>
<h1 className='fw-normal' >BMI Calculator</h1>
<p className='px-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt adhuc persius.</p>

</div>


</div>

</div>



  {/* BMI Section */}



<div className='container-fluid m-0'>
<div className="container">



  
      <div className="row">
        {/* BMI Input Section */}
        <div className="col-md-6">
          <h2>Calculate Your BMI</h2>
          <p>BMI calculator generates the number of calories your body burns per day at rest. Your BMR with activity factor is the number of calories your body burns per day based on the activity factor you selected.</p>

          <form onSubmit={calculateBMI} className="py-3">
            <div className="form-group pb-2">
              <label className="pb-2">Height (cm)*</label>
              <input 
                type="number"
                className="form-control w-75 border-dark"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div className="form-group pb-2" >
              <label  className="pb-2">Weight (kg)*</label>
              <input
                type="number"
                className="form-control w-75 border-dark"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>

            <div className="form-group pb-2">
              <label className="pb-2">Age*</label>
              <input 
                type="number"
                className="form-control w-75 border-dark"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className="form-group pb-2">
              <label className="pb-2">Gender*</label>
              <select
                className="form-control w-75 border-dark"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="form-group pb-2">
              <label className="pb-2">Select an activity factor*</label>
              <select
                className="form-control w-75 border-dark"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              >
                <option value="1.2">Sedentary (little or no exercise)</option>
                <option value="1.375">Light exercise (1-3 days/week)</option>
                <option value="1.55">Moderate exercise (3-5 days/week)</option>
                <option value="1.725">Heavy exercise (6-7 days/week)</option>
                <option value="1.9">Very heavy exercise (twice/day)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-dark btn-block mt-4 px-4 py-2 ">Calculate</button>
          </form>
        </div>

        {/* BMI Chart Section */}
        <div className="col-md-6">
          <h2>BMI Calculator Chart</h2>
          <table className="table table-bordered mt-4 border-dark">
            <thead>
              <tr>
                <th>BMI</th>
                <th>Weight Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Below 18.5</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5 – 24.9</td>
                <td>Healthy</td>
              </tr>
              <tr>
                <td>25.0 – 29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30.0 and Above</td>
                <td>Obese</td>
              </tr>
            </tbody>
          </table>

          {/* Display Results */}
          {bmi && (
            <div className="alert alert-success mt-4">
              <h5>You are {status}!</h5>
              <p>Your BMI is: {bmi}</p>
              <p>Your BMR is: {bmr} kcal/day</p>
              <p>Your BMR with Activity Factor: {bmrWithActivity} kcal/day</p>
            </div>
          )}
        </div>
      </div>
    </div>


</div>


<FooterQutes></FooterQutes>


</div>



    
    
    
    
   
  )
}

export default BmiCalculator