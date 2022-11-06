// nome, força, idade, poder, sexo, equipamento, cor_da_pele, estilo_cabelo
class Heroi {
    // atributos sao caracaterisiticas comuns
    nome;forca;idade;poder;sexo;equipamento;cor_da_pele;estilo_cabelo;

    constructor (nome, forca, idade, poder, sexo, equipamento, cor_da_pele, estilo_cabelo) {
        this.nome = nome;
        this.forca = forca;
        this.idade = idade;
        this.poder = poder;
        this.sexo = sexo;
        this.equipamento = equipamento;
        this.cor_da_pele = cor_da_pele;
        this.estilo_cabelo = estilo_cabelo;
    }

    //funcao - metodo
    soltarPoder = function (tipo_do_poder) {
        console.log("Poder é: " + tipo_do_poder);        
    }

    apresentarHeroi = function () {
        // apresentacao
        console.log(this.nome);
        console.log(this.forca);
        console.log(this.idade);
        console.log(this.poder);
        console.log(this.sexo);
        console.log(this.equipamento);
        console.log(this.cor_da_pele);
        console.log(this.estilo_cabelo);
    }


};

gavaio_negro = new Heroi("Gavião Negro", 100, 35, "Ataque com a Clave", "m", "Clave", "Moreno", "Normal");
adao_negro = new Heroi("Adão Negro", 200, 1500, "Ataque com o Raio", "m", "Poder de Raio", "Moreno", "Careca");

gavaio_negro.apresentarHeroi();
adao_negro.apresentarHeroi();