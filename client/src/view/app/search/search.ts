const styles = require('./search.less')

import { h, Component, Message, ConnectParams, RenderParams, VNode } from 'kaiju'
import { RouteDef, Router, Route } from 'router'
import { update } from 'immupdate'
import { Tick, Filtres } from 'commons/svg'
import Card from 'commons/widget/card'

interface Props {
  child: VNode
  router: Router
  route: Route<{}>
}

type Artiste = {
  discogs: {
    artistName: string
  }
}

interface State {
  selectedCriterias: Array<string>
  searchValue: string
  result?: Artiste[]
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
const search =  Message<Event>('search')
const updateResult = Message <Artiste[]> ('updateResult')

function initState(): State {
  return {
    selectedCriterias: [],
    searchValue: ''
  }
}

function connect({ msg, on }: ConnectParams<Props, State>) {

  on(addCriteria, (state, [criteria, _evt]) => {
  const isNewValue = state.selectedCriterias.find(v => v === criteria) === undefined
  const selectedVals = isNewValue
    ? state.selectedCriterias.concat(criteria)
    : state.selectedCriterias.filter(v => v === criteria ? undefined : criteria)
  return update(state, { selectedCriterias: selectedVals })
  })

  on(changeSearch, (state, evt) => {
    const searchValue = (evt.target as HTMLInputElement).value
    return update(state, { searchValue })
  })

  on(search, (state, _evt) => {
    console.log('search')
    fetch(`search/${ state.searchValue }`).then(res => {
      console.log(res)
      res.json().then( res => {
        msg.send(updateResult(res))
      })
    })
  })

  on(updateResult, (state, value) => update(state, { result: value }) )
}

function render({ state }: RenderParams<Props, State>): VNode {

  const criterias = ['critere1', 'critere2', 'critere3', 'critere4']
  const criteriasFormat = criterias.map(criteria => {
    return h(`div.${ styles.criteria }`, {
      events: {
        click: addCriteria.with(criteria)
      },
      class: {
        [styles.selected]: state.selectedCriterias.find(item => item === criteria) !== undefined
      }
    }, criteria)
  })

  return  h(`div.${ styles.content}`, [
    h(`div.${styles.contentSearch }`, [
      h(`div.${ styles.search }`, [
        h(`div.${styles.searchOption }`, criteriasFormat),
        h(`input.${ styles.customInput }`, {
          attrs: { autofocus: true, placeholder: 'Artiste'},
          events: { input: changeSearch } }
        ),
        h(`div.${ styles.validate }`, { events: { click: search } }, Tick())
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
    h(`div.${ styles.cards }`,

      state.result ? state.result.map(item => {
        return Card({
          name: item.discogs.artistName,
          src: ''
        })
      }) : ''

      // Card({
      //   name: 'Muse',
      //   src: 'public/img/Muse.jpg'
      // }),
      // Card({
      //   name: 'Rage against the machine',
      //   src: 'public/img/rage-against-the-machine.jpg'
      // }),
      // Card({
      //   name: 'Radiohead',
      //   src: 'public/img/radiohead.jpg'
      // }),
     )
  ])
}

function Search(props: Props) {
  return Component<Props, State>({ name: 'search', props, initState, connect, render })
}