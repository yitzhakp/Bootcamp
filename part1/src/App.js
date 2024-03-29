import './App.css';


const Mensaje = (props) =>{
  return(
    <h1 style={{color: props.color}}>{props.message}</h1>
  )
}

const Description = () =>{
  return(
    <p>Esta es la App</p>
  )
}

function App() {

  return (
    <div className='App'>
      <Mensaje color="red" message="Titulo 1"/>
      <Mensaje color="green" message="Titulo 2"/>
      <Mensaje color="blue" message="Titulo 3"/>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <Description></Description>
      </div>
    </div>
  );
}

export default App;
