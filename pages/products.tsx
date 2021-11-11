import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import ProductItem from "../components/Producttem";
import Styles from  "./products.module.scss";
import {get} from "lodash";
import { IProduct } from "./configs/custum-type";



interface IProps{
    products: IProduct[];
}

const Products:NextPage<IProps> = ({products}) =>{
    // useEffect(() => {
    //     axios
    //         .get("https://api-v2.vphone24h.vn/products?filter=%7B%22branch%22:%2260f32e78b8199a76a4ba9ee6%22%7D")
    //         .then((resp)=>{
    //             console.log(resp);
    //             setProducts(resp.data.items);
    //         }).catch((err)=>{});
    // }, []);

    useEffect(()=>{},[]);
    console.log(products);

    return (
        <div className={Styles.products}>

            {/* {!!products[0] && (<ProductItem product={products[0]}/>) } */}
                {/* //product={undefined} */}
                {/* // name={products[0].name}  */}
                {/* // price={products[0].customerPrice}  */}
                {/* // thumbnail={products[0].images[0]} */}
                {/* //Get data from list */}
                {/* // name={get(products,"[0].name","")}  */}
                {/* // price={get(products,"[0].customerPrice",0)}  */}
                {/* // thumbnail={get(products,"[0].images[0]","")} */}
                {/* //product={get(products[0])} */}

                {/* {products.map((products,i)=>i<3 && <ProductItem product={products} key={i} />)} */}

                {/* {products.map((product, i) => (<ProductItem product={product} key={i}  />))} */}

                <button onClick={()=>{}}>Get Products</button>
                {!!products && products.length > 0 && (products.map((product, i) => (<ProductItem product={product} key={i}/>))) }

                {/* {products.map((product, i) => (<ProductItem product={product} key={i}  />))} */}
        </div>

    );
}

// Program On Server
export const getServerSideProps: GetServerSideProps = async (context) => {
  const resp = await axios.get("https://api-v2.vphone24h.vn/products?filter=%7B%22branch%22:%2260f32e78b8199a76a4ba9ee6%22%7D");

  return {
    props:{products: resp.data.items},
  };
}


export default Products;