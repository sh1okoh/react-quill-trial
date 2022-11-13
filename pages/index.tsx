import dynamic from "next/dynamic";
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
const { ReactQuill, Quill  } = dynamic(import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> });

// const BubbleTheme = Quill.import("themes/bubble");

export default function Home() {
  const [value, setValue] = useState('');
  console.log('value', value);

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
  ]

  return <ReactQuill theme="snow" modules={modules} formats={formats} onChange={setValue}/>
}
