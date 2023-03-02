import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import user from '../../datas/userData.json';
import { Link } from 'react-router-dom';
import UserInfoCard from './UserInfoCard';
import { useSelector } from 'react-redux';

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-left: 160px; */
  .nav {
    font-size: 15px;
  }
`;



const Menusub = styled.div`
  text-align: center;
  margin: 0 0 0 30px;
  font-size: var(--fs--big);
  border-radius: 50px;
  width: 80px;
  height: 30px;
  padding: 5px;
  color: ${(props) => (props.color ? props.color : 'var(--black__300)')};
  background-color: ${(props) => (props.bg ? props.bg : 'white')};

  &:hover {
    background-color: ${(props) => (props.bg ? props.bg : 'var(--tab__focus)')};
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 30px;

  .stats {
    font-size: 20px;
  }
`;

export const StatsBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StatsTitle = styled.p`
  font-size: var(--fs--big);
  color: #626a73;
`;

export const StatsCount = styled.p`
  font-size: 18px;
  margin-right: 5px;
`;
export const Wrap = styled.div`
  max-width: 1100px;
  /* min-height: 500px; */
  width: calc(100% - 164px);
  padding: 24px;
  /* margin-top: 20px; */
  min-height: 60vh;
  li {
    text-decoration: none;
  }
`
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin: 20px 10px 20px 30px;
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
    min-height: 300px;
    border: 1px solid #d6d9dc;
    background-color: #f8f9f9;
  }
  > .contents {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-width: 400px;
    min-height: 250px;
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

  const [login, setLogin] = useState(false);
  const user = useSelector(state => state.userDataReducer.currentUser);

  return (
    <Wrap>
      <UserInfoCard user={user} />
      <Menu>
        <Link to="/mypage" style={{ textDecoration: "none" }}>
          <Menusub className="nav" bg="#F48225" color="#fff">
            Profile
          </Menusub>
        </Link>

        {/* <Menusub className='nav'>Saves</Menusub> */}
        <Link to="/mypage/edit" style={{ textDecoration: "none" }}>
          <Menusub className="nav">Settings</Menusub>
        </Link>
      </Menu>
      <Main>
        <Section>
          <Sections>
            <div className="title">Stats</div>
            <div className="stats_contents">
              <div className="contents_about">
                <div className="answerList">answers</div>
                <div className="answertext">
                  {data.answers && data.answers.length}
                </div>
              </div>
              <div className="contents_about">
                <div className="answerList">questions</div>
                <div className="answertext">
                  {data.questions && data.questions.length}
                </div>
              </div>
            </div>
          </Sections>
          <Sections>
            <div className="title">Questions</div>
            <div className="contents">
              <div className="contents_about">
                {user.questions.slice(0, 5).map(question => {
                  // console.log(question)
                  return (
                    <AnswerLink to={`/questions/${question.questionId}`}>
                      {/* <AnswerLink to='#'> */}
                      <div className="answerList">{question.totalVotes}</div>
                      <div className="answertext">{`${question.title.slice(
                        0,
                        10
                      )}...`}</div>
                      <div className="answerDate">
                        {question.createdAt.split("T")[0]}
                      </div>
                    </AnswerLink>
                  );
                })}
              </div>
            </div>
          </Sections>
          <Sections>
            <div className="title">Answers</div>
            <div className="contents">
              <div className="contents_about">
                {user.answers.slice(0, 5).map(answer => {
                  console.log(answer);
                  return (
                    <AnswerLink to="#">
                      <div className="answerList">{answer.totalVotes}</div>
                      <div className="answertext">{`${answer.content.slice(
                        0,
                        10
                      )}...`}</div>
                      <div className="answerDate">
                        {answer.createdAt.split("T")[0]}
                      </div>
                    </AnswerLink>
                  );
                })}
              </div>
            </div>
          </Sections>
        </Section>
      </Main>
    </Wrap>
  );
}
