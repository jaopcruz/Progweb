function atualizarRelogio() {
  const agora = new Date(); 
  const horas = String(agora.getHours()).padStart(2, '0'); 
  const minutos = String(agora.getMinutes()).padStart(2, '0'); 
  const segundos = String(agora.getSeconds()).padStart(2, '0'); 

  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();

