import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Editor } from '../components/Editor';
import { useSelector } from 'react-redux';
// import tags from '../datas/tags.json';
import TagList from '../components/TagList_s';
import { createContent } from '../api/question';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  /* padding-left: 165px; */
  /* padding-right: 165px; */
  background-color: none;
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
    color: rgb(222, 79, 84);
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
      background: hsl(358, 75%, 97%);
    }
  }

  .info_link {
    text-decoration: none;
    font-weight: 500;
    color: hsl(206, 100%, 40%);
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 0 24px 24px 24px;
  min-height: 750px;
  max-width: 1264px;
`;

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
        border: 1px solid rgb(166, 206, 237);
        background-color: rgb(235, 244, 250);
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
`;

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
        line-height: 2;
      }
    }

    .bottom {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 2px 0;

      #title {
        padding: 7.8px 9.1px;
        width: 100%;
        border: 1px solid var(--black__100);
        border-radius: 3px;
        ::placeholder {
          color: var(--black__100);
        }
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
`;

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
    background-color: hsl(210, 8%, 97.5%);
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
`;

function Ask({ setShowNav, setShowSidebar }) {
  const [isTitle, setIsTitle] = useState(false);
  const [isProblem, setIsProblem] = useState(false);
  const [isExpect, setIsExpect] = useState(false);
  const [isTag, setIsTag] = useState(false);
  const [isTagList, setIsTagList] = useState(false);

  const [addTitle, setAddTitle] = useState('title');
  const [addProblem, setAddProblem] = useState('');
  const [addExpect, setAddExpect] = useState('');
  const [addTag, setAddTag] = useState([]);
  const [inputTag, setinputTag] = useState('');

  useEffect(() => {
    setShowNav(false);
    setShowSidebar(false);
    return () => {
      setShowNav(true);
      setShowSidebar(true);
    };
  }, []);

  const tagInputHandler = (e) => {
    setinputTag(e.target.value);
    setIsTagList(true);
  };

  const tagClickHandler = (e) => {
    if (!addTag.includes(e.target.textContent) && addTag.length <= 4) {
      setAddTag([...addTag, e.target.textContent]);
      setIsTagList(false);
      setinputTag('');
    } else {
      setIsTagList(false);
      setinputTag('');
    }
  };

  const tagEnterHandler = (e) => {
    const filterd = tags.filter((tag) => tag.title.includes(inputTag));
    if (filterd.length === 1 && e.key === 'Enter') {
      if (!addTag.includes(filterd[0].title) && addTag.length <= 4) {
        setAddTag([...addTag, filterd[0].title]);
        setinputTag('');
        setIsTagList(false);
      } else {
        setinputTag('');
        setIsTagList(false);
      }
    }
  };

  const removeTags = (Removeidx) => {
    setAddTag(addTag.filter((tag, idx) => idx !== Removeidx));
  };
  const data = useSelector(state => state.userDataReducer.currentUser)
  console.log(data)
  const tags = useSelector(state => state.contentsReducer.tagList)
  console.log(tags)


  const postQeustion = () => {
    const body = (`${addProblem} 79a91970-5d15-4da9-a394-d014af1e9916 ${addExpect}`)
    createContent(data.memberId, addTitle, body, addTag)
    // axios.get(`api/questions?page=1&keyword=&sortType=created_At&filterType=1`)
    // .then(res => console.log(res))
  }

  return (
    <Container
      onClick={(e) => {
        setIsTagList(false);
      }}
    >
      <Content>
        {/* <form action="" onSubmit={e => e.preventDefault()}> */}
        <main className='question_form'>
          <Qnotice>
            <div className='title'>
              <h1>Ask a public question</h1>
            </div>
            <div className='body_field'>
              <div className='body_flex'>
                <div className='body'>
                  <h2>Writing a good question</h2>
                  <p>
                    You’re ready to
                    <Link to='#' className='info_link'>
                      {' '}
                      ask{' '}
                    </Link>
                    a
                    <Link to='#' className='info_link'>
                      {' '}
                      programming-related question{' '}
                    </Link>
                    and this form will help guide you through the process.
                  </p>
                  <p className='text_2'>
                    Looking to ask a non-programming question? See
                    <Link to='#' className='info_link'>
                      {' '}
                      the topics here{' '}
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
                      Add “tags” which help surface your question to members of
                      the community.
                    </li>
                    <li>Review your question and post it to the site.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Qnotice>

          <InputField>
            <div className='box top12'>
              <div className='main'>
                <div className='column'>
                  <div className='top'>
                    <label htmlFor='title' className='s-label'>
                      Title
                      <p className='ss-label'>
                        Be specific and imagine you’re asking a question to
                        another person.
                      </p>
                    </label>
                  </div>
                </div>
                <div className='bottom'>
                  <input
                    className={addTitle ? null : 'errorbox'}
                    id='title'
                    type='text'
                    name='title'
                    maxLength='300'
                    placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
                    onChange={(e) => setAddTitle(e.target.value)}
                    onClick={() => {
                      setIsTitle(true);
                      setIsProblem(false);
                      setIsExpect(false);
                      setIsTag(false);
                    }}
                  ></input>
                  {addTitle ? null : (
                    <svg
                      aria-hidden='true'
                      className='s-input-icon js-title-invalid-alert d-none svg-icon iconAlertCircle'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                    >
                      <path d='M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z'></path>
                    </svg>
                  )}
                </div>
                {addTitle ? null : (
                  <div className='error_message'>Title is missing.</div>
                )}
              </div>
              {/* <button className="blue_button" >Next</button> */}
            </div>

            {isTitle ? (
              <Sidebar className='top12'>
                <div className='sidebar_top'>
                  <div>Writing a good title</div>
                </div>
                <div className='sidebar_bottom'>
                  <div className='sidebar_img'>
                    <svg
                      aria-hidden='true'
                      className='spotPencil'
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                    >
                      <path
                        d='M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z'
                        opacity='.2'
                      ></path>
                      <path d='M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z'></path>
                    </svg>
                  </div>
                  <div className='sidebar_text'>
                    <p className='text_1'>
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
            <div className='box top12'>
              <div className='main'>
                <div className='column'>
                  <div className='top'>
                    <label htmlFor='problem-details' className='s-label'>
                      What are the details of your problem?
                      <p className='ss-label'>
                        Introduce the problem and expand on what you put in the
                        title. Minimum 20 characters.
                      </p>
                    </label>
                  </div>
                  <Editor
                    className='text_editor'
                    height={'300px'}
                    value={addProblem}
                    focusFunction={() => {
                      setIsTitle(false);
                      setIsProblem(true);
                      setIsExpect(false);
                      setIsTag(false);
                    }}
                    setter={setAddProblem}
                  ></Editor>
                </div>
                {/* <button className='blue_button'>Next</button> */}
              </div>
            </div>

            {isProblem ? (
              <Sidebar className='top12'>
                <div className='sidebar_top'>
                  <div>Introduce the problem</div>
                </div>
                <div className='sidebar_bottom'>
                  <div className='sidebar_img'>
                    <svg
                      aria-hidden='true'
                      className='spotPencil'
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                    >
                      <path
                        d='M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z'
                        opacity='.2'
                      ></path>
                      <path d='M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z'></path>
                    </svg>
                  </div>
                  <div className='sidebar_text'>
                    <p className='text_1'>
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
            <div className='box top12'>
              <div className='main'>
                <div className='column'>
                  <div className='top'>
                    <label htmlFor='problem-details' className='s-label'>
                      What did you try and what were you expecting?
                      <p className='ss-label'>
                        Describe what you tried, what you expected to happen,
                        and what actually resulted. Minimum 20 characters.
                      </p>
                    </label>
                  </div>
                  <Editor
                    className='text_editor'
                    height={'300px'}
                    value={addExpect}
                    focusFunction={() => {
                      setIsTitle(false);
                      setIsProblem(false);
                      setIsExpect(true);
                      setIsTag(false);
                    }}
                    setter={setAddExpect}
                  ></Editor>
                </div>
                {/* <button className='blue_button'>Next</button> */}
              </div>
            </div>

            {isExpect ? (
              <Sidebar className='top12'>
                <div className='sidebar_top'>
                  <div>Expand on the problem</div>
                </div>
                <div className='sidebar_bottom'>
                  <div className='sidebar_img'>
                    <svg
                      aria-hidden='true'
                      className='spotPencil'
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                    >
                      <path
                        d='M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z'
                        opacity='.2'
                      ></path>
                      <path d='M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z'></path>
                    </svg>
                  </div>
                  <div className='sidebar_text'>
                    <p className='text_1'>
                      Show what you’ve tried, tell us what happened, and why it
                      didn’t meet your needs.
                    </p>
                    <p className='text_1'>
                      Not all questions benefit from including code, but if your
                      problem is better understood with code you’ve written, you
                      should include a
                      <Link
                        to='https://stackoverflow.com/help/minimal-reproducible-example'
                        className='info_link'
                      >
                        {' '}
                        minimal, reproducible example
                      </Link>
                      .
                    </p>
                    <p className='text_1'>
                      Please make sure to post code and errors as text directly
                      to the question (and
                      <Link
                        to='https://meta.stackoverflow.com/questions/285551'
                        className='info_link'
                      >
                        {' '}
                        not as images{' '}
                      </Link>
                      ), and
                      <Link
                        to='https://stackoverflow.com/help/formatting'
                        className='info_link'
                      >
                        {' '}
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
            <div className='box top12'>
              <div className='main'>
                <div className='column'>
                  <div className='top'>
                    <label className='s-label'>
                      Tags
                      <p className='ss-label'>
                        Add up to 5 tags to describe what your question is
                        about. Start typing to see suggestions.
                      </p>
                    </label>
                    <div className='bottom'>
                      <div className='add_Tag'>
                        <ul id='tags'>
                          {addTag &&
                            addTag.map((tag, index) => (
                              <li key={index} className='addTag_box'>
                                <span className='tag-title'>{tag}</span>
                                <span
                                  className='tag-close-icon'
                                  onClick={() => removeTags(index)}
                                >
                                  &times;
                                </span>
                              </li>
                            ))}
                        </ul>
                        <input
                          type='text'
                          autoComplete='off'
                          placeholder='e.g. (javascript css)'
                          onChange={tagInputHandler}
                          value={inputTag}
                          className='tag_input'
                          onKeyUp={tagEnterHandler}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsTitle(false);
                            setIsProblem(false);
                            setIsExpect(false);
                            setIsTag(true);
                            setIsTagList(true);
                          }}
                        ></input>
                      </div>
                      {isTagList ? (
                        <TagList
                          tagClickHandler={tagClickHandler}
                          data={tags.filter((tag) =>
                            tag.title.includes(inputTag)
                          )}
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className='hide_message'></div>
                </div>
              </div>
              <div className='tag_suggestion'></div>
              {/* <button className="blue_button">Next</button> */}
            </div>

            {isTag ? (
              <Sidebar className='top12'>
                <div className='sidebar_top'>
                  <div>Adding tags</div>
                </div>
                <div className='sidebar_bottom'>
                  <div className='sidebar_img'>
                    <svg
                      aria-hidden='true'
                      className='spotPencil'
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                    >
                      <path
                        d='M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z'
                        opacity='.2'
                      ></path>
                      <path d='M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z'></path>
                    </svg>
                  </div>
                  <div className='sidebar_text'>
                    <p className='text_1'>
                      Tags help ensure that your question will get attention
                      from the right people.
                    </p>
                    <p className='text_1'>
                      Tag things in more than one way so people can find them
                      more easily. Add tags for product lines, projects, teams,
                      and the specific technologies or languages used.
                    </p>
                    <Link to='#' className='info_link'>
                      Learn more about tagging
                    </Link>
                  </div>
                </div>
              </Sidebar>
            ) : null}
          </InputField>

          <div className='discard'>
            <button className='blue_button' onClick={postQeustion}>Post your question</button>
            <button className='red_button'>Discard draft</button>
          </div>
        </main>
        {/* </form> */}
      </Content>
    </Container>
  );
}

export default Ask;
