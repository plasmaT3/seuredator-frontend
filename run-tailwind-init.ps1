try {
    Write-Output "Tentando rodar tailwindcss global..."
    $globalTailwind = "C:\Users\Home\AppData\Roaming\npm\tailwindcss.cmd"
    if (Test-Path $globalTailwind) {
        & $globalTailwind init -p
        Write-Output "Tailwind global executado com sucesso."
    } else {
        Write-Output "Executável global não encontrado, tentando local..."
        $localTailwind = Join-Path (Get-Location) "node_modules\.bin\tailwindcss.cmd"
        if (Test-Path $localTailwind) {
            & $localTailwind init -p
            Write-Output "Tailwind local executado com sucesso."
        } else {
            throw "Executável tailwindcss não encontrado nem global nem local."
        }
    }
} catch {
    Write-Error "Erro ao executar tailwindcss: $_"
}
