import { PropiedadData } from "../entities/PropiedadData";
import { TasacionResult } from "../entities/TasacionResult";

export interface ITasacionRepository {
  calcularTasacion(data: PropiedadData): Promise<TasacionResult>;
}
