const fs = require('fs')
const path = require('path')

fs.readdirSync(path.join(__dirname, './abis/')).map(filename => {
  if (filename.endsWith('.json')) {
    const contractName = filename.replace('.json', '')
    return {
      contractName,
      filename,
      body: JSON.parse(fs.readFileSync(path.join(__dirname, './abis/', filename)).toString())
    }
  } else {
    return null
  }
}).filter(item => item !== null).forEach(item => {
  fs.writeFileSync(
    path.join(__dirname, './src/abis/', item.contractName + '.ts'),
    `export const ${item.contractName}ABI = ${JSON.stringify(item.body.abi, undefined, 2)} as const\n`
  )
})
