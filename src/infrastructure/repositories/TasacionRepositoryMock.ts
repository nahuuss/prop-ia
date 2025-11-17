import { ITasacionRepository } from "../../domain/repositories/ITasacionRepository";
import { PropiedadData } from "../../domain/entities/PropiedadData";
import { TasacionResult } from "../../domain/entities/TasacionResult";

export class TasacionRepositoryMock implements ITasacionRepository {

  private valorBaseM2 = 1200;

  async calcularTasacion(data: PropiedadData): Promise<TasacionResult> {
    const { metrosCuadrados, antiguedad, ambientes } = data;

    const ajusteAntiguedad = Math.max(0.7, 1 - antiguedad * 0.01);
    const ajusteAmbientes = 1 + ambientes * 0.05;

    const valor =
      metrosCuadrados *
      this.valorBaseM2 *
      ajusteAntiguedad *
      ajusteAmbientes;

    return {
      valorEstimadoUSD: Math.round(valor),
      detalleCalculo: `m² * ${this.valorBaseM2} * ${ajusteAntiguedad.toFixed(
        2
      )} * ${ajusteAmbientes.toFixed(2)}`
    };
  }
}
