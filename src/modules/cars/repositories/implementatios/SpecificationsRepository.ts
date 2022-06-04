import { Specification } from '../../models/SpecificationModel';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  #specifications: Specification[]
  static #INSTANCE: SpecificationsRepository

  private constructor() {
    this.#specifications = []
  }

  static get instance() {
    if (!this.#INSTANCE) {
      this.#INSTANCE = new SpecificationsRepository()
    }

    return this.#INSTANCE
  }

  findByName(name: string): Specification | undefined {
    return this.#specifications.find((specification) => specification.name === name)
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification({ name, description })

    this.#specifications.push(specification)
  }
}

export { SpecificationsRepository }