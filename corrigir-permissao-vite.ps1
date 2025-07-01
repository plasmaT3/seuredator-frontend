# Caminho da raiz do projeto
$projectPath = Get-Location
$packageJsonPath = "$projectPath\package.json"

Write-Host "🔄 Lendo package.json..."

# Lê o package.json e converte em objeto
$packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json

# Garante que 'scripts' exista como Hashtable para poder modificar
if (-not $packageJson.PSObject.Properties.Name.Contains("scripts") -or $packageJson.scripts -eq $null) {
    $packageJson.scripts = @{}
} else {
    # Converte para Hashtable para modificar
    $packageJson.scripts = @{}
    foreach ($key in $packageJson.scripts.PSObject.Properties.Name) {
        $packageJson.scripts[$key] = $packageJson.scripts.$key
    }
}

# Atualiza ou adiciona scripts
$packageJson.scripts["dev"] = "vite"
$packageJson.scripts["build"] = "vite build"
$packageJson.scripts["preview"] = "vite preview"
$packageJson.scripts["postinstall"] = "chmod +x ./node_modules/.bin/vite || echo 'chmod falhou'"

# Salva o package.json atualizado
$packageJson | ConvertTo-Json -Depth 10 | Set-Content $packageJsonPath -Encoding UTF8
Write-Host "✅ Scripts atualizados no package.json."

# Commit e push
git add package.json
git commit -m "Adiciona postinstall para corrigir permissão vite no Vercel"
git push

Write-Host "`n🚀 Commit e push realizados. Aguarde o novo deploy no Vercel."
