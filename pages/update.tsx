import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Storage } from "../libs/storage";
import { get } from "lodash";
import { UserAPI } from "../apis/userAPI";
import MainLayout from "../layout/MainLayout";
import { Editor } from "@tinymce/tinymce-react";

interface IProps {
  id: string;
}

const Update: NextPage<IProps> = ({ id }) => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    UserAPI.getUserById(id)
      .then((resp) => {
        console.log("data get via id");
        console.log(resp.data);
        setUser(resp.data);
        //console.log(user);
      })
      .catch((err) => {
        setUser(err);
      });
  }, []);

  return (
    <MainLayout>
      <Editor init={{}} />
      <input
        type="text"
        value={get(user, "name", "")}
        onChange={(e) => {
          if (!!user) {
            console.log(".......................");
            console.log(e.target.value.trim());
            let newUser: any = user;
            newUser.name = { ...user, name: e.target.value.trim() };
            //newUser.name = e.target.value; //.trim();
            //console.log(newUser);
            setUser(newUser.name);
          }
        }}
      />
      <br />
      <button
        onClick={() => {
          // UserAPI.updateName(id, name).then((resp)=>{
          //   console.log(resp.data);
          // }).catch((err) => {
          //   console.log(err);
          // }
          console.log(user);
          console.log(get(user, "name", ""));
          UserAPI.updateUser(id, get(user, "name", ""))
            .then((resp) => {
              console.log(resp.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        update
      </button>
    </MainLayout>
  );
};
export default Update;

//fort end server
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let props = { id: ctx.query.id };
  return {
    props,
  };
};

