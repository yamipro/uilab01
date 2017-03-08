$(function() {
  // Get a reference to the root of the chat data.
  //var messagesRef = new Firebase("https://INSTANCE.firebaseio.com/chat");

  let messagesRef = firebase.database().ref();

  // When the user presses enter on the message input, write the message to firebase.
  $("#post").click(function () {
    var name = $("#name").val();
    var deta = $("#deta").val();
    var tvou = $("#tvou").val();
    messagesRef.push({name:name, deta:deta, tvou:tvou});
    $("#name").val("");
    $("#deta").val("");
    $("#tvou").val("");
  });
});
