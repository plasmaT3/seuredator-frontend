# Caminho da pasta onde está seu código React
$sourcePath = ".\src"

# Encontra todos os arquivos .jsx e .js dentro da pasta
$files = Get-ChildItem -Path $sourcePath -Include *.jsx,*.js -Recurse

foreach ($file in $files) {
    Write-Output "Processando arquivo: $($file.FullName)"

    # Lê o conteúdo do arquivo
    $content = Get-Content -Raw -Path $file.FullName

    # Substitui todas as ocorrências de \" por "
    $newContent = $content -replace '\\\"', '"'

    # Se houver mudança, salva o arquivo
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Output "Arquivo corrigido: $($file.Name)"
    } else {
        Write-Output "Nenhuma correção necessária no arquivo."
    }
}

Write-Output "Revisão automática finalizada!"
