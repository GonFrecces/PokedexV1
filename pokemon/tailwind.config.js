import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
        layout: {
            dividerWeight: "1px", // h-divider the default height applied to the divider component
            disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
            fontSize: {
                tiny: "0.75rem", // text-tiny
                small: "0.875rem", // text-small
                medium: "1rem", // text-medium
                large: "1.125rem", // text-large
            },
            lineHeight: {
                tiny: "1rem", // text-tiny
                small: "1.25rem", // text-small
                medium: "1.5rem", // text-medium
                large: "1.75rem", // text-large
            },
            radius: {
                small: "8px", // rounded-small
                medium: "12px", // rounded-medium
                large: "14px", // rounded-large
            },
            borderWidth: {
                small: "1px", // border-small
                medium: "2px", // border-medium (default)
                large: "3px", // border-large
            },
        },
        themes: {
            light: {
                layout: {
                    hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
                    boxShadow: {
                        // shadow-small
                        small:
                            "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
                        // shadow-medium
                        medium:
                            "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
                        // shadow-large
                        large:
                            "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
                    },
                },
                colors: {
                    background: "#FFFFFF",
                    foreground: "#11181C",
                    primary: {
                        50: "#F0F9FF",
                        100: "#E0F2FE",
                        200: "#BAE6FD",
                        300: "#7DD3FC",
                        400: "#38BDF8",
                        500: "#0EA5E9",
                        600: "#0284C7",
                        700: "#0369A1",
                        800: "#075985",
                        900: "#0C4A6E",
                        DEFAULT: "#0EA5E9",
                        foreground: "#FFFFFF",
                    },
                    secondary: {
                        50: "#F8FAFC",
                        100: "#F1F5F9",
                        200: "#E2E8F0",
                        300: "#CBD5E1",
                        400: "#94A3B8",
                        500: "#64748B",
                        600: "#475569",
                        700: "#334155",
                        800: "#1E293B",
                        900: "#0F172A",
                        DEFAULT: "#64748B",
                        foreground: "#FFFFFF",
                    },
                    success: {
                        50: "#F0FDF4",
                        100: "#DCFCE7",
                        200: "#BBF7D0",
                        300: "#86EFAC",
                        400: "#4ADE80",
                        500: "#22C55E",
                        600: "#16A34A",
                        700: "#15803D",
                        800: "#166534",
                        900: "#14532D",
                        DEFAULT: "#22C55E",
                        foreground: "#FFFFFF",
                    },
                    warning: {
                        50: "#FFFBEB",
                        100: "#FEF3C7",
                        200: "#FDE68A",
                        300: "#FCD34D",
                        400: "#FBBF24",
                        500: "#F59E0B",
                        600: "#D97706",
                        700: "#B45309",
                        800: "#92400E",
                        900: "#78350F",
                        DEFAULT: "#F59E0B",
                        foreground: "#FFFFFF",
                    },
                    danger: {
                        50: "#FEF2F2",
                        100: "#FEE2E2",
                        200: "#FECACA",
                        300: "#FCA5A5",
                        400: "#F87171",
                        500: "#EF4444",
                        600: "#DC2626",
                        700: "#B91C1C",
                        800: "#991B1B",
                        900: "#7F1D1D",
                        DEFAULT: "#EF4444",
                        foreground: "#FFFFFF",
                    }
                },
            },
            
            dark: {
                layout: {
                    hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
                    boxShadow: {
                        // shadow-small
                        small:
                            "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                        // shadow-medium
                        medium:
                            "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                        // shadow-large
                        large:
                            "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                    },
                },
                colors: {
                    background: "#000000",
                    foreground: "#ECEDEE",
                    primary: {
                        50: "#E6F1FE",
                        100: "#CCE4FD",
                        200: "#99C9FB",
                        300: "#66AEF9",
                        400: "#3393F7",
                        500: "#0078F5",
                        600: "#0060C4",
                        700: "#004893",
                        800: "#003062",
                        900: "#001831",
                        DEFAULT: "#0078F5",
                        foreground: "#FFFFFF",
                    },
                    secondary: {
                        50: "#F9FAFB",
                        100: "#F3F4F6",
                        200: "#E5E7EB",
                        300: "#D1D5DB",
                        400: "#9CA3AF",
                        500: "#6B7280",
                        600: "#4B5563",
                        700: "#374151",
                        800: "#1F2937",
                        900: "#111827",
                        DEFAULT: "#6B7280",
                        foreground: "#FFFFFF",
                    },
                    success: {
                        50: "#F0FDF4",
                        100: "#DCFCE7",
                        200: "#BBF7D0",
                        300: "#86EFAC",
                        400: "#4ADE80",
                        500: "#22C55E",
                        600: "#16A34A",
                        700: "#15803D",
                        800: "#166534",
                        900: "#14532D",
                        DEFAULT: "#22C55E",
                        foreground: "#FFFFFF",
                    },
                    warning: {
                        50: "#FFFBEB",
                        100: "#FEF3C7",
                        200: "#FDE68A",
                        300: "#FCD34D",
                        400: "#FBBF24",
                        500: "#F59E0B",
                        600: "#D97706",
                        700: "#B45309",
                        800: "#92400E",
                        900: "#78350F",
                        DEFAULT: "#F59E0B",
                        foreground: "#FFFFFF",
                    },
                    danger: {
                        50: "#FFF1F2",
                        100: "#FFE4E6",
                        200: "#FECDD3",
                        300: "#FDA4AF",
                        400: "#FB7185",
                        500: "#F43F5E",
                        600: "#E11D48",
                        700: "#BE123C",
                        800: "#9F1239",
                        900: "#881337",
                        DEFAULT: "#F43F5E",
                        foreground: "#FFFFFF",
                    }
                },
            },
        },
    })],
}
