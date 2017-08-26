# rdf reasoner EyeClient

This is an [EyeServer](https://github.com/RubenVerborgh/EyeServer) client with [RDFJS specification Store interface](http://rdf.js.org/#store-interface) (extends [rdf-store-dataset](https://github.com/rdf-ext/rdf-store-dataset)).

You need an [EyeServer](https://github.com/RubenVerborgh/EyeServer) instance running (available as a [docker image](https://hub.docker.com/r/bdevloed/eyeserver/)).

For more detailed information about the EYE reasoner visit http://reasoning.restdesc.org/

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

Use `reasoner.import(stream)` to load data into the reasoner and use `reasoner.match(subject, predicate, object)` to get filtered stream of inferred data.

Data manipulation, adding and importing fires the reasoning process if `autoinfere` option is `true` (it's `true` by default).

Use `reasoner.reason()` to fire reasoning event on request.

You can access `reasoner.inferred` [Dataset](https://github.com/rdf-ext/rdf-dataset-simple) with sync interface if you don't want to get the dataset streamed by `reasoner.match`

This module contains an abstract class [Reasoner](https://github.com/tomasklapka/rdf-reasoner-eyeclient/blob/master/lib/reasoner.js) which can be used to extend with another reasoner backend. It is enough to implement the reason() method taking data from this.dataset, inferring them and putting the result into this.inferred.

### managing additional reasoning data

```javascript
getData ()           // returns data array (does not fire autoinferring)
setData (data)       // sets the data array
addData (data)       // adds an element into the data array
removeData (data)    // removes an element from the data array
```

### examples
 - [example/index.js](https://github.com/tomasklapka/rdf-reasoner-eyeclient/blob/master/example/index.js)
 - [test/index.js](https://github.com/tomasklapka/rdf-reasoner-eyeclient/blob/master/test/test.js)
