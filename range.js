<html>
<h1>Success:<span id="result">50</span>%</h1>

<div class="bar-container">
<div class="bar" style="width:50%; height: 20px; background-color: green;" ></div>
</div>

<input id="inp" type="range" min="0" max="100" value="50"></input>

<script>
const inp=document.getElementById("inp")
const res =document.getElementById("result")
const bar= document.querySelector(".bar")
 inp.oninput=()=>{
 res.textContent=inp.value;
  bar.style.width=inp.value+"%";
 }
</script>
</html>


