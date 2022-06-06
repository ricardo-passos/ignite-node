import { getRepository, Repository } from 'typeorm'
import { Category } from '../../entities/Category'
import {
	ICategoriesRepository,
	ICreateCategoryDTO,
} from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
	#repository: Repository<Category>

	constructor() {
		this.#repository = getRepository(Category)
	}

	async create({ name, description }: ICreateCategoryDTO) {
		const category = this.#repository.create({ name, description })

		await this.#repository.save(category)
	}

	async list() {
		return await this.#repository.find()
	}

	async findByName(name: string) {
		return await this.#repository.findOne({ name })
	}
}

export { CategoriesRepository }
