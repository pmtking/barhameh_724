import { useState } from "react";
import Api from "../../../libs/axios.js";
import Editor from "../../../Components/ui/Editor.js/index.jsx";

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "مقاله جدید",
        level: 1,
      },
    },
  ],
};

const IndexDashboard = () => {
  const [data] = useState(INITIAL_DATA); // Removed setData

  const addArticle = async () => {
    try {
      const response = await Api.post("/add-article", { data });
      console.log("Article added:", response.data);
    } catch (err) {
      console.error("Error adding article:", err);
    }
  };

  return (
    <div className="editor">
      <Editor />
      <button className="savebtn" onClick={addArticle}>
        افزودن مقاله
      </button>
    </div>
  );
};

export default IndexDashboard;
