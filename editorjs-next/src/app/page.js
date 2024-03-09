'use client';
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

const page = () => {

  const [data, setData] = useState('');

  return (
    <div>
      <Editor value={data} onChange={setData} holder="editorjs-container" />
    </div>
  )
}

export default page;
