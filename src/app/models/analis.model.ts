class Analis {

    pokaznuk!: string;
    result!: number;
    vumiryvania!: string;
    normu!: number;
    constructor(_pokaznuk: string, _result: number, _vumiryvania: string, _normu: number) {

        this.pokaznuk = _pokaznuk;
        this.result = _result;
        this.vumiryvania = _vumiryvania;
        this.normu = _normu;
    }
}
export class ResultAnalises {
    data!: Date;
    parametr!:Analis[];
}