# Atualiza .env com a URL do backend
$envFile = ".env"
$backendUrl = "https://seuredator-backend.onrender.com"

Write-Output "Atualizando variável de ambiente VITE_API_URL para: $backendUrl"

if (Test-Path $envFile) {
    # Se existir, substitui ou adiciona a variável VITE_API_URL
    (Get-Content $envFile) -replace '^(VITE_API_URL=).*$', "VITE_API_URL=$backendUrl" | Set-Content $envFile
    # Caso não tenha a variável, adiciona
    if (-not (Select-String -Path $envFile -Pattern '^VITE_API_URL=')) {
        Add-Content $envFile "`nVITE_API_URL=$backendUrl"
    }
} else {
    # Cria o arquivo com a variável
    "VITE_API_URL=$backendUrl" | Set-Content $envFile
}

# Instala dependências atualizadas
Write-Output "Executando npm install..."
npm install

# Faz o build do frontend
Write-Output "Executando npm run build..."
npm run build

# Opcional: roda preview local para testar
Write-Output "Executando npm run preview para teste local..."
npm run preview

Write-Output "Pronto! Atualize seu repositório com git commit/push e faça deploy no Vercel."
