import { useState } from 'react'
import styled from 'styled-components'
import { Editor } from './Editor'
import { BaseButton } from '../styles/styledcomponents'
import { useDispatch } from 'react-redux'
import { addSingleAnswer } from '../redux/actions/answers'
const CommentEdit = ({ value, setIsEdit, questionId, answerId }) => {
    const dispatch = useDispatch()
    const [ editValue, setEditValue ] = useState(value)
    const completeEdit = () => {
        // comment 업데이트 api 요청
        // 
        dispatch(addSingleAnswer(questionId, answerId, editValue))
        setIsEdit(false)
    }
  return (
    <div className='container'>
        <Editor value={editValue} setter={setEditValue}></Editor>
        <BaseButton className='edit_complete' margin={'10px'} onClick={completeEdit}>Complete</BaseButton>
    </div>
  )
}

export default CommentEdit