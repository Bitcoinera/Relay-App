






// var myInput = document.getElementById("pwd");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }


// // "Active" botón de Presentar Propuesta
// const inputSelector = ':input[required]:visible';
// function checkForm() {
//   // here, "this" is an input element
//   var isValidForm = true;
//   $(this.form).find(inputSelector).each(function() {
//     if (!this.value.trim()) {
//       isValidForm = false;
//     }
//   });
//   $(this.form).find('#btnSendProposal').prop('disabled', !isValidForm);
//   return isValidForm;
// }
// $('#btnSendProposal').closest('form')
//   // Si un usuario trata de quitar el atributo "disabled", también monitoriza supervisa el evento de envío
//   .submit(function() {
//     // lanza "checkForm" para el primer launch checkForm for the first "input" encontrado, usa su valor de retorno para evitar el incumplimiento si el formulario no es válido
//     return checkForm.apply($(this).find(':input')[0]);
//   })
//   .find(inputSelector).keyup(checkForm).keyup();

//   ////////////////////////////