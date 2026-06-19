import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logoText">skunivlikelion</div>

      <nav className="nav">
        <a href="/">홈</a>
        <a href="/subscribe">구독하기</a>
      </nav>
    </header>
  );
}

export default Header;