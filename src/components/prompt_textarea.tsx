"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const adjustHeight = () => {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 280)}px`;
    };

    adjustHeight();
    textarea.addEventListener("input", adjustHeight);
    return () => textarea.removeEventListener("input", adjustHeight);
  }, [prompt]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (prompt.trim()) {
        setPrompt("");
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto pt-2">
      <div className="relative group">
        <div className="relative flex rounded-3xl border border-gray-500 dark:border-zinc-800/80 backdrop-blur-xl overflow-hidden">
          <Textarea
            id="prmpt_input"
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Nima haqida gaplashamiz?"
            className="w-full min-h-15 max-h-75 py-4.5 mx-13 bg-transparent inline border-none text-black/50 dark:text-zinc-100 dark:placeholder-zinc-500 text-lg leading-relaxed resize-none outline-none"
            name="input"
          />

          <Button
            variant={"outline"}
            className="absolute left-2.5 bottom-2.5 rounded-full w-10 h-10 cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-2 text-primary transition-colors duration-100"
            >
              <path
                d="M10 9V15C10 16.1046 10.8954 17 12 17V17C13.1046 17 14 16.1046 14 15V7C14 4.79086 12.2091 3 10 3V3C7.79086 3 6 4.79086 6 7V15C6 18.3137 8.68629 21 12 21V21C15.3137 21 18 18.3137 18 15V8"
                stroke="currentColor"
              ></path>
            </svg>
          </Button>

          {prompt.trim() ? (
            <Button
              variant={"secondary"}
              className={`absolute right-2.5 bottom-2.5 pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 cursor-pointer`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </Button>
          ) : (
            <Button
              disabled={!prompt.trim()}
              className={`absolute right-2.5 bottom-2.5 pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-no-drop bg-gray-500 hover:bg-gray-500 text-black`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
