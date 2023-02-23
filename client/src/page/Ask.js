import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { ToastEditor } from '../components/TextEditor'
import getEditorValue from '../utils/getDataUtil'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  /* padding-left: 165px; */
  /* padding-right: 165px; */
  background-color: rgb(248,249,249);
  .blue_button {
    margin-top: 8px;
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
    color: rgb(222, 79, 84);
    margin-top: 8px;
    padding: 10.4px;
    width: fit-content;
    height: fit-content;
    border: none;
    background: rgb(248,249,249);
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    :hover {
      background: hsl(358,75%,97%);
    }
  }

  .info_link {
      text-decoration: none;
      font-weight: 500;
      color: hsl(206, 100%, 40%);
    }
`

const Content = styled.div`
  width: 100%;
  padding: 0 24px 24px 24px;
  min-height: 750px;
  max-width: 1264px;
`

const Qnotice = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 100% !important;
}
  .title {
    margin-bottom: 20px;
    h1 {
      font-size: 27px;
      font-weight: 700;
      margin: 24px 0;
      color: var(--black__600);
    }
  }

  .body_field {
    margin-top: 16px;
    width: 100%;
    .body_flex {
      display: flex;
      border-radius: 3px;
      width: 100% !important;
      .body {
        width: 70%;
        @media (max-width: 1100px) {
          width: 100% !important;
        }
        border: 1px solid rgb(166,206,237);
        background-color: rgb(235,244,250);
        padding: 24px;
        h2 {
          font-weight: 400;
          font-size: 21px;
          margin-bottom: 8px;
        }
        p {
          font-size: 15px;
          line-height: 1.3;
        }

        h5 {
          font-weight: 600;
          margin-bottom: 5px;
        }
        .text_2 {
          margin-bottom: 15px;
        }
        ul {
          margin-left: 30px;
          li {
            list-style-type: disc;
            font-size: 13px;
            color: var(--black__600);
            line-height: 1.4;
          }
        }
      }
    }
  }
`
const InputField = styled.div`
  display: flex;
  width: 100%;
  /* flex-direction: column-reverse; */
  gap: 0 16px;
  @media (max-width: 1100px) {
    flex-direction: column-reverse !important;
  }
  .box {
    background-color: white;
    border: 1px solid var(--black__100);
    border-radius: 3px;
    padding: 24px;
    width: 70%;
    height: auto;
    align-self: start;
    flex-shrink: 0 !important;
      @media (max-width: 1100px) {
        width: 100% !important;
      }
      &.top12 {
        margin-top: 15px;
      }
    
  }
  .main {
    display: flex;
    flex-direction: column;
    margin: 2px 0;
    .column {
      margin: 2px 0;
      .s-label {
        font-weight: 600;
        font-size: 15px;
      }
      .ss-label {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
      }
    }

    .bottom {
      position: relative;
      display: flex;
      margin: 2px 0;
      input {
        padding: 7.8px 9.1px;
        width: 100%;
        border: 1px solid var(--black__100);
        border-radius: 3px;
        ::placeholder {
          color: var(--black__100);
        }
        &.errorbox {
          border: 1px solid rgb(235, 81, 47);
          :focus {
            outline: 4px solid rgb(248, 225, 224);
          }
        }
      }
      svg {
        position: absolute;
        top: 25%;
        right: 0.7em;
        fill: rgb(222, 79, 84);
      }
    }
    .error_message {
      color: rgb(222, 79, 84);
      font-size: 12px;
      font-weight: 500;
    }

    .toast_editor {
      margin-top: 10px;
    }
  }
`
const Sidebar = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid var(--black__100);
  width: 100%;
  position: relative;
  background-color: white;
  /* height: 40%; */
  align-self: start;
  &.top12 {
    margin-top: 15px;
  }
  
  .sidebar_top {
    padding: 12px;
    background-color: hsl(210,8%,97.5%);
    border-bottom: 1px solid var(--black__100);
  }
  .sidebar_bottom {
    background-color: white;
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: start;
    .sidebar_text {
      /* display: flex;
      flex-direction: column;
      justify-content: start; */
      text-align: start;
      margin: 0 8px;
      font-size: 12px;
      .text_1 { 	
        margin-bottom: 12px; 
    }
    }
  }
