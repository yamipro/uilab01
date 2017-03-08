$(function() {
  // Get a reference to the root of the chat data.
  //var messagesRef = new Firebase("https://INSTANCE.firebaseio.com/chat");

  let messagesRef = firebase.database().ref();

  // Add a callback that is triggered for each chat message.
  messagesRef.limitToLast(10).on("child_added", function (snapshot) {
    var message = snapshot.val();
    $("<div/>").text(message.deta + " [Only " + message.tvou + " voucher(s) left]").prepend($("<em/>")
      .text(message.name + ": ")).appendTo($("#messagesDiv"));
    $("#messagesDiv")[0].scrollTop = $("#messagesDiv")[0].scrollHeight;
  });
});
