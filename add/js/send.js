$(function() {
  // Get a reference to the root of the chat data.
  //var messagesRef = new Firebase("https://INSTANCE.firebaseio.com/chat");

  let messagesRef = firebase.database().ref();

  // When the user presses enter on the message input, write the message to firebase.
  $("#post").click(function () {
    var name = $("#name").val();
    var deta = $("#deta").val();
    var tvou = $("#tvou").val();
    if (name == ''||deta == ''||tvou == ''){
      alert("Insufficient data");
    }
    else {
      pushData(name, deta, tvou);
      alert("Promotion is added/updated");
      $("#name").val("");
      $("#deta").val("");
      $("#tvou").val("");
    }
  });
});
function pushData(name, detail, total){
  firebase.database().ref('shop/' + name).update({
    discountDetail:detail,
    totalVoucher:total
  });
}
