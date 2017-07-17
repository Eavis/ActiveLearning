$(document).ready(function() {
if (window.File && window.FileReader && window.FileList && window.Blob) {
  $('#files').bind('change', handleFileSelect);
}
});
function handleFileSelect(evt) {
var files = evt.target.files; // FileList object
var file = files[0];
var reader = new FileReader();
reader.readAsText(file);
reader.onload = function(event) {
    var csv = event.target.result;
    var data = $.csv.toObjects(csv);
    var obj1 = data[0];
    var var_name = Object.keys(obj1);
    var var_len = var_name.length;
    var ul = document.getElementById("list");
    for (var i = 0; i< var_len; i++) {
      var li = document.createElement("li");
//                li.setAttribute('class', 'list-group-item');
        li.className = "list-group-item";
      li.appendChild(document.createTextNode(var_name[i]));
      ul.appendChild(li);
    }
}
}
 $(document).on('click', ' .list-group-item', function(e) {
// add active class at list-item by click
$(this).parent().find('.list-group-item').removeClass('active');
$(this).addClass('active');

// make add(>) button disabled untill selecting one
var source = $(this).parents('.pick-list').find('.source').children('.active');
     if(source.length > 0) {
         $(this).attr('disabled',false);
         $('.add').attr('disabled',false);
     } else {
         $(this).attr('disabled',true);
         $('.add').attr('disabled',true);
     };
// make remove(<) button disabled untill selecting one
var des = $(this).parents('.pick-list').find('.destination').children('.active');
     if(des.length > 0) {
         $(this).attr('disabled',false);
         $('.remove').attr('disabled',false);
     } else {
         $(this).attr('disabled',true);
         $('.remove').attr('disabled',true);
     };
});
//          $('.list-group-item').click(function(){ 
//        $(document).on('click', '#list .list-group-item', function(e) {
$('.add').click(function(){
  var item = $(this).parents('.pick-list').find('.source').children('.active');
  // Move item from source to destination when one item is active/selected
  if(item.length > 0) {
      $('.source .list-group-item.active').appendTo('.list-group.destination');
      $('.add').attr('disabled',true);
      $('.destination .list-group-item.active').removeClass('active');
  }
});
//        $(document).on('click', '#des_list .list-group-item', function(e) {
$('.remove').click(function(){
  var item = $(this).parents('.pick-list').find('.destination').children('.active');
  // Move item from destination to source when one item is active/selected
  if(item.length > 0) {
      $('.destination .list-group-item.active').appendTo('.source');
      $('.remove').attr('disabled',true);
      $('.source .list-group-item.active').removeClass('active');
  }
});




