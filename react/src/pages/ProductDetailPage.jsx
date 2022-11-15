import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as ProductService from '../services/products.services'

function ProductDetailPage(){
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [reviews, setReviews] = useState([])

    
    useEffect(()=>{
        ProductService.findById(id)
        .then((data)=>{
            setProduct(data)
            return ProductService.getReviews(id)
        })
        .then((data)=>{
            setReviews(data)
        })

    }, [id])

    

    return (
        <div>
            {product && (
                <div>
                    <h1>{product.category} / {product.name}</h1>
                    <p>Precio: ${product.price}</p>
                </div>
            )}

            {reviews && (
                <div>
                    <h2>Reviews</h2>
                    <ul>
                        {reviews.map((review)=>{
                            return (
                                    <p>{review.review}</p>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}


export default ProductDetailPage