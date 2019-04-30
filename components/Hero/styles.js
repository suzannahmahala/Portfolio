import css from 'styled-jsx/css'
import { colors, media } from '../../theme'

// Scoped styles
export const hero = css`div { 
  background-color: ${colors.black};
  color: ${colors.white};
  height: 100vh;
}`

export const text = css`p {
  font-size: 30px;
  
  @media ${media.sm} {
    font-size: 60px;
  }
}`