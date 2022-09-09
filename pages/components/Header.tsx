import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between text-2xl md:text-5xl">
      <div className="div aclonica">
        <h1 className="text-red-500">NPM</h1>
        <h1>IN</h1>
        <h1 className="text-purple-600">WEB3</h1>
      </div>

      <nav className="flex asap-condensed">
        <h2 className="mx-3">CLI</h2>
        <Link href="/dashboard">
          <h2 className="mx-3 cursor-pointer">DASHBOARD</h2>
        </Link>
      </nav>
    </header>
  );
}
