$('.list-group-item').click(function(){ 
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