$(function() {
  // Get a reference to the root of the chat data.
  //var messagesRef = new Firebase("https://INSTANCE.firebaseio.com/chat");

  let messagesRef = firebase.database().ref();

  $("#post").click(function () {    //Load value from html id to var
    var name = $("#name").val();
    var deta = $("#deta").val();
    var tvou = $("#tvou").val();
    if (name == ''||deta == ''||tvou == ''){  //check input field
      alert("Insufficient data");
    }
    else {
      pushData(name, deta, tvou);   
      alert("Promotion is added/updated");
      $("#name").val("");   //clear input field
      $("#deta").val("");
      $("#tvou").val("");
    }
  });
});
function pushData(name, detail, total){ //push data to firebase
  firebase.database().ref('shop/' + name).update({
    name: name,
    discountDetail:detail,
    totalVoucher:total
  });
}
