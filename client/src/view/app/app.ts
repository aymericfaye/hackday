require('./app.less')

import { h, Component, ConnectParams, RenderParams, Node } from 'kaiju'
import { RouteDef } from 'router'

import Index from 'view/index'

export default function route() {
  return RouteDef('/', <Params>{}, {
    enter: router => (route, child) => app({ child, router, route }),
    children: {
      index: Index()
    }
  })
}

function app(props: Props) {
  return Component<Props, State>({ name: 'app', props, initState, connect, render })
}


type Params = {}

type Props = {}

type State = {}

function initState() {
  return {
  } as State
}

function connect({}: ConnectParams<Props, State>) {}

function render({}: RenderParams<Props, State>): Node[] {

  return [
    h('div', 'Hello')
  ]
}
