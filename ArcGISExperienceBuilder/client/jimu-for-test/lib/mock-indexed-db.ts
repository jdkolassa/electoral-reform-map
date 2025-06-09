/** Mock indexedDB */
import { indexedDB } from 'fake-indexeddb'

export function mockIndexedDB () {
  if (!window.indexedDB) {
    window.indexedDB = indexedDB
  }
}
