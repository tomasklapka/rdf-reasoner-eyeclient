'use strict'

const rdf = require('rdf-ext')
const ReasonerEyeClient = require('..') // require('rdf-reasoner-eyeclient')

const additionalData = 'http://www.w3.org/1999/02/22-rdf-syntax-ns'
const fact = rdf.dataset([
  rdf.quad(
    rdf.namedNode('http://example.com/statement'),
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement')
  )
])

const eyeReasoner = new ReasonerEyeClient({ url: 'http://localhost:8000' })

console.log('fact:\n' + fact.toString())
rdf.waitFor(eyeReasoner.addData(additionalData)).then(() => {
  rdf.waitFor(eyeReasoner.import(fact.toStream())).then(() => {
    console.log('inferred:\n' + eyeReasoner.inferred.match(rdf.namedNode('http://example.com/statement')).toString())
  }).catch(errHandler)
}).catch(errHandler)

function errHandler (err) {
  console.error(err)
}
