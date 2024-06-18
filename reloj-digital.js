
<div id="saat">00:00:00</div>

setInterval(()=>
document.getElementById("saat")
.textContent=new Date()
.toLocaleTimeString("tr")
,1000 )
