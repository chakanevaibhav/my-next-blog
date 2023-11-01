import React from "react";
import Logo from "./logo";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header>
      <Link href="/">
          <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
