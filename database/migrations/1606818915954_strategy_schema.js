'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StrategySchema extends Schema {
  up () {
    this.create('strategies', (table) => {
      table.increments()
      table.string('title', 50).notNullable()
      table.float('btc', 23, 8).defaultTo(0).notNullable()
      table.float('eth', 23, 8).defaultTo(0).notNullable()
      table.float('usdt', 23, 8).defaultTo(0).notNullable()
      table.string('strategy', 100)
      table.json('position').nullable()
      table.integer('exchange_id').unsigned().references('id').inTable('exchanges')
      table.boolean('active').defaultTo(0)
      table.string('frequency', 50)
      table.timestamps(false, true)
    })
  }

  down () {
    this.drop('strategies')
  }
}

module.exports = StrategySchema
