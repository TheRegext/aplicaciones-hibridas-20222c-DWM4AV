import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import * as ProductService from '../../services/products.services'


function ProductsList() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        // inicio
        ProductService.find()
            .then(data => {
                console.log(data)
                // products = data
                setProducts(data) // vuelve a renderizar el componente
            })

            return () =>{
                // fin
                console.log('ProductsList: cleanup')
            } // se ejecuta cuando el componente se desmonta

    }, []) // al momento en que se monta el componente


    // durante
    useEffect(()=>{
        console.log('products changed')
    }, [products]) // cada vez que al rederizar cambiaron los productos


    /*
    // estructurada
    let productsComponents = []

    for (let i = 0; i < products.length; i++) {
        productsComponents.push(
            <li>
                {products[i].name} - ${products[i].price}
            </li>
        )
    }
    */
    return (
        <div className="products-list">
            <h2>Lista de productos</h2>
            <ul>
                {products.map((producto, index) => {
                    return (
                        <li>
                            {producto.name} - $ {producto.price} <Link to={`/products/${producto._id}`}>Ver</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}


export default ProductsList;