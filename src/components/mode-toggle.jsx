"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <motion.div
      whileHover={{
        y: 2,
      }}
    >
      <div
        className={`  flex items-center justify-center rounded-full p-1 ${
          theme === "light" ? "bg-black text-white" : " bg-white text-black"
        }            `}
        //   onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <button onClick={() => setTheme("light")} type="button">
            <Icon
              width="30"
              className="w-[30px] h-[30px] fill-black"
              icon="line-md:moon-filled-alt-loop"
            />
          </button>
        ) : (
          <button onClick={() => setTheme("dark")} type="button">
            <Icon
              width="30"
              className="w-[30px] h-[30px] fill-black"
              icon="line-md:sun-rising-loop"
            />
          </button>
        )}
      </div>
    </motion.div>
  );
}
