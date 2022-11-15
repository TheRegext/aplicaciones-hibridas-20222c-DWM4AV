import { useEffect, useState } from 'react'
import * as ProductService from '../services/products.services'
import * as CategoryService from '../services/categories.services'

import { useNavigate } from 'react-router-dom'

function ProductNewPage() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')

    const [categories, setCategories] = useState([])


    useEffect(() => {
        CategoryService.find()
            .then(data => {
                setCategory(data[0].name)
                setCategories(data)
            })
    }, [])

    function nameChange(event){
        setName(event.target.value)
    }

    function priceChange(event){
        setPrice(event.target.value)
    }

    function categoryChange(event){
        setCategory(event.target.value)
    }

    function saveProduct(event){
        event.preventDefault()

        ProductService.create({
            name,
            price,
            category
        })
        .then(function(){
            navigate('/products')
        })
    }

    return (
        <form onSubmit={saveProduct}>
            <div>
                <label>Nombre</label>
                <input type="text" onChange={nameChange} value={name} />
            </div>
            <div>
                <label>Precio</label>
                <input type="number" onChange={priceChange} value={price} />
            </div>
            <div>
                <label>Categoría</label>
                <select onChange={categoryChange} value={category}>
                    {categories.map((category)=>{
                        return (
                            <option value={category.name}>{category.name}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <button>Guardar</button>
            </div>
        </form>
    )
}

export default ProductNewPage