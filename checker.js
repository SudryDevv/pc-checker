console.clear();

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const colors = require('colors');
const crypto = require('crypto');

const userHome = getUserHome();

let cheatsFounds = 0;

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
  console.log(colors.yellow("\n[-] Chargement de vos fichiers.."));

  checkDirectory(userHome, "Downloads");
  checkDirectory(userHome, "Desktop");
  checkDirectory(userHome, "Documents");
  checkDirectory(userHome, "Videos");
  checkDirectory(userHome, "Pictures");
  checkDirectory(userHome, "OneDrive");

  setTimeout(() => {
    console.log(colors.yellow(`\n[-] Chargement de vos fichiers terminé, ${cheatsFounds} cheat(s) trouvé(s).`));
  }, 1000);
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

            cheatsFounds++;
            console.log(colors.green("[+] Eulen trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));

          } else if (file.name.includes('loader.cfg')) {

            cheatsFounds++;
            console.log(colors.green("[+] Settings Eulen trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));

          } else if (file.name.includes('settings.cock')) {

            cheatsFounds++;
            console.log(colors.green("[+] Settings redEngine trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));

          } else if (file.name.includes('password_is_eulen')) {

            cheatsFounds++;
            console.log(colors.green("[+] Téléchargement de Eulen trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));

          } else if (file.name.startsWith('TZ')) {
            if(file.name.endsWith('.zip')) {
              cheatsFounds++;
              console.log(colors.green("[+] Téléchargement de TZ trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
            }

          } else if (file.name.startsWith('TZX')) {

            if(file.name.endsWith('.zip')) {
              cheatsFounds++;
              console.log(colors.green("[+] TZX trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
            }

          } else if (file.name.includes('Susano')) {

            cheatsFounds++;
            console.log(colors.green("[+] Susano trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));

          } else if (file.name.includes('chrome.exe')) {

            fs.stat(filePath, (err, stats) => {
              if (err) {
                console.log(colors.red("[!] Erreur lors du chargement du fichier :", colors.yellow(filePath)));
                return;
              }
              const fileSizeInBytes = stats.size;
              const fileSizeInKilobytes = fileSizeInBytes / 1024;
              const fileSizeInMegabytes = fileSizeInKilobytes / 1024;

              if(fileSizeInMegabytes.toFixed(2) < 10) {
                cheatsFounds++;
                console.log(colors.green("[+] TZ / HX trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
              }
              })
          } else if (file.name.includes('visualstudio.exe') && file.name.includes('edge.exe') && file.name.includes('eclipse.exe') && file.name.includes('excel.exe') && file.name.includes('filezilla.exe') && file.name.includes('explorer.exe') && file.name.includes('firefox.exe') && file.name.includes('wordpad.exe') && file.name.includes('acrobat.exe') && file.name.includes('discord.exe') && file.name.includes('winword.exe') && file.name.includes('teams.exe') && file.name.includes('notepad.exe') && file.name.includes('opera.exe') && file.name.includes('paint.exe') && file.name.includes('premiere.exe') && file.name.includes('putty.exe') && file.name.includes('dwm.exe') && file.name.includes('iexplore.exe') && file.name.includes('outlook.exe') && file.name.includes('photoshop.exe') && file.name.includes('gimp.exe') && file.name.includes('skype.exe') && file.name.includes('obs.exe') && file.name.includes('thunderbird.exe') && file.name.includes('microsoftpowerpoint.exe')) {

            fs.stat(filePath, (err, stats) => {
              if (err) {
                console.log(colors.red("[!] Erreur lors du chargement du fichier :", colors.yellow(filePath)));
                return;
              }
              const fileSizeInBytes = stats.size;
              const fileSizeInKilobytes = fileSizeInBytes / 1024;
              const fileSizeInMegabytes = fileSizeInKilobytes / 1024;

              if (fileSizeInMegabytes >= 5.94) {
                cheatsFounds++;
                console.log(colors.green("[+] HX trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
              }
              })
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
