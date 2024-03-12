const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".zorroPensando");
const imagenZorro = document.querySelector(".imagenzorro");
const solucion = document.querySelector(".solucionZorro");
const tituloZorro = document.getElementById('tituloZorro');
const estadoMensaje = document.getElementById('accionZorro');
const sinMensaje = document.querySelector(".enojozorro")





function btnEncriptar() {
    if (textArea.value.trim() === "") {
        if (mensaje.querySelector('#textoDesencriptado').textContent.trim() !== "") {
            mensaje.querySelector('#textoDesencriptado').innerHTML = "";
        }
        tituloZorro.textContent = "¡Ups! No hay mensaje para encriptar";
        estadoMensaje.textContent = "Soy un zorro muy ocupado!! no me hagas perder el tiempo...";
        estadoMensaje.style.marginBottom = "3%";
        imagenZorro.style.display = 'none';
        sinMensaje.style.display = 'block';
        solucion.style.display = 'none';
        textArea.value = "";

    } else {
        tituloZorro.textContent = "Zorrest Poirot Encriptó el mensaje!";
        estadoMensaje.textContent = "¡El mensaje ahora es un enigma digno de un zorro detectivesco!";
        estadoMensaje.style.marginBottom = "3%";
        const textoEncriptado = encriptar(textArea.value);
        mensaje.querySelector('#textoDesencriptado').innerHTML = `<p>${textoEncriptado}</p>`;
        textArea.value = "";
        sinMensaje.style.display = 'none';
        imagenZorro.style.display = 'none';
        solucion.style.display = 'block';
    }
}

function btnDesencriptar() {
    if (textArea.value.trim() === "") {
        if (mensaje.querySelector('#textoDesencriptado').textContent.trim() !== "") {
            mensaje.querySelector('#textoDesencriptado').innerHTML = "";
        }
        tituloZorro.textContent = "¡Ups! No hay mensaje para desencriptar";
        estadoMensaje.textContent = "Soy un zorro muy ocupado!! no me hagas perder el tiempo...";
        estadoMensaje.style.marginBottom = "3%";
        imagenZorro.style.display = 'none';
        sinMensaje.style.display = 'block';
        solucion.style.display = 'none';
        textArea.value = "";
    } else {
        tituloZorro.textContent = "Zorrest Poirot Desencriptó el mensaje!";
        estadoMensaje.textContent = "¡Zorrest en acción! Mensaje descifrado, ¿quién necesita lecciones de astucia?";
        estadoMensaje.style.marginBottom = "3%";
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.querySelector('#textoDesencriptado').innerHTML = `<p>${textoDesencriptado}</p>`;
        textArea.value = "";
        sinMensaje.style.display = 'none';
        imagenZorro.style.display = 'none';
        solucion.style.display = 'block';
    }
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
    for (let i = matrizCodigo.length - 1; i >= 0; i--) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
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
