'use strict'

const debug = require('debug')('reasoner')
const rdf = require('rdf-ext')
const DatasetStore = require('rdf-store-dataset')

/**
 * abstract class Reasoner
 * Follows RDFJS specification API for Store
 * - import(dataStream) to import data to be inferred
 * - reason() to infere the data manually
 *   or use { options.autoinfere = true } in Reasoner constructor for automatic reasoning after every change. It's false by default
 * - match(subject, predicate, object, graph) to get data from inferred graph
 * - matchInSource(subject, predicate, object, graph) in graph of imported data
 * TODO:
 * - sameAs/isDefinedBy/... data fetching
 */
class Reasoner extends DatasetStore {
  constructor (options) {
    super(options)
    options = options || {}
    this.inferred = options.inferred || this.factory.dataset()
    this.autoinfere = options.autoinfere !== false
  }
  reason () {
    throw new Error('Not implemented. Reasoner is an abstract class. implement reason(): EventEmitter')
    // Hint for implementing:
    // - reason over this.dataset and put resulting triples into a new dataset saved in this.inferred.
    // - emit 'end' Event
  }
  match (subject, predicate, object, graph) {
    return this.inferred.match(subject, predicate, object, graph).toStream()
  }
  matchInSource (subject, predicate, object, graph) {
    return super.match(subject, predicate, object, graph)
  }
  import (stream, options) {
    return this.autoInfereEvent(super.import(stream, options))
  }
  remove (stream) {
    return this.autoInfereEvent(super.remove(stream))
  }
  removeMatches (subject = null, predicate = null, object = null, graph = null) {
    return this.autoInfereEvent(super.removeMatches(subject, predicate, object, graph))
  }
  deleteGraph (subject = null, predicate = null, object = null, graph = null) {
    return this.autoInfereEvent(super.deleteGraph(subject, predicate, object, graph))
  }
  autoInfereEvent (event) {
    if (!this.autoinfere) {
      return event
    }
    debug('autoinfering...')
    return rdf.asEvent(() => {
      return Promise.resolve().then(() => {
        return rdf.waitFor(event).then(() => {
          return rdf.waitFor(this.reason())
        }).catch((err) => { return Promise.reject(err) })
      }).catch((err) => { return Promise.reject(err) })
    })
  }
}

module.exports = Reasoner
