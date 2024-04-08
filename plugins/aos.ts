import { Plugin } from '@nuxt/types'
import AOS from 'aos'
import 'aos/dist/aos.css'

const plugin: Plugin = (context) => {
  // Se usa el hook 'context' para acceder a la instancia de la aplicación
  // y registrar AOS como un plugin de Vue
  context.app.AOS = AOS.init({
    disable: window.innerWidth < 640,
    // offset: 200,
    duration: 600,
    easing: 'ease-in-out-cubic',
    once: true
  })
}

export default plugin
