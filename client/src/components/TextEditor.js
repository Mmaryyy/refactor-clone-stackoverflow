import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { useRef } from 'react'

export const ToastEditor = () => {
    const editorRef = useRef()
    return (
        <div className='toast_editor'>
            <Editor
                initialValue='please write your problem'
                height='500px'
                width='100%'
                hideModeSwitch='true'
                ref={editorRef}
                >
            </Editor>
        </div>
    )
}