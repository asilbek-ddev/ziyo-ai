"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (prompt.trim()) {
        setPrompt("");
      }
    }
  };

  return (
    <div className="fixed bottom-5 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:sticky md:bottom-5 md:left-auto md:right-auto w-auto md:w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto pt-2">
      <div className="relative group">
        <div className="relative flex rounded-[30px] border border-gray-500 dark:border-zinc-800/80 backdrop-blur-xl overflow-hidden">
          <Textarea
            id="prmpt_input"
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="How can I help you today?"
            name="textarea"
            autoFocus
            className="w-full min-h-10 sm:min-h-12 md:min-h-14 max-h-40 md:max-h-60 lg:max-h-72 py-5 md:py-4 mx-11.5 text-[15px] sm:text-base lg:text-lg bg-transparent border-none text-gray-800 dark:text-zinc-100 dark:placeholder-zinc-500 leading-relaxed resize-none overflow-y-auto no-scrollbar outline-none"
          />

          <Button
            variant="outline"
            className="absolute left-2.5 bottom-2.5 w-10 h-10 rounded-full cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-2 text-primary transition-colors duration-100"
            >
              {" "}
              <path
                d="M10 9V15C10 16.1046 10.8954 17 12 17V17C13.1046 17 14 16.1046 14 15V7C14 4.79086 12.2091 3 10 3V3C7.79086 3 6 4.79086 6 7V15C6 18.3137 8.68629 21 12 21V21C15.3137 21 18 18.3137 18 15V8"
                stroke="currentColor"
              ></path>{" "}
            </svg>
          </Button>

          <Button
            disabled={!prompt.trim()}
            className="absolute right-2.5 bottom-2.5 flex items-center justify-center w-10 h-10 rounded-full transition-all cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />{" "}
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