`
const EditorContainer = styled.div`
    .toastui-editor-toolbar {
        overflow-x: scroll;
        overflow-y: hidden;
        height: 60px;
        background: #f7f9fc;
        border-bottom: 1px solid #ebedf2;
    }
`

function Ask({setShowNav, setShowSidebar}) {
const editorRef = useRef()
  const [isTitle, setIsTitle] = useState(false)
  const [isProblem, setIsProblem] = useState(false)
  const [isExpect, setIsExpect] = useState(false)
  const [isTag, setIsTag] = useState(false)
  const [inputData, setinputData] = useState('')

  useEffect(() => {
    setShowNav(false)
    setShowSidebar(false)
    return () => {
      setShowNav(true)
      setShowSidebar(true)
    }
  }, [])
  
  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    return data
  }
console.log(inputData)
  return (
    <Container>
      <Content>
        <form action="" onSubmit={e => e.preventDefault()}>
          <main className="question_form">
            <Qnotice>
              <div className="title">
                <h1>Ask a public question</h1>
              </div>
              <div className="body_field">
                <div className="body_flex">
                  <div className="body">
                    <h2>Writing a good question</h2>
                    <p>
                      You’re ready to
                      <Link to="#" className="info_link">
                        {" "}
                        ask{" "}
                      </Link>
                      a
                      <Link to="#" className="info_link">
                        {" "}
                        programming-related question{" "}
                      </Link>
                      and this form will help guide you through the process.
                    </p>
                    <p className="text_2">
                      Looking to ask a non-programming question? See
                      <Link to="#" className="info_link">
                        {" "}
                        the topics here{" "}
                      </Link>
                      to find a relevant site.
                    </p>
                    <h5>Steps</h5>
                    <ul>
                      <li>Summarize your problem in a one-line title.</li>
                      <li>Describe your problem in more detail.</li>
                      <li>
                        Describe what you tried and what you expected to happen.
                      </li>
                      <li>
                        Add “tags” which help surface your question to members
                        of the community.
                      </li>
                      <li>Review your question and post it to the site.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Qnotice>

            <InputField>
              <div className="box top12">
                <div className="main">
                  <div className="column">
                    <div className="top">
                      <label htmlFor="title" className="s-label">
                        Title
                        <p className="ss-label">
                          Be specific and imagine you’re asking a question to
                          another person.
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="bottom">
                    <input
                      id="title"
                      type="text"
                      name="title"
                      maxLength="300"
                      placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                      onClick={() => {
                        setIsTitle(true);
                        setIsProblem(false);
                        setIsExpect(false);
                        setIsTag(false);
                      }}></input>
                    <svg
                      aria-hidden="true"
                      className="s-input-icon js-title-invalid-alert d-none svg-icon iconAlertCircle"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18">
                      <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
                    </svg>
                  </div>
                  <div className="error_message">Title is missing.</div>
                </div>
                <button className="blue_button">Next</button>
              </div>

              {isTitle ? (
                <Sidebar className="top12">
                  <div className="sidebar_top">
                    <div>Writing a good title</div>
                  </div>
                  <div className="sidebar_bottom">
                    <div className="sidebar_img">
                      <svg
                        aria-hidden="true"
                        className="spotPencil"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48">
                        <path
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                          opacity=".2"></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                    </div>
                    <div className="sidebar_text">
                      <p className="text_1">
                        Your title should summarize the problem.
                      </p>
                      <p>
                        You might find that you have a better idea of your title
                        after writing out the rest of the question.
                      </p>
                    </div>
                  </div>
                </Sidebar>
              ) : null}
            </InputField>

            <InputField>
              <div className="box top12">
                <div className="main">
                  <div className="column">
                    <div className="top">
                      <label htmlFor="problem-details" className="s-label">
                        What are the details of your problem?
                        <p className="ss-label">
                          Introduce the problem and expand on what you put in
                          the title. Minimum 20 characters.
                        </p>
                      </label>
                    </div>
                    <ToastEditor
                      className="text_editor"
                      vertical={"250px"}
                      focusFunction={() => {
                        setIsTitle(false);
                        setIsProblem(true);
                        setIsExpect(false);
                        setIsTag(false);
                      }}              
                      ></ToastEditor>
                  </div>
                  <button className="blue_button">Next</button>
                </div>
              </div>

              {isProblem ? (
                <Sidebar className="top12">
                  <div className="sidebar_top">
                    <div>Introduce the problem</div>
                  </div>
                  <div className="sidebar_bottom">
                    <div className="sidebar_img">
                      <svg
                        aria-hidden="true"
                        className="spotPencil"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48">
                        <path
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                          opacity=".2"></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                    </div>
                    <div className="sidebar_text">
                      <p className="text_1">
                        Explain how you encountered the problem you’re trying to
                        solve, and any difficulties that have prevented you from
                        solving it yourself.
                      </p>
                    </div>
                  </div>
                </Sidebar>
              ) : null}
            </InputField>

            <InputField>
              <div className="box top12">
                <div className="main">
                  <div className="column">
                    <div className="top">
                      <label htmlFor="problem-details" className="s-label">
                        What did you try and what were you expecting?
                        <p className="ss-label">
                          Describe what you tried, what you expected to happen,
                          and what actually resulted. Minimum 20 characters.
                        </p>
                      </label>
                    </div>
                    {/* <ToastEditor className="text_editor" vertical={'250px'} 
                      setIsTitle={setIsTitle} setIsProblem={setIsTitle} setIsExpect={setIsTitle} setIsTag={setIsTitle}
                    ></ToastEditor> */}
                    <EditorContainer className="toast_editor">
                      <Editor
                        height="250px"
                        width="100%"
                        hideModeSwitch="true"
                        ref={editorRef}
                        onChange={onChange}
                        >

                        </Editor>
                    </EditorContainer>
                  </div>
                  <button className="blue_button">Next</button>
                </div>
              </div>

              {isExpect ? (
                <Sidebar className="top12">
                  <div className="sidebar_top">
                    <div>Expand on the problem</div>
                  </div>
                  <div className="sidebar_bottom">
                    <div className="sidebar_img">
                      <svg
                        aria-hidden="true"
                        className="spotPencil"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48">
                        <path
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                          opacity=".2"></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                    </div>
                    <div className="sidebar_text">
                      <p className="text_1">
                        Show what you’ve tried, tell us what happened, and why
                        it didn’t meet your needs.
                      </p>
                      <p className="text_1">
                        Not all questions benefit from including code, but if
                        your problem is better understood with code you’ve
                        written, you should include a
                        <Link
                          to="https://stackoverflow.com/help/minimal-reproducible-example"
                          className="info_link">
                          {" "}
                          minimal, reproducible example
                        </Link>
                        .
                      </p>
                      <p className="text_1">
                        Please make sure to post code and errors as text
                        directly to the question (and
                        <Link
                          to="https://meta.stackoverflow.com/questions/285551"
                          className="info_link">
                          {" "}
                          not as images{" "}
                        </Link>
                        ), and
                        <Link
                          to="https://stackoverflow.com/help/formatting"
                          className="info_link">
                          {" "}
                          format them appropriately
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </Sidebar>
              ) : null}
            </InputField>

            <InputField>
              <div className="box top12">
                <div className="main">
                  <div className="column">
                    <div className="top">
                      <label className="s-label">
                        Tags
                        <p className="ss-label">
                          Add up to 5 tags to describe what your question is
                          about. Start typing to see suggestions.
                        </p>
                      </label>
                      <div className="bottom">
                        <input
                          type="text"
                          autoComplete="off"
                          placeholder="e.g. (javascript css)"
                          onClick={() => {
                            setIsTitle(false);
                            setIsProblem(false);
                            setIsExpect(false);
                            setIsTag(true);
                          }}></input>
                      </div>
                    </div>
                    <div className="hide_message"></div>
                  </div>
                </div>
                <div className="tag_suggestion"></div>
                <button className="blue_button">Next</button>
              </div>

              {isTag ? (
                <Sidebar className="top12">
                  <div className="sidebar_top">
                    <div>Adding tags</div>
                  </div>
                  <div className="sidebar_bottom">
                    <div className="sidebar_img">
                      <svg
                        aria-hidden="true"
                        className="spotPencil"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48">
                        <path
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                          opacity=".2"></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                    </div>
                    <div className="sidebar_text">
                      <p className="text_1">
                        Tags help ensure that your question will get attention
                        from the right people.
                      </p>
                      <p className="text_1">
                        Tag things in more than one way so people can find them
                        more easily. Add tags for product lines, projects,
                        teams, and the specific technologies or languages used.
                      </p>
                      <Link to="#" className="info_link">
                        Learn more about tagging
                      </Link>
                    </div>
                  </div>
                </Sidebar>
              ) : null}
            </InputField>

            {/* <SimilarField className="similar_field">
              <div className="similar_dropdown">
                <div className='similar_box'>
                  <div className='similar_main'>
                    <div className='similar_top'>
                      <div className="top_box">
                        <p>Review questions already on Stack Overflow to see if your question is a duplicate.</p>
                        <p>Clicking on these questions will open them in a new tab for you to review. Your progress here will be saved so you can come back and continue.</p>
                      </div>
                    </div>
                    <div className='similar_middle'>
                      <div className="middle_box">
                        <button>
                          <div>Do any of these posts answer your question?</div>
                          <div className='empty'></div>
                          <div>
                            <div className='arrow-up'>
                            <svg aria-hidden="true" className="fc-light svg-icon iconArrowUpAlt" width="18" height="18" viewBox="0 0 18 18"><path d="m16.01 10.62-1.4 1.4L9 6.45l-5.59 5.59-1.4-1.41 7-7 7 7Z"></path></svg>
                            </div>
                            <div className='arrow-down'>
                            <svg aria-hidden="true" className="fc-light svg-icon iconArrowDownAlt" width="18" height="18" viewBox="0 0 18 18"><path d="m16.01 7.43-1.4-1.41L9 11.6 3.42 6l-1.4 1.42 7 7 7-7Z"></path></svg>
                            </div>
                          </div>
                        </button>
                        <div>
                          <div>
                            <p>No duplicate questions found.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='similar_bottom'>
                      <button>
                        Review your question
                      </button>
                    </div>

                  </div>               
                </div>
              </div>
              <div className="similar_sidebar">
              <div className="sidebar_top">
                  <div>Make sure we don’t already have an answer for your question</div>
                </div>
                <div className="sidebar_bottom">
                  <div className="sidebar_img">
                    <svg aria-hidden="true" className="svg-spot spotBell" width="48" height="48" viewBox="0 0 48 48"><path d="M11.81.8a1.37 1.37 0 1 0-2.5 1.16l1.91 4.09a1.37 1.37 0 0 0 2.5-1.16l-1.9-4.1Zm-8.7 3.98a1.37 1.37 0 0 1 1.94-.18l3.97 3.28A1.37 1.37 0 0 1 7.26 10L3.3 6.72a1.38 1.38 0 0 1-.19-1.94Zm34.91 23.57a21.3 21.3 0 0 0-.23-12.08 19.78 19.78 0 0 0-3-5.95 3.49 3.49 0 0 0-1.9-4.19 3.49 3.49 0 0 0-4.43 1.25c-2.2.13-4.4.71-6.44 1.58a21.65 21.65 0 0 0-9.3 7.6c-.82 1.18-1.6 2.39-2.4 3.6l-.38.6c-2.34 3.6-3.55 5.07-4.87 5.64-1.08.47-2.3 1.1-2.82 2.22A3 3 0 0 0 3.7 32.6l27.82 12.98c1.96.91 4.33-.6 4.27-2.8a8.47 8.47 0 0 0-.39-2.24c-.41-1.36-.07-3.24 1.2-7.35.49-1.6 1-3.21 1.42-4.84ZM.27 14.11c.02-.76.66-1.35 1.42-1.33l4.75.16a1.38 1.38 0 0 1-.1 2.75l-4.74-.16a1.38 1.38 0 0 1-1.33-1.42Zm45.99 15.63a1.37 1.37 0 1 0 .73-2.65l-4.96-1.37a1.37 1.37 0 1 0-.74 2.65l4.97 1.37Zm-2.74 6.53c-.5.57-1.37.64-1.94.14l-3.42-2.96a1.38 1.38 0 0 1 1.8-2.08l3.42 2.96c.57.5.64 1.36.14 1.94Zm3.22-15.37a1.37 1.37 0 1 0-1.05-2.54l-4.4 1.8a1.38 1.38 0 0 0 1.05 2.55l4.4-1.8Z" opacity=".2"></path><path d="M13.73 22.3a1 1 0 1 1-1.78-.92c3.61-7.07 8.02-10.8 13.34-11.26a1 1 0 0 1 .17 2c-4.53.39-8.4 3.66-11.73 10.17Zm22.33 3.55c1.13-4.3.95-8.36-.23-12.08a19.77 19.77 0 0 0-3.01-5.95 3.49 3.49 0 0 0-1.9-4.18 3.49 3.49 0 0 0-4.42 1.24c-2.21.13-4.4.71-6.44 1.58a21.65 21.65 0 0 0-9.3 7.6c-.83 1.18-1.61 2.39-2.4 3.6l-.38.6c-2.34 3.6-3.55 5.07-4.87 5.64a9.4 9.4 0 0 0-1.9 1.08 3 3 0 0 0 .52 5.12l27.83 12.98a3 3 0 0 0 4.26-2.8 8.47 8.47 0 0 0-.38-2.24c-.41-1.36-.07-3.24 1.19-7.34l.21-.7c.43-1.38.85-2.75 1.22-4.15Zm-4.23 14.48a1 1 0 0 1-1.43.94L2.58 28.29a1 1 0 0 1-.18-1.7c.43-.32.93-.6 1.5-.86 1.84-.8 3.17-2.4 5.76-6.39l.39-.6c.77-1.19 1.53-2.38 2.35-3.53a19.65 19.65 0 0 1 8.44-6.91 15.72 15.72 0 0 1 6.23-1.44 1 1 0 0 0 .92-.57c.42-.9 1.3-1.21 2.09-.84.8.37 1.11 1.24.7 2.13a1 1 0 0 0 .15 1.09 15.96 15.96 0 0 1 3 5.7 19.36 19.36 0 0 1 .2 10.97c-.37 1.36-.78 2.71-1.2 4.06l-.21.7c-1.4 4.55-1.77 6.61-1.2 8.52.2.61.3 1.18.3 1.71Zm-14.78-.72a1 1 0 1 1 1.78.9 2.44 2.44 0 1 0 4.44 2.03 1 1 0 0 1 1.85.77 4.44 4.44 0 1 1-8.07-3.7Z"></path></svg>
                  </div>
                  <div className="sidebar_text">
                    <p>Stack Overflow is a huge database of knowledge.</p>
                    <p>
                    Please make sure your question isn’t already answered before posting, or your question might be closed as a duplicate.
                    </p>
                  </div>
                </div>
              </div>
            </SimilarField> */}

            <div className="discard">
              <button className="red_button">Discard draft</button>
            </div>
          </main>
        </form>
      </Content>
    </Container>
  );
}

export default Ask;