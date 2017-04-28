const styles = require('./header.less')

import { h } from 'kaiju'
import { Route, link, routes } from 'router'

import { Search, Heart, Saving } from 'commons/svg'



export default function render(route: Route<{}>) {

  return h(`div.${ styles.header }`, [
    h(`div.${ styles.nav }`, [
      ,
      h(`div.${ styles.mainNav }`, [
        h(`button.${ styles.search }`, [
          Search(),
          h('span', 'Rechercher des artistes')
        ]),
        h('a',  {
          class: { [styles.active]: route.isIn(routes.search) },
          attrs: { href: link(routes.search, {}) }
        }, 'Recherche simple'),
        h('a', {
          class: { [styles.active]: route.isIn(routes.advancedSearch) },
          attrs: { href: link(routes.advancedSearch, {}) }
        }, 'Recherche avancée'),
      ]),
      h(`div.${ styles.buttons }`, [
        h(`button.${ styles.selection }`, [
          Saving(),
          h('span', 'Mes Recherches')
        ]),
        h(`button.${ styles.selection }`, [
          Heart(),
          h('span', 'Mes sélections')
        ])
      ]),
      h(`div.${ styles.avatar }`)
    ])
  ])
}