/*JSON

JSON significa JavaScript Object Notation que traduzido pro portuguÊs fica algo como notação de objeto JavaScript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário tambem, um texto em um objeto. 

Ele é usado principalmente para transmitir dados entre sistema de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no JavaScript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON objetos
JSON.stringify() -> Converte objetos em texto padrão JSON 


*/

function buscarCEP() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {

        // TRANSFORMEI O TEXTO EM OBJETO
        // document.getElementById('texto').innerHTML = this.responseText;
        // AQUI PEGUEI OS VALORES QUE EU QUERIA 
        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;
    }
}








const ajax = new XMLHttpRequest();
ajax.open('GET','https://viacep.com.br/ws/54756735/json/');
ajax.send();

ajax.onload = function(){
    // document.getElementById('area').innerHTML = this.responseText;
    // let obj = JSON.parse(this.responseText);
    // alert(obj.ddd);
}


























/* 
//OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    //ano: 2023
    motor: ["1.6","1.8","2.0"] //Exemplo com matriz
}
//Converteu para texto JSON
let texto = JSON.stringify(carro);

//Colocou o texto no nosso html
document.getElementById('area').innerHTML = texto;

let obj = JSON.parse(texto);//Conversão de texto pra objeto

//Pegamos o valor em nosso objeto 
console.log(obj.modelo);
console.log(obj.motor[2]);//PEGAR MATRIZ
*/
