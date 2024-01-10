"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { themes } from "@/constants";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <p className="py-[5px] text-sm font-medium">Code Colors</p>
      <DropdownMenu>
        <DropdownMenuTrigger className="dropdown-title">
          <div className="h-[37px] rounded-[3px] border border-[#f9f9f945] p-1 flex items-center justify-between cursor-pointer">
            {theme}
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {themes.map((themeitem, i) => (
            <DropdownMenuItem key={i} onClick={() => handleThemeChange(themeitem)}>
              {themeitem}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ThemeSelector;
