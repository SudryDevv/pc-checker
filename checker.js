const readline = require('readline');
const fs = require('fs');
const path = require('path');
const colors = require('colors');

const userHome = getUserHome();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const text = `
                            /$$$$$$ /$$   /$$/$$$$$$$ /$$$$$$$ /$$     /$$
                            /$$__  $| $$  | $| $$__  $| $$__  $|  $$   /$$/
                            | $$  \__| $$  | $| $$  \ $| $$  \ $$\  $$ /$$/ 
                            |  $$$$$$| $$  | $| $$  | $| $$$$$$$/ \  $$$$/  
                            \____  $| $$  | $| $$  | $| $$__  $$  \  $$/   
                            /$$  \ $| $$  | $| $$  | $| $$  \ $$   | $$    
                            |  $$$$$$|  $$$$$$| $$$$$$$| $$  | $$   | $$    
                            \______/ \______/|_______/|__/  |__/   |__/    
                                               
`;

console.log(colors.yellow(text));
console.log(colors.yellow("                                           FAST PC CHECKER\n"));
console.log(colors.yellow("                                      https://github.com/SudryDevv"));
console.log("\n");

console.log(colors.yellow("                     Veuillez appuyer sur ENTRÉE pour commencer le chargement des fichiers..."));

rl.on('line', () => {
  rl.close();
  console.log(colors.yellow("\nChargement de vos fichiers.."));

  checkDirectory(userHome, "Downloads");
  checkDirectory(userHome, "Desktop");
  checkDirectory(userHome, "Documents");
  checkDirectory(userHome, "Videos");
  checkDirectory(userHome, "Pictures");
});

function checkDirectory(parentDir, directory) {
  const fullPath = path.join(parentDir, directory);
  if (fs.existsSync(fullPath)) {
    fs.readdir(fullPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        console.error("Erreur dans le dossier", fullPath, ":", err);
        return;
      }
      files.forEach(file => {
        const filePath = path.join(fullPath, file.name);
        if (file.isDirectory()) {
          checkDirectory(fullPath, file.name);
        } else {
          if (file.name.includes('loader_prod.exe')) {
            console.log(colors.green("[+] Eulen trouvé dans : ", colors.yellow(fullPath), "|", colors.red(file.name)));
          } else if (file.name.includes('loader.cfg')) {
            console.log(colors.green("[+] Settings Eulen trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
          } else if (file.name.includes('settings.cock')) {
            console.log(colors.green("[+] Settings redEngine trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
          } else if (file.name.includes('password_is_eulen')) {
            console.log(colors.green("[+] Téléchargement de Eulen trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
          } else if (file.name.includes('TZ')) {
            console.log(colors.green("[+] TZ trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
          }
        }
      });
    });
  } else {
    console.error("Le répertoire", fullPath, "n'existe pas.");
  }
}

function getUserHome() {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
}
