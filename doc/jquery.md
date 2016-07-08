try:
ajax formData
    jquery 2.*









## $.post()
data
Type: `PlainObject` or String
A plain object or string that is sent to the server with the request.

dataType
Type: String
The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).


## .on()
```
$( "#dataTable tbody tr" ).on( "click", function() {
  console.log( $( this ).text() );
});

$( "#dataTable tbody" ).on( "click", "tr", function() {
  console.log( $( this ).text() );
});
```