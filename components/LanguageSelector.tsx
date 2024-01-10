"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { languages } from "@/constants";

interface Props {
  language: string;
  setLanguage: (language: string) => void;
  seActiveIcon: (icon: string) => void;
}

function LanguageSelector({ language, setLanguage, seActiveIcon }: Props) {
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find((lang) => lang.name === newLanguage)?.icon;

    if (newActiveIcon) {
      seActiveIcon(newActiveIcon);
    }
  };

  return (
    <div>
      <p className="py-[5px] text-sm font-medium">Language</p>
      <DropdownMenu>
        <DropdownMenuTrigger className="dropdown-title">
          <div className="h-[37px] rounded-[3px] border border-[#f9f9f945] p-1 flex items-center justify-between cursor-pointer">
            {language}
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {languages.map((language, i) => (
            <DropdownMenuItem key={i} onClick={() => handleLanguageChange(language.name)}>
              {language.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default LanguageSelector;
