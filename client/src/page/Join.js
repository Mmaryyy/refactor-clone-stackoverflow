import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Container = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(240, 242, 243);
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 775px;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 285px;
  margin: 0 48px 128px 0;
  .title {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 32px;
    color: hsl(210, 8%, 15%);
  }

  .li_box {
    display: flex;
    margin-bottom: 24px;
  }

  .li_icon {
    margin-right: 8px;
    fill: hsl(206, 100%, 52%);
  }

  .li_text {
    font-size: 16px;
    line-height: 1.5;
  }

  .bottom_text {
    font-size: 13px;
    font-weight: 500;
    color: hsl(210, 8%, 45%);
    line-height: 1.3;
  }

  .bottom_link {
    text-decoration: none;
    color: hsl(206, 100%, 40%);
  }
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 316px;
  background-color: rgb(240, 242, 243);
  .logo {
    margin-bottom: 24px;
    text-align: center !important;
  }

  .social {
    height: 39px;
    margin: 4px 0;
    padding: 10px;
    border: 0.9px solid var(--black__200);
    border-radius: 5px;
    background-color: white;
    margin-bottom: 16px;
    :hover {
      background-color: hsl(210, 8%, 97.5%);
    }
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .google_icon {
      margin-right: 5px;
    }
    span {
      color: var(--black__500);
    }
  }

  .signup_field {
    text-align: center !important;
    font-size: 13px;
    padding: 16px;
    margin-bottom: 24px;
    .signup_link {
      position: relative;
      padding-left: 4px;
      font-weight: 500;
      text-decoration: none;
      color: var(--link__content);
      svg {
        position: absolute;
        top: 1px;
        left: 113px;
        fill: var(--link__content);
      }
    }
    .signup_talent {
      margin-top: 12px;
      padding-right: 15px;
    }
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 250px; */
  /* height: 255px; */
  padding: 24px;
  margin-bottom: 24px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .input_field {
    display: flex;
    flex-direction: column;
    margin: 6px 0;
  }

  label {
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    padding: 0px 2px;
    margin: 2px 0px;
  }

  .input_error {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 2px 0;
  }

  #email,
  #name,
  #password {
    height: 32px;
    padding-left: 7px;
    border: 1px solid var(--black__100);
    border-radius: 5px;
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

  .error {
    position: absolute;
    top: 50%;
    right: 0.7em;
    margin-top: -10px;
    pointer-events: none;
    .input-icon {
      fill: rgb(222, 79, 84);
    }
  }

  .errorMsg {
    padding: 2px;
    margin: 2px 0 8px 0;
    color: hsl(358, 62%, 52%);
    font-size: var(--fs--caption);
    font-weight: 500;
  }

  .password_label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2px 0;
    font-weight: 500;
  }

  .password_link {
    text-decoration: none;
    font-size: var(--fs--caption);
    color: var(--link__content);
    display: flex;
    align-items: center;
  }

  .loginbutton {
    margin: 8px 0;
    padding: 10px;
    background: var(--button__back);
    color: white;
    border: 1px solid var(--link__content);
    box-shadow: inset 0 1px rgb(128, 192, 255);
    border-radius: 5px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    :hover {
      background: var(--button__back--hover);
    }
  }
  .password_info {
    font-size: var(--fs--caption);
    color: var(--black__400);
    margin: 4px;
  }
  .opt_field {
    margin: 6px 0;

    .opt {
      display: flex;
      flex-direction: row;

      #opt_in {
        cursor: pointer;
        border: 1px solid var(--black__100);
        position: relative;
        top: 1px;
        :focus {
          border-radius: 3px;
          outline: 4px solid rgb(221, 234, 247);
          /* border: 1px solid var(--button__back); */
        }
      }

      label {
        font-size: var(--fs--caption);
        font-weight: 400;
        line-height: 1.3;
        padding-left: 5px;
      }

      .opt_icon {
        margin-top: 2px;
      }

      svg {
        fill: var(--black__300);
      }
    }
  }

  .policy_info {
    margin-top: 32px;
    font-size: var(--fs--caption);
    color: var(--black__400);

    .policy_link {
      text-decoration: none;
      font-size: var(--fs--caption);
      color: var(--link__content);
      line-height: 1.5;
      font-weight: 500;
      margin-left: 4px;
    }
  }

  .pwcheck {
    list-style-type: disc;
    margin: 12px 0 12px 30px;
  }
