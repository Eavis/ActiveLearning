$(document).ready(function() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      $('#files').bind('change', handleFileSelect);
    }
});
var eventSel = $("#eventSel");
var timeSel = $("#timeSel");
var groupSel = $("#groupSel");
var data = [];
var var_name = [];
var chosen_var = [];
var chosen_field = [];
var json_for_send = '';
function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var file = files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(event) {
      var csv = event.target.result;
      data = $.csv.toObjects(csv);
      var obj1 = data[0];
      var_name = Object.keys(obj1);
      var var_len = var_name.length;
      var ul = document.getElementById("list");
      for (var i = 0; i< var_len; i++) {
        var li = document.createElement("li");
        li.className = "list-group-item";
        if (var_name[i] == "time" || var_name[i] == "event") {
            continue;
        }
        li.appendChild(document.createTextNode(var_name[i]));
        ul.appendChild(li);
      }
      for (var i = 0; i < data.length;i++) {
          if (isNaN(data[i].event) ||isNaN(data[i].time)) {
              continue;
          }
          eventSel.append(data[i].event).append("\n");
          timeSel.append(data[i].time).append("\n");
          groupSel.append("A").append("\n");
      }
    }



}
function getFields(input, field) {
  var output = [];
  for (var i=0; i < input.length ; ++i){
    output.push(input[i][field]);
  }
  return output;
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
    $('.add').click(function(){
        var item = $(this).parents('.pick-list').find('.source').children('.active');
        // Move item from source to destination when one item is active/selected
        if(item.length > 0) {
//            $('.source .list-group-item.active').appendTo('.list-group.destination');
            $('.source .list-group-item.active').appendTo('.list-group.destination');
            $('.add').attr('disabled',true);
            $('.destination .list-group-item.active').removeClass('active');
        }
    });
    $('.remove').click(function(){
        var item = $(this).parents('.pick-list').find('.destination').children('.active');
        // Move item from destination to source when one item is active/selected
        if(item.length > 0) {
            $('.destination .list-group-item.active').appendTo('.source');
            $('.remove').attr('disabled',true);
            $('.source .list-group-item.active').removeClass('active');
        }
    });

    $('#submit').click(function(){
      $('.destination .list-group-item').each(function(){
         chosen_field.push($(this).text());
       });
       var json_join = new Array();
       var time_obj = new Object();
       var event_obj = new Object();
       var time_dt = getFields(data,"time");
       var event_dt = getFields(data,"event");
       time_obj.key = "time";
       time_obj.value = time_dt;
       event_obj.key = "event";
       event_obj.value = event_dt;
       json_join.push(time_obj);
       json_join.push(event_obj);
       for (var i = 0; i < chosen_field.length; i++) {
           var result = (getFields(data,chosen_field[i]));//array
           var json_single = new Object();
           json_single.key = chosen_field[i];
           json_single.value = result;
           json_join.push(json_single);
      }
      json_for_send = JSON.stringify(json_join);
      $.ajax({
        type: 'POST',
        url: 'db/multiCoeff.php',
        data: {'categories': json_for_send},
        success: function(msg) {
          // var msg_rcv = JSON.parse(msg);
          // console.log(msg);
          alert(msg);
        }
      });
});
