function hacerclick(){
	document.querySelector("#cabecera").onclick=mostraralerta;
}
function mostraralerta(){
	alert('Hizo Click :0');
}
window.onload=hacerclick;