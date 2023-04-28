import React from "react";
import Navbar from "../../components/nav/Navbar";

function AccountPage() {
  return (
    <div className="relative bg-main-colour grid grid-rows-reg h-screen min-h-screen w-full text-gray-100">
      <Navbar />
      <section className="grid px-6">ACCOUNT</section>
    </div>
  );
}

export default AccountPage;
