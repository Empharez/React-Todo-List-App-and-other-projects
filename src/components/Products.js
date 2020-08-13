import React from 'react';
function Product(props){
    return(
       <div>
           <h3>Product Name: {props.name}</h3>
           <p>Price: {props.price}</p>
           <p>Description: {props.description}</p>
           <br/>
       </div>
    )
}



export default Product;