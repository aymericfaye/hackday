const styles = require('./card.less')

import { h, Component, ConnectParams, RenderParams, Node, VNode } from 'kaiju'


export default function(props: Props) {
  return Component<Props, State>({ name: 'card', props, initState, connect, render })
}



interface Props {
  content: VNode
}


type State = {}

function initState() {
  return {
  } as State
}

function connect({}: ConnectParams<Props, State>) {}

function render({ }: RenderParams<Props, State>): Node {
  return h(`div.${ styles.card }`, 'kdlnhd')
}
