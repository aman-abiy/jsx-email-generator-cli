const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const templatesDir = path.join(__dirname, './templates');
const propsDir = path.join(__dirname, './props');
const outputDir = path.join(__dirname, '../.rendered');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const buildAndOpenTemplates = () => {
  const templates = fs.readdirSync(templatesDir).filter(file => file.endsWith('.jsx'));

  templates.forEach(template => {
    const templateName = path.basename(template, '.jsx');
    const templatePath = path.join(templatesDir, template);
    const propsPath = path.join(propsDir, `${templateName}.props.json`);
    const outputFilePath = path.join(outputDir, `${templateName}.html`);

    if (fs.existsSync(propsPath)) {
      const props = JSON.stringify(JSON.parse(fs.readFileSync(propsPath, 'utf8')));

      exec(
        `npx jsx-email build ${templatePath} --props '${props}' --output=${outputFilePath}`,
        (err, stdout, stderr) => {
          if (err) {
            console.error(`Failed to build template: ${templateName}`);
            console.error(stderr);
            return;
          }
          console.log(`Built: ${outputFilePath}`);

          exec(`open ${outputFilePath}`, (err) => {
            if (err) {
              console.error(`Failed to open file: ${outputFilePath}`);
            }
          });
        }
      );
    } else {
      console.warn(`Props file missing for template: ${templateName}`);
    }
  });
};

buildAndOpenTemplates();
