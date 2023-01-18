import React, { useState } from 'react';



function CaloriesBurnedCalculator() {
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [met, setMet] = useState('');
  const [result, setResult] = useState('');

  function caloriesBurned(weight, duration, met) {
    return (weight * duration * met) / 200;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const calories = caloriesBurned(weight, duration, met);
    setResult(calories);
  }

  return (
      <div className="container mt-5">
      <h1 className="text-center">Calories Burned Calculator</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="form-group">
          <label htmlFor="weight">Weight (lbs):</label>
          <input type="text" className="form-control" id="weight" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (minutes):</label>
          <input type="text" className="form-control" id="duration" value={duration} onChange={e => setDuration(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="met">MET:</label>
          <input type="text" className="form-control" id="met" value={met} onChange={e => setMet(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Calculate</button>
      </form>
      {result && <p className="text-center mt-3">Calories burned: {result}</p>}
    </div>
  );
}

export default CaloriesBurnedCalculator;