import { reversePalette } from 'styled-theme/composer'

const theme = {}
 
theme.palette = {
  primary: ['#ff0000', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#ffffff'],
}

theme.reversePalette = reversePalette(theme.palette)
 
theme.fonts = {
  primary: 'Open Sans, sans-serif',
}
 
theme.sizes = {
  maxWidth: '1100px'
}
 
export default theme