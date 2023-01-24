## JSONPAth
-JSONPath is a query language that allows us to select and extract data from a JSON document.

*Installation and Setup:

    -Instalaltion:
        >npm install jsonpath-plus

    -Setup:
        >const {JSONPath} = require('jsonpath-plus');
        >const result = JSONPath({path: 'enterQueryHere', 'pathTo/SampleJSON'});
            or
        >const result = JSONPath([options,] path, json, callback, otherTypeCallback);
*


*Syntax:

    ~Operators:
        -Root node ($) :  denotes the root member of a JSON structure.
        -Current node (@) : represents the node being processed, mostly used as      predicate.
        -Wildcard (*) : denotes all elements within the specified scope.
    ~


    sampleJson:

    {
        "store": {
            "book": [
                {
                "category": "reference",
                "author": "Nigel Rees",
                "title": "Sayings of the Century",
                "price": 8.95
                },
                {
                "category": "fiction",
                "author": "Evelyn Waugh",
                "title": "Sword of Honour",
                "price": 12.99
                },
                {
                "category": "fiction",
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "0-553-21311-3",
                "price": 8.99
                },
                {
                "category": "fiction",
                "author": "J. R. R. Tolkien",
                "title": "The Lord of the Rings",
                "isbn": "0-395-19395-8",
                "price": 22.99
                }
            ],
            "bicycle": {
                "color": "red",
                "price": 19.95
            }
        }
    }

    -Supports both bracket and dot notations. Ex:

        >$[["price"]] % returns all values for the key price
            or
        >$..price <!-- returns all values for the key price -->
    -

    ~Queries:

        -Last object:
        >$..book[(@.length-1)]
            or
        >$..book[-1:]

        -Filter objects having a specified property only:
        >$..book[?(@.isbn)] // returns all book objects that contains property "isbn".

        -Filter by range(Number):
        >$..book[?(@.price<10)]	returns all books with price range less than 10.

        -Filter and return the parent with any object that satisfies given condition.
        >$..[?(@.price>19)]^

        -Return all objects in the path without the one specified.
        >$.store.book[?(@path !== "$['store']['book'][0]")]

        -Get all properties(keys) present in the scope of the path
        >$.store.*~	

        -Retrieve and return all numeric values in the given path scope
        >$..book..*@number()	

        -Return values from specified path scope that matches given regex.
        >$..book.*[?(@property === "category" && @.match(/TION$/i))]
    ~
*

*Resources: https://github.com/JSONPath-Plus/JSONPath
            https://jsonpath.com/
            http://goessner.net/articles/JsonPath/
