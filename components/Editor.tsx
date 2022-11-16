import React, { useLayoutEffect, useState } from 'react';
// import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css'
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";

const BubbleTheme = Quill.import("themes/bubble");

class ExtendBubbleTheme extends BubbleTheme {
  constructor(quill:any, options:any) {
    super(quill, options);

    quill.on("selection-change", (range:any) => {
      if (range) {
        quill.theme.tooltip.show();
        quill.theme.tooltip.position(quill.getBounds(range));
      }
    });
  }
}

export default function Editor() {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  useLayoutEffect(() => {
    Quill.register("themes/bubble", ExtendBubbleTheme);
  })

  return <ReactQuill
  theme="bubble"
  placeholder="Compose an epic..."
  modules={modules}
  onChange={setValue}
  formats={formats}
/>
}