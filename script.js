const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".zorroPensando");
const imagenZorro = document.querySelector(".imagenzorro");
const solucion = document.querySelector(".solucionZorro");
const tituloZorro = document.getElementById('tituloZorro');
const estadoMensaje = document.getElementById('accionZorro');




function btnEncriptar() {
    tituloZorro.textContent = "Zorrest Poirot Encriptó el mensaje!";
    estadoMensaje.textContent = "¡El mensaje ahora es un enigma digno de un zorro detectivesco!";
    estadoMensaje.style.marginBottom = "3%"
    const textoEncriptado = encriptar(textArea.value);
    mensaje.querySelector('#textoDesencriptado').innerHTML = `<p>${textoEncriptado}</p>`;
    textArea.value = "";
    imagenZorro.style.display = 'none';
    solucion.style.display = 'block';
}

function btnDesencriptar() {
    tituloZorro.textContent = "Zorrest Poirot Desencriptó el mensaje!";
    estadoMensaje.textContent = "¡Zorro astuto en acción! Mensaje descifrado, ¿quién necesita lecciones de astucia?";
    estadoMensaje.style.marginBottom = "3%"
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.querySelector('#textoDesencriptado').innerHTML = `<p>${textoDesencriptado}</p>`;
    textArea.value = "";
    imagenZorro.style.display = 'none';
    solucion.style.display = 'block';
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiarTexto() {
    const textoDescifrado = mensaje.querySelector('#textoDesencriptado').textContent.trim();
    const textareaTemporal = document.createElement('textarea');
    document.body.appendChild(textareaTemporal);
    textareaTemporal.value = textoDescifrado;
    textareaTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(textareaTemporal);

    // Muestra el mensaje "Copiado"
    mostrarMensajeCopiado();
}

function mostrarMensajeCopiado() {
    const mensajeCopiado = document.createElement("div");
    mensajeCopiado.classList.add("mensaje-copiado");
    mensajeCopiado.textContent = "Copiado";
    
    // Agrega el mensaje al body
    document.body.appendChild(mensajeCopiado);

    // Elimina el mensaje después de 2 segundos
    setTimeout(() => {
        document.body.removeChild(mensajeCopiado);
    }, 2000);
}
