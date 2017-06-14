 // $.ajax({
 //      url: "db/getclinical_info.php",
 //      data: "",
 //      dataType: "json",
 //      success: function(data) {
 //        var eventSel = $("#eventSel");
 //        var timeSel = $("#timeSel");
 //        var groupSel = $("#groupSel");
 //        for( var item in data ) {
 //          eventSel.append(data[item][0]).append("\n");
 //          timeSel.append(data[item][1]).append("\n");
 //          groupSel.append("male").append("\n");
 //        }
 //      }
 //    })
 //

 $.get("db/getclinical_info.php",function(data){
   var eventSel = $("#eventSel");
   var timeSel = $("#timeSel");
   var groupSel = $("#groupSel");
   for( var item in data ) {
     eventSel.append(data[item][0]).append("\n");
     timeSel.append(data[item][1]).append("\n");
     groupSel.append("male").append("\n");
   }
   $.get("db/getclinical_info.php",function(data){
     for( var item in data ) {
       eventSel.append(data[item][0]).append("\n");
       timeSel.append(data[item][1]).append("\n");
       groupSel.append("female").append("\n");
     }
   },"json");
 },"json");
