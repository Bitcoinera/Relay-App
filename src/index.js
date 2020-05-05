// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Activación del botón de la pestaña "Presentar"
const formPresentar = document.getElementById('formPresentar');
const pwd = document.getElementById('pwd');
const nProposal = document.getElementById('nProposal');
const placeProposal = document.getElementById('placeProposal');
const btnSendProposal = document.getElementById('btnSendProposal');
  
formPresentar.addEventListener('keyup', function () {
  isValidPlaceProposal = placeProposal.checkValidity();
  isValidNProposal = nProposal.checkValidity();
  isValidPwd = pwd.checkValidity();
  
  if (isValidPwd && isValidNProposal && isValidPlaceProposal) {
    btnSendProposal.disabled = false;
  } else {
    btnSendProposal.disabled = true;
  }
});

// btnSendProposal.addEventListener('click', function (event) {
//   formPresentar.submit();
// });