/* tslint:disable:max-line-length */

import { h } from 'kaiju'

export default (className?: string) => {
  return h('svg', {
    attrs: {
      className,
      viewBox: '0 0 17 17',
      height: 17,
      width: 17
    }
  }, [
   h('g', {
      attrs: {
        'stroke': 'none',
        'stroke-width': 1,
        'fill': 'none',
        'fill-rule': 'evenodd'
      }
    }, [
      h('g', {
        attrs: {
          transform: 'translate(-12.000000, -6.000000)',
          'stroke': 'currentColor',
          'stroke-width': 1.5,
        }
      }, [
        h('g', {
          attrs: {
            transform: 'translate(13.000000, 7.000000)'
          }
        }, [
          h('path', {
            attrs: {
              d: 'M3,1.5 L0.5,1.5 L3,1.5 C3,0.671572875 3.67157288,0 4.5,0 C5.32842712,0 6,0.671572875 6,1.5 L14.5,1.5 L6,1.5 C6,2.32842712 5.32842712,3 4.5,3 C3.67157288,3 3,2.32842712 3,1.5 Z'
            }
          }),
          h('path', {
            attrs: {
              d: 'M3,7.5 L0.5,7.5 L3,7.5 C3,6.67157288 3.67157288,6 4.5,6 C5.32842712,6 6,6.67157288 6,7.5 L14.5,7.5 L6,7.5 C6,8.32842712 5.32842712,9 4.5,9 C3.67157288,9 3,8.32842712 3,7.5 Z',
              transform: 'translate(7.500000, 7.500000) scale(-1, 1) translate(-7.500000, -7.500000)'
            }
          }),
          h('path', {
            attrs: {
              d: 'M3,13.5 L0.5,13.5 L3,13.5 C3,12.6715729 3.67157288,12 4.5,12 C5.32842712,12 6,12.6715729 6,13.5 L14.5,13.5 L6,13.5 C6,14.3284271 5.32842712,15 4.5,15 C3.67157288,15 3,14.3284271 3,13.5 Z'
            }
          })
        ])
      ])
    ])
  ])
}