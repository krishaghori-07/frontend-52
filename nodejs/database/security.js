const argon2 = require ('argon2');
class PasswordManager {
    constructor() {
        console.log('PasswordManager class constructor called.');
    }
    async getHashPassword(original_password) {
        try {
            const hash = await argon2.hash(original_password);
            //console.log(hash);
            return hash;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
    async comparePassword(plain_text_password, hashed_password) {
        try {
            if (await argon2.verify(hashed_password,plain_text_password)==true) {
                return true;
            } 
            else 
            {
                return false;
            }
        } catch (err) {
            // internal failure
            console.log(err);
        }
    }
    generateRandomPassword(length = 10) {
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const digits = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        const allChars = uppercase + lowercase + digits + symbols;
        let password = '';

        // Ensure at least one character from each category
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += digits[Math.floor(Math.random() * digits.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        // Fill the rest with random characters
        for (let i = 4; i < length; i++) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
    // Shuffle the password to make it more random
    return password.split('').sort(() => Math.random() - 0.5).join('');
}
}
module.exports.PasswordManager = PasswordManager;