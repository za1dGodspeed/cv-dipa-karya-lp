module.exports = {
    content: ["./pages/*.{html,js}", "./index.html"],
    theme: {
        extend: {
            colors: {
                // Primary Colors - Authority Blue
                primary: {
                    50: "#EFF6FF", // blue-50
                    100: "#DBEAFE", // blue-100
                    200: "#BFDBFE", // blue-200
                    300: "#93C5FD", // blue-300
                    400: "#60A5FA", // blue-400
                    500: "#3B82F6", // blue-500 - Supporting blue for section hierarchy
                    600: "#2563EB", // blue-600
                    700: "#1D4ED8", // blue-700
                    800: "#1E40AF", // blue-800 - Authority blue for trust and credibility
                    900: "#1E3A8A", // blue-900
                    DEFAULT: "#1E40AF", // blue-800
                },

                // Secondary Colors - Supporting Blue
                secondary: {
                    50: "#EFF6FF", // blue-50
                    100: "#DBEAFE", // blue-100
                    200: "#BFDBFE", // blue-200
                    300: "#93C5FD", // blue-300
                    400: "#60A5FA", // blue-400
                    500: "#3B82F6", // blue-500 - Supporting blue for section hierarchy
                    600: "#2563EB", // blue-600
                    700: "#1D4ED8", // blue-700
                    800: "#1E40AF", // blue-800
                    900: "#1E3A8A", // blue-900
                    DEFAULT: "#3B82F6", // blue-500
                },

                // Accent Colors - Conversion Orange
                accent: {
                    50: "#FFF7ED", // orange-50
                    100: "#FFEDD5", // orange-100
                    200: "#FED7AA", // orange-200
                    300: "#FDBA74", // orange-300
                    400: "#FB923C", // orange-400
                    500: "#F97316", // orange-500 - High-conversion orange for CTAs only
                    600: "#EA580C", // orange-600
                    700: "#C2410C", // orange-700
                    800: "#9A3412", // orange-800
                    900: "#7C2D12", // orange-900
                    DEFAULT: "#F97316", // orange-500
                },

                // Background Colors
                background: "#FFFFFF", // white - Clean canvas maximizing content focus
                surface: "#F8FAFC", // slate-50 - Subtle section separation without borders

                // Text Colors
                text: {
                    primary: "#111827", // gray-900 - Maximum contrast for scanning
                    secondary: "#6B7280", // gray-500 - Supporting information without distraction
                },

                // Status Colors
                success: {
                    50: "#ECFDF5", // emerald-50
                    100: "#D1FAE5", // emerald-100
                    500: "#10B981", // emerald-500 - Positive reinforcement for reviews and guarantees
                    600: "#059669", // emerald-600
                    DEFAULT: "#10B981", // emerald-500
                },

                warning: {
                    50: "#FFFBEB", // amber-50
                    100: "#FEF3C7", // amber-100
                    500: "#F59E0B", // amber-500 - Scarcity indicators and limited offers
                    600: "#D97706", // amber-600
                    DEFAULT: "#F59E0B", // amber-500
                },

                error: {
                    50: "#FEF2F2", // red-50
                    100: "#FEE2E2", // red-100
                    500: "#EF4444", // red-500 - Form validation feedback only
                    600: "#DC2626", // red-600
                    DEFAULT: "#EF4444", // red-500
                },

                // Border Colors
                border: {
                    DEFAULT: "#E5E7EB", // gray-200 - Minimal use for form fields and comparison table cells
                    light: "#F3F4F6", // gray-100
                },
            },

            fontFamily: {
                // Headlines: Poppins (600, 700) - Bold authority
                poppins: ['Poppins', 'sans-serif'],
                // Body: Inter (400, 500) - Exceptional readability
                inter: ['Inter', 'sans-serif'],
                // Default sans
                sans: ['Inter', 'sans-serif'],
            },

            fontWeight: {
                'medium': '500',
                'semibold': '600',
                'bold': '700',
            },

            boxShadow: {
                'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1)', // Review cards shadow
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // CTA buttons shadow
                'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            },

            borderRadius: {
                'lg': '0.5rem',
                'xl': '0.75rem',
            },

            transitionDuration: {
                '200': '200ms',
                '300': '300ms',
            },

            transitionTimingFunction: {
                'in-out': 'ease-in-out',
            },

            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
        },
    },
    plugins: [],
}