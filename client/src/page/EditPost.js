import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar3'
import TagList from '../components/TagList_s'
import { Editor } from '../components/Editor'
import { updateSingleQuestion } from '../redux/actions/contents'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
`
const EditBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 0 24px 24px;
  .blue_button {
    margin-top: 8px;
    margin-right: 20px;
    padding: 10.4px;
    width: fit-content;
    height: fit-content;
    white-space: nowrap !important;
    background: var(--button__back);
    color: white;
    border: 1px solid var(--link__content);
    box-shadow: inset 0 1px rgb(128, 192, 255);
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    :hover {
      background: var(--button__back--hover);
    }
  }

  .red_button {
    color: var(--button__back);
    margin-top: 8px;
    padding: 10.4px;
    width: fit-content;
    height: fit-content;
    border: none;
    background: none;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    :hover {
      background:  hsl(206,100%,97%);
    }
  }

  .notice {
    padding: 16px;
    border: 1px solid rgb(241,230,187);
    background-color: rgb(253,247,226);
    margin-bottom: 20px;
    p {
      overflow-wrap: break-word !important;
      margin-left: 10px;
      color: var(--black__600);
      font-size: 13px;
      font-weight: 400;
      height: auto;
      line-height: 1.3;
      &.first {
        margin-bottom: 13px;
      }
    }
  }
  
  .title_top, .tags_top, .body_top {
    padding-bottom: 5px;
  }
  
  .title_bottom {
    position: relative;
    margin-bottom: 30px;
  }

  .svg_icon {
    position: absolute;
    top: 25%;
    right: 0.7em;
    fill: rgb(222, 79, 84);
  }
  

  label {
    font-weight: 600;
    font-size: 15px;
  }

  #title {
    width: 100%;
    padding: 7.8px 9.1px;
    border: none;
    border: 1px solid var(--black__100);
    border-radius: 3px;
    :focus {
      outline: 4px solid rgb(221, 234, 247);
      border: 1px solid var(--button__back);
    }
    &.errorbox {
      border: 1px solid rgb(235, 81, 47);
      :focus {
        outline: 4px solid rgb(248, 225, 224);
      }
    }
  }

  .tags_bottom {
    position: relative;
    margin-bottom: 30px;
  .add_Tag {
    display: flex;
    flex-direction: row;
    padding: 2px 9.1px 2px 2px;
    width: 100%;
    height: 34px;
    border: 1px solid var(--black__100);
    border-radius: 3px;
    ::placeholder {
      color: var(--black__100);
    }
    &:focus-within {
      outline: 4px solid rgb(221, 234, 247);
      border: 1px solid var(--button__back);
    }
    &.errorbox {
      border: 1px solid rgb(235, 81, 47);
      :focus {
        outline: 4px solid rgb(248, 225, 224);
      }
    }
    input {
      border: none;
      flex: 1;
      padding-left: 5px;
      :focus {
      outline: transparent;
    }
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
  
      .addTag_box {
        display: flex;
        cursor: pointer;
        align-self: start;
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
        color: rgb(57, 116, 156);
        padding: 3px 6px;
        margin: 2px;
        background-color: rgb(225, 236, 244);
        border: 1px solid rgb(225, 236, 244);
        border-radius: 3px;
        > .tag-close-icon {
          display: block;
          width: 16px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          font-size: 14px;
          margin-left: 8px;
          color: rgb(57, 116, 156);
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
        }
      }
  }
  }
}
  .divBody {
    margin-top: 10px;
  }
  &.ver3 {
    margin-right: 20px;
  }
`

