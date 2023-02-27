import { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Editor } from '../components/Editor'
import Sidebar from '../components/Sidebar3'
import tags from '../datas/tags.json'
import TagList from '../components/TagList_s'
import contents from '../datas/contents.json'

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
    margin-bottom: 10px;
    p {
      overflow-wrap: break-word !important;
      margin-left: 10px;
      color: var(--black__500);
      font-size: 13px;
      font-weight: 400;
      height: auto;
      &.first {
        margin-bottom: 13px;
      }
    }
  }
  .title_top, .tags_top, .body_top {
    padding-bottom: 5px;
  }
  
  .title_bottom{
    position: relative;
    margin-bottom: 30px;
    svg {
      position: absolute;
      top: 25%;
      right: 0.7em;
      fill: rgb(222, 79, 84);
    }
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
  useEffect(() => {
    setShowSidebar(false);
    return () => {
      setShowSidebar(true);
    };
  }, []);

  const {title, content, tag } = contents[0]
  const [addTitle, setAddTitle] = useState(title)
  const [isBody, setIsBody] = useState(content)
  const [addTag, setAddTag] = useState([...tag])
  const [isTagList, setIsTagList] = useState(false)
  const [inputTag, setinputTag] = useState('')

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
    const filterd = tags.filter(tag => tag.title.includes(inputTag))
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
  console.log(addTag)
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
                <input id="title" name="title" type="text" defaultValue={addTitle} onChange={(e) => setAddTitle(e.target.value)}/>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path></svg>
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
                  }}
                  />
              </div>
              { isTagList ? <TagList tagClickHandler={tagClickHandler} data={tags.filter(tag => tag.title.includes(inputTag))} /> : null}
            </div>
          </div>

          <div className='summary'>
              <div className="title_top">
                <label htmlFor="title" className="">Edit Summary</label>
              </div>
              <div className="title_bottom">
                <input id="title" className="flex--item s-input w100 js-post-title-field" name="title" type="text"/>
                <svg aria-hidden="true" className="s-input-icon js-invalid-alert d-none svg-icon iconAlertCircle" width="18" height="18" viewBox="0 0 18 18"><path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path></svg>
              </div>
          </div>

          <div className='button'>
            <button className="blue_button">Save edits</button>
            <button className="red_button">Cancel</button>
          </div>

        </div>
      </EditBlock>

      <div className="sidebar ver3">
        <Sidebar />
      </div>
    </Container>
  );
};

export default EditPost;