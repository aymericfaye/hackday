import { h, VNode } from 'kaiju'

interface Props {
  viewBox: string
  className?: string
  color?: string
  width?: number
  height?: number
  path: {
    fill?: string
    stroke?: string
    d: string
  }[]
}

export default function(props: Props): VNode {
  const { className, viewBox, width, height, color, path } = props

  const pathList = path.map(item => Path(item))

  return (
    h('svg', {
      attrs: {
        viewBox,
        class: className,
        width,
        height,
        color
      }
    }, [
      h('g', {
        attrs: {
          'stroke': 'none',
          'stroke-width': 1,
          'fill': 'none',
          'fill-rule': 'evenodd'
        }
      }, pathList)
    ])
  )
}


interface PathProps {
  fill?: string
  stroke?: string
  d: string
}

function Path(props: PathProps) {
  const { fill, stroke, d } = props

  return (
    h('path', {
      attrs: {
        fill: fill || 'currentColor',
        stroke,
        d
      }
    })
  )
}