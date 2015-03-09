// Populate 'attributes' dynamicaly
$("#settings-type").change( function() {
  $("#dynamicInput").attr("type", $(this).val() );
}).change();


var interval = window.setInterval(update, 500);
function update() {
  var val = $("#dynamicInput").val();
  if( !val ) val = "(none)"
  $("#outputValue").text( val );
  
  $("#dynamicInput").attr("min", $("#settings-min").val() );
  $("#dynamicInput").attr("max", $("#settings-max").val() );
  $("#dynamicInput").attr("step", $("#settings-step").val() );
}

$("#dynamicForm").submit(function( event ) {
  alert( "Value submitted: " + $("#dynamicInput").val() );
});