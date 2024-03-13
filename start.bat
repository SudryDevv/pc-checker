@echo off
echo Vérification de Node.js...

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js n'est pas installé. Installation en cours...
    curl -o node_installer.msi https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi
    start /wait msiexec /i node_installer.msi /quiet
    echo Installation de Node.js terminée.
) else (
    echo Node.js est déjà installé.
)

echo Exécution du script Node.js...
node checker.js
if %errorlevel% neq 0 (
    echo Une erreur s'est produite lors de l'exécution de checker.js.
    pause
    exit /b %errorlevel%
) else (
    echo Terminé avec succès.
)

pause
