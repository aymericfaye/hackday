const styles = require('./search.less')

import { h, Component, Message, ConnectParams, RenderParams, VNode } from 'kaiju'
import { RouteDef, Router, Route } from 'router'

interface Props {
  child: VNode
  router: Router
  route: Route<{}>
}

interface State {}

export default function route() {
  return RouteDef('search', <{}>{}, {
    enter: (router) => {
      return (route, child) => Search({ router, route, child })
    },
    children: {}
  })
}

const changeSearch = Message<Event>('changeSearch')

function initState(): State {
  return {
  }
}

function connect({}: ConnectParams<Props, State>) {
}

function render({  }: RenderParams<Props, State>): VNode {
  return h(`div.${ styles.search }`, [
    h(`div.${styles.searchOption }`),
    h(`input.${ styles.customInput }`, { events: { change: changeSearch } }
    )
  ])
}

function Search(props: Props) {
  return Component<Props, State>({ name: 'search', props, initState, connect, render })
}