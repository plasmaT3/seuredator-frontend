# Caminho da pasta .vercel
$vercelPath = ".vercel"

# Cria a pasta .vercel se não existir
if (-not (Test-Path $vercelPath)) {
    New-Item -ItemType Directory -Path $vercelPath | Out-Null
    Write-Host "📁 Pasta '.vercel' criada."
} else {
    Write-Host "📁 Pasta '.vercel' já existe."
}

# Cria o arquivo project.json com configurações para Vite
$projectJson = @'
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
'@
$projectJson | Set-Content "$vercelPath\project.json" -Encoding UTF8
Write-Host "✅ Arquivo '.vercel/project.json' criado com sucesso."

# Cria o arquivo engines.json com a versão de Node compatível
$enginesJson = @'
{
  "node": "20.19.0"
}
'@
$enginesJson | Set-Content "$vercelPath\engines.json" -Encoding UTF8
Write-Host "✅ Arquivo '.vercel/engines.json' criado com sucesso."

# Adiciona os arquivos ao Git
git add .vercel/project.json
git add .vercel/engines.json
git commit -m "Corrigido Vercel: setado Node 20.19.0 e config Vite para build"
git push

Write
