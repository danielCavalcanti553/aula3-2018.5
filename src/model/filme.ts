export class Filme{
        nomeFilme: string;
        diretor: string;
        genero: string;
        Elenco: string;
        imagem:  string;

        setFilme(obj : any){
            this.nomeFilme = obj.nomeFilme;
            this.diretor = obj.diretor;
            this.genero = obj.genero;
            this.Elenco = obj.Elenco;
            this.imagem = obj.imagem;
        }
}