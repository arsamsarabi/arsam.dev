import type { Config } from 'tailwindcss'

/* --------------------------------------
  Default breakpoints ->
    sm	640px
    md	768px
    lg	1024px
    xl	1280px
    2xl	1536px
-------------------------------------- */
const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: {
          primary: {
            lightest: 'var(--brand-primary-lightest)',
            light: 'var(--brand-primary-light)',
            DEFAULT: 'var(--brand-primary)',
            dark: 'var(--brand-primary-dark)',
            darkest: 'var(--brand-primary-darkest)',
          },
          secondary: {
            lightest: 'var(--brand-secondary-lightest)',
            light: 'var(--brand-secondary-light)',
            DEFAULT: 'var(--brand-secondary)',
            dark: 'var(--brand-secondary-dark)',
            darkest: 'var(--brand-secondary-darkest)',
          },
          accent: {
            lightest: 'var(--brand-accent-lightest)',
            light: 'var(--brand-accent-light)',
            DEFAULT: 'var(--brand-accent)',
            dark: 'var(--brand-accent-dark)',
            darkest: 'var(--brand-accent-darkest)',
          },
          success: {
            lightest: 'var(--brand-success-lightest)',
            light: 'var(--brand-success-light)',
            DEFAULT: 'var(--brand-success)',
            dark: 'var(--brand-success-dark)',
            darkest: 'var(--brand-success-darkest)',
          },
          danger: {
            lightest: 'var(--brand-danger-lightest)',
            light: 'var(--brand-danger-light)',
            DEFAULT: 'var(--brand-danger)',
            dark: 'var(--brand-danger-dark)',
            darkest: 'var(--brand-danger-darkest)',
          },
          light: 'hsl(var(--brand-light))',
          dark: 'hsl(var(--brand-dark))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
        code: [
          'var(--font-code)',
          "'Fira Code', 'Fira Mono', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
        ],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
