const styles = require('./advancedSearch.less')

import { h, Component, ConnectParams, RenderParams, VNode } from 'kaiju'
import { RouteDef, Router, Route } from 'router'


interface Props {
  child: VNode
  router: Router
  route: Route<{}>
}

interface State {}

export default function route() {
  return RouteDef('advancedSearch', <{}>{}, {
    enter: (router) => {
      return (route, child) => AdvancedSearch({ router, route, child })
    },
    children: {}
  })
}


function initState(): State {
  return {
  }
}

function connect({}: ConnectParams<Props, State>) {
}

function render({  }: RenderParams<Props, State>): VNode {
  return  h(`div.${ styles.content}`, 'Nothing here')
}

function AdvancedSearch(props: Props) {
  return Component<Props, State>({ name: 'advancedSearch', props, initState, connect, render })
}