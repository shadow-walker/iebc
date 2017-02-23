import requestpromise = require('request-promise');

export class Iebc {

  API_BASE_URL = "http://api.iebc.or.ke/";
  API_TOKEN = "afd3877583a07e5b77e447332bb98a80";
  API_KEY = "";
  APP_ID = "";

  constructor(config:any) {
    if(config.api_token !== null)
      this.API_TOKEN = config.api_token;

    if(config.api_key !== null)
      this.API_KEY = config.api_key;

    if(config.app_id !== null)
      this.APP_ID = config.app_id
  }

  private execute(endpoint,parameters,callback) {
    parameters.token = this.API_TOKEN;
    parameters.key = this.API_KEY;
    parameters.appid = this.APP_ID;
    var options = {
      uri: this.API_BASE_URL+endpoint+'/',
      qs: parameters,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    };


    requestpromise(options).then(function(response) {
      return callback(response,null);
    },function(error) {
      return callback(null,error);
    });
  }

  /**
  * Get Counties
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/county/
  **/
  public get_county(callback) {
    var parameters = {};
    this.execute('county',parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Count by Code
  *
  * code (String): county code
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/county/code/
  **/
  public get_county_by_code(code:string,callback) {
    var parameters = {};
    this.execute('county/'+code,parameters,function(response,err) {
      return callback(response,err);
    });
  }

  /**
  * Get Constituency
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/constituency
  **/
  public get_constituency(callback) {
    var parameters = {};
    this.execute('constituency/',parameters,function(response,err) {
      return callback(response,err);
    });
  }

  /**
  *Get Constituency by Code
  *
  * code (String): constituency code
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/constituency/code/
  **/
  public get_constituency_by_code(code,callback) {
    var parameters = {};

    this.execute('constituency/'+code,parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  * Get Ward
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/ward
  **/
  public get_ward(callback) {
    var parameters = {};
      var parameters = {};
      this.execute('ward/',parameters,function(response,err) {
        return callback(response,err);
      });
  }

  /**
  *Get Ward by Code
  *
  * code (String): ward code
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/ward/code/
  **/
  public get_ward_by_code(code,callback) {
    var parameters = {};
    this.execute('ward/'+code,parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Pollingstation
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/pollingstration/
  **/
  public get_pollingstation(callback) {
    var parameters = {};
    this.execute('pollingstation',parameters,function(response,err) {
      return callback(response,err);
    });
  }

  /**
  *Get Pollingstation by code
  *
  * code (String): Pollingstation code
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/pollingstration/code/
  **/
  public get_pollingstation_by_code(code,callback) {
    var parameters = {};
    this.execute('pollingstation/'+code,parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Party
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/party/
  **/
  public get_party(callback) {
    var parameters = {};
    this.execute('party',parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Party by code
  *
  * code (String): Party code
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/party/
  **/
  public get_party_by_code(code,callback) {
    var parameters = {}
    this.execute('party/'+code,parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Contest
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/contest/
  **/
  public get_contest(callback) {
    var parameters = {}
    this.execute('contest',parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Candidate by Party
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/candidate/?party=party
  **/
  public get_candidate_by_party(party,callback) {
    var parameters = {
      party: party,
    }
    this.execute("candidate",parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Candidate by Post
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/candidate/?post=post
  **/
  public get_candidate_by_post(post,callback) {
    var parameters = {
      post: post,
    }
    this.execute("candidate",parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Candidate by Contest
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/candidate/?post=post
  **/
  public get_candidate_by_contest(contest,callback) {
    var parameters = {
      contest: contest,
    }
    this.execute("candidate",parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Candidate by code
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/candidate/code
  **/
  public get_candidate_by_code(code,callback) {
    var parameters = {};
    this.execute('candidate/'+code,parameters,function(response,err) {
      return callback(response,err);
    });
  }

  /**
  *Get Voter info
  *
  * callback (Function): function called with response object as first argument and error as second argument
  * http://api.iebc.or.ke/voter/code/?type=info
  **/
  public get_voter_info(code,callback) {
    var parameters = {type: 'info'}
    this.execute('voter/'+code,parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Election Info
  *
  * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/info
  **/
  public get_info(callback) {
    var parameters = {};
    this.execute('info',parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Election Info by code
  *
  * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/info/code
  **/
  public get_info_by_code(code, callback) {
    var parameters = {};
    this.execute('info/'+code,parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Report
  *
  * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/report
  **/
  public get_report(callback) {
    var parameters = {};
    this.execute('reporting',parameters,function(response,err) {
      return callback(response,err);
    })
  }

  /**
  *Get Report by code
  *
  * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/report/code
  **/
  public get_report_by_code(code,callback) {
    var parameters = {};

    this.execute('reporting/'+code,parameters,function(response,err) {
      return callback(response,err);
    })
  }

}
