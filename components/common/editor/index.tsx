import React from "react";
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from "./option";
import dynamic from 'next/dynamic'

// ssr 일때 react-quill 이 아직 로드되지 않은 document를 조작을 방지하는 코드
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

type WrapperProps = {
	value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Editor = ({value,setValue}:WrapperProps) => {

  return (
    <QuillNoSSRWrapper 
      theme="snow" 
      value={value || ""} 
      onChange={setValue}
      modules={modules}
      formats={formats} 
    />
  );
}

export default Editor
