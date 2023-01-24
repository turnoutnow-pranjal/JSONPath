/* globals JSONPath */
/* eslint-disable import/unambiguous */

// Todo: Extract testing example paths/contents and use for a
//         pulldown that can populate examples

// Todo: Make configurable with other JSONPath options

// Todo: Allow source to be treated as an (evaled) JSON object

// Todo: Could add JSON/JS syntax highlighting in sample and result,
//   ideally with a jsonpath-plus parser highlighter as well

document.querySelector("#jsonSample").value = `{
    "store": {
      "book": [
        {
          "category": "reference",
          "author": "Nigel Rees",
          "title": "Sayings of the Century",
          "price": 8.95,
          "test":{
                "key":"value"
            }
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
    }`
const $ = (s) => document.querySelector(s);

const updateResults = () => {
    const jsonSample = $('#jsonSample');
    const reportValidity = () => {
        // Doesn't work without a timeout
        setTimeout(() => {
            jsonSample.reportValidity();
        });
    };
    let json;
    try {
        json = JSON.parse(jsonSample.value);
        jsonSample.setCustomValidity('');
        reportValidity();
    } catch (err) {
        jsonSample.setCustomValidity('Error parsing JSON: ' + err.toString());
        reportValidity();
        return;
    }
    const result = JSONPath.JSONPath({
        path: $('#jsonpath').value,
        json
    });

    $('#results').value = JSON.stringify(result, null, 2);
};

$('#jsonpath').addEventListener('input', () => {
    updateResults();
});

$('#jsonSample').addEventListener('input', () => {
    updateResults();
});
