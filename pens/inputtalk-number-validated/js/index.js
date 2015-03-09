// Populate 'attributes' dynamicaly
$("#settings-type").change( function() {
  $("#dynamicInput").attr("type", $(this).val() );
}).change();


var interval = window.setInterval(update, 500);
function update() {
  var val = $("#dynamicInput").val();
  if( !val ) val = "(none)"
  $("#outputValue").text( val );
}

$("#dynamicForm").submit(function( event ) {
  alert( "Value submitted: " + $("#dynamicInput").val() );
});