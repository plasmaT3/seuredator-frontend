# Caminho do projeto
$projectPath = Get-Location

Write-Host "🧹 Limpando arquivos antigos..."

# Remove package-lock.json
if (Test-Path "$projectPath\package-lock.json") {
    Remove-Item "$projectPath\package-lock.json" -Force
    Write-Host "✔️ package-lock.json removido."
}

# Remove node_modules
if (Test-Path "$projectPath\node_modules") {
    Remove-Item "$projectPath\node_modules" -Recurse -Force
    Write-Host "✔️ node_modules removido."
}

# Reinstala dependências
Write-Host "📦 Instalando dependências..."
npm install

# Garante que o Vite está na versão correta como devDependency
Write-Host "➕ Instalando Vite como dependência de desenvolvimento..."
npm install vite --save-dev

# Verifica e corrige os scripts no package.json
Write-Host "🔍 Verificando scripts no package.json..."

# Lê o conteúdo atual
$packageJsonPath = "$projectPath\package.json"
$packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json

# Garante scripts básicos
$packageJson.scripts.dev = "vite"
$packageJson.scripts.build = "vite build"
$packageJson.scripts.preview = "vite preview"

# Salva as alterações
$packageJson | ConvertTo-Json -Depth 10 | Set-Content $packageJsonPath -Encoding UTF8
Write-Host "✅ Scripts atualizados no package.json."

# Commit e push
git add .
git commit -m "Limpeza e reinstalação de dependências com Vite"
git push

Write-Host "`n🚀 Tudo pronto. Vercel vai tentar novo build agora!"
