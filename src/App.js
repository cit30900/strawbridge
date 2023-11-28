import './App.css';
import React, {useState} from "react";
import Contact from './pages/Contact/contact';

function App( props ) {
  const [employees, setEmployees] = useState(props.employees);
  return (
    <div className="App">
      <Contact employees={ employees } />
    </div>
  );
}

export default App;
