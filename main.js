    function init() {
        
        
        var can = document.getElementById("myCanvas");
        var ctx= can.getContext("2d");

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.rect(150, 143, 430, 200)
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;
        ctx.arc(250, 210, 40, 0, 2 * Math.PI);
        ctx.stroke(); 

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.arc(340, 210, 40, 0, 2 * Math.PI);
        ctx.stroke(); 

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.arc(430, 210, 40, 0, 2 * Math.PI);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = "yellow";
        ctx.lineWidth = 5;
        ctx.arc(295, 255, 40, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 5;
        ctx.arc(385, 255, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
