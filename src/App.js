import { useEffect,useState } from 'react';
import './App.css';
import { Homepage } from './pages/Homepage';
import axios from "axios";

function App() {
  const [background, setBackground] = useState('');
  useEffect(() => {
    const imageSource = axios.get("https://picsum.photos/200/300");
    console.log(imageSource);
    setBackground(imageSource);
  },[])
  return (
    <div className="App  ">
   
   
    <Homepage/>
    </div>
  );
}

export default App;
