try {
    Write-Output "Removendo node_modules e package-lock.json..."
    Remove-Item -Recurse -Force node_modules, package-lock.json

    Write-Output "Instalando Tailwind CSS, PostCSS e Autoprefixer localmente..."
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

    $localTailwind = Join-Path (Get-Location) "node_modules\.bin\tailwindcss.cmd"
    Write-Output "Executando Tailwind CSS init..."
    & $localTailwind init -p

    Write-Output "Tailwind CSS configurado com sucesso."
}
catch {
    Write-Error "Erro no script: $_"
}
