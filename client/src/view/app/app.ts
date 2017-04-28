require('./app.less')
const styles = require('./search/search.less')


import { h, Message, Component, ConnectParams, RenderParams, Node } from 'kaiju'
import { RouteDef } from 'router'

import Search from 'view/app/search'
import Header from 'view/app/header'

import { Tick } from 'commons/svg'

export default function route() {
  return RouteDef('/', <Params>{}, {
    enter: router => (route, child) => app({ child, router, route }),
    children: {
      search: Search()
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

const changeSearch = Message<Event>('changeSearch')

function connect({}: ConnectParams<Props, State>) {}

function render({}: RenderParams<Props, State>): Node[] {

  return [
    Header(),
    h(`div.${ styles.content}`, [
      h(`div.${ styles.search }`, [
        h(`div.${styles.searchOption }`, 'kljs'),
        h(`input.${ styles.customInput }`, {
          attrs: { placeholder: 'artiste'},
          events: { change: changeSearch } }
        ),
        h(`div.${ styles.validate }`, Tick())
      ]),
      h(`div.${ styles.result }`, [
        h(`p`, '+10k'),
        h(`p`, 'artistes')
      ])
    ]),
    h(`div.${ styles.cards }`, 'klsdfn')
  ]
}
