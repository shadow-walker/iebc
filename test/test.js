var Iebc = require('..');

var config = {
  api_token: 'afd3877583a07e5b77e447332bb98a80'
}

var Iebc = new Iebc.Iebc(config);
Iebc.get_candidate_by_contest('',function(response,error) {
  console.log(response)
});
