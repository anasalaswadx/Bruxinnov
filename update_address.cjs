const fs = require('fs');

const filesToUpdate = ['index.html', 'part1.html', 'part3.html', 'translations.js', 'process.js'];

const replacements = [
    {
        regex: /Avenue Herrmann Debroux 54, 1160 Auderghem, Brussels, Belgium/g,
        replacement: 'Chaussée d’Alsemberg 897 1180 BRUXELLES (Uccle)'
    },
    {
        regex: /Avenue Herrmann Debroux 54, 1160 Auderghem, Brussels/g,
        replacement: 'Chaussée d’Alsemberg 897 1180 BRUXELLES (Uccle)'
    },
    {
        regex: /Avenue Herrmann Debroux 54, 1160 Auderghem, Bruxelles/g,
        replacement: 'Chaussée d’Alsemberg 897 1180 BRUXELLES (Uccle)'
    },
    {
        regex: /Avenue Herrmann Debroux 54, 1160 Auderghem, Brussel/g,
        replacement: 'Chaussée d’Alsemberg 897 1180 BRUXELLES (Uccle)'
    },
    {
        regex: /<meta property="og:street-address" content="Avenue Herrmann Debroux 54">/g,
        replacement: '<meta property="og:street-address" content="Chaussée d’Alsemberg 897">'
    },
    {
        regex: /<meta property="og:locality" content="Auderghem">/g,
        replacement: '<meta property="og:locality" content="Uccle">'
    },
    {
        regex: /"streetAddress": "Avenue Herrmann Debroux 54",/g,
        replacement: '"streetAddress": "Chaussée d’Alsemberg 897",'
    },
    {
        regex: /"addressLocality": "Auderghem",/g,
        replacement: '"addressLocality": "Uccle",'
    },
    {
        regex: /"postalCode": "1160",/g,
        replacement: '"postalCode": "1180",'
    }
];

filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        replacements.forEach(r => {
            content = content.replace(r.regex, r.replacement);
        });
        
        if (content !== originalContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated ${file}`);
        } else {
            console.log(`No changes needed in ${file}`);
        }
    }
});
