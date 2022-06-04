import { v4 as uuidV4 } from 'uuid'

class Specification {
  id?: string
  name: string
  description: string
  createdAt: Date

  constructor({ name, description }: Omit<Specification, 'createdAt'>) {
    this.id = this.id || uuidV4()
    this.name = name
    this.description = description
    this.createdAt = new Date()
  }
}

export { Specification }