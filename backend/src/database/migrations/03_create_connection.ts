import Knex from 'knex'

// Do the changes
export async function up(knex: Knex) {
	return knex.schema.createTable('connections', (table) => {
		table.increments('id').unsigned().primary()

		table
			.integer('user_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE')

		table
			.timestamp('created_at', { precision: 6 })
			.defaultTo(knex.fn.now(6))
			.notNullable()
	})
}

// Undo the changes
export async function down(knex: Knex) {
	return knex.schema.dropTable('connections')
}
