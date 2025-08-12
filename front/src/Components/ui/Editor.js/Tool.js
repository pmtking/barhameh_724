import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";
import ImageTool from "@editorjs/image";

export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  checkList: CheckList,
  list: List,
  header: Header,
  delimiter: Delimiter,
  link: Link,
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: "http://localhost:8000/uploadFile", // Your backend file upload endpoint
        byUrl: "http://localhost:8000/fetchUrl", // Your endpoint that provides uploading by URL
      },
      additionalRequestHeaders: {
        // Add any additional headers if needed
      },
      field: "file", // The name of the field for the file
      types: "image/*", // Acceptable file types
      captionPlaceholder: "Caption", // Placeholder for the caption input
      buttonContent: "Select an Image", // Button content
    },
  },
};
