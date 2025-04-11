module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}