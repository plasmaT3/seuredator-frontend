Write-Output "🧹 Limpando node_modules e package-lock.json..."
Remove-Item -Recurse -Force node_modules, package-lock.json

Write-Output "📦 Instalando tailwindcss, postcss e autoprefixer..."
npm install -D tailwindcss postcss autoprefixer

Write-Output "📋 Criando arquivos de configuração do Tailwind CSS via npx..."
npx tailwindcss init -p

Write-Output "🛠️ Rodando build do projeto..."
npm run build

Write-Output "👀 Rodando preview local para testar..."
npm run preview

Write-Output "✨ Tudo pronto! Se o preview rodar bem, pode subir para o Vercel."
