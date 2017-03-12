$(function() {

  let dataRef = firebase.database().ref('shop');

  dataRef.on("value", function(data){ //retrieve data from Firebase
    clean();
    data.forEach(function(childData){
      var key = childData.key;
      var child_detail = childData.val().discountDetail;
      var child_total = childData.val().totalVoucher;
      var child_link = childData.val().link;
      createBox(key, child_detail, child_total, child_link);
    })
  });
});

function notify(){    //Show notification when click get button
  alert('Thank You\nHave a great time with us')
}

function createBox(name, detail, total, link){    //code for create new html element for every data receive from firebase
  var html =
    '<div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">'+
    '<div class=\"mdl-card mdl-shadow--2dp\">' + 
    '<div class=\"mdl-card__title mdl-color--light-blue-600 mdl-color-text--white\" style=\"background-image: url('+link+');  -webkit-background-size: 100% \"><h4 class=\"mdl-card__title-text\">'+ name +'</h4></div>'+
    '<div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">'+
    '<div class=\"text\"><h5>'+detail+'</h5><br/>Only '+total+' voucher(s) left</div>'+
    '<br/><button class=\"get mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\" data-upgraded=\",MaterialButton,MaterialRipple\" id=\"get\">Get!</button>';
    '</div></div></div></div>'
  
  newdiv = document.createElement('div');   //element created as div on html page
  newdiv.innerHTML = html;

  result.appendChild(newdiv);   //create get button link action
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