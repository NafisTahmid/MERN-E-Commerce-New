import React from 'react';
import products from '../../data/productsData.json'
const TopProducts = () => {
    
    let topProducts = [];
    for (let i = 0; i<topProducts.length; i++) {
        const number = Math.floor(Math.random() * products.length);
        if(!topProducts.includes(products[number])) {
            topProducts.push(products[number]);
        } else {
            i--;
        }
        
    }
    // console.log(products);

    return (
        <section>
            <h1 style={{fontSize:"22px", color: "#212529", fontWeight:"700"}} className="mt-3">Top Products of This Week</h1>

            <div className="row products-container">
                {
                    topProducts.map(product => {
                        return (
                            <div className="">
                                <h4>{product.name}</h4>
                                console.log(product)
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default TopProducts;