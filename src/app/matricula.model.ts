
export class Matricula {
  MATR_ALUM_DNI!: string;
  MATR_ASSIG_CODI!: string;
  MATR_CONVOCATORIA!: number;
  MATR_NOTA?: number;

  constructor(
    MATR_ALUM_DNI: string,
    MATR_ASSIG_CODI: string,
    MATR_CONVOCATORIA: number,
    MATR_NOTA?: number
  ) {
    this.MATR_ALUM_DNI = MATR_ALUM_DNI;
    this.MATR_ASSIG_CODI = MATR_ASSIG_CODI;
    this.MATR_CONVOCATORIA = MATR_CONVOCATORIA;
    this.MATR_NOTA = MATR_NOTA;
  }
}
