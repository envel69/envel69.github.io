

$(function (){
    const tilt= $(' items').title({scale:1.2});
    $(".items1").draggable({revert:true},{
        start: function(){
        
        },
        drag:function(){

        },
        stop: function(){
            $(".about").show();
            const tilt =$('.items').tilt({scale:1.2});
        }
})
})

