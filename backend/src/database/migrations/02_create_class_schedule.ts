import Knex from 'knex'

// Do the changes
export async function up(knex: Knex) {
	return knex.schema.createTable('class_schedule', (table) => {
		table.increments('id').unsigned().primary()
		table.integer('week_day').notNullable()
		table.integer('from').notNullable()
		table.integer('to').notNullable()
		table
			.integer('class_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('classes')
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
	})
}

// Undo the changes
export async function down(knex: Knex) {
	return knex.schema.dropTable('class_schedule')
}
