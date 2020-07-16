const config = require('../config/config.json');
const fetch = require('node-fetch');

module.exports.getUsersInCity = async city => {
    const url = config.bpdts.host + config.bpdts.usersInCity.replace('{city}', city);
    console.log(url);
    let usersInCity = null;
    const result = await fetch(url);
    usersInCity = await result.json(); 
    return usersInCity;
}