import { config as dotenvConfig } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
dotenvConfig({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.env') })

async function runSeed() {
  const { getPayload } = await import('payload')
  const config = (await import('./payload.config')).default
  const { seed } = await import('./endpoints/seed')

  console.log('Initializing payload...')
  const payload = await getPayload({ config })
  
  console.log('Running seed...')
  // @ts-expect-error simple req mock
  await seed({ payload, req: {} })
  
  console.log('Seed complete!')
  process.exit(0)
}

runSeed().catch((err) => {
  console.error(JSON.stringify(err, null, 2))
  console.error(err)
  process.exit(1)
})
