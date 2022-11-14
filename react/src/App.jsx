import Counter from './components/Counter';
import ProductsList from './components/Products/ProductsList';

// componente funcional

function App() {
  
  // devuelve la forma en que se dibuja el componente
  return (
    <div className="App">
      <Counter max={5} min={-5} />
      <ProductsList />
    </div>
  )
}

export default App
