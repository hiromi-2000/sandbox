import React from "react";

import { Button } from "./Button";
import "./header.css";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="storybook-logo-title"
        >
          <title id="storybook-logo-title">Storybook logo</title>
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FF4785"
            />
            <path
              d="M5.3 11.6h3v8.1h-3v-8.1zm8.2 8.5c-1.1 0-2-.3-2.7-.8-.6-.5-1-1.2-1.2-2.1h3c.1.3.2.5.4.7.2.2.5.3.9.3.3 0 .6-.1.8-.3a1 1 0 00.3-.7c0-.6-.5-.9-1.4-1l-1.5-.2c-2-.2-2.9-1.3-2.9-3.2 0-1 .3-1.8 1-2.3.6-.5 1.5-.8 2.7-.8 1.1 0 1.9.3 2.5.8.6.5 1 1.2 1.1 2.2h-2.8c-.1-.3-.2-.6-.4-.7a1 1 0 00-.7-.3c-.3 0-.6.1-.8.3-.2.2-.3.4-.3.7 0 .5.5.8 1.4.9l1.5.2c2 .2 3 1.3 3 3.2 0 1-.4 1.8-1 2.3-.7.5-1.6.8-2.8.8z"
              fill="#FFF"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

export default Header;
