const fs = require('fs')
const path = require('path')

const source = process.argv[2]

const sourceAbis = fs.readdirSync(source).map(filename => {
  if (filename.endsWith('.json')) {
    const contractName = filename.replace('.json', '')
    return {
      contractName,
      filename,
      body: JSON.parse(fs.readFileSync(path.join(source, '/', filename)).toString())
    }
  } else {
    return null
  }
}).filter(item => item !== null)

console.log(`${sourceAbis.length} contracts found`)

sourceAbis.forEach(item => {
  fs.writeFileSync(
    path.join(__dirname, './src/abis/', item.contractName + '.ts'),
    `export const ${item.contractName}ABI = ${JSON.stringify(item.body.abi, undefined, 2)} as const \n`
  )
})

fs.writeFileSync(
  path.join(__dirname, './src/abis/', 'index.ts'),
  sourceAbis.map(item => `export * from './${item.contractName}'`).join('\n')
)
