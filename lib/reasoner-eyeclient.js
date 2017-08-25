'use strict'

const debug = require('debug')('reasoner-eyeclient')
const rdf = require('rdf-ext')
const rdfFetch = require('rdf-fetch')

const Reasoner = require('./reasoner')

/**
 * - addData(data) adds dataString or iri pointing to data which are not imported into the dataset but still are included in reasoning
 * - removeData(data) removes the data value from this.data
 * - getData() returns this.data
 * - setData(data) to replace this.data with data
 *   or use { options.data = [ 'iris', 'orStringOfTriples' ] } in Reasoner constructor // contains rdf&owl rules by default
 */
class ReasonerEyeClient extends Reasoner {
  constructor (options) {
    super(options)
    options = options || {}
    this.fetch = options.fetch || rdfFetch
    this.url = options.url || 'http://localhost:8000/'
    this.params = options.params || 'nope=true'
    this.query = options.query || '{ ?a ?b ?c. } => { ?a ?b ?c. }.' // query all
    this.data = options.data || [ 'http://eulersharp.sourceforge.net/2003/03swap/rpo-rules.n3' ] // rdf&owl rules
  }

  // data
  getData () {
    return this.data
  }
  setData (data) {
    return this.autoInfereEvent(rdf.asEvent(() => {
      return Promise.resolve().then(() => {
        this.data = data
      })
    }))
  }
  addData (data) {
    return this.autoInfereEvent(rdf.asEvent(() => {
      return Promise.resolve().then(() => {
        this.data.push(data)
      })
    }))
  }
  removeData (data) {
    return this.autoInfereEvent(rdf.asEvent(() => {
      return Promise.resolve().then(() => {
        const idx = this.data.indexOf(data)
        if (idx !== -1) {
          this.data.splice(idx, 1)
        }
      })
    }))
  }

  // Request to EyeServer
  reason () {
    return rdf.asEvent(() => {
      return new Promise((resolve, reject) => {
        this._buildBody().then((body) => {
          this.fetch(this.url + '?traditional=true&' + this.params, {
            method: 'POST',
            headers: {
              'Content-type': 'application/x-www-form-urlencoded'
            },
            body: body
          }).then((res) => {
            return res.quadStream()
          }).then((stream) => {
            this.inferred = this.factory.dataset()
            this.inferred.import(stream).then(() => {
              debug('source length: '); debug(this.dataset.length)
              debug('inferred length: '); debug(this.inferred.length)
              resolve()
            }).catch(reject)
          }).catch(reject)
        }).catch(reject)
      })
    })
  }

  // process a single data input for EyeServer Request
  // TODO: implement conversion to n3 if iri points to a RDF resource not parsable by Eye
  _processData (data) {
    return new Promise((resolve, reject) => {
      resolve(encodeURIComponent(data))
    })
  }

  // build EyeServer Request body
  _buildBody () {
    return new Promise((resolve, reject) => {
      debug('Data:')
      debug(this.data)
      let body = 'query=' + encodeURIComponent(this.query)
      const promises = []
      this.data.forEach((data) => {
        promises.push(this._processData(data))
      })
      let n = 0
      Promise.all(promises).then((results) => {
        results.forEach((result) => {
          if (result !== null) {
            body += '&data[' + (n++) + ']=' + result
          }
        })
        debug(body)
        body += '&data[' + n + ']=' + encodeURIComponent(this.dataset.toString())
        resolve(body)
      }).catch(reject)
    })
  }
}

module.exports = ReasonerEyeClient
