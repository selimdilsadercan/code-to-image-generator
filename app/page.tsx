"use client";

import { backgrounds, languages, themes } from "@/constants";
import { useState, useRef } from "react";
import { Download } from "lucide-react";
import CodeEditor from "@/components/CodeEditor";
import html2canvas from "html2canvas";
import LanguageSelector from "@/components/LanguageSelector";
import PaddingSelector from "@/components/PaddingSelector";
import ThemeSelector from "@/components/ThemeSelector";
import BackgroundSelector from "@/components/BackgroundSelector";

function Page() {
  const editorRef = useRef(null);

  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  const exportPng = async () => {
    const editorElem = editorRef.current;

    if (editorElem) {
      document.querySelectorAll(".handle").forEach((elem: any) => (elem.style.display = "none"));

      const canvas = await html2canvas(editorElem);
      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

      const link = document.createElement("a");
      link.download = "code.png";
      link.href = image;
      link.click();

      document.querySelectorAll(".handle").forEach((elem: any) => (elem.style.display = "block"));
    }
  };

  return (
    <div className="h-full flex flex-col items-center pt-8 justify-between bg-[#0d0d0d] text-[#848484]">
      <div className="code-editor-ref" ref={editorRef}>
        <CodeEditor language={language} theme={theme} background={background} icon={activeIcon} currentPadding={currentPadding} />
      </div>

      <div className="mb-8 flex gap-6 w-[940px] p-5 fixed bottom-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md">
        <LanguageSelector language={language} setLanguage={setLanguage} seActiveIcon={setActiveIcon} />
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <BackgroundSelector background={background} setBackground={setBackground} />
        <PaddingSelector paddings={paddings} currentPadding={currentPadding} setCurrentPadding={setCurrentPadding} />

        <div className="export-btn self-center ml-auto">
          <button
            className="flex items-center gap-2 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300"
            onClick={exportPng}
          >
            <Download size={20} />
            Export PNG
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
