"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { backgrounds } from "@/constants";

interface Props {
  background: string;
  setBackground: (background: string) => void;
}

function BackgroundSelector({ background, setBackground }: Props) {
  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
  };

  return (
    <div>
      <p className="py-[5px] text-sm font-medium">Background Selector</p>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="h-[37px] rounded-[3px] border border-[#f9f9f945] p-1 flex items-center justify-between cursor-pointer">
            <div className="rounded-full w-[20px] h-[20px]" style={{ background: background }} />
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {backgrounds.map((backgrounditem, i) => (
            <DropdownMenuItem key={i} onClick={() => handleBackgroundChange(backgrounditem)}>
              <div className="rounded-full w-[20px] h-[20px]" style={{ background: backgrounditem }} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default BackgroundSelector;
