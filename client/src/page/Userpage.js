import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import user from '../../datas/userData.json';
import { Link, useParams } from 'react-router-dom';
import UserInfoCard from '../components/Mypage/UserInfoCard';
import { useSelector } from 'react-redux';


const Wrap = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  margin-top: 30px;
  min-height: 610px;
  li {
    text-decoration: none;
  }
`
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin: 10px 10px 20px 20px;
  min-height: 300px;
`;
export const Sections = styled.article`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  > .title {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 400;
  }

  > .contents_post {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height: 300px;
    border: 1px solid #d6d9dc;
    background-color: #f8f9f9;
  }
  > .contents {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 400px;
    min-height: 250px;
    /* height: 130px; */
    border: 1px solid #d6d9dc;
    border-radius: 5px;
    background-color: #f8f9f9;
    padding: 20px 20px 20px 20px;
    > .contents_about {
      font-size: 15px;
      text-align: center;
      padding-top: 10px;
      color: #6a737c;
      > .link {
        color: #0074cc;
        padding-left: 0.3em;
        &:hover {
          color: #0e95ff;
        }
      }
    }
  }
  .stats_contents {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    min-height: 100px;
    border: 1px solid #d6d9dc;
    border-radius: 5px;
    background-color: #f8f9f9;
    padding: 20px 20px 20px 20px;
    > .contents_about {
      display: flex;
      font-size: 15px;
      text-align: center;
      /* padding-top: 10px; */
      color: #6a737c;
      .answerList {
        margin-right: 5px;
      }
      .answertext {
        font-weight: 600
      }
  }
}
`;
const AnswerLink = styled(Link)`
display: flex;
flex-direction: row;
text-decoration: none;
justify-content: center;
align-items: center;
color: black;
width: 350px;
height: 50px;
background-color: white;
border: 1px solid rgb(94,186,124);
border-radius: 5px;
margin-bottom: 15px;
/* margin-top: 15px; */
.answerList {
  min-width: 40px;
  height: 25px;
  border-radius: 3px;
  color: white;
  padding-top: 3px;
  background-color: rgb(94,186,124);
  margin: 15px;
  }
  .answertext {
    text-align: start;
    /* margin-right: 60px; */
    flex-grow: 1 !important;
  }
  .answerDate {
    margin: 15px;
    min-width: 86px;
  }

`

export default function Profile({ setShowSidebar, data }) {
  useEffect(() => {
    setShowSidebar(false);
    return () => {
      setShowSidebar(true);
    };
  }, []);
const param = useParams()
const user = useSelector(state => state.userDataReducer.userList).filter(user => {
  return user.memberId === Number(param.userId)
})


  return (
    <Wrap>
      <UserInfoCard user={user[0]}/>
      <Section>
      <Sections>
            <div className="title">Stats</div>
            <div className="stats_contents">
              <div className="contents_about">
                <div className="answerList">answers</div>
                <div className="answertext">{user[0].answers && user[0].answers.length}</div>
              </div>
              <div className="contents_about">
                <div className="answerList">questions</div>
                <div className="answertext">{user[0].questions && user[0].questions.length}</div>
              </div>
            </div>
          </Sections>
                  <Sections>
          <div className='title'>Questions</div>
            <div className='contents'>
                <div className='contents_about'>
                  {(user[0].questions).slice(0, 5).map(question => {
                    return (                      
                        <AnswerLink to={`/questions/${question.id}`}>
                          <div className='answerList'>{question.totalVotes}</div>
                          <div className='answertext'>{`${(question.title).slice(0, 6)}...`}</div>
                          <div className='answerDate'>{(question.createdAt).split('T')[0]}</div>
                        </AnswerLink>
                    )})}
                </div>
            </div>
          </Sections>
          <Sections>
          <div className='title'>Answers</div>
            <div className='contents'>
                <div className='contents_about'>
                  {user[0].answers.slice(0, 5).map(answer => {
                    return (
                        <AnswerLink to='#'>
                          <div className='answerList'>{answer.totalVotes}</div>
                          <div className='answertext'>{`${(answer.content).slice(0, 10)}...`}</div>
                          <div className='answerDate'>{(answer.createdAt).split('T')[0]}</div>
                        </AnswerLink>
                    )})}
                </div>
            </div>
          </Sections>

          </Section>
    </Wrap>
  );
}
