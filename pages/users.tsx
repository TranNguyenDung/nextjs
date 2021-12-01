import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { get } from "lodash";

import MainLayout from "../layouts/MainLayout";
import ProductItem from "../components/ProductItem";
import { IProduct } from "../configs/custom-types";

import styles from "./products.module.scss";
import { UserAPI } from "../apis/userAPI"
import { Link, useScrollTrigger } from "@mui/material";

interface IProps {
  products: IProduct[];
}

const Products: NextPage<IProps> = ({ products }) => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    UserAPI.getUsers().then((resp) => {
      console.log(resp.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <div className={styles.products}>
      <button onClick={() => { }}>Get products</button>

      <table>
        <tbody>
          <tr>
            <th>_id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {users.map((user: any, i: number) => {
            return(
            <tr key={i}>
              <td>{get(user, '_id', '')}</td>
              <td>{get(user, 'name', '')}</td>
              <td>{get(user, 'email', '')}</td>
              <td>{get(user, 'password', '')}</td>
              <td>
                <Link href={`/users?id=${get(user,'_id','')}`} > <a>Update</a></Link>
              </td>
            </tr>              
            );

          })}
        </tbody>

      </table>
      {/* {products.length > 0 && (
        <ProductItem
          name={products[0].name}
          price={products[0].customerPrice}
          thumbnail={products[0].images[0]}
        />
      )} */}

      {/ {!!products[0] ? <ProductItem product={products[0]} / > : null} /}
      {!!products && products.length > 0 && (
        <ProductItem product={products[0]} />
      )}

      {!!products && products.length > 0 ? (
        <ProductItem product={products[0]} />
      ) : (
        <h2>Nothing</h2>
      )}

      {/* <ProductItem
        name={get(products, "[0].name", "")}
        price={get(products, "[0].customerPrice", 0)}
        thumbnail={get(products, "[0].images[0]", "")}
      /> */}

      {/ <ProductItem product={products[0]} / > /}

      {products.map((product, i) => (
        <ProductItem product={product} key={i} />
      ))}

      {products.map(
        (product, i) => i < 3 && <ProductItem product={product} key={i} />
      )}

      {products.map((product, i) => {
        return <ProductItem product={product} key={i} />;
      })}
    </div>
  );
};

export default Products;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const resp = await axios.get(
//     "https://api-v2.vphone24h.vn/products?filter=%7B%22branch%22:%2260f32e78b8199a76a4ba9ee6%22%7D"
//   );

//   return {
//     props: { products: resp.data.items },
//   };
// };