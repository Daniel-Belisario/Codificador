const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function botaoCodificar(){
    const textoEncriptado = codificar(inputTexto.value);
    mensagem.value = textoEncriptado;

    function codificar (stringEncriptada) {
        let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();
    
        for(let i=0; i < matrizCodigo.length; i++){
            
                stringEncriptada = stringEncriptada.replaceAll( matrizCodigo[i][0], matrizCodigo[i][1])
                       
        }return stringEncriptada;
    }
}

function botaoDecodificar(){
    const textoDecodificado = decodificar(inputTexto.value);
    mensagem.value = textoDecodificado;

    function decodificar (stringDecodificada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDecodificada = stringDecodificada.toLowerCase();
    
        for (let i=0; i < matrizCodigo.length; i++){
            
                stringDecodificada = stringDecodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
                   
        }return stringDecodificada;
    
    }
}

