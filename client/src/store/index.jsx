import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#922d68',
  isLogoTextured: true,
  isFullTextured: true,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png'
})

export default state