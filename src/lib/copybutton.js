// CopyIpfsHash
function copyIpfsHash() {
  /* Toma el campo de texto */
  var copyText = document.getElementById("ipfsHash");

  /* Selecciona el campo de texto */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copia el texto dentro del campo de texto */
  document.execCommand("copy");

  /* Alerta a copiar  ########### A QUITAR #################################*/
  alert("Copiado el código: " + copyText.value);
}

// CopyPassword
function copyPassword() {
  /* Toma el campo de texto */
  var copyText = document.getElementById("pwd");

  /* Selecciona el campo de texto */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copia el texto dentro del campo de texto */
  document.execCommand("copy");

  /* Alerta a copiar  ########### A QUITAR #################################*/
  alert("Copiado la contraseña: " + copyText.value);
}

// copyIpfsHashDecripted
function copyIpfsHashDecripted() {
  /* Toma el campo de texto */
  var copyText = document.getElementById("ipfsHashDecripted");

  /* Selecciona el campo de texto */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copia el texto dentro del campo de texto */
  document.execCommand("copy");

  /* Alerta a copiar  ########### A QUITAR #################################*/
  alert("Código propuesta desencriptada: " + copyText.value);
}