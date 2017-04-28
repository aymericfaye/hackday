/* tslint:disable:max-line-length */

import Svg from 'commons/svg'

export default () => {
  const d = 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'
  return Svg({
    viewBox: '0 0 25 24',
    width: 25,
    height: 24,
    path: [{
      d, fill: 'currentColor'
    }]
  })
}