'use client';
import { cn } from '@/utils/lib';
import React, {
  createContext,
  KeyboardEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { DeviceAlternate, Moon, Sun } from '@/components/ui/icons/geist';

const themes = ['device', 'dark', 'light'] as const;

type Theme = (typeof themes)[number];

interface ThemeContextProps {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme hook is outside of the provider');
  return context;
};

export const ThemeProvider = ({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme: Theme;
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Helper function to apply the theme.
  const applyTheme = (currentTheme: Theme) => {
    if (currentTheme === 'device') {
      const devicePrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      document.documentElement.setAttribute(
        'data-theme',
        devicePrefersDark ? 'dark' : 'light',
      );
      document.documentElement.style.colorScheme = devicePrefersDark
        ? 'dark'
        : 'light';
    } else {
      document.documentElement.setAttribute('data-theme', currentTheme);
      document.documentElement.style.colorScheme = currentTheme;
    }
  };

  useEffect(() => {
    // Load theme from localStorage or default to 'device'
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'device';
    setTheme(savedTheme);
    applyTheme(savedTheme);

    // Add event listener for device theme changes if 'device' is selected
    const handleDeviceThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'device') {
        document.documentElement.setAttribute(
          'data-theme',
          e.matches ? 'dark' : 'light',
        );
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleDeviceThemeChange);

    return () =>
      mediaQuery.removeEventListener('change', handleDeviceThemeChange);
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function ThemeSwitch({ size = 24 }: { size?: number }) {
  const { theme, changeTheme } = useTheme();
  const [index, setIndex] = useState(themes.indexOf(theme));
  const ref = useRef<HTMLDivElement | null>(null);

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const themeItems = Array.from(
      event.currentTarget.querySelectorAll('[theme-item]'),
    ) as HTMLButtonElement[];

    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      event.preventDefault();
      const direction = event.code === 'ArrowRight' ? 1 : -1;
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
      className="relative flex items-center rounded-full border text-gray-900 size-fit"
      aria-label="Theme Switcher"
      onKeyDown={handleKeyDown}
    >
      <div
        className="absolute border rounded-full transition z-0"
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
            'inline-flex items-center justify-center hover:text-foreground transition relative z-[1] rounded-full',
            {
              'text-foreground': theme === themeOption,
            },
          )}
          style={{
            width: size,
            height: size,
          }}
          onClick={() => handleItemClick(themeOption, idx)}
        >
          {themeOption === 'device' && <DeviceAlternate size={size / 2} />}
          {themeOption === 'light' && <Sun size={size / 2} />}
          {themeOption === 'dark' && <Moon size={size / 2} />}
        </button>
      ))}
    </div>
  );
}
