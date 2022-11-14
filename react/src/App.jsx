import Counter from './components/Counter';

// componente funcional

function App() {
  
  // devuelve la forma en que se dibuja el componente
  return (
    <div className="App">
      <Counter max={5} min={-5} />
      <Counter max={5} min={0}/>
      <Counter max={0} min={-5}/>
    </div>
  )
}

export default App
