var interval = window.setInterval(update, 500);
function update() {
  var val = $("#input-number").val();
  if( !val ) val = "(empty string)"
  $("#settings-output").text( val );
  
  $("#input-number").attr("min", $("#settings-min").val() );
  $("#input-number").attr("max", $("#settings-max").val() );
  $("#input-number").attr("step", $("#settings-step").val() );
}

// $("#input-number").keyup( function() {
// 	var val = $("#input-number").val();
// 	if( !val ) val = "(empty string)"
// 	$("#settings-output").text( val );
// });