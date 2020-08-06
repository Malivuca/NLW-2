import Knex from 'knex'

// Do the changes
export async function up(knex: Knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').unsigned().primary()
		table.string('name').notNullable()
		table.string('avatar').notNullable()
		table.string('whatsapp').notNullable()
		table.string('bio').notNullable()
	})
}

// Undo the changes
export async function down(knex: Knex) {
	return knex.schema.dropTable('users')
}
