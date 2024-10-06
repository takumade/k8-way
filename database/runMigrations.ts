import * as path from 'path'
import { Database } from "./entities" // this is the Database interface we defined earlier

import { promises as fs } from 'fs'
import {
  Kysely,
  Migrator,
  SqliteDialect,
  FileMigrationProvider,
} from 'kysely'
import { db } from '@/database'

async function migrateToLatest() {


  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      // This needs to be an absolute path.
      migrationFolder:  path.resolve('./database/migrations'),
    }),
  })

  const { error, results } = await migrator.migrateToLatest()

  results?.forEach((it) => {
    if (it?.status === 'Success') {
      console.log(`migration "${it.migrationName}" was executed successfully`)
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`)
    }
  })

  if (error) {
    console.error('failed to migrate')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

migrateToLatest()