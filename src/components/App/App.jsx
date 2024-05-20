import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from '../Form/Form';
import Results from '../Results/Results'


const App = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;
