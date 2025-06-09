import { createMixedTheme } from 'jimu-theme'

let defaultTheme = createMixedTheme({ uri: 'themes/test' } as any)
defaultTheme = defaultTheme.setIn(['colors', 'orgSharedColors'], {
  header: { color: '#ffffff' },
  body: { bg: '#ebebeb', color: '#5c5c5c', link: '#a80000' },
  button: { bg: '#004da8', color: '#ffffff' }
})
export default defaultTheme
