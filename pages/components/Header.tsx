import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between text-2xl md:text-5xl">
      <div className="div aclonica">
        <h1 className="text-red-500">Decentralized</h1>
        <h1>Package</h1>
        <h1 className="text-purple-600">Manager</h1>
      </div>

      <nav className="flex asap-condensed">
        <a
          className="mx-3"
          href="https://github.com/thisisommore/dpm-web3-cli/releases/tag/v0.0.1"
        >
          CLI
        </a>
      </nav>
    </header>
  );
}
