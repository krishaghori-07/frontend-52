class PasswordManager {
    constructor() 
    {
        console.log('PasswordManager class constructor called.');
    }
    getHashPassword(original_password) {
        let secret = "abc";
        return secret;
    }
    comparePassword(original_password, hashed_password) {
        return true;
    }
}
module.exports.PasswordManager = PasswordManager;