`;

function Join({setShowNav, setShowFooter, setShowSidebar}) {
  useEffect(() => {
    setShowNav(false)
    setShowFooter(false)
    setShowSidebar(false)
    return () => {
      setShowNav(true)
      setShowFooter(true)
      setShowSidebar(true)
    }
  }, [])
  const [loginInfo, setLoginInfo] = useState({ userEmail: '', password: '' });
  const [errorMessage, setErrorMessage] = useState({
    userEmail: "",
    password: "",
  });
  // const [checkedKeepLogin, setCheckedKeepLogin] = useState(false);

  //todo ID, 패스워드 인풋창 onChange이벤트 함수
  const handleInputValue = key => e => {
    let emailCheck = true;
    let pwCheck = true;

    //* 빈칸이면? 에러메시지 초기화
    if (!e.target.value) setErrorMessage({ userEmail: "", password: "" });

    //* Email: a@a 형태 아니면? `{loginInfo.userEmail} is not a valid email address.`
    if (
      key === "userEmail" &&
      e.target.value &&
      !e.target.value.match(
        /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
      )
    ) {
      emailCheck = false;
      setErrorMessage({
        ...errorMessage,
        userEmail: `${e.target.value} is not a valid email address.`,
      });
    }

    //* Email: a@a 형태 맞다면 에러메시지 초기화
    if (key === "userEmail" && e.target.value && emailCheck) {
      setErrorMessage({ ...errorMessage, userEmail: "" });
    }

    //* Password: num + letter + symbol
    if (
      key === "password" &&
      e.target.value &&
      !e.target.value.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]/
      )
    ) {
      pwCheck = false;
      setErrorMessage({
        ...errorMessage,
        password: "Please choose a stronger password.",
      });
    }
    console.log(pwCheck);

    //* Password: 8글자 미만이면?
    if (pwCheck && key === "password" && e.target.value) {
      if (e.target.value.length < 8) {
        const num = 8 - e.target.value.length;
        num === 1
          ? setErrorMessage({
              ...errorMessage,
              password: `Must contain at least 1 more character.`,
            })
          : setErrorMessage({
              ...errorMessage,
              password: `Must contain at least ${num} more characters.`,
            });
      } else setErrorMessage({ ...errorMessage, password: "" });
    }
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  // Password: 숫자만 있으면?
  // if (key === "password" && e.target.value
  //   && e.target.value.search(/\D/) === -1) {
  //     pwCheck = false;
  //     setErrorMessage({...errorMessage,
  //       password: "Please add one of the following things to make your password stronger: ", pwcheck: "letters",
  //   });
  // }

  // Password: 문자만 있으면?
  // if (key === "password" && e.target.value && e.target.value.search(/\d/) === -1) {
  //   pwCheck = false;
  //   setErrorMessage({...errorMessage,
  //     password:"Please add one of the following things to make your password stronger: ",
  //     pwcheck: "numbers",
  //   });
  // }

  // Password: 8글자 미만이면?
  // if (pwCheck && key === "password" && e.target.value && e.target.value.length < 8) {
  //   const num = 8 - e.target.value.length;
  //     num === 1
  //       ? setErrorMessage({...errorMessage,
  //           password: `Must contain at least 1 more character.`,
  //           pwcheck: "",
  //         })
  //       : setErrorMessage({...errorMessage,
  //           password: `Must contain at least ${num} more characters.`,
  //           pwcheck: "",
  //         });
  // } else if (pwCheck && key === "password" && e.target.value && e.target.value.length >= 8) {
  //   setErrorMessage({...errorMessage, password: "", pwcheck: "",});
  // }

  // else if (pwCheck && key === "password" && e.target.value && e.target.value.length >= 8) {
  //   setErrorMessage({...errorMessage, password: "", pwcheck: "",});

  //* 회원가입 버튼 onClick이벤트 함수 : 빈칸일 때만 경고, 에러메시지 유무에 따라 동작
  const loginRequestHandler = () => {
    // //* Email && PW 빈칸? empty경고
    if (!loginInfo.userEmail && !loginInfo.password) {
      setErrorMessage({
        userEmail: "Email cannot be empty.",
        password: "Password cannot be empty.",
        pwcheck: "",
      });
      // return;
    }

    //* PW 빈칸? empty경고
    if (loginInfo.userEmail && !loginInfo.password) {
      setErrorMessage({
        userEmail: "",
        password: "Password cannot be empty.",
        pwcheck: "",
      });
      // return;
    }

    //* Email 빈칸? empty경고
    if (!loginInfo.userEmail && loginInfo.password) {
      setErrorMessage({
        userEmail: "Email cannot be empty.",
        password: "",
        pwcheck: "",
      });
      // return;
    }
    // console.log(errorMessage);

    if (!errorMessage.userEmail && !errorMessage.password)
      console.log("Sign up Success!");
    // return axios
    //   .post("url", {loginInfo, checkedKeepLogin})
    //   .then((res) => {
    //     // setIsLogin(true)
    //     // setUserInfo(res.data)
    //     setErrorMessage({userEmail: '', password: '',})
    //   })
    //   .catch((err) => {
    //     setErrorMessage({userEmail: 'The email or password is incorrect.', password: ''})
    //   });
  };

  return (
    <Container>
      <Content>
        <LeftSide>
          <div className="title">Join the Stack Overflow community</div>
          <div className="li_box">
            <div className="li_icon">
              <svg width="26" height="26" class="svg-icon">
                <path
                  opacity=".5"
                  d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"></path>
                <path d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"></path>
              </svg>
            </div>
            <div className="li_text">Get unstuck — ask a question</div>
          </div>

          <div className="li_box">
            <div className="li_icon">
              <svg width="26" height="26" class="svg-icon">
                <path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"></path>
                <path
                  opacity=".5"
                  d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"></path>
              </svg>
            </div>
            <div className="li_text">
              Unlock new privileges like voting and commenting
            </div>
          </div>

          <div className="li_box">
            <div className="li_icon">
              <svg width="26" height="26" class="svg-icon">
                <path d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"></path>
                <path
                  opacity=".5"
                  d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"></path>
              </svg>
            </div>
            <div className="li_text">
              Save your favorite tags, filters, and jobs
            </div>
          </div>

          <div className="li_box">
            <div className="li_icon">
              <svg width="26" height="26" class="svg-icon">
                <path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"></path>
              </svg>
            </div>
            <div className="li_text">Earn reputation and badges</div>
          </div>

          <div className="bottom_text">
            Collaborate and share knowledge with a private group for FREE.
            <br />
            <Link to="#" className="bottom_link">
              Get Stack Overflow for Teams free for up to 50 users.
            </Link>
          </div>
        </LeftSide>
        <RightSide>
          <button className="social">
            <svg
              aria-hidden="true"
              className="google_icon"
              width="18"
              height="18"
              viewBox="0 0 18 18">
              <path
                fill="#4285F4"
                d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path>
              <path
                fill="#34A853"
                d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path>
              <path
                fill="#FBBC05"
                d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path>
              <path
                fill="#EA4335"
                d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path>
            </svg>
            <span>Sign up with Google</span>
          </button>
          <InputContainer>
            <form onSubmit={e => e.preventDefault()}>
              <div className="input_field">
                <label htmlFor="name">Display name</label>
                <div className="input_error">
                  <input
                    id="name"
                    type="text"
                    onChange={handleInputValue("name")}></input>
                </div>
              </div>

              <div className="input_field">
                <label htmlFor="email">Email</label>
                <div className="input_error">
                  <input
                    id="email"
                    className={errorMessage.userEmail ? "errorbox" : null}
                    type="text"
                    // value={loginInfo.userEmail}
                    onChange={handleInputValue("userEmail")}></input>
                  {errorMessage.userEmail ? (
                    <div className="error">
                      <svg
                        aria-hidden="true"
                        class="input-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18">
                        <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {errorMessage.userEmail ? (
                  <p className="errorMsg">{errorMessage.userEmail}</p>
                ) : null}
              </div>

              <div className="input_field">
                <div className="password_label">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input_error">
                  <input
                    id="password"
                    className={errorMessage.password ? "errorbox" : null}
                    type="password"
                    onChange={handleInputValue("password")}></input>
                  {errorMessage.password ? (
                    <div className="error">
                      <svg
                        aria-hidden="true"
                        class="input-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18">
                        <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {errorMessage.password ? (
                  <span className="errorMsg">
                    <p>{errorMessage.password}</p>
                    {errorMessage.pwcheck ? (
                      <ul className="pwcheck">
                        <li>{errorMessage.pwcheck}</li>
                      </ul>
                    ) : null}
                  </span>
                ) : null}
                <p className="password_info">
                  Passwords must contain at least eight characters with a mix of
                  letters, numbers & symbols.
                </p>
              </div>
              <div className="opt_field">
                <div className="opt">
                  <div className="opt_input">
                    <input id="opt_in" type="checkbox"></input>
                  </div>
                  <label htmlFor="opt_in">
                    Opt-in to receive occasional product updates, user research
                    invitations, company announcements, and digests.
                  </label>
                  <div className="opt_icon">
                    <svg
                      aria-hidden="true"
                      class="svg-icon iconHelpSm"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14">
                      <path d="M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6Zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08Zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33.18-.2.28-.47.28-.74.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <button
                className="loginbutton"
                type="submit"
                onClick={loginRequestHandler}>
                Sign up
              </button>
              <div className="policy_info">
                By clicking “Sign up”, you agree to our
                <Link to="#" className="policy_link">
                  terms of service
                </Link>
                ,
                <Link to="#" className="policy_link">
                  privacy policy
                </Link>
                and
                <Link to="#" className="policy_link">
                  cookie policy
                </Link>
              </div>
            </form>
          </InputContainer>
          <div className="signup_field">
            Already have an account?
            <Link to="#" className="signup_link">
              Log in
            </Link>
            <div className="signup_talent">
              Are you an employer?
              <Link to="#" className="signup_link">
                Sign up on Talent
                <svg
                  aria-hidden="true"
                  class="va-text-bottom sm:d-none svg-icon iconShareSm"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14">
                  <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </RightSide>
      </Content>
    </Container>
  );
}

export default Join;
