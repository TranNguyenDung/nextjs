import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { get } from "lodash";
import { UserAPI } from "../apis/userAPI";
import ProductItem from "../components/Producttem";
import { IProduct } from "./configs/custum-type";
import Link from "next/link";
// API form soạn thảo văn bản
import { Editor } from "@tinymce/tinymce-react";
interface IProps {
  products: IProduct[];
}

const Products: NextPage<IProps> = ({ products }) => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    UserAPI.getUsers()
      .then((resp) => {
        console.log(resp.data);
        setUsers(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const initialConfig = {
    entity_encoding: "raw" as any,
    relative_urls: false,
    branding: false,
    // document_base_url: SITE_URL,
    height: 800,
    menubar: "file edit view insert format tools table actions",
    plugins: [
      "advlist autolink autoresize lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste code wordcount codesample",
    ],
    toolbar:
      "saveButton | undo redo | formatselect | bold italic forecolor backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | image link media | table | removeformat | fullscreen preview | formatCodeButton codesample",
    toolbar_sticky: false,
    block_formats:
      "Paragraph=p; Header 2=h2; Header 3=h3; Header 4=h4; Header 5=h5; Header 6=h6; Blockquote=blockquote; Preformatted=pre",
    elementpath: true,

    image_caption: true,
    file_browser_callback_types: "file image media",
    file_picker_types: "file",

    file_picker_callback: function (cb: any, value: any, meta: any) {
      if (meta.filetype == "file") {
        var input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", ".zip,.mp4");

        input.onchange = function () {
          //   const file = input.files[0];
          //   m.loading(true);
          //   ArticleAPI.uploadContentFile(props.documentId, file)
          //     .then((res) => {
          //       const link = get(res, 'data.data', '');
          //       if (link !== '') {
          //         cb(getMediaURL(link)
          //, {
          //           title: file.name,
          //           text: file.name,
          //         });
          //       }
          //     })
          //     .catch(() => {})
          //     .finally(() => m.loading(false));
        };

        input.click();
      }
    },

    setup: (editor: any) => {
      editor.on("BeforeSetContent", function (e: any) {
        if (e.content.indexOf("<table") == 0) {
          e.content = "<section>" + e.content + "</section>";
        }
      });

      editor.ui.registry.addToggleButton("saveButton", {
        text: "Save",
        tooltip: "Save. Shortcut Ctrl/Command + Shift + S",
        onAction: () => {
          // !!onSave && onSave();
        },
      });

      editor.ui.registry.addToggleButton("formatCodeButton", {
        icon: "sourcecode",
        text: "<code>Code</code>",
        tooltip: "Code tag. Shortcut Ctrl/Command + Shift + C",
        onAction: function (_: any) {
          editor.execCommand("mceToggleFormat", false, "code");
        },
        onSetup: function (api: any) {
          editor.formatter.formatChanged("code", function (state: any) {
            api.setActive(state);
          });
        },
      });

      editor.ui.registry.addToggleButton("formatPreButton", {
        icon: "sourcecode",
        text: "<pre>Pre</pre>",
        tooltip: "Pre tag. Shortcut Ctrl/Command + Shift + S",
        onAction: function (_: any) {
          editor.execCommand("mceToggleFormat", false, "pre");
        },
        onSetup: function (api: any) {
          editor.formatter.formatChanged("pre", function (state: any) {
            api.setActive(state);
          });
        },
      });

      editor.addShortcut("meta+shift+s", "Save article", () => {
        //!!onSave && onSave();
      });

      editor.addShortcut("meta+shift+c", "Format <code> for selected.", () => {
        editor.execCommand("mceToggleFormat", false, "code");
      });

      editor.addShortcut("meta+shift+x", "Format <pre> for selected.", () => {
        editor.execCommand("mceToggleFormat", false, "pre");
      });
    },

    images_upload_handler: async (
      blobInfo: any,
      success: any,
      failure: any
    ) => {
      // m.loading(true);
      // const apiInstance = documentType === 'article' ? ArticleAPI : ProductAPI;
      // apiInstance
      //     .uploadFile(documentId, blobInfo.blob())
      //     .then((res) => {
      //         const imageUrl = res.data;
      //         if (isEmpty(imageUrl)) {
      //             failure('Invalid data.');
      //         }
      //         success(getMediaURL(imageUrl));
      //     })
      //     .catch((err) => {
      //         failure('Invalid data.');
      //     })
      //     .finally(() => {
      //         m.loading(false);
      //     });
    },

    // uploadFile: (id: string, image: any) => {
    //   const form = new FormData();
    //   form.append("file", image);

    //   return axios.patch(`${ARTICLE_URL}/${id}/storage`, form, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    // },

    // uploadArticleThumbnail: (id: string, image: any) => {
    //   const form = new FormData();
    //   form.append("file", image);

    //   return axios.patch(`${ARTICLE_URL}/${id}/images`, form, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    // },

    // return <Editor ref={ref} initialValue={initialContent} init={initialConfig} apiKey={TINYMCE_API_KEY} />;
    //const contentRef = useRef<any>(null);
    //contentRef.current.getContent()
  };

  return (
    <div>
      <Editor init={{ initialConfig }} />
      <table>
        <tbody>
          <tr>
            <th>_id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {users.map((user: any, i: number) => {
            return (
              <tr key={i}>
                <td>{get(user, "_id", "")}</td>
                <td>{get(user, "name", "")}</td>
                <td>{get(user, "email", "")}</td>
                <td>{get(user, "password", "")}</td>
                <td>
                  <Link href={`/update?id=${get(user, "_id", "")}`}>
                    <a>Update</a>
                  </Link>
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

      {/* {/ {!!products[0] ? <ProductItem product={products[0]} / > : null} /} */}
      {/* {!!products && products.length > 0 && (
        <ProductItem product={products[0]} />
      )} */}

      {/* {!!products && products.length > 0 ? (
        <ProductItem product={products[0]} />
      ) : (
        <h2>Nothing</h2>
      )} */}

      {/* <ProductItem
        name={get(products, "[0].name", "")}
        price={get(products, "[0].customerPrice", 0)}
        thumbnail={get(products, "[0].images[0]", "")}
      /> */}

      {/* {products.map((product, i) => (
        <ProductItem product={product} key={i} />
      ))} */}

      {/* {products.map(
        (product, i) => i < 3 && <ProductItem product={product} key={i} />
      )} */}

      {/* {products.map((product, i) => {
        return <ProductItem product={product} key={i} />;
      })} */}
    </div>
  );
};

export default Products;
