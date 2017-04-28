const styles = require('./card.less')

import { h, Component, ConnectParams, RenderParams, Node } from 'kaiju'
import { BigHeart } from 'commons/svg'


export default function(props: Props) {
  return Component<Props, State>({ name: 'card', props, initState, connect, render })
}



interface Props {
  name: string
  src: string
}


type State = {}

function initState() {
  return {
  } as State
}

function connect({}: ConnectParams<Props, State>) {}

function render({ props }: RenderParams<Props, State>): Node {
  return h(`div.${ styles.card }`, [
    h(`img.${ styles.img }`, { attrs: { src: props.src } } ),
    h(`div.${ styles.artistName }`, props.name),
    h(`div.${ styles.musicStyleScroll }`, [

      h(`div.${ styles.musicStyle }`, [
        h(`div.${ styles.itemStyle }`, 'Pop'),
        h(`div.${ styles.itemStyle }`, 'Rock'),
        h(`div.${ styles.itemStyle }`, 'Métal'),
        h(`div.${ styles.itemStyle }`, 'Rap'),
        h(`div.${ styles.itemStyle }`, 'Région parisienne'),
        h(`div.${ styles.itemStyle }`, '6 albums'),
      ]),
    ]),

    h(`div.${ styles.stat }`, [
      h('div', [
        h('span', ' 213.2 écoutes'),
        h('img', { attrs: { src: 'public/img/soundcloudLogo.png'} })
      ]),
      h('div', [
        h('span', ' 213.2 '),
        h('img', { attrs: { src: 'public/img/fbLike.png'} })
      ])
    ]),
    h(`div.${ styles.footer }`, [
      BigHeart()
    ])
  ])
}
