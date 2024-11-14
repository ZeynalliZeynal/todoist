"use client";
import { cn } from "@/utils/lib";
import {
  createContext,
  KeyboardEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DeviceAlternate, Moon, Sun } from "@/components/ui/icons/geist";

type Themes = "device" | "dark" | "light";

interface ThemeSwitcherContext {
  theme: Themes;
  changeTheme: (theme: Themes) => void;
}

const ThemeSwitcherContext = createContext<ThemeSwitcherContext | null>(null);

const useThemeSwitcher = () => {
  const context = useContext(ThemeSwitcherContext);
  if (!context) throw new Error("Context is outside of the provider");
  return context;
};

export const ThemeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Themes>("device");

  const changeTheme = (theme: Themes) => {
    setTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(JSON.parse(localStorage.getItem("theme") as string));
    }
  }, [theme]);

  useEffect(() => {
    if (theme === "device") {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        if (!document.documentElement.className.includes("dark"))
          document.documentElement.classList.add("dark");
      } else document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      if (!document.documentElement.className.includes("dark"))
        document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeSwitcherContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeSwitcherContext.Provider>
  );
};

type Theme = "device" | "light" | "dark";

export default function ThemeSwitch({ size = 24 }: { size?: number }) {
  const { theme, changeTheme } = useThemeSwitcher();
  const themes: Theme[] = useMemo(() => ["device", "light", "dark"], []);
  const [index, setIndex] = useState(themes.indexOf(theme));
  const ref = useRef<HTMLDivElement | null>(null);

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const themeItems = Array.from(
      event.currentTarget.querySelectorAll("[theme-item]"),
    ) as HTMLButtonElement[];

    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      event.preventDefault();
      const direction = event.code === "ArrowRight" ? 1 : -1;
      const newIndex =
        (index + direction + themeItems.length) % themeItems.length;
      setIndex(newIndex);
      changeTheme(themes[newIndex]);
      themeItems[newIndex].focus();
    }
  };

  const handleItemClick = (newTheme: Theme, newIndex: number) => {
    changeTheme(newTheme);
    setIndex(newIndex);
  };

  useEffect(() => {
    setIndex(themes.indexOf(theme));
  }, [theme, themes]);

  return (
    <div
      tabIndex={0}
      ref={ref}
      role="radiogroup"
      theme-container=""
      className="relative flex items-center rounded-full border text-gray-900 bg-background-100 w-fit"
      style={{
        height: size,
      }}
      aria-label="Theme Switcher"
      onKeyDown={handleKeyDown}
    >
      <div
        className="absolute border rounded-full transition bg-background-100 z-0"
        style={{
          width: size,
          height: size,
          transform: `translateX(${index * 100}%)`,
        }}
      />
      {themes.map((themeOption, idx) => (
        <button
          key={themeOption}
          tabIndex={-1}
          theme-item=""
          role="radio"
          aria-checked={theme === themeOption}
          className={cn(
            "inline-flex items-center justify-center hover:text-foreground transition relative z-[1] rounded-full",
            {
              "text-foreground": theme === themeOption,
            },
          )}
          style={{
            width: size,
            height: size,
          }}
          onClick={() => handleItemClick(themeOption, idx)}
        >
          {themeOption === "device" && <DeviceAlternate size={size / 2} />}
          {themeOption === "light" && <Sun size={size / 2} />}
          {themeOption === "dark" && <Moon size={size / 2} />}
        </button>
      ))}
    </div>
  );
}
