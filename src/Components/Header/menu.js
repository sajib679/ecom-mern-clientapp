import { DropdownMenu } from "../MaterialUi/index";

import React from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

export const NonLoggedInMenu = ({ onClick, SignUp }) => (
  <DropdownMenu
    menu={
      <span
        style={{ textDecoration: "none" }}
        className="loginButton"
        onClick={onClick}
      >
        Login
      </span>
    }
    menus={[
      { label: "Flipkart Plus Zone", href: "", icon: null },
      { label: "Gift Cards", href: "", icon: null },
    ]}
    firstMenu={
      <div className="firstmenu">
        <span style={{ fontSize: "14px" }}>New Customer?</span>
        <span onClick={SignUp} style={{ color: "#2874f0", fontSize: "15px" }}>
          Sign Up
        </span>
      </div>
    }
  />
);

export const LoggedInMenu = ({ userName, onClick }) => (
  <DropdownMenu
    menu={
      <span
        style={{
          textTransform: "capitalize",
          textDecoration: "none",
        }}
        className="loginButton"
      >
        {userName}
      </span>
    }
    menus={[
      { label: "My Profile", href: "", icon: null },
      { label: "Flipkart Plus Zone", href: "", icon: null },
      { label: "Orders", href: "/account/orders", icon: null },
      { label: "Wishlist", href: "", icon: null },
      { label: "Rewards", href: "", icon: null },
      { label: "Gift Cards", href: "", icon: null },
    ]}
    firstMenu={
      <div className="firstmenu">
        <span onClick={onClick} style={{ color: "#2874f0", fontSize: "18px" }}>
          SignOut
        </span>
      </div>
    }
  />
);

export const More = () => (
  <DropdownMenu
    menu={
      <a href="/#" style={{ textDecoration: "none" }} className="more">
        <span style={{ color: "#2874f0" }}>More</span>
        <IoIosArrowDown />
      </a>
    }
    menus={[
      { label: "Notification Preference", href: "", icon: null },
      { label: "Sell on flipkart", href: "", icon: null },
      { label: "24x7 Customer Care", href: "", icon: null },
      { label: "Advertise", href: "", icon: null },
      { label: "Download App", href: "", icon: null },
    ]}
  />
);

export const Logo = () => (
  <div className="logo">
    <a href="/#">
      <img src={"#"} className="logoimage" alt="" />
    </a>
    <a href="/#" style={{ marginTop: "-10px" }}>
      <span className="exploreText">Explore</span>
      <span className="plusText">Plus</span>
      <img src={"#"} className="goldenStar" alt="" />
    </a>
  </div>
);

const SearchInput = ({ value, onFocus, onChange, onBlur }, ref) => (
  <div
    style={{
      padding: "0 10px",
    }}
  >
    <div className="searchInputContainer">
      <input
        ref={ref}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        className="searchInput"
      />
      <div className="searchIconContainer">
        <IoIosSearch
          style={{
            color: "#2874f0",
          }}
        />
      </div>
    </div>
  </div>
);

export const SearchBar = React.forwardRef(SearchInput);
