import { v4 as uuidV4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('categories')
class Category {
  @PrimaryColumn()
	id?: string

	@Column()
	name: string

	@Column()
	description: string

	@CreateDateColumn()
	created_at: Date

  constructor({ name, description }: Omit<Category, 'created_at'>) {
    this.id = this.id || uuidV4()
    this.name = name
    this.description = description
    this.created_at = new Date()
  }
}

export { Category }