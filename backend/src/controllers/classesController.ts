import { Request, Response } from 'express'
import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem {
	week_day: number
	from: string
	to: string
}

export default class ClassesController {
	async index(request: Request, response: Response) {
		const filters = request.query

		// console.log(filters)

		const subject = filters.subject as string
		const week_day = filters.week_day as string
		const time = filters.time as string

		if (!week_day || !subject || !time) {
			return response.status(400).json({
				error: 'Missing filters to search classes',
			})
		}

		const timeInMinutes = convertHourToMinutes(time)

		const classes = await db('classes')
			.whereExists(function () {
				this.select('class_schedule.*')
					.from('class_schedule')
					.whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
					.whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)]) // Filtra o dia de semana
					.whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
					.whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
			})
			.where('classes.subject', '=', subject) // Filtra por materia
			.join('users', 'classes.user_id', '=', 'users.id') // Junta a classe com o usuario que leciona
			.select(['classes.*', 'users.*']) // Seleciona os dados pegos anteriormente

		console.log(timeInMinutes)

		return response.json(classes)
	}

	async create(request: Request, response: Response) {
		const {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost,
			schedule,
		} = request.body

		const transaction = await db.transaction() // If one of these insertions fails, then everything can be reverted by using transaction.rollback() method

		try {
			const insertedUsersIds = await transaction('users').insert({
				name,
				avatar,
				whatsapp,
				bio,
			})

			const user_id = insertedUsersIds[0]

			const insertedClassesIds = await transaction('classes').insert({
				subject,
				cost,
				user_id,
			})

			const class_id = insertedClassesIds[0]

			const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
				return {
					class_id,
					week_day: scheduleItem.week_day,
					from: convertHourToMinutes(scheduleItem.from),
					to: convertHourToMinutes(scheduleItem.to),
				}
			})

			await transaction('class_schedule').insert(classSchedule)

			await transaction.commit()

			return response.status(201).send()
		} catch (error) {
			await transaction.rollback()

			return response.status(400).json({
				error: 'Unexpected error while creating new class',
			})
		}
	}
}
