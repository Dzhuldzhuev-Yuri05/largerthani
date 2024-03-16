const but = document.getElementById('jion');
const col = document.getElementById('close');
const mess = document.getElementById('mess_btn');
const bla_close = document.getElementById('my-model');

mess.onclick = function() {
	alert("Получилось")
}

but.onclick = function() {
	console.log('Click');
  document.getElementById('my-model').classList.add('open');
}
col.onclick = function() {
	console.log('Click');
  document.getElementById('my-model').classList.remove('open');
}
bla_close.onclick = function() {
	console.log('Click');
  document.getElementById('my-model').classList.remove('open');
}



