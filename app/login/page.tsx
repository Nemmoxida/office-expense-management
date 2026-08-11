"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
    // if(!email && !password){

    // }

    redirect("/home");
  };

  return (
    <div className="my-auto flex h-[80vh] w-[40%] flex-col self-center justify-self-center rounded-2xl shadow-xl outline-1 outline-blue-200">
      <div className="font-inter text-primary text-4xl">Login page</div>

      {/* email input */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="username@company.co.id"
            className="mt-1 w-[50%] rounded border p-2"
          />
        </div>
        {/* password input */}
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="12345678"
            className="mt-1 w-[50%] rounded border p-2"
          />
        </div>
        {/* button input */}
        <button
          type="submit"
          className="bg-primary h-fit w-fit rounded-xl px-4 py-2 text-xl text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
