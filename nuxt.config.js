import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    target: 'static',
  
    head: {
      title: 'Andre Digital Web Services',
      keywords: 'Web, digital, web design, web development, social media marketing, digital marketing',
      description: 'We are a social media marketing and web development service provider small to large business in Goa. Our rates are very reasonable and providing high value to your business.',
      author: 'Andre Digital Web Services',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  
    css: ["~/assets/css/global.css",],
  
    plugins: [],
    components: [
      {
        path: '~/components',
        extensions: ['.vue'],
      }
    ],
  
    buildModules: [
    ],

    modules: [
      'nuxt-windicss',
    ],
  
    build: {
    },
      
    /*
    ** Router configuration
    */
    router: {
      scrollBehavior: async (to, from, savedPosition) => {
        if (savedPosition) {
          return savedPosition
        }
  
        const findEl = async (hash, x) => {
          return document.querySelector(hash) ||
            new Promise((resolve, reject) => {
              if (x > 50) {
                return resolve()
              }
              setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
            })
        }
  
        if (to.hash) {
          let el = await findEl(to.hash)
          if ('scrollBehavior' in document.documentElement.style) {
            return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
          } else {
            return window.scrollTo(0, el.offsetTop)
          }
        }
  
        return { x: 0, y: 0 }
      }
    }
  });