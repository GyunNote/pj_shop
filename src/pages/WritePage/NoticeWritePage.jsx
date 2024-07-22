/** @jsxImportSource @emotion/react */
import ReactQuill from "react-quill";
import { useValueInput } from "../../hooks/inputHook";
import { useQuill } from "../../hooks/quillHook";
import * as s from "./style";
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { QUILL_MODULES } from "../../constants/quillModules";

function NoticeWritePage(props) {
    const [quillValue , handleQuillValueChange] = useQuill();
    const [inputValue , handleInputChange] = useValueInput(25);

    console.log(inputValue);
    console.log(quillValue);
    
    return (
        <>
        <div css={s.layout}>
          <div css={s.writePageTitle}>
            공지사항 작성
            
            <div css={s.titleButtons}>
                <button css={s.titleButton} >완료</button>
                <button css={s.titleButton} >취소</button>
            </div>
          </div>

          <div css={s.writeMain}>
           <input css={s.mainInput} 
           type="text" 
           placeholder="제목을 입력하세요"
           onChange={handleInputChange}
           value={inputValue} />
          </div> 

          <div css={s.quill}>
            <ReactQuill style={{
              marginBottom: "50px",
              width: "1100px",
              height: "700px"
            }}
            modules={QUILL_MODULES()}
            value={quillValue}
            onChange={handleQuillValueChange}
            />
          </div>
        </div>
        </>
    );
}

export default NoticeWritePage;