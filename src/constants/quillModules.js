import { Quill } from 'react-quill';

export const QUILL_MODULES = () => {
    return {
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'], 
                [{ 'color': [] }, { 'background': [] }],         
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['code-block']
            ]
        }
    }
}