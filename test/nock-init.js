'use strict'

const nock = require('nock')
nock.disableNetConnect()
// nock.recorder.rec();

function nockInit (host) {
  nock(host, {'encodedQueryParams': true})
  .post('/', 'query=%7B%20%3Fa%20%3Fb%20%3Fc.%20%7D%20%3D%3E%20%7B%20%3Fa%20%3Fb%20%3Fc.%20%7D.&data[0]=http%3A%2F%2Feulersharp.sourceforge.net%2F2003%2F03swap%2Frpo-rules.n3&data[1]=http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns&data[2]=%3Chttp%3A%2F%2Fexample.com%2Fstatement%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23type%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23Statement%3E%20.%0A')
  .query({'traditional': 'true', 'nope': 'true'})
  .reply(200, '@prefix log: <http://www.w3.org/2000/10/swap/log#>.\n@prefix math: <http://www.w3.org/2000/10/swap/math#>.\n@prefix list: <http://www.w3.org/2000/10/swap/list#>.\n@prefix owl: <http://www.w3.org/2002/07/owl#>.\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n@prefix : <http://eulersharp.sourceforge.net/2003/03swap/rpo-rules#>.\n@prefix dc: <http://purl.org/dc/elements/1.1/>.\n\nrdf:first a rdf:Property.\nrdf:rest a rdf:Property.\nrdfs:subClassOf a rdf:Property.\nrdfs:subClassOf a owl:TransitiveProperty.\nrdfs:subPropertyOf a rdf:Property.\nrdfs:subPropertyOf a owl:TransitiveProperty.\nowl:equivalentClass a rdf:Property.\nowl:equivalentClass a owl:SymmetricProperty.\nowl:equivalentProperty a rdf:Property.\nowl:equivalentProperty a owl:SymmetricProperty.\nowl:sameAs a rdf:Property.\nowl:sameAs a owl:SymmetricProperty.\nowl:sameAs a owl:TransitiveProperty.\nowl:inverseOf a rdf:Property.\nowl:inverseOf a owl:SymmetricProperty.\nowl:differentFrom a rdf:Property.\nowl:differentFrom a owl:SymmetricProperty.\nowl:distinctMembers a rdf:Property.\nowl:oneOf a rdf:Property.\nowl:intersectionOf a rdf:Property.\nowl:unionOf a rdf:Property.\nowl:complementOf a rdf:Property.\n:subListOf a rdf:Property.\n:inAllOf a rdf:Property.\n:inSomeOf a rdf:Property.\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> a owl:Ontology.\nrdf:HTML a rdfs:Datatype.\nrdf:langString a rdfs:Datatype.\nrdf:PlainLiteral a rdfs:Datatype.\nrdf:type a rdf:Property.\nrdf:Property a rdfs:Class.\nrdf:Statement a rdfs:Class.\nrdf:subject a rdf:Property.\nrdf:predicate a rdf:Property.\nrdf:object a rdf:Property.\nrdf:Bag a rdfs:Class.\nrdf:Seq a rdfs:Class.\nrdf:Alt a rdfs:Class.\nrdf:value a rdf:Property.\nrdf:List a rdfs:Class.\n() a rdf:List.\nrdf:XMLLiteral a rdfs:Datatype.\n<http://example.com/statement> a rdf:Statement.\nrdf:HTML a rdfs:Class.\nrdf:langString a rdfs:Class.\nrdf:PlainLiteral a rdfs:Class.\nrdf:XMLLiteral a rdfs:Class.\nrdf:first a rdfs:Resource.\nrdf:rest a rdfs:Resource.\nrdfs:subClassOf a rdfs:Resource.\nrdfs:subPropertyOf a rdfs:Resource.\nowl:equivalentClass a rdfs:Resource.\nowl:equivalentProperty a rdfs:Resource.\nowl:sameAs a rdfs:Resource.\nowl:inverseOf a rdfs:Resource.\nowl:differentFrom a rdfs:Resource.\nowl:distinctMembers a rdfs:Resource.\nowl:oneOf a rdfs:Resource.\nowl:intersectionOf a rdfs:Resource.\nowl:unionOf a rdfs:Resource.\nowl:complementOf a rdfs:Resource.\n:subListOf a rdfs:Resource.\n:inAllOf a rdfs:Resource.\n:inSomeOf a rdfs:Resource.\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> a rdfs:Resource.\nrdf:HTML a rdfs:Resource.\nrdf:langString a rdfs:Resource.\nrdf:PlainLiteral a rdfs:Resource.\nrdf:type a rdfs:Resource.\nrdf:Property a rdfs:Resource.\nrdf:Statement a rdfs:Resource.\nrdf:subject a rdfs:Resource.\nrdf:predicate a rdfs:Resource.\nrdf:object a rdfs:Resource.\nrdf:Bag a rdfs:Resource.\nrdf:Seq a rdfs:Resource.\nrdf:Alt a rdfs:Resource.\nrdf:value a rdfs:Resource.\nrdf:List a rdfs:Resource.\n() a rdfs:Resource.\nrdf:XMLLiteral a rdfs:Resource.\n<http://example.com/statement> a rdfs:Resource.\nrdfs:Literal a rdfs:Class.\nrdfs:Resource a rdfs:Class.\nrdfs:Container a rdfs:Class.\nowl:TransitiveProperty a rdfs:Class.\nowl:SymmetricProperty a rdfs:Class.\nowl:Ontology a rdfs:Class.\nrdfs:Datatype a rdfs:Class.\nrdfs:Class a rdfs:Class.\nrdfs:Literal a rdfs:Resource.\nrdfs:Resource a rdfs:Resource.\nrdfs:Container a rdfs:Resource.\nowl:TransitiveProperty a rdfs:Resource.\nowl:SymmetricProperty a rdfs:Resource.\nowl:Ontology a rdfs:Resource.\nrdfs:Datatype a rdfs:Resource.\nrdfs:Class a rdfs:Resource.\nrdf:first rdfs:domain rdf:List.\nrdf:rest rdfs:domain rdf:List.\nrdfs:subClassOf rdfs:domain rdfs:Class.\nrdfs:subPropertyOf rdfs:domain rdf:Property.\nowl:equivalentClass rdfs:domain rdfs:Class.\nowl:equivalentProperty rdfs:domain rdf:Property.\nowl:inverseOf rdfs:domain owl:ObjectProperty.\nowl:distinctMembers rdfs:domain owl:AllDifferent.\nowl:oneOf rdfs:domain rdfs:Class.\nowl:intersectionOf rdfs:domain rdfs:Class.\nowl:unionOf rdfs:domain rdfs:Class.\nowl:complementOf rdfs:domain rdfs:Class.\n:subListOf rdfs:domain rdf:List.\nrdf:type rdfs:domain rdfs:Resource.\nrdf:subject rdfs:domain rdf:Statement.\nrdf:predicate rdfs:domain rdf:Statement.\nrdf:object rdfs:domain rdf:Statement.\nrdf:value rdfs:domain rdfs:Resource.\nrdf:rest rdfs:range rdf:List.\nrdfs:subClassOf rdfs:range rdfs:Class.\nrdfs:subPropertyOf rdfs:range rdf:Property.\nowl:equivalentClass rdfs:range rdfs:Class.\nowl:equivalentProperty rdfs:range rdf:Property.\nowl:inverseOf rdfs:range owl:ObjectProperty.\nowl:distinctMembers rdfs:range rdf:List.\nowl:oneOf rdfs:range rdf:List.\nowl:intersectionOf rdfs:range rdf:List.\nowl:unionOf rdfs:range rdf:List.\nowl:complementOf rdfs:range rdfs:Class.\n:subListOf rdfs:range rdf:List.\n:inAllOf rdfs:range rdf:List.\n:inSomeOf rdfs:range rdf:List.\nrdf:type rdfs:range rdfs:Class.\nrdf:subject rdfs:range rdfs:Resource.\nrdf:predicate rdfs:range rdfs:Resource.\nrdf:object rdfs:range rdfs:Resource.\nrdf:value rdfs:range rdfs:Resource.\nrdf:first rdfs:range rdfs:Resource.\nowl:equivalentClass rdfs:subPropertyOf rdfs:subClassOf.\nowl:equivalentProperty rdfs:subPropertyOf rdfs:subPropertyOf.\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> <http://purl.org/dc/elements/1.1/title> "The RDF Concepts Vocabulary (RDF)".\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> <http://purl.org/dc/elements/1.1/description> "This is the RDF Schema for the RDF vocabulary terms in the RDF Namespace, defined in RDF 1.1 Concepts.".\nrdf:HTML rdfs:subClassOf rdfs:Literal.\nrdf:langString rdfs:subClassOf rdfs:Literal.\nrdf:PlainLiteral rdfs:subClassOf rdfs:Literal.\nrdf:Property rdfs:subClassOf rdfs:Resource.\nrdf:Statement rdfs:subClassOf rdfs:Resource.\nrdf:Bag rdfs:subClassOf rdfs:Container.\nrdf:Seq rdfs:subClassOf rdfs:Container.\nrdf:Alt rdfs:subClassOf rdfs:Container.\nrdf:List rdfs:subClassOf rdfs:Resource.\nrdf:XMLLiteral rdfs:subClassOf rdfs:Literal.\nrdf:HTML rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:langString rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:PlainLiteral rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:type rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Property rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Statement rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:subject rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:predicate rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:object rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Bag rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Seq rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Alt rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:value rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:List rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n() rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:first rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:rest rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:XMLLiteral rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:HTML rdfs:seeAlso <http://www.w3.org/TR/rdf11-concepts/#section-html>.\nrdf:langString rdfs:seeAlso <http://www.w3.org/TR/rdf11-concepts/#section-Graph-Literal>.\nrdf:PlainLiteral rdfs:seeAlso <http://www.w3.org/TR/rdf-plain-literal/>.\nrdf:HTML rdfs:label "HTML".\nrdf:langString rdfs:label "langString".\nrdf:PlainLiteral rdfs:label "PlainLiteral".\nrdf:type rdfs:label "type".\nrdf:Property rdfs:label "Property".\nrdf:Statement rdfs:label "Statement".\nrdf:subject rdfs:label "subject".\nrdf:predicate rdfs:label "predicate".\nrdf:object rdfs:label "object".\nrdf:Bag rdfs:label "Bag".\nrdf:Seq rdfs:label "Seq".\nrdf:Alt rdfs:label "Alt".\nrdf:value rdfs:label "value".\nrdf:List rdfs:label "List".\n() rdfs:label "nil".\nrdf:first rdfs:label "first".\nrdf:rest rdfs:label "rest".\nrdf:XMLLiteral rdfs:label "XMLLiteral".\nrdf:HTML rdfs:comment "The datatype of RDF literals storing fragments of HTML content".\nrdf:langString rdfs:comment "The datatype of language-tagged string values".\nrdf:PlainLiteral rdfs:comment "The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2".\nrdf:type rdfs:comment "The subject is an instance of a class.".\nrdf:Property rdfs:comment "The class of RDF properties.".\nrdf:Statement rdfs:comment "The class of RDF statements.".\nrdf:subject rdfs:comment "The subject of the subject RDF statement.".\nrdf:predicate rdfs:comment "The predicate of the subject RDF statement.".\nrdf:object rdfs:comment "The object of the subject RDF statement.".\nrdf:Bag rdfs:comment "The class of unordered containers.".\nrdf:Seq rdfs:comment "The class of ordered containers.".\nrdf:Alt rdfs:comment "The class of containers of alternatives.".\nrdf:value rdfs:comment "Idiomatic property used for structured values.".\nrdf:List rdfs:comment "The class of RDF Lists.".\n() rdfs:comment "The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it.".\nrdf:first rdfs:comment "The first item in the subject RDF list.".\nrdf:rest rdfs:comment "The rest of the subject RDF list after the first item.".\nrdf:XMLLiteral rdfs:comment "The datatype of XML literal values.".\n() :subListOf ().\n', [ 'X-Powered-By',
    'EYE Server',
    'Access-Control-Allow-Origin',
    '*',
    'Content-Type',
    'text/n3',
    'Content-Length',
    '9386',
    'Date',
    'Fri, 25 Aug 2017 21:40:41 GMT',
    'Connection',
    'close' ])

  nock(host, {'encodedQueryParams': true})
  .post('/', 'query=%7B%20%3Fa%20%3Fb%20%3Fc.%20%7D%20%3D%3E%20%7B%20%3Fa%20%3Fb%20%3Fc.%20%7D.&data[0]=http%3A%2F%2Feulersharp.sourceforge.net%2F2003%2F03swap%2Frpo-rules.n3&data[1]=http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns&data[2]=')
  .query({'traditional': 'true', 'nope': 'true'})
  .reply(200, '@prefix log: <http://www.w3.org/2000/10/swap/log#>.\n@prefix math: <http://www.w3.org/2000/10/swap/math#>.\n@prefix list: <http://www.w3.org/2000/10/swap/list#>.\n@prefix owl: <http://www.w3.org/2002/07/owl#>.\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n@prefix : <http://eulersharp.sourceforge.net/2003/03swap/rpo-rules#>.\n@prefix dc: <http://purl.org/dc/elements/1.1/>.\n\nrdf:first a rdf:Property.\nrdf:rest a rdf:Property.\nrdfs:subClassOf a rdf:Property.\nrdfs:subClassOf a owl:TransitiveProperty.\nrdfs:subPropertyOf a rdf:Property.\nrdfs:subPropertyOf a owl:TransitiveProperty.\nowl:equivalentClass a rdf:Property.\nowl:equivalentClass a owl:SymmetricProperty.\nowl:equivalentProperty a rdf:Property.\nowl:equivalentProperty a owl:SymmetricProperty.\nowl:sameAs a rdf:Property.\nowl:sameAs a owl:SymmetricProperty.\nowl:sameAs a owl:TransitiveProperty.\nowl:inverseOf a rdf:Property.\nowl:inverseOf a owl:SymmetricProperty.\nowl:differentFrom a rdf:Property.\nowl:differentFrom a owl:SymmetricProperty.\nowl:distinctMembers a rdf:Property.\nowl:oneOf a rdf:Property.\nowl:intersectionOf a rdf:Property.\nowl:unionOf a rdf:Property.\nowl:complementOf a rdf:Property.\n:subListOf a rdf:Property.\n:inAllOf a rdf:Property.\n:inSomeOf a rdf:Property.\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> a owl:Ontology.\nrdf:HTML a rdfs:Datatype.\nrdf:langString a rdfs:Datatype.\nrdf:PlainLiteral a rdfs:Datatype.\nrdf:type a rdf:Property.\nrdf:Property a rdfs:Class.\nrdf:Statement a rdfs:Class.\nrdf:subject a rdf:Property.\nrdf:predicate a rdf:Property.\nrdf:object a rdf:Property.\nrdf:Bag a rdfs:Class.\nrdf:Seq a rdfs:Class.\nrdf:Alt a rdfs:Class.\nrdf:value a rdf:Property.\nrdf:List a rdfs:Class.\n() a rdf:List.\nrdf:XMLLiteral a rdfs:Datatype.\nrdf:HTML a rdfs:Class.\nrdf:langString a rdfs:Class.\nrdf:PlainLiteral a rdfs:Class.\nrdf:XMLLiteral a rdfs:Class.\nrdf:first a rdfs:Resource.\nrdf:rest a rdfs:Resource.\nrdfs:subClassOf a rdfs:Resource.\nrdfs:subPropertyOf a rdfs:Resource.\nowl:equivalentClass a rdfs:Resource.\nowl:equivalentProperty a rdfs:Resource.\nowl:sameAs a rdfs:Resource.\nowl:inverseOf a rdfs:Resource.\nowl:differentFrom a rdfs:Resource.\nowl:distinctMembers a rdfs:Resource.\nowl:oneOf a rdfs:Resource.\nowl:intersectionOf a rdfs:Resource.\nowl:unionOf a rdfs:Resource.\nowl:complementOf a rdfs:Resource.\n:subListOf a rdfs:Resource.\n:inAllOf a rdfs:Resource.\n:inSomeOf a rdfs:Resource.\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> a rdfs:Resource.\nrdf:HTML a rdfs:Resource.\nrdf:langString a rdfs:Resource.\nrdf:PlainLiteral a rdfs:Resource.\nrdf:type a rdfs:Resource.\nrdf:Property a rdfs:Resource.\nrdf:Statement a rdfs:Resource.\nrdf:subject a rdfs:Resource.\nrdf:predicate a rdfs:Resource.\nrdf:object a rdfs:Resource.\nrdf:Bag a rdfs:Resource.\nrdf:Seq a rdfs:Resource.\nrdf:Alt a rdfs:Resource.\nrdf:value a rdfs:Resource.\nrdf:List a rdfs:Resource.\n() a rdfs:Resource.\nrdf:XMLLiteral a rdfs:Resource.\nrdfs:Literal a rdfs:Class.\nrdfs:Resource a rdfs:Class.\nrdfs:Container a rdfs:Class.\nowl:TransitiveProperty a rdfs:Class.\nowl:SymmetricProperty a rdfs:Class.\nowl:Ontology a rdfs:Class.\nrdfs:Datatype a rdfs:Class.\nrdfs:Class a rdfs:Class.\nrdfs:Literal a rdfs:Resource.\nrdfs:Resource a rdfs:Resource.\nrdfs:Container a rdfs:Resource.\nowl:TransitiveProperty a rdfs:Resource.\nowl:SymmetricProperty a rdfs:Resource.\nowl:Ontology a rdfs:Resource.\nrdfs:Datatype a rdfs:Resource.\nrdfs:Class a rdfs:Resource.\nrdf:first rdfs:domain rdf:List.\nrdf:rest rdfs:domain rdf:List.\nrdfs:subClassOf rdfs:domain rdfs:Class.\nrdfs:subPropertyOf rdfs:domain rdf:Property.\nowl:equivalentClass rdfs:domain rdfs:Class.\nowl:equivalentProperty rdfs:domain rdf:Property.\nowl:inverseOf rdfs:domain owl:ObjectProperty.\nowl:distinctMembers rdfs:domain owl:AllDifferent.\nowl:oneOf rdfs:domain rdfs:Class.\nowl:intersectionOf rdfs:domain rdfs:Class.\nowl:unionOf rdfs:domain rdfs:Class.\nowl:complementOf rdfs:domain rdfs:Class.\n:subListOf rdfs:domain rdf:List.\nrdf:type rdfs:domain rdfs:Resource.\nrdf:subject rdfs:domain rdf:Statement.\nrdf:predicate rdfs:domain rdf:Statement.\nrdf:object rdfs:domain rdf:Statement.\nrdf:value rdfs:domain rdfs:Resource.\nrdf:rest rdfs:range rdf:List.\nrdfs:subClassOf rdfs:range rdfs:Class.\nrdfs:subPropertyOf rdfs:range rdf:Property.\nowl:equivalentClass rdfs:range rdfs:Class.\nowl:equivalentProperty rdfs:range rdf:Property.\nowl:inverseOf rdfs:range owl:ObjectProperty.\nowl:distinctMembers rdfs:range rdf:List.\nowl:oneOf rdfs:range rdf:List.\nowl:intersectionOf rdfs:range rdf:List.\nowl:unionOf rdfs:range rdf:List.\nowl:complementOf rdfs:range rdfs:Class.\n:subListOf rdfs:range rdf:List.\n:inAllOf rdfs:range rdf:List.\n:inSomeOf rdfs:range rdf:List.\nrdf:type rdfs:range rdfs:Class.\nrdf:subject rdfs:range rdfs:Resource.\nrdf:predicate rdfs:range rdfs:Resource.\nrdf:object rdfs:range rdfs:Resource.\nrdf:value rdfs:range rdfs:Resource.\nrdf:first rdfs:range rdfs:Resource.\nowl:equivalentClass rdfs:subPropertyOf rdfs:subClassOf.\nowl:equivalentProperty rdfs:subPropertyOf rdfs:subPropertyOf.\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> <http://purl.org/dc/elements/1.1/title> "The RDF Concepts Vocabulary (RDF)".\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> <http://purl.org/dc/elements/1.1/description> "This is the RDF Schema for the RDF vocabulary terms in the RDF Namespace, defined in RDF 1.1 Concepts.".\nrdf:HTML rdfs:subClassOf rdfs:Literal.\nrdf:langString rdfs:subClassOf rdfs:Literal.\nrdf:PlainLiteral rdfs:subClassOf rdfs:Literal.\nrdf:Property rdfs:subClassOf rdfs:Resource.\nrdf:Statement rdfs:subClassOf rdfs:Resource.\nrdf:Bag rdfs:subClassOf rdfs:Container.\nrdf:Seq rdfs:subClassOf rdfs:Container.\nrdf:Alt rdfs:subClassOf rdfs:Container.\nrdf:List rdfs:subClassOf rdfs:Resource.\nrdf:XMLLiteral rdfs:subClassOf rdfs:Literal.\nrdf:HTML rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:langString rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:PlainLiteral rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:type rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Property rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Statement rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:subject rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:predicate rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:object rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Bag rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Seq rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Alt rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:value rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:List rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n() rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:first rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:rest rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:XMLLiteral rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:HTML rdfs:seeAlso <http://www.w3.org/TR/rdf11-concepts/#section-html>.\nrdf:langString rdfs:seeAlso <http://www.w3.org/TR/rdf11-concepts/#section-Graph-Literal>.\nrdf:PlainLiteral rdfs:seeAlso <http://www.w3.org/TR/rdf-plain-literal/>.\nrdf:HTML rdfs:label "HTML".\nrdf:langString rdfs:label "langString".\nrdf:PlainLiteral rdfs:label "PlainLiteral".\nrdf:type rdfs:label "type".\nrdf:Property rdfs:label "Property".\nrdf:Statement rdfs:label "Statement".\nrdf:subject rdfs:label "subject".\nrdf:predicate rdfs:label "predicate".\nrdf:object rdfs:label "object".\nrdf:Bag rdfs:label "Bag".\nrdf:Seq rdfs:label "Seq".\nrdf:Alt rdfs:label "Alt".\nrdf:value rdfs:label "value".\nrdf:List rdfs:label "List".\n() rdfs:label "nil".\nrdf:first rdfs:label "first".\nrdf:rest rdfs:label "rest".\nrdf:XMLLiteral rdfs:label "XMLLiteral".\nrdf:HTML rdfs:comment "The datatype of RDF literals storing fragments of HTML content".\nrdf:langString rdfs:comment "The datatype of language-tagged string values".\nrdf:PlainLiteral rdfs:comment "The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2".\nrdf:type rdfs:comment "The subject is an instance of a class.".\nrdf:Property rdfs:comment "The class of RDF properties.".\nrdf:Statement rdfs:comment "The class of RDF statements.".\nrdf:subject rdfs:comment "The subject of the subject RDF statement.".\nrdf:predicate rdfs:comment "The predicate of the subject RDF statement.".\nrdf:object rdfs:comment "The object of the subject RDF statement.".\nrdf:Bag rdfs:comment "The class of unordered containers.".\nrdf:Seq rdfs:comment "The class of ordered containers.".\nrdf:Alt rdfs:comment "The class of containers of alternatives.".\nrdf:value rdfs:comment "Idiomatic property used for structured values.".\nrdf:List rdfs:comment "The class of RDF Lists.".\n() rdfs:comment "The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it.".\nrdf:first rdfs:comment "The first item in the subject RDF list.".\nrdf:rest rdfs:comment "The rest of the subject RDF list after the first item.".\nrdf:XMLLiteral rdfs:comment "The datatype of XML literal values.".\n() :subListOf ().\n', [ 'X-Powered-By',
    'EYE Server',
    'Access-Control-Allow-Origin',
    '*',
    'Content-Type',
    'text/n3',
    'Content-Length',
    '9290',
    'Date',
    'Fri, 25 Aug 2017 21:40:42 GMT',
    'Connection',
    'close' ])

  nock(host, {'encodedQueryParams': true})
  .post('/', 'query=%7B%20%3Fa%20%3Fb%20%3Fc.%20%7D%20%3D%3E%20%7B%20%3Fa%20%3Fb%20%3Fc.%20%7D.&data[0]=http%3A%2F%2Feulersharp.sourceforge.net%2F2003%2F03swap%2Frpo-rules.n3&data[1]=http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns&data[2]=%3Chttp%3A%2F%2Fexample.com%2Fstatement%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23type%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23Statement%3E%20.%0A')
  .query({'traditional': 'true', 'nope': 'true'})
  .reply(200, '@prefix log: <http://www.w3.org/2000/10/swap/log#>.\n@prefix math: <http://www.w3.org/2000/10/swap/math#>.\n@prefix list: <http://www.w3.org/2000/10/swap/list#>.\n@prefix owl: <http://www.w3.org/2002/07/owl#>.\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n@prefix : <http://eulersharp.sourceforge.net/2003/03swap/rpo-rules#>.\n@prefix dc: <http://purl.org/dc/elements/1.1/>.\n\nrdf:first a rdf:Property.\nrdf:rest a rdf:Property.\nrdfs:subClassOf a rdf:Property.\nrdfs:subClassOf a owl:TransitiveProperty.\nrdfs:subPropertyOf a rdf:Property.\nrdfs:subPropertyOf a owl:TransitiveProperty.\nowl:equivalentClass a rdf:Property.\nowl:equivalentClass a owl:SymmetricProperty.\nowl:equivalentProperty a rdf:Property.\nowl:equivalentProperty a owl:SymmetricProperty.\nowl:sameAs a rdf:Property.\nowl:sameAs a owl:SymmetricProperty.\nowl:sameAs a owl:TransitiveProperty.\nowl:inverseOf a rdf:Property.\nowl:inverseOf a owl:SymmetricProperty.\nowl:differentFrom a rdf:Property.\nowl:differentFrom a owl:SymmetricProperty.\nowl:distinctMembers a rdf:Property.\nowl:oneOf a rdf:Property.\nowl:intersectionOf a rdf:Property.\nowl:unionOf a rdf:Property.\nowl:complementOf a rdf:Property.\n:subListOf a rdf:Property.\n:inAllOf a rdf:Property.\n:inSomeOf a rdf:Property.\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> a owl:Ontology.\nrdf:HTML a rdfs:Datatype.\nrdf:langString a rdfs:Datatype.\nrdf:PlainLiteral a rdfs:Datatype.\nrdf:type a rdf:Property.\nrdf:Property a rdfs:Class.\nrdf:Statement a rdfs:Class.\nrdf:subject a rdf:Property.\nrdf:predicate a rdf:Property.\nrdf:object a rdf:Property.\nrdf:Bag a rdfs:Class.\nrdf:Seq a rdfs:Class.\nrdf:Alt a rdfs:Class.\nrdf:value a rdf:Property.\nrdf:List a rdfs:Class.\n() a rdf:List.\nrdf:XMLLiteral a rdfs:Datatype.\n<http://example.com/statement> a rdf:Statement.\nrdf:HTML a rdfs:Class.\nrdf:langString a rdfs:Class.\nrdf:PlainLiteral a rdfs:Class.\nrdf:XMLLiteral a rdfs:Class.\nrdf:first a rdfs:Resource.\nrdf:rest a rdfs:Resource.\nrdfs:subClassOf a rdfs:Resource.\nrdfs:subPropertyOf a rdfs:Resource.\nowl:equivalentClass a rdfs:Resource.\nowl:equivalentProperty a rdfs:Resource.\nowl:sameAs a rdfs:Resource.\nowl:inverseOf a rdfs:Resource.\nowl:differentFrom a rdfs:Resource.\nowl:distinctMembers a rdfs:Resource.\nowl:oneOf a rdfs:Resource.\nowl:intersectionOf a rdfs:Resource.\nowl:unionOf a rdfs:Resource.\nowl:complementOf a rdfs:Resource.\n:subListOf a rdfs:Resource.\n:inAllOf a rdfs:Resource.\n:inSomeOf a rdfs:Resource.\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> a rdfs:Resource.\nrdf:HTML a rdfs:Resource.\nrdf:langString a rdfs:Resource.\nrdf:PlainLiteral a rdfs:Resource.\nrdf:type a rdfs:Resource.\nrdf:Property a rdfs:Resource.\nrdf:Statement a rdfs:Resource.\nrdf:subject a rdfs:Resource.\nrdf:predicate a rdfs:Resource.\nrdf:object a rdfs:Resource.\nrdf:Bag a rdfs:Resource.\nrdf:Seq a rdfs:Resource.\nrdf:Alt a rdfs:Resource.\nrdf:value a rdfs:Resource.\nrdf:List a rdfs:Resource.\n() a rdfs:Resource.\nrdf:XMLLiteral a rdfs:Resource.\n<http://example.com/statement> a rdfs:Resource.\nrdfs:Literal a rdfs:Class.\nrdfs:Resource a rdfs:Class.\nrdfs:Container a rdfs:Class.\nowl:TransitiveProperty a rdfs:Class.\nowl:SymmetricProperty a rdfs:Class.\nowl:Ontology a rdfs:Class.\nrdfs:Datatype a rdfs:Class.\nrdfs:Class a rdfs:Class.\nrdfs:Literal a rdfs:Resource.\nrdfs:Resource a rdfs:Resource.\nrdfs:Container a rdfs:Resource.\nowl:TransitiveProperty a rdfs:Resource.\nowl:SymmetricProperty a rdfs:Resource.\nowl:Ontology a rdfs:Resource.\nrdfs:Datatype a rdfs:Resource.\nrdfs:Class a rdfs:Resource.\nrdf:first rdfs:domain rdf:List.\nrdf:rest rdfs:domain rdf:List.\nrdfs:subClassOf rdfs:domain rdfs:Class.\nrdfs:subPropertyOf rdfs:domain rdf:Property.\nowl:equivalentClass rdfs:domain rdfs:Class.\nowl:equivalentProperty rdfs:domain rdf:Property.\nowl:inverseOf rdfs:domain owl:ObjectProperty.\nowl:distinctMembers rdfs:domain owl:AllDifferent.\nowl:oneOf rdfs:domain rdfs:Class.\nowl:intersectionOf rdfs:domain rdfs:Class.\nowl:unionOf rdfs:domain rdfs:Class.\nowl:complementOf rdfs:domain rdfs:Class.\n:subListOf rdfs:domain rdf:List.\nrdf:type rdfs:domain rdfs:Resource.\nrdf:subject rdfs:domain rdf:Statement.\nrdf:predicate rdfs:domain rdf:Statement.\nrdf:object rdfs:domain rdf:Statement.\nrdf:value rdfs:domain rdfs:Resource.\nrdf:rest rdfs:range rdf:List.\nrdfs:subClassOf rdfs:range rdfs:Class.\nrdfs:subPropertyOf rdfs:range rdf:Property.\nowl:equivalentClass rdfs:range rdfs:Class.\nowl:equivalentProperty rdfs:range rdf:Property.\nowl:inverseOf rdfs:range owl:ObjectProperty.\nowl:distinctMembers rdfs:range rdf:List.\nowl:oneOf rdfs:range rdf:List.\nowl:intersectionOf rdfs:range rdf:List.\nowl:unionOf rdfs:range rdf:List.\nowl:complementOf rdfs:range rdfs:Class.\n:subListOf rdfs:range rdf:List.\n:inAllOf rdfs:range rdf:List.\n:inSomeOf rdfs:range rdf:List.\nrdf:type rdfs:range rdfs:Class.\nrdf:subject rdfs:range rdfs:Resource.\nrdf:predicate rdfs:range rdfs:Resource.\nrdf:object rdfs:range rdfs:Resource.\nrdf:value rdfs:range rdfs:Resource.\nrdf:first rdfs:range rdfs:Resource.\nowl:equivalentClass rdfs:subPropertyOf rdfs:subClassOf.\nowl:equivalentProperty rdfs:subPropertyOf rdfs:subPropertyOf.\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> <http://purl.org/dc/elements/1.1/title> "The RDF Concepts Vocabulary (RDF)".\n<http://www.w3.org/1999/02/22-rdf-syntax-ns#> <http://purl.org/dc/elements/1.1/description> "This is the RDF Schema for the RDF vocabulary terms in the RDF Namespace, defined in RDF 1.1 Concepts.".\nrdf:HTML rdfs:subClassOf rdfs:Literal.\nrdf:langString rdfs:subClassOf rdfs:Literal.\nrdf:PlainLiteral rdfs:subClassOf rdfs:Literal.\nrdf:Property rdfs:subClassOf rdfs:Resource.\nrdf:Statement rdfs:subClassOf rdfs:Resource.\nrdf:Bag rdfs:subClassOf rdfs:Container.\nrdf:Seq rdfs:subClassOf rdfs:Container.\nrdf:Alt rdfs:subClassOf rdfs:Container.\nrdf:List rdfs:subClassOf rdfs:Resource.\nrdf:XMLLiteral rdfs:subClassOf rdfs:Literal.\nrdf:HTML rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:langString rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:PlainLiteral rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:type rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Property rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Statement rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:subject rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:predicate rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:object rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Bag rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Seq rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:Alt rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:value rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:List rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n() rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:first rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:rest rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:XMLLiteral rdfs:isDefinedBy <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\nrdf:HTML rdfs:seeAlso <http://www.w3.org/TR/rdf11-concepts/#section-html>.\nrdf:langString rdfs:seeAlso <http://www.w3.org/TR/rdf11-concepts/#section-Graph-Literal>.\nrdf:PlainLiteral rdfs:seeAlso <http://www.w3.org/TR/rdf-plain-literal/>.\nrdf:HTML rdfs:label "HTML".\nrdf:langString rdfs:label "langString".\nrdf:PlainLiteral rdfs:label "PlainLiteral".\nrdf:type rdfs:label "type".\nrdf:Property rdfs:label "Property".\nrdf:Statement rdfs:label "Statement".\nrdf:subject rdfs:label "subject".\nrdf:predicate rdfs:label "predicate".\nrdf:object rdfs:label "object".\nrdf:Bag rdfs:label "Bag".\nrdf:Seq rdfs:label "Seq".\nrdf:Alt rdfs:label "Alt".\nrdf:value rdfs:label "value".\nrdf:List rdfs:label "List".\n() rdfs:label "nil".\nrdf:first rdfs:label "first".\nrdf:rest rdfs:label "rest".\nrdf:XMLLiteral rdfs:label "XMLLiteral".\nrdf:HTML rdfs:comment "The datatype of RDF literals storing fragments of HTML content".\nrdf:langString rdfs:comment "The datatype of language-tagged string values".\nrdf:PlainLiteral rdfs:comment "The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2".\nrdf:type rdfs:comment "The subject is an instance of a class.".\nrdf:Property rdfs:comment "The class of RDF properties.".\nrdf:Statement rdfs:comment "The class of RDF statements.".\nrdf:subject rdfs:comment "The subject of the subject RDF statement.".\nrdf:predicate rdfs:comment "The predicate of the subject RDF statement.".\nrdf:object rdfs:comment "The object of the subject RDF statement.".\nrdf:Bag rdfs:comment "The class of unordered containers.".\nrdf:Seq rdfs:comment "The class of ordered containers.".\nrdf:Alt rdfs:comment "The class of containers of alternatives.".\nrdf:value rdfs:comment "Idiomatic property used for structured values.".\nrdf:List rdfs:comment "The class of RDF Lists.".\n() rdfs:comment "The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it.".\nrdf:first rdfs:comment "The first item in the subject RDF list.".\nrdf:rest rdfs:comment "The rest of the subject RDF list after the first item.".\nrdf:XMLLiteral rdfs:comment "The datatype of XML literal values.".\n() :subListOf ().\n', [ 'X-Powered-By',
    'EYE Server',
    'Access-Control-Allow-Origin',
    '*',
    'Content-Type',
    'text/n3',
    'Content-Length',
    '9386',
    'Date',
    'Fri, 25 Aug 2017 21:40:42 GMT',
    'Connection',
    'close' ])
}
module.exports = nockInit
