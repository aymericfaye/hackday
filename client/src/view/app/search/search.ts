const styles = require('./search.less')

import { h, Component, Message, ConnectParams, RenderParams, VNode } from 'kaiju'
import { RouteDef, Router, Route } from 'router'
import { update } from 'immupdate'
import { Tick, Filtres } from 'commons/svg'

interface Props {
  child: VNode
  router: Router
  route: Route<{}>
}

interface State {
  selectedCriterias: Array<string>
}

export default function route() {
  return RouteDef('search', <{}>{}, {
    enter: (router) => {
      return (route, child) => Search({ router, route, child })
    },
    children: {}
  })
}

const changeSearch = Message<Event>('changeSearch')
const addCriteria = Message<[string, Event]>('addCriteria')

function initState(): State {
  return {
    selectedCriterias: []
  }
}

function connect({ on }: ConnectParams<Props, State>) {
  on(addCriteria, (state, [criteria, _evt]) => {
  const isNewValue = state.selectedCriterias.find(v => v === criteria) === undefined
  const selectedVals = isNewValue
    ? state.selectedCriterias.concat(criteria)
    : state.selectedCriterias.filter(v => v === criteria ? undefined : criteria)
  return update(state, { selectedCriterias: selectedVals })
  })
}

function render({ state }: RenderParams<Props, State>): VNode {

  const searchOptions = h(`div.${styles.searchOption }`, [
    h(`div.${ styles.criteria }`, {
      events: {
        click: addCriteria.with('criteria1')
      },
      class: {
        [styles.selected]: state.selectedCriterias.find(item => item === 'criteria1') !== undefined
      } },
      'critere1'),
    h(`div.${ styles.criteria }`, {
      events: {
        click: addCriteria.with('criteria2')
      },
      class: {
        [styles.selected]: state.selectedCriterias.find(item => item === 'criteria2') !== undefined
      } }, 'critere2'),
    h(`div.${ styles.criteria }`, {
      events: {
        click: addCriteria.with('criteria3')
      },
      class: {
        [styles.selected]: state.selectedCriterias.find(item => item === 'criteria3') !== undefined
      } }, 'critere3'),
    h(`div.${ styles.criteria }`, {
      events: {
        click: addCriteria.with('criteria4')
      },
      class: {
        [styles.selected]: state.selectedCriterias.find(item => item === 'criteria4') !== undefined
      } }, 'critere4'),
  ])

  return  h(`div.${ styles.content}`, [
    h(`div.${styles.contentSearch }`, [
      h(`div.${ styles.search }`, [
        searchOptions,
        h(`input.${ styles.customInput }`, {
          attrs: { autofocus: true, placeholder: 'Artiste'},
          events: { change: changeSearch } }
        ),
        h(`div.${ styles.validate }`, Tick())
      ]),
      h(`div.${ styles.result }`, [
        h(`p`, '+10k'),
        h(`p`, 'artistes')
      ])
    ]),
    h(`div.${ styles.button }`, [
      Filtres(),
      h('span', 'Proximité géographique')
      ]),
    h(`div.${ styles.cards }`, 'klsdfn')
  ])
}

function Search(props: Props) {
  return Component<Props, State>({ name: 'search', props, initState, connect, render })
}