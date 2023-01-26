const inputTexto = document.querySelector(".areatexto");
const inputMensaje = document.querySelector(".areatextoresultado");
const btnCopiar = document.querySelector(".btncopiar");

const espiaLogo= document.getElementById("espialogo")
const imgLetras = document.getElementById("letrasimg")
const msgNoHayTexto = document.getElementById("noMessage");
const msgNoHayMensaje= document.getElementById("insertMessage");

function validarE() {
  let msjIngresado=document.querySelector(".areatexto");
  if (/^[a-z\s]+$/.test(msjIngresado.value)) {
    btnEncriptar()
  }else {
    alert("Ingrese caracteres válidos"); 
  }
}

function validarD() {
  let msjIngresado=document.querySelector(".areatexto");
  if (/^[a-z\s]+$/.test(msjIngresado.value)) {
    btnDesncriptar()
  }else {
    alert("Ingrese caracteres válidos");
  }
}
function btnEncriptar(){
    const txtencriptado = encriptar(inputTexto.value)
    inputMensaje.value= txtencriptado
    inputTexto.value="";
    inputMensaje.style.display = "block";
    espiaLogo.style.display = "none";
    imgLetras.style.display = "none";
    msgNoHayTexto.style.display = "none";
    msgNoHayMensaje.style.display = "none";
}
function btnDesncriptar(){
    const txtencriptado = desencriptar(inputTexto.value)
    inputMensaje.value= txtencriptado
    inputTexto.value="";
    inputMensaje.style.display = "block";
    espiaLogo.style.display = "none";
    imgLetras.style.display = "none";
    msgNoHayTexto.style.display = "none";
    msgNoHayMensaje.style.display = "none";
}

function encriptar(msjencriptado){
    let matrix=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    msjencriptado = msjencriptado.toLowerCase()
    for(let i=0;i < matrix.length;i++){
        if(msjencriptado.includes(matrix[i][0])){
            msjencriptado=msjencriptado.replaceAll(matrix[i][0],matrix[i][1])
        }
    }
    btnCopiar.style.display = "block";
    return msjencriptado
}

function desencriptar(msjdesencriptado){
    let matrix=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    msjdesencriptado = msjdesencriptado.toLowerCase()
    for(let i=0;i < matrix.length;i++){
        if(msjdesencriptado.includes(matrix[i][1])){
            msjdesencriptado=msjdesencriptado.replaceAll(matrix[i][1],matrix[i][0])
        }
    }
    btnCopiar.style.display = "block";
    return msjdesencriptado
}

btnCopiar.addEventListener('click', function(event) {
  var btnCopiar = document.querySelector('.areatextoresultado');
  btnCopiar.select();
  try {
    var successful = document.execCommand("copy");
    alert("Texto copiado con éxito");
  }
  catch (err) {
    alert("Oops, no hemos podido copiar el texto, es posible que tu navegador no lo soporte, prueba a usar Crtl+C.");
  }
});
