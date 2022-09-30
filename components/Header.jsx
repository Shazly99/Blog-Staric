import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      
      <div className="container">
        <Link href="/">
          <h2 className="cursor-pointer">Dev Blog</h2>
        </Link>
      </div>
    </header>
  );
};
export default Header;
