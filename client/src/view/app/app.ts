require('./app.less')

import { h, Component, ConnectParams, RenderParams, Node, VNode } from 'kaiju'
import { RouteDef, Route, Router } from 'router'

import Search from 'view/app/search'
import AdvancedSearch from 'view/app/advancedSearch'
import Header from 'view/app/header'


export default function route() {
  return RouteDef('/', <Params>{}, {
    enter: router => (route, child) => app({ child, router, route }),
    children: {
      search: Search(),
      advancedSearch: AdvancedSearch()
    }
  })
}

function app(props: Props) {
  return Component<Props, State>({ name: 'app', props, initState, connect, render })
}


type Params = {}

type Props = {
  router: Router
  route: Route<Params>
  child: VNode
}

type State = {}

function initState() {
  return {
  } as State
}

function connect({}: ConnectParams<Props, State>) {}

function render({ props }: RenderParams<Props, State>): Node[] {
  const { child, route } = props

  return [
    Header(route),
    h('div', child),
  ]
}
