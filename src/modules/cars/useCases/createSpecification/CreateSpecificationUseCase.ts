import { SpecificationsRepository } from '../../repositories/implementatios/SpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  #specificationsRepository: SpecificationsRepository

  constructor(specificationRepository: SpecificationsRepository) {
    this.#specificationsRepository = specificationRepository
  }

  execute({ name, description }: IRequest) {
    const specification = this.#specificationsRepository.findByName(name)

    if (specification) {
      throw new Error("Specification already exists.")
    }

    this.#specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }