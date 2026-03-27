/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',
  basePath: isProd ? '/meu-portifolio' : '',  
  images: {
    unoptimized: true,           
  },
}
