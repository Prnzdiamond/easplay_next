// components/theme-provider.jsx

export function ThemeProvider({ children, defaultTheme = "light" }) {
  // Don't spread defaultTheme to DOM

  return (
    <div>
      {/* Use defaultTheme internally if needed */}
      {children}
    </div>
  );
}
