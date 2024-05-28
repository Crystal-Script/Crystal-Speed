$(".engine-on").hide()
$(".engine-off").hide()

function Engine(bool) {
    if (bool) {
        $(".engine-on").show()
        $(".engine-off").hide()
    } else {
        $(".engine-on").hide()
        $(".engine-off").show()
    }
}


function Autopilot(bool) {
    if (bool) {
        $(".autopilot-on").show()
        $(".autopilot-off").hide()
    } else {
        $(".autopilot-on").hide()
        $(".autopilot-off").show()
    }
}


$(function () {
    function display(bool) {
        if (bool) {
            $(".main").fadeIn(300);
        } else {
            $(".main").fadeOut(1);
        }
    };

    display(false)

    window.addEventListener("message", function(event) {
       
        var item = event.data;
    
        if (item.type === true) {
            display(true)
        } else  {
            display(false)
        }

        if (item.engine == true) {
            Engine(true) 
        } else {
            Engine(false) 
        }

        if (item.autopilot == true) {
            Autopilot(true) 
        } else {
            Autopilot(false) 
        }
        
    
      
        document.getElementById('speed').textContent = item.speed;
    })
});

