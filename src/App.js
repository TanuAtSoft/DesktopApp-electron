import './App.css';
import{useState} from "react"

function App() {
  const [data,setData] = useState()
  const handleButtonClick=()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
            
   }
  return (
    <div className="App">
    {data && data.map((item,id)=>{
      return(<p key={id}>{item.title}</p>)
    })}
    <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default App;
