/*____________________________
Author:Yazalde Filimone Pinto*/
console.log("   {")
console.log("Author: Yazalde Filimone Pinto")
console.log("Idade: 16 anos")
console.log("Github:https://github.com/YazaldeFP")
console.log("  }")
console.log("")
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')
const arquivo = process.argv[2] 
const arqu = path.dirname(arquivo)
const [caminhoArquivo, yaaa]= path.basename(arquivo).split(".")
const pasta = '${caminho_arquivo}/Yazimag'
if(!fs.existsSync(pasta)){
     fs.mkdirSync(pasta)
}
const tamanho = [128, 48, 32, 24, 16]
tamanho.forEach(tamanho=>{
    sharp(arquivo)
        .clone()
        .tamanho('${tamanho}')
        .tofile('$(pasta)/${caminho_arquivo}.${tamanho}.${yaaa}')
        .them(info=>{
            console.log(info)
        }).catch(erro=>{
            console.log(erro)
        })
})
