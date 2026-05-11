/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── Colours ────────────────────────────────────────────────────────────
      colors: {
        // Semantic
        'text-primary':    '#0d0d0d',
        'text-brand':      '#00ffa3',
        'bg-primary':      '#f9f9f9',
        'bg-brand':        '#00ffa3',
        'border-primary':  '#696969',
        'border-brand':    '#00ffa3',
        'icon-primary':    '#0d0d0d',
        'icon-brand':      '#00ffa3',
        // Raw aliases
        accent:            '#00ffa3',
        'almost-ink':      '#0d0d0d',
        'paper-white':     '#f9f9f9',
      },

      // ─── Typography ─────────────────────────────────────────────────────────
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)', 'monospace'],
      },
      // [size, { lineHeight, fontWeight, letterSpacing }]
      fontSize: {
        // Body scale
        'xs':   ['12px', { lineHeight: '1',    fontWeight: '400' }], // Body/XS
        'sm':   ['14px', { lineHeight: '20px', fontWeight: '400' }], // Body/S
        'base': ['16px', { lineHeight: '1',    fontWeight: '400' }], // Body/M
        // Heading scale
        'heading-s':  ['24px',  { lineHeight: '28px', fontWeight: '500' }], // Heading/S
        'heading-m':  ['28px',  { lineHeight: '28px', fontWeight: '500' }], // Heading/M
        'heading-l':  ['40px',  { lineHeight: '44px', fontWeight: '600' }], // Heading/L
        'heading-xl': ['64px',  { lineHeight: '1',    fontWeight: '700' }], // Heading/XL
        // Display
        'impact': ['240px', { lineHeight: '1', letterSpacing: '0.03em', fontWeight: '800' }], // Heading/Impact
        // Utility
        'eyebrow': ['12px', { lineHeight: '1',    fontWeight: '700' }], // Other/Eyebrow
        'button':  ['20px', { lineHeight: '20px', fontWeight: '700' }], // Other/Button
      },

      // ─── Spacing ────────────────────────────────────────────────────────────
      spacing: {
        'none':  '0px',
        'xxs':   '2px',
        'md':    '8px',
        'lg':    '12px',
        'xl':    '16px',
        '2xl':   '20px',
        '3xl':   '24px',
        '4xl':   '32px',
        '5xl':   '40px',
        '6xl':   '48px',
        '7xl':   '64px',
        '9xl':   '96px',
        '10xl':  '128px',
        // Container helpers
        'margin': '20px',
        'gutter': '20px',
      },

      // ─── Letter spacing ─────────────────────────────────────────────────────
      letterSpacing: {
        impact: '0.03em',
      },
    },
  },
  plugins: [],
};
