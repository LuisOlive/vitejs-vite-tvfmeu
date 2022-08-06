import { useState } from 'react';
import './App.css';
import Form from './main/Form';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