const EditPost = ({ setShowSidebar }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const tagList = useSelector(state => state.contentsReducer.tagList)
  const { title, content, tags, questionId } = useSelector(state => state.contentsReducer.currentContent)
  const contentKey = content.replace(' 79a91970-5d15-4da9-a394-d014af1e9916', '')

  useEffect(() => {
    setShowSidebar(false);
    return () => {
      setShowSidebar(true);
    };
  }, []);

  const [addTitle, setAddTitle] = useState(title)
  const [isBody, setIsBody] = useState(contentKey)

  const [addTag, setAddTag] = useState(tags&&tags.map(tag => tag.title))
  const [isTagList, setIsTagList] = useState(false)
  const [inputTag, setinputTag] = useState('')

  const [isTitle, setIsTitle] = useState(false);
  const [isProblem, setIsProblem] = useState(false);
  const [isTag, setIsTag] = useState(false);

  //* 키 기준으로 split해서 받는 함수
  // const splitContent = (content) => {
  //   return content.split('79a91970-5d15-4da9-a394-d014af1e9916').join()
  // } 

  const tagInputHandler = (e) => {
    setinputTag(e.target.value)
    setIsTagList(true)
  }

  const tagClickHandler = (e) => {
    if(!(addTag.includes(e.target.textContent)) && addTag.length <= 4) {
      setAddTag([...addTag, e.target.textContent])
      setIsTagList(false)
      setinputTag('')
    } else {
      setIsTagList(false)
      setinputTag('')
    }
  }

  const tagEnterHandler = (e) => {
    const filterd = tagList.filter(tag => tag.title.includes(inputTag))
    if(filterd.length === 1 && e.key === 'Enter') {
        if(!(addTag.includes(filterd[0].title)) && addTag.length <= 4) {
          setAddTag([...addTag, filterd[0].title])
          setinputTag('')
          setIsTagList(false)
        } else {
          setinputTag('')
          setIsTagList(false)
        }
    }
  }

  const removeTags = (Removeidx) => {
    setAddTag(addTag.filter((tag, idx) => idx !== Removeidx))
  }

  const postContent = () => {
    dispatch(updateSingleQuestion(questionId, addTitle, isBody, addTag))
    navigate(`/questions/${questionId}`)

  }

  return (
    <Container onClick={(e) => {
      setIsTagList(false) 
    }}>
      <EditBlock>
        <div className='notice'>
          <p className='first'>Your edit will be placed in a queue until it is peer reviewed.</p>
          <p>
            We welcome edits that make the post easier to understand and more
            valuable for readers. Because community members review edits, please
            try to make the post substantially better than how you found it, for
            example, by fixing grammar or adding additional resources and
            hyperlinks.
          </p>
        </div>

        <div className='content'>

          <div className='title_body'>
            <div className="title">
              <div className="title_top">
                <label htmlFor="title" className="">Title</label>
              </div>
              <div className="title_bottom">
                <input className={addTitle ? null : 'errorbox'} id="title" name="title" type="text" defaultValue={title} 
                onChange={(e) => setAddTitle(e.target.value)}
                onClick={() => {
                  setIsTitle(true);
                  setIsProblem(false);
                  setIsTag(false);
                }}
                />
                {addTitle ? null : <svg className='svg_icon' aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
                </svg>}
              </div>
            </div>
            <div className="body">
              <div className="body_top">
                <label htmlFor="body" className="">body</label>
              </div>
              <div className="title_bottom">
                <Editor
                    className='text_editor'
                    value={isBody}
                    setter={setIsBody}
                    height={'300px'}
                    focusFunction={() => {
                      setIsTitle(false);
                      setIsProblem(true);
                      setIsTag(false);
                    }}
                  >
                </Editor>
                <div className='divBody'>{isBody}</div>
              </div>
            </div>
          </div>


          <div className='tags'>
            <div className="tags_top">
              <label htmlFor="tags">Tags</label>
            </div>
            <div className="tags_bottom">
              <div className="add_Tag">
                <ul id='tags'>
                  {addTag&&addTag.map((tag, index) => (
                    <li key={index} className='addTag_box'>
                      <span className='tag-title'>{tag}</span>
                      <span className='tag-close-icon' onClick={() => removeTags(index)}>
                        &times;
                      </span>
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder="e.g. (javascript css)"
                  onChange={tagInputHandler}
                  className="tag_input"
                  onKeyUp={tagEnterHandler}
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsTagList(true)
                    setIsTitle(false);
                    setIsProblem(false);
                    setIsTag(true);
                  }}
                  />
              </div>
              { isTagList ? <TagList tagClickHandler={tagClickHandler} data={tagList.filter(tag => tag.title.includes(inputTag))} /> : null}
            </div>
          </div>

          <div>
            <button className="blue_button" 
            onClick={postContent}
            >Save edits</button>
            <button className="red_button" onClick={() => window.location='http://localhost:3000/questions'} >Cancel</button>
          </div>

        </div>
      </EditBlock>

      <div className="sidebar ver3">
        <Sidebar isTitle={isTitle} isProblem={isProblem} isTag={isTag} setIsTitle={setIsTitle}/>
      </div>
    </Container>
  );
};

export default EditPost;