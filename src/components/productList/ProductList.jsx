import React from 'react';
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">
                    Create & inspire. It's Airon
                </h1>
                <h4 className='pl-sub'>My recent works</h4>
                <p className="pl-desc">
                    Here are a few design projects I've worked on recently. Want to see more? Email me.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product
                        key={item.id}
                        img={item.img}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;