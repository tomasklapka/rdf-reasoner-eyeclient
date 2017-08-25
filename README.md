# rdf reasoner EyeClient

This is a client for an [EyeServer](https://github.com/RubenVerborgh/EyeServer) with [RDFJS specification Store](http://rdf.js.org/#store-interface) interface.

You need an [EyeServer](https://github.com/RubenVerborgh/EyeServer) running ([docker](https://hub.docker.com/r/bdevloed/eyeserver/)).

For more detailed information about the Eye Reasoner visit http://reasoning.restdesc.org/

### usage

```javascript
const ReasonerEyeClient = require('rdf-reasoner-eyeclient')
const reasoner = new ReasonerEyeClient({
    // all these options are default values
    url: 'http://localhost:8000', // EyeServer's url path (w/o '?' and the query)
    params: 'nope=true',          // parameters for EyeServer (separated by &)
    autoinfere: true,             // runs reasoner after every import of change
    data: [ 'http://eulersharp.sourceforge.net/2003/03swap/rpo-rules.n3' ],
                                  // RDF&OWL reasoning by default
    query: '{ ?a ?b ?c. } => { ?a ?b ?c. }.',
                                  // query all
    fetch: require('rdf-fetch')   // fetch implementation
})
```

Use `import(stream)` to load data into a reasoner and use `match(subject, predicate, object)` to get filtered stream of inferred data.

Methods doing changes fire reasoning if `autoinfere` option is `true` (it's `true` by default).

Otherwise use `reason()` to fire reasoning event on request.

You can access `reasoner.inferred` dataset directly if you want to quickly access the inferred data.

### managing additional reasoning data

```javascript
getData ()           // returns data array (does not fire autoinferring)
setData (data)       // sets the data array
addData (data)       // adds an element into the data array
removeData (data)    // removes an element from the data array
```

### examples
 - [example/index.js](https://github.com/tomasklapka/rdf-reasoner-eyeclient/blob/master/src/example/index.js)
 - [test/index.js](https://github.com/tomasklapka/rdf-reasoner-eyeclient/blob/master/src/test/index.js)