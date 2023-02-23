import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

//
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
  flex-direction: column;
  width: 290px;
  height: 617px;
  /* background-color: rgb(240, 242, 243); */
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
      padding-right: 15px;
      margin-top: 12px;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  input {
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

  p {
    padding: 2px;
    margin: 2px 0;
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
`;

function Login({setShowNav, setShowFooter, setShowSidebar }) {
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

  //* ID, 패스워드 인풋창 onChange 이벤트 함수
  const handleInputValue = key => e => {
    if (key === "userEmail" && e.target.value)
      setErrorMessage({ ...errorMessage, userEmail: "" });
    if (key === "password" && e.target.value)
      setErrorMessage({ ...errorMessage, password: "" });
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  //* 로그인 버튼 onClick 이벤트 함수
  const loginRequestHandler = () => {
    setErrorMessage({ userEmail: "", password: "" });
    if (!loginInfo.userEmail && !loginInfo.password) {
      setErrorMessage({
        userEmail: "Email cannot be empty.",
        password: "Password cannot be empty.",
      });
    } else if (!loginInfo.userEmail && loginInfo.password) {
      setErrorMessage({ userEmail: "Email cannot be empty.", password: "" });
    } else if (loginInfo.userEmail && !loginInfo.password) {
      setErrorMessage({ userEmail: "", password: "Password cannot be empty." });
    }

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
        <div className="logo">
          <svg
            aria-hidden="true"
            className="native svg-icon iconLogoGlyphMd"
            width="32"
            height="37"
            viewBox="0 0 32 37">
            <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
            <path
              d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
              fill="#F48024"
            />
          </svg>
        </div>
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
          <span>Log in with Google</span>
        </button>
        <InputContainer>
          <form onSubmit={e => e.preventDefault()}>
            <div className="input_field">
              <label htmlFor="email">Email</label>
              <div className="input_error">
                <input
                  id="email"
                  className={errorMessage.userEmail ? "errorbox" : null}
                  type="text"
                  onChange={handleInputValue("userEmail")}></input>
                {errorMessage.userEmail ? (
                  <div className="error">
                    <svg
                      aria-hidden="true"
                      className="input-icon"
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
              {errorMessage.userEmail ? <p>{errorMessage.userEmail}</p> : ""}
            </div>

            <div className="input_field">
              <div className="password_label">
                <label htmlFor="password">Password</label>
                <Link to="#" className="password_link">
                  Forgot password?
                </Link>
              </div>
              <div className="input_error">
                <input
                  id="password"
                  type="password"
                  className={errorMessage.password ? "errorbox" : null}
                  onChange={handleInputValue("password")}></input>
                {errorMessage.password ? (
                  <div className="error">
                    <svg
                      aria-hidden="true"
                      className="input-icon"
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
              {errorMessage.password ? <p>{errorMessage.password}</p> : ""}
            </div>
            <button
              className="loginbutton"
              type="submit"
              onClick={loginRequestHandler}>
              Log in
            </button>
          </form>
        </InputContainer>
        <div className="signup_field">
          Don't have an account?
          <Link to="#" className="signup_link">
            Sign up
          </Link>
          <div className="signup_talent">
            Are you an employer?
            <Link to="#" className="signup_link">
              Sign up on Talent
              <svg
                aria-hidden="true"
                className="va-text-bottom sm:d-none svg-icon iconShareSm"
                width="14"
                height="14"
                viewBox="0 0 14 14">
                <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Login;
