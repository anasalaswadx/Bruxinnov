const fs = require('fs');

const filesToUpdate = ['index.html', 'part3.html'];

const oldCode = `        document.getElementById('consultation-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const status = document.getElementById('form-status');
            status.classList.remove('hidden');
            status.innerHTML = '<span class="text-accent-cyan">Sending request...</span>';
            
            // Simulate API call
            setTimeout(() => {
                status.innerHTML = '<span class="text-accent-green font-medium">Thank you! We will contact you shortly.</span>';
                e.target.reset();
            }, 1500);
        });`;

const newCode = `        document.getElementById('consultation-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const status = document.getElementById('form-status');
            status.classList.remove('hidden');
            status.innerHTML = '<span class="text-accent-cyan">Sending request...</span>';
            
            const form = e.target;
            
            fetch('https://script.google.com/macros/s/AKfycbxAwuPBJWWZ51jXRVtuWCVUNRwf1FdGBzX3PEuOEfR_30eo8rmJcm8AJ-vI5jOR5Ir2/exec', {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => {
                status.innerHTML = '<span class="text-accent-green font-medium">Thank you! We will contact you shortly.</span>';
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                status.innerHTML = '<span class="text-red-500 font-medium">Oops! Something went wrong. Please try again.</span>';
            });
        });`;

filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes(oldCode)) {
            content = content.replace(oldCode, newCode);
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated ${file}`);
        } else {
            console.log(`Could not find target code in ${file}`);
        }
    }
});
