console.clear();

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const colors = require('colors');

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
            if (file.name.endsWith('.zip')) {
              cheatsFounds++;
              console.log(colors.green("[+] Téléchargement de TZ trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
            }

          } else if (file.name.startsWith('TZX')) {

            if (file.name.endsWith('.zip')) {
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

              if (fileSizeInMegabytes.toFixed(2) < 10) {
                cheatsFounds++;
                console.log(colors.green("[+] TZ / HX trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
              }
            })
          } else {
            const possibleFileNames = [
              'visualstudio.exe',
              'edge.exe',
              'eclipse.exe',
              'excel.exe',
              'filezilla.exe',
              'explorer.exe',
              'firefox.exe',
              'wordpad.exe',
              'acrobat.exe',
              'discord.exe',
              'winword.exe',
              'teams.exe',
              'notepad.exe',
              'opera.exe',
              'paint.exe',
              'premiere.exe',
              'putty.exe',
              'dwm.exe',
              'iexplore.exe',
              'outlook.exe',
              'photoshop.exe',
              'gimp.exe',
              'skype.exe',
              'obs.exe',
              'thunderbird.exe',
              'microsoftpowerpoint.exe',
              'steam.exe',
              'notepad++.exe',
              'microsoftedge.exe'
            ];

            for (const possibleName of possibleFileNames) {
              if (file.name.includes(possibleName)) {
                fs.stat(filePath, (err, stats) => {
                  if (err) {
                    console.log(colors.red("[!] Erreur lors du chargement du fichier :", colors.yellow(filePath)));
                    return;
                  }
                  const fileSizeInBytes = stats.size;
                  const fileSizeInKilobytes = fileSizeInBytes / 1024;
                  const fileSizeInMegabytes = fileSizeInKilobytes / 1024;
            
                  const megabytesString = fileSizeInMegabytes.toFixed(2);
                  const threeFirstDigits = parseFloat(megabytesString.substring(0, 4));
            
                  if (threeFirstDigits === 5.94) {
                    cheatsFounds++;
                    console.log(colors.green("[+] HX trouvé dans :", colors.yellow(fullPath), "|", colors.red(file.name)));
                  }
                });
                break;
              }
            }
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
