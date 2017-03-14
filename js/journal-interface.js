var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var newPost = $('#entry').val();
    console.log(newPost);
    var newEntry = new Entry(newPost);
    $('#posted-entries').append("<li>" + newPost + "</li>");
  });
});
