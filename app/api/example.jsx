var axios = require('axios');

const API_URL = 'api URL';

module.exports = {
  FUNC_NAME: function (QUERY VALUE) {
    var encodedLocation = encodeURIComponent(QUERY VALUE);
    var requestUrl = `${API_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data;
      }
    }, function(res){
      throw new Error(res.data.message);
    })
  }
}
