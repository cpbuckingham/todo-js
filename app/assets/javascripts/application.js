// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {
  $('body').append("<h1>Todoy</h1>");
  $('body').append(
    "<div class='wrapper'><form><input id='todo' type='text'> \
    <input type='submit' value='Create ToDo'></form><div id='flash'></div></div>");
  $('body').append("<h3>ToDo!</h3>");
    $('form').on("submit", function(e){
        e.preventDefault();
       var toDo = $("#todo").val()
        $('body').append("<ul>"+ toDo +"</ul>");
        $('#flash').empty().append("<p>Todo Created!</p>").show();

        setTimeout(function(){
          $('#flash').empty().hide();
        }, 5000)
      }
    )

});
