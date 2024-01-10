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
          {theme}
          <ChevronDown />
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
