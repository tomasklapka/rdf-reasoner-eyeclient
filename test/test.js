/* global describe, it */
'use strict'

const debug = require('debug')('test')
const expect = require('chai').expect
const rdf = require('rdf-ext')
const streamToString = require('stream-to-string')
const ReasonerEyeClient = require('..')
const nockInit = require('./nock-init')

const eyeServerUrl = 'http://localhost:8000'

const additionalData = 'http://www.w3.org/1999/02/22-rdf-syntax-ns'
const fact = rdf.dataset([
  rdf.quad(
    rdf.namedNode('http://example.com/statement'),
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement')
  )
])
const expectedString =
  '<http://example.com/statement> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement> .' +
  '<http://example.com/statement> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2000/01/rdf-schema#Resource> .'

nockInit(eyeServerUrl)

describe('rdf-reasoner-eyeclient', () => {
  it('add data, import and then reason', (done) => {
    const eyeReasoner = new ReasonerEyeClient({ url: eyeServerUrl, autoinfere: false })
    debug('fact: ' + fact.toString())
    rdf.waitFor(eyeReasoner.addData(additionalData)).then(() => {
      rdf.waitFor(eyeReasoner.import(fact.toStream())).then(() => {
        rdf.waitFor(eyeReasoner.reason()).then(() => {
          streamToString(eyeReasoner.match(rdf.namedNode('http://example.com/statement'))).then((resultString) => {
            debug('inferred: ' + resultString)
            expect(resultString).to.be.equal(expectedString)
            done()
          })
        }).catch(done)
      }).catch(done)
    }).catch(done)
  })
  it('add data and import with autoinfering', (done) => {
    const eyeReasoner = new ReasonerEyeClient()
    debug('fact: ' + fact.toString())
    rdf.waitFor(eyeReasoner.addData(additionalData)).then(() => {
      rdf.waitFor(eyeReasoner.import(fact.toStream())).then(() => {
        streamToString(eyeReasoner.match(rdf.namedNode('http://example.com/statement'))).then((resultString) => {
          debug('inferred: ' + resultString)
          expect(resultString).to.be.equal(expectedString)
          done()
        })
      }).catch(done)
    }).catch(done)
  })
})
