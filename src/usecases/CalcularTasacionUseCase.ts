
import { PropiedadData } from "../domain/entities/PropiedadData";
import { TasacionResult } from "../domain/entities/TasacionResult";
import { ITasacionRepository } from "../domain/repositories/ITasacionRepository";

export class CalcularTasacionUseCase {
  constructor(private readonly repo: ITasacionRepository) {}

  async execute(data: PropiedadData): Promise<TasacionResult> {
    return this.repo.calcularTasacion(data);
  }
}
