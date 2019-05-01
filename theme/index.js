import css from 'styled-jsx/css'

export const colors = {
  black: '#15161b',
  white: '#ffffff'
}

export const media = {
  sm: `only screen and (min-width: 600px)`,
  md: `only screen and (min-width: 900px)`,
  lg: `only screen and (min-width: 1200px)`
}

export const body = css.global`
  body { 
    margin: 0;
    font-family: 'nueu-haas-unica', sans-serif;
    font-weight: 700;
    font-style: normal;
  }`

export const container = css`
  div {
    padding: 0 21px;
  }`