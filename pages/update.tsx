import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { AuthAPI } from "../apis/AuthAPI";
import { UserAPI } from "../apis/UserAPI";
import MainLayout from "../layouts/MainLayout";
import { Storage } from "../libs/storage";

interface IProps {
    id: string
}

const Update: NextPage<IProps> = ({id}) => {

  const [name, setName] = useState("");

  return (
    <MainLayout>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value.trim());
        }}
      />
      <br />
      <button
        onClick={() => {
          UserAPI.updateName(id, name).then((resp)=>{
            console.log(resp.data);
          }).catch((err) => {
            console.log(err);
          }
        )}}
      >
        Login
      </button>
    </MainLayout>
  );
};

export default Update;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let props = { id: ctx.query.id };

    return {
        props,
    };
};