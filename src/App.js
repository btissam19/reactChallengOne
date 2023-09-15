
import './index.css';
import { useState } from 'react';
import Content from './Content';
import DispalyColor from './DispalyColor';

function App() {
const [hexValue, setHexValue] = useState('')
const [isDarkText, setIsDarkText] = useState(true)
const [newColor,setColor]=useState('')
  return (
    <div className="App">
      <Content newColor={newColor} isDarkText={isDarkText} hexValue={hexValue} setHexValue={setHexValue}/>
      <DispalyColor  newColor={newColor} setColor={setColor} isDarkText={isDarkText} setIsDarkText={setIsDarkText} setHexValue={setHexValue}/>
    </div>
  );
}

export default App;
