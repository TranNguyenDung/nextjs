import React,{FC} from "react";
import Image from 'next/image';
import Styles from "./ProductItem.module.scss"
import { IProduct } from "../configs/custum-type";
import {get} from "lodash";

// interface IProps {
//     name: string;
//     price:number;
//     thumbnail: string;
// }



interface IProps{
    product : IProduct;
}

const ProductItem: FC<IProps>=(
    // {name,
    // price,
    // thumbnail,}
    {product}
    )=>{
    //const name = "iphone X";
    //const thumbnail = "https://i.pinimg.com/564x/ac/d4/ff/acd4ff49433dbbaefecdd29093b9e0e2.jpg";
    //const price = 12345;
    (product as any).commission;
    return (
        <div className={Styles.productItem}> 
            {/* <Image 
                src={"https://www.vphone24h.vn/" + thumbnail} 
                // src={"https://i.pinimg.com/564x/ac/d4/ff/acd4ff49433dbbaefecdd29093b9e0e2.jpg"} 
                width={128} 
                height={128} 
                alt={name} 
            />

            <h2>{name}</h2>
            <p>{price}</p>
            <p>
                <button>Mua ngay</button>
            </p> */}

            {/* <Image 
                src={"https://www.vphone24h.vn/" + product.thumbnail} 
                // src={"https://i.pinimg.com/564x/ac/d4/ff/acd4ff49433dbbaefecdd29093b9e0e2.jpg"} 
                width={128} 
                height={128} 
                alt={product.name} 
            /> */}
            {/* <div className={Styles.image}><img src={"https://www.vphone24h.vn/" + get(product,"images[0]","")} /></div> */}
            <div className={Styles.image}><img src={"https://i.pinimg.com/564x/ac/d4/ff/acd4ff49433dbbaefecdd29093b9e0e2.jpg"} /></div>
            <h4>{get(product,"name","")}</h4>
            <p>{get(product,"customerPrice","")}</p>
            <p><button>Mua ngay</button></p>

            {/* <div className={Styles.border_gradient}>
                I have a gradient
            </div>

            <div className={Styles.border_gradient_purple}>
                I have a gradient 1
            </div>

            <div className={Styles.border_gradient_green}>
                I have a gradient 2
            </div> */}

        </div>
    );
};

export default ProductItem;