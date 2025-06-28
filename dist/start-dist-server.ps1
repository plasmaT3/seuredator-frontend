# Arquivo: start-dist-server.ps1
# Uso: abra o PowerShell dentro da pasta dist e rode .\start-dist-server.ps1

# Verifica se 'serve' está instalado
if (-not (Get-Command serve -ErrorAction SilentlyContinue)) {
    Write-Output "serve não encontrado. Instalando globalmente..."
    npm install -g serve
}

Write-Output "Iniciando servidor local na pasta atual (dist)..."
serve -s . -l 5000
