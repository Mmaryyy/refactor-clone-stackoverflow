import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';
import styled from 'styled-components';

const EditorContainer = styled.div`
  .toastui-editor-toolbar {
    overflow-x: scroll;
    overflow-y: hidden;
    height: 60px;
    background: #f7f9fc;
    border-bottom: 1px solid #ebedf2;
  }
`;
export const ToastEditor = ({ vertical, focusFunction }) => {
  const editorRef = useRef();
  return (
    <EditorContainer className='toast_editor'>
      <Editor
        initialValue='please write your problem'
        height={vertical || '500px'}
        width='100%'
        hideModeSwitch='true'
        ref={editorRef}
        onFocus={focusFunction}
      ></Editor>
    </EditorContainer>
  );
};
