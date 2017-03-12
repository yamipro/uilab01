$(function() {
  // Get a reference to the root of the chat data.
  //var messagesRef = new Firebase("https://INSTANCE.firebaseio.com/chat");

  let dataRef = firebase.database().ref('shop');
/*
  // Add a callback that is triggered for each chat message.
  messagesRef.limitToLast(10).on("child_added", function (snapshot) {
    var message = snapshot.val();
    $("<div/>").text(message.deta + " [Only " + message.tvou + " voucher(s) left]").prepend($("<em/>")
      .text(message.name + ": ")).appendTo($("#messagesDiv"));
    $("#messagesDiv")[0].scrollTop = $("#messagesDiv")[0].scrollHeight;
  });*/
  dataRef.on("value", function(data){
    clean();
    data.forEach(function(childData){
      var key = childData.key;
      var child_detail = childData.val().discountDetail;
      var child_total = childData.val().totalVoucher;
      var child_link = childData.val().link;
      createBox(key, child_detail, child_total, child_link);
    })
  });

  //windows.addEventListener('load', doFirst, false);
});

function notify(){
  alert('Thank You\nHave a great time with us')
}

function createBox(name, detail, total, link){
  var html =
    //'<div class="post post-' + name + ' mdl-cell mdl-cell--12-col ' +
    //'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
    '<div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">'+
    '<div class=\"mdl-card mdl-shadow--2dp\">' + 
    '<div class=\"mdl-card__title mdl-color--light-blue-600 mdl-color-text--white\" style=\"background-image: url('+link+');  -webkit-background-size: 100% \"><h4 class=\"mdl-card__title-text\">'+ name +'</h4></div>'+
    '<div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">'+
    '<div class=\"text\"><h5>'+detail+'</h5><br/>Only '+total+' voucher(s) left</div>'+
    '<br/><button class=\"get mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\" data-upgraded=\",MaterialButton,MaterialRipple\" id=\"get\">Get!</button>';
    '</div></div></div></div>'
  
  newdiv = document.createElement('div');
  newdiv.innerHTML = html;

  result.appendChild(newdiv);
  addEventListenerByClass('get', 'click', notify);
}

function addEventListenerByClass(className, event, fn) {
  var list = document.getElementsByClassName(className);
  for (var i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
    }
  }

function clean(){
  result.innerHTML = '';
}

//<span class="mdl-button__ripple-container"><span class="mdl-ripple is-animating" style="width: 212.068px; height: 212.068px; transform: translate(-50%, -50%) translate(72px, 10px);"></span></span>
//<div class="mdl-card__supporting-text mdl-color-text--grey-600"></div>
//<div class="mdl-card__supporting-text mdl-color-text--grey-600">
//<div class="text">rool<br>Only 78 voucher(s) left</div><br><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Get!</button></div>