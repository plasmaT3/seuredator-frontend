# Fix-Vite-Vercel-Full.ps1
Write-Host "🚀 Iniciando correção completa do projeto Vite para Vercel..."

$projectRoot = Get-Location
$packageJsonPath = Join-Path $projectRoot "package.json"
$viteConfigJS = Join-Path $projectRoot "vite.config.js"
$viteConfigMJS = Join-Path $projectRoot "vite.config.mjs"

# Verificar Node
$nodeVersion = (node --version).Replace("v", "")
if ($nodeVersion -lt "20.19.0") {
    Write-Host "⚠️ Sua versão do Node é $nodeVersion. Recomendo atualizar para >= 20.19.0 ou 22.x LTS." -ForegroundColor Yellow
}

# Corrigir package.json
if (Test-Path $packageJsonPath) {
    Write-Host "🛠️ Corrigindo 'package.json'..."
    $json = Get-Content $packageJsonPath -Raw | ConvertFrom-Json

    # Corrigir scripts
    $json.scripts.dev = "vite"
    $json.scripts.build = "vite build"
    $json.scripts.preview = "vite preview"

    # Remover postinstall se existir
    if ($json.PSObject.Properties.Name -contains "postinstall") {
        $json.PSObject.Properties.Remove("postinstall")
        Write-Host "✅ Removido 'postinstall'."
    }

    # Verificar dependências
    if (-Not $json.devDependencies.vite) {
        $json.devDependencies.vite = "^4.5.14"
    }
    if (-Not $json.devDependencies.'@vitejs/plugin-react') {
        $json.devDependencies.'@vitejs/plugin-react' = "^4.0.0"
    }
    if (-Not $json.dependencies.react) {
        $json.dependencies.react = "^18.2.0"
    }
    if (-Not $json.dependencies.'react-dom') {
        $json.dependencies.'react-dom' = "^18.2.0"
    }

    # Salvar
    $json | ConvertTo-Json -Depth 10 | Set-Content -Path $packageJsonPath -Encoding UTF8
    Write-Host "✅ 'package.json' corrigido."
} else {
    Write-Host "❌ 'package.json' não encontrado. Abortando." -ForegroundColor Red
    exit 1
}

# Corrigir vite.config.js → vite.config.mjs
if (Test-Path $viteConfigJS) {
    Write-Host "🔁 Renomeando 'vite.config.js' para 'vite.config.mjs'..."
    Rename-Item -Path $viteConfigJS -NewName "vite.config.mjs" -Force
    $viteConfigMJS = Join-Path $projectRoot "vite.config.mjs"
}

# Verificar conteúdo do vite.config.mjs
if (-Not (Test-Path $viteConfigMJS)) {
    Write-Host "📝 Criando 'vite.config.mjs' padrão..."
    @"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
"@ | Set-Content -Path $viteConfigMJS -Encoding UTF8
    Write-Host "✅ 'vite.config.mjs' criado."
} else {
    Write-Host "✅ 'vite.config.mjs' já existe."
}

Write-Host "`n🎯 Correção finalizada! Agora execute manualmente:" -ForegroundColor Green
Write-Host "   npm install"
Write-Host "   npm run build"
Write-Host "   npm run preview"
Write-Host "`nSe o preview abrir localmente, pode subir pro Vercel sem medo. 💪"
