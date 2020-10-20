/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'article-list': '35rem',
        article: '65rem'
      },
      fontSize: {
        '2xs': '.6rem'
      }
    }
  },
  variants: {
    textColor: ['hover', 'group-hover']
  },
  plugins: []
}
