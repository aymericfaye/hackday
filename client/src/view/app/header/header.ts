const styles = require('./header.less')

import { h } from 'kaiju'

import { Search, Heart, Saving } from 'commons/svg'

export default function render() {

  return h(`div.${ styles.header }`, [
    h(`div.${ styles.nav }`, [
      ,
      h(`div.${ styles.mainNav }`, [
      h(`button.${ styles.search }`, [
        Search(),
        h('span', 'Rechercher des artistes')
      ]),
      h('div', 'Recherche simple'),
        h('div', 'Recherche avancée'),
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