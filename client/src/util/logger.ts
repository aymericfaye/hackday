import { log }     from 'kaiju'
import { Router }  from 'abyssa'
import queryString from './queryString'

const q = queryString('log')

if (['all', 'router'].indexOf(q) !== -1)
  Router.log = true

if (['all', 'kaiju', 'render'].indexOf(q) !== -1)
  log.render = true

if (['all', 'kaiju', 'message'].indexOf(q) !== -1)
  log.message = true

export function debugConvention(): boolean {
  return queryString('debug') === 'true'
}