import React from 'react'
import { Svg } from './styles'

export const Logo = props => (
  <Svg
    width={532.438}
    height={122}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-16.219 14 532.438 122'
    style={{ background: '0 0' }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient
        id='b'
        x1={0}
        x2={1}
        y1={0.5}
        y2={0.5}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#774023' />
        <stop offset={1} stopColor='#d88c51' />
      </linearGradient>
      <filter id='a' x='-100%' y='-100%' width='300%' height='300%'>
        <feFlood floodColor='#f3e7c9' result='flood' />
        <feComposite
          operator='in'
          in2='SourceAlpha'
          in='flood'
          result='shadow'
        />
        <feOffset dx={-4} dy={-4} in='SourceGraphic' result='offset-1' />
        <feOffset dx={4} dy={4} in='shadow' result='offset-2' />
        <feMerge>
          <feMergeNode in='offset-2' />
          <feMergeNode in='offset-1' />
        </feMerge>
      </filter>
    </defs>
    <g filter='url(#a)'>
      <path
        d='M6.53 0H-.83l11.58-42.24h13.38l2.94 24.13 11.91-24.13h11.2l1.15 31.62q.25 6.27 3.33 8.19-.71 1.28-2.76 2.49-2.04 1.22-4.76 1.22-2.72 0-4.32-.77t-2.5-2.05q-1.6-2.3-1.6-6.72v-19.77L26.11 0h-7.93L13.7-28.74 6.53 0Zm53.66-1.92q-1.5-1.66-2.17-4.29-.68-2.62-.68-6.91t1.48-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.09 1.02-2.91 0-5.28-.77-2.36-.77-3.87-2.43ZM73.7-27.9q-.74 1.15-1.38 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.56-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.35-1.15-2.91-1.15-1.57 0-2.5.51-.93.51-1.66 1.67Zm43.04 5.44q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.24 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.51-1.47 2.69 0 4.36 1.02-.84 2.11-.84 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.72-2.04-1.72-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42t-4.77 1.6q-2.11 0-3.13-.7Zm43.39-4.16q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.54 0-2.43-.45.7-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.86-2.68-1.28 0-2.72 1.6-1.44 1.6-2.65 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.21 1.44 3.9 1.44 3.71 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.1 2.43-10.62 2.43-13 0-13-13.76 0-10.05 5.7-15.81 5.5-5.63 15.62-5.63 10.11 0 10.11 7.3Zm15.68 27.9q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.51-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.59 5.89Zm1.66-27.84q-.77 1.73-1.37 4.32-.61 2.59-1.38 6.69-.77 4.09-.77 9.15 0 1.66.55 2.75.54 1.09 2.01 1.09 1.47 0 2.4-.7.93-.71 1.63-2.37 1.28-2.95 2.31-8.42 1.02-5.47 1.12-7.84.09-2.37.09-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62ZM200.7-6.4q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63Zm37.44 2.88q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78Zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.83 1.35 1.83 3.84 0 2.5-2.02 3.78-2.02 1.28-5.02 1.28-3.01 0-4.9-1.28-1.89-1.28-1.89-3.78Zm39.94-1.15q15.68 0 15.68 11.07 0 6.08-3.91 9.73-3.84 3.65-10.56 3.65-3.13 0-5.56-1.79-1.16-.77-1.92-1.79 4.67 0 7.13-2.85 2.47-2.85 2.47-8.42t-5.51-5.57h-1.53q-.39 0-.71.07L256.83 0h-13.89l7.88-41.92q6.84-.64 10.81-.7 3.97-.07 6.98-.07ZM299.9-3.52q-1.98 4.8-8.32 4.8-3.2 0-5.24-2.24-1.67-1.86-1.67-3.97 0-4.8 2.24-15.29l4.67-24.58 13-1.28-6.21 32.38q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78Zm25.99.83q-3.07 3.97-10.69 3.97-3.97 0-6.85-2.4-2.88-2.4-2.88-5.86 0-1.92.19-2.88l4.29-22.78 12.99-1.28-4.67 24.7q-.25 1.41-.25 2.24 0 3.72 2.24 3.72 2.49 0 4.28-3.4.58-1.08.84-2.49l4.54-23.49 12.61-1.28-4.74 24.96q-.19.96-.19 1.98 0 1.03.58 2.15.57 1.12 2.43 1.37-.39 1.54-1.73 2.56-2.82 2.18-5.86 2.18-3.04 0-4.83-1.09t-2.3-2.88Zm39.23-19.77q.9-2.37.9-4.42 0-3.78-3.08-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.48 1.41 5.25 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.67-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.7 4.42-1.69 1.6-4.76 1.6-2.12 0-3.14-.7Z'
        fill='url(#b)'
        transform='translate(62.614 99)'
      />
    </g>
  </Svg>
)
