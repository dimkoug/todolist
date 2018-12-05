$.ajax({
  type: "GET",
  url:"/todo",
  success: function(data) {
   
    for (var i = 0; i < data.length; i++) {
     
      appendNewtodo(data[i]);
    }
  }
});

function appendNewtodo(todo) {
 
  var newtodo =  "<div class='todo-container'>" +
    "<div class='todo-time'>" + new Date(todo.timestamp).toLocaleString() + "</div>" +
    "<div class='todo-body'>" + todo.text + "</div>" +
    "</div>";

  $('#todo-target').prepend(newtodo);
}

$('#todo').click(function() {
  $.ajax({
    type: "POST",
    url: "/todo",
    contentType: 'application/json',
    data: JSON.stringify({todo: $('#new-todo').val()}),
    success: function(data) {
      appendNewtodo(data);
      $('#new-todo').val('');
    }
  })
});