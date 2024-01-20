import logo from './logo.svg';
import './App.css';

function App() {
  const [error, setError]= useState(true);
  const [celsius, setCelius]= useState(0);
  const [fahrenhiet, setFahrenhiet]= useState(32);
  function fath2cel(e){
    const fah=e.target.value
    let cel=(fah-32)*5/9;
    setFahrenhiet(fah)
    setCelius(fah===""?"":cel)
  }
  function cel2fah(e){
    const cel=e.target.value
     if(!isNaN(cel)|| cel==""){
      let fah=32+cel*9/5;
      setCelius(cel)
      setFahrenhiet(cel===""?"":fah)
      setError(false)
     }else {
      setError(true)
     }

  }
  return (
    <div className="col-4 border p-4 m-4 bg-info">
    <h2>C/F Converter</h2>
    {error && <div class="alert alert-danger"> Invalid input ...</div>}
    <CelComp val={celsius} handleChange={cel2fah}/>
    <FahComp  val={fahrenhiet} handleChange={fah2cel}/>
  </div>
  );
}

export default App;
