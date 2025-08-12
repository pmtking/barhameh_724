import React, { useState, useRef } from "react";
import "./editor.scss";

const Editor = () => {
  const [blocks, setBlocks] = useState([]);
  const editorRef = useRef(null);

  const addTextBlock = () => {
    setBlocks([...blocks, { type: "text", content: "New Text Block" }]);
  };

  const addImageBlock = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setBlocks([...blocks, { type: "image", src: e.target.result }]);
    };
    reader.readAsDataURL(file);
  };

  const handleBlockChange = (index, newContent) => {
    const updatedBlocks = blocks.map((block, i) =>
      i === index ? { ...block, content: newContent } : block
    );
    setBlocks(updatedBlocks);
  };

  const removeBlock = (index) => {
    const updatedBlocks = blocks.filter((_, i) => i !== index);
    setBlocks(updatedBlocks);
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={addTextBlock}>Add Text Block</button>
        <label htmlFor="image-upload">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={addImageBlock}
          id="image-upload"
          style={{ display: "none" }}
        />
      </div>
      <div className="editor" ref={editorRef}>
        {blocks.map((block, index) => (
          <div key={index} className="block">
            {block.type === "text" ? (
              <div
                contentEditable
                suppressContentEditableWarning
                onInput={(e) => handleBlockChange(index, e.target.innerText)}
                className="text-block"
              >
                {block.content}
              </div>
            ) : (
              <div className="image-block">
                <img
                  src={block.src}
                  alt="Uploaded"
                  style={{ maxWidth: "100%" }}
                />
                <button onClick={() => removeBlock(index)}>Remove Image</button>
              </div>
            )}
            <button onClick={() => removeBlock(index)}>Remove Block</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editor;
