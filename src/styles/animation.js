import { keyframes, css } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyFrames} ${type};
`

const slideInLeftKeyFrames = keyframes`
  0% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`

export const slideInLeft = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${slideInLeftKeyFrames} ${type};
`

const slideInDownKeyFrames = keyframes`
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
    transform: scale(0.5);
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`
export const slideInDown = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${slideInDownKeyFrames} ${type};
`
