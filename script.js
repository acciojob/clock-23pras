
const updateTimer = ()=>{
	let ele= document.getElementById('timer');
	let now = new Date();
	ele.textContent = now.toLocaleString();
}

setInterval(updateTimer,1000);

updateTimer();

