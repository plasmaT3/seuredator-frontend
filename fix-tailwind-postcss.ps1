# fix-tailwind-postcss.ps1

Write-Host "Instalando @tailwindcss/postcss..." -ForegroundColor Cyan
npm install -D @tailwindcss/postcss

$postcssConfigPath = ".\postcss.config.js"

# Conteúdo do postcss.config.js atualizado
$postcssConfigContent = @"
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
}
"@

Write-Host "Atualizando postcss.config.js em $postcssConfigPath" -ForegroundColor Cyan
Set-Content -Path $postcssConfigPath -Value $postcssConfigContent -Encoding UTF8

Write-Host "Feito! Agora rode 'npm run build' para testar." -ForegroundColor Green
