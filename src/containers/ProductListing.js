import React, { useEffect } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponents from "./ProductComponents";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    // console.log(products);

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log(err);
            });
        // console.log(response.data);
        dispatch(setProducts(response.data);)
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div className='ui grid container'>
            <ProductComponents />
        </div>
    )
}

export default ProductListing;