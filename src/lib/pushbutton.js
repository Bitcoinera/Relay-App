function pushFunction() {
  // Guarda en variables los value de los inputs introducidos
  var password = document.getElementById("pwd").value;
  // var place = document.getElementById("placeProposal").value;
  // var code = document.getElementById("nProposal").value;

  // Devolviendo datos:
  document.getElementById("pwdEncrypt").innerHTML = password;

  // // crear JSON
  // var myObj;
  // var myJSON;
  // var text;
  // var obj;

  // myObj = {"lugar": place, "code": code};
  // myJSON = JSON.stringify(myObj);
  // // Almacenando datos:
  // localStorage.setItem("testJSON", myJSON);

  // // Devolviendo datos:
  // text = localStorage.getItem("testJSON");
  // obj = JSON.parse(text);
  // document.getElementById("demo").innerHTML = obj.lugar;
  // // document.getElementById("pwdEncrypt").innerHTML = obj.lugar;
}