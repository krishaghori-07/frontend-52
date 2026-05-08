//import argon2 module
// npm install argon2
const argon2 = require('argon2');

async function hashPassword() {
    try {
        const hash = await argon2.hash("krisha1020");
        console.log(hash);
        try {
            if (await argon2.verify(hash, 'krishna1020')) {
                // password match
                console.log('password matched');
            } else {
                console.log('password do not matched');
                // password did not match
            }
        } catch (err) {
            // internal failure
        }
    } catch (err) {
        console.error(err);
    }
}

hashPassword();