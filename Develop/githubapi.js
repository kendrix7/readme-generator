const axios = require('axios');

const api = {
  getUser(username) {
axios
.get(`https://api.github.com/users/${username}`, 
{
  headers: {"Authorization": `${process.env.GH_TOKEN}`}
})
  .then(function(res) {
    console.log(res.data)
     
    })
     
    .catch(error => console.log(error))
 
}
}

api.getUser(username);

module.exports = api;