import Counter from './components/Counter';
import ProductsList from './components/Products/ProductsList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'; 
import ProductDetailPage from './pages/ProductDetailPage';
import ProductNewPage from './pages/ProductNewPage';

// componente funcional

function App() {

  // devuelve la forma en que se dibuja el componente
  return (
    <div className="App">
      <Counter max={5} min={-5} />
      <BrowserRouter>
        <nav><Link to='/'>Home</Link> <Link to='/products'>Productos</Link> <Link to='/products/new'>Nuevo</Link></nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/new" element={<ProductNewPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
