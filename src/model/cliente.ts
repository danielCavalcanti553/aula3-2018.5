export class Cliente{
    id: string;
    nome: string;
    idade: string;
    cpf: string;
    rg: string;
    email: string;
    senha: string;
    cep: string;
    endereco: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    telefone_fixo: string;
    celular: string;
    altura: string;
    peso: string;
    img: string;

    public setCliente(obj : any){
        this.img = obj.img;
        this.id = obj.id;
        this.nome = obj.nome;
        this.idade = obj.idade;
        this.cpf = obj.cpf;
        this.rg = obj.rg;
        this.email = obj.email;
        this.senha = obj.senha;
        this.cep = obj.cep;
        this.endereco = obj.endereco;
        this.numero = obj.numero;
        this.bairro = obj.bairro;
        this.cidade = obj.cidade;
        this.telefone_fixo = obj.telefone_fixo;
        this.celular = obj.celular;
        this.altura = obj.altura;
        this.peso = obj.peso;
    }
}