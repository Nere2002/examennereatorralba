export class Alumnes {
  ALUMN_DNI!: string;
  ALUMN_NOM?: string;
  ALUMN_COGNOM_1?: string;
  ALUMN_COGNOM_2?: string;
  ALUMN_ADRECA?: string;
  ALUMN_CODI_POSTAL?: string;
  ALUMN_POBLACIO?: string;
  ALUMN_COMARCA?: string;
  ALUMN_TELEFON?: string;
  ALUMN_DATA_NAIXEMENT?: Date | null;
  ALUMN_CASAT: number;
  ALUMN_E_MAIL?: string;

  constructor(
    ALUMN_DNI: string,
    ALUMN_CASAT: number,
    ALUMN_NOM?: string,
    ALUMN_COGNOM_1?: string,
    ALUMN_COGNOM_2?: string,
    ALUMN_ADRECA?: string,
    ALUMN_CODI_POSTAL?: string,
    ALUMN_POBLACIO?: string,
    ALUMN_COMARCA?: string,
    ALUMN_TELEFON?: string,
    ALUMN_DATA_NAIXEMENT?: Date | null,
    ALUMN_E_MAIL?: string
  ) {
    this.ALUMN_DNI = ALUMN_DNI;
    this.ALUMN_CASAT = ALUMN_CASAT || 0; // Valor por defecto si es undefined
    this.ALUMN_NOM = ALUMN_NOM ;
    this.ALUMN_COGNOM_1 = ALUMN_COGNOM_1;
    this.ALUMN_COGNOM_2 = ALUMN_COGNOM_2;
    this.ALUMN_ADRECA = ALUMN_ADRECA;
    this.ALUMN_CODI_POSTAL = ALUMN_CODI_POSTAL;
    this.ALUMN_POBLACIO = ALUMN_POBLACIO;
    this.ALUMN_COMARCA = ALUMN_COMARCA;
    this.ALUMN_TELEFON = ALUMN_TELEFON;
    this.ALUMN_DATA_NAIXEMENT = ALUMN_DATA_NAIXEMENT || null;
    this.ALUMN_E_MAIL = ALUMN_E_MAIL;
  }
}