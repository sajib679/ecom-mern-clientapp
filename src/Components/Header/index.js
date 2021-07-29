import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByName, resetSearch, searchFocused } from "../../actions";
import { login, signout, signup } from "../../actions/auth.action";
import { MaterialButton, MaterialInput, Modal } from "../MaterialUi";
import Cart from "../UI/Cart";
import { LoggedInMenu, Logo, More, NonLoggedInMenu, SearchBar } from "./menu";
import "./styles.css";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermLength, setSearchTermLength] = useState(0);

  const [focused, setFocused] = useState(false);
  const dispatch = useDispatch();

  function usePrevious(value) {
    const ref = useRef(null);
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const inputRef = useRef(null);

  const prevCount = usePrevious(searchTerm?.length);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };
  useEffect(() => {
    dispatch(searchFocused(focused, searchTermLength));
  }, [focused]);

  const searchByName = (value) => {
    if (searchTermLength > prevCount && searchTermLength >= 2) {
      dispatch(getProductsByName(value));
    }
    if (prevCount > searchTermLength && searchTermLength >= 2) {
      dispatch(getProductsByName(value));
    }

    if (prevCount > searchTermLength && searchTermLength < 2) {
      dispatch(resetSearch());
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
    setSearchTermLength(input.length);
  };

  useEffect(() => {
    setSearchTerm(searchTerm);
    setSearchTermLength(searchTermLength);
    dispatch(searchFocused(focused, searchTermLength));
    searchByName(searchTerm);
  }, [searchTerm]);

  const userLogin = () => {
    const user = {
      email,
      password,
    };
    dispatch(login(user));
    setLoginModal(false);
  };

  const userSignUp = () => {
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
    setSignUpModal(false);
  };

  const userLogOut = (params) => {
    dispatch(signout());
  };

  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <MaterialInput
                type="text"
                label="Enter Email/Enter Mobile Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginTop: "30px" }}
              />

              <MaterialInput
                type="password"
                label="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                rightElement={<a href="/#">Forgot?</a>}
              />
              <MaterialButton
                title="Login"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{ margin: "40px 0" }}
                onClick={userLogin}
              />
              <h6>OR</h6>
              <MaterialButton
                title="Get OTP"
                bgColor="#ffffff"
                textColor="#000000"
              />
            </div>
          </div>
        </div>
      </Modal>
      <Modal visible={signUpModal} onClose={() => setSignUpModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <MaterialInput
                type="text"
                label="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ marginTop: "30px" }}
              />
              <MaterialInput
                type="text"
                label="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{ marginTop: "30px" }}
              />
              <MaterialInput
                type="text"
                label="Enter Email/Enter Mobile Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginTop: "30px" }}
              />

              <MaterialInput
                type="password"
                label="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                rightElement={<a href="/#">Forgot?</a>}
              />
              <MaterialButton
                title="SignUp"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{ margin: "40px 0" }}
                onClick={userSignUp}
              />
              <h6>OR</h6>
              <MaterialButton
                title="Get OTP"
                bgColor="#ffffff"
                textColor="#000000"
              />
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        <Logo />
        <SearchBar
          ref={inputRef}
          value={searchTerm}
          onChange={(e) => handleChange(e)}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
        />
        <div className="rightMenu">
          <div>
            <a href="/cart" style={{ textDecorationLine: "none" }}>
              <Cart />
            </a>
          </div>
          <More />

          {auth.authenticate ? (
            <LoggedInMenu userName={auth.user.fullName} onClick={userLogOut} />
          ) : (
            <NonLoggedInMenu
              onClick={() => setLoginModal(true)}
              SignUp={() => setSignUpModal(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
