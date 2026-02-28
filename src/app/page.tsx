"use client";

import PromptInput from "@/components/prompt_textarea";
import { useState } from "react";

const page = () => {
  const [prompt, setPrompt] = useState<string>("");
  return (
    <>
      <header className="">
        <nav className="flex items-center justify-between py-4 px-10"></nav>
      </header>
      <main className="flex-1 h-screen flex items-center justify-center">
        <PromptInput />
      </main>
    </>
  );
};

export default page;
