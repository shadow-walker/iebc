"use strict";
var requestpromise = require("request-promise");
var Iebc = (function () {
    function Iebc(config) {
        this.API_BASE_URL = "http://api.iebc.or.ke/";
        this.API_TOKEN = "afd3877583a07e5b77e447332bb98a80";
        this.API_KEY = "";
        this.APP_ID = "";
        if (config.api_token !== null)
            this.API_TOKEN = config.api_token;
        if (config.api_key !== null)
            this.API_KEY = config.api_key;
        if (config.app_id !== null)
            this.APP_ID = config.app_id;
    }
    Iebc.prototype.execute = function (endpoint, parameters, callback) {
        parameters.token = this.API_TOKEN;
        parameters.key = this.API_KEY;
        parameters.appid = this.APP_ID;
        var options = {
            uri: this.API_BASE_URL + endpoint + '/',
            qs: parameters,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            json: true
        };
        requestpromise(options).then(function (response) {
            return callback(response, null);
        }, function (error) {
            return callback(null, error);
        });
    };
    /**
    * Get Counties
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/county/
    **/
    Iebc.prototype.get_county = function (callback) {
        var parameters = {};
        this.execute('county', parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Count by Code
    *
    * code (String): county code
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/county/code/
    **/
    Iebc.prototype.get_county_by_code = function (code, callback) {
        var parameters = {};
        this.execute('county/' + code, parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    * Get Constituency
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/constituency
    **/
    Iebc.prototype.get_constituency = function (callback) {
        var parameters = {};
        this.execute('constituency/', parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Constituency by Code
    *
    * code (String): constituency code
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/constituency/code/
    **/
    Iebc.prototype.get_constituency_by_code = function (code, callback) {
        var parameters = {};
        this.execute('constituency/' + code, parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    * Get Ward
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/ward
    **/
    Iebc.prototype.get_ward = function (callback) {
        var parameters = {};
        var parameters = {};
        this.execute('ward/', parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Ward by Code
    *
    * code (String): ward code
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/ward/code/
    **/
    Iebc.prototype.get_ward_by_code = function (code, callback) {
        var parameters = {};
        this.execute('ward/' + code, parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Pollingstation
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/pollingstration/
    **/
    Iebc.prototype.get_pollingstation = function (callback) {
        var parameters = {};
        this.execute('pollingstation', parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Pollingstation by code
    *
    * code (String): Pollingstation code
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/pollingstration/code/
    **/
    Iebc.prototype.get_pollingstation_by_code = function (code, callback) {
        var parameters = {};
        this.execute('pollingstation/' + code, parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Party
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/party/
    **/
    Iebc.prototype.get_party = function (callback) {
        var parameters = {};
        this.execute('party', parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Party by code
    *
    * code (String): Party code
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/party/
    **/
    Iebc.prototype.get_party_by_code = function (code, callback) {
        var parameters = {};
        this.execute('party/' + code, parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Contest
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/contest/
    **/
    Iebc.prototype.get_contest = function (callback) {
        var parameters = {};
        this.execute('contest', parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Candidate by Party
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/candidate/?party=party
    **/
    Iebc.prototype.get_candidate_by_party = function (party, callback) {
        var parameters = {
            party: party,
        };
        this.execute("candidate", parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Candidate by Post
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/candidate/?post=post
    **/
    Iebc.prototype.get_candidate_by_post = function (post, callback) {
        var parameters = {
            post: post,
        };
        this.execute("candidate", parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Candidate by Contest
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/candidate/?post=post
    **/
    Iebc.prototype.get_candidate_by_contest = function (contest, callback) {
        var parameters = {
            contest: contest,
        };
        this.execute("candidate", parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Candidate by code
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/candidate/code
    **/
    Iebc.prototype.get_candidate_by_code = function (code, callback) {
        var parameters = {};
        this.execute('candidate/' + code, parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Voter info
    *
    * callback (Function): function called with response object as first argument and error as second argument
    * http://api.iebc.or.ke/voter/code/?type=info
    **/
    Iebc.prototype.get_voter_info = function (code, callback) {
        var parameters = { type: 'info' };
        this.execute('voter/' + code, parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Election Info
    *
    * callback (Function): function called with response object as first argument and error as second argument
      * http://api.iebc.or.ke/info
    **/
    Iebc.prototype.get_info = function (callback) {
        var parameters = {};
        this.execute('info', parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Election Info by code
    *
    * callback (Function): function called with response object as first argument and error as second argument
      * http://api.iebc.or.ke/info/code
    **/
    Iebc.prototype.get_info_by_code = function (code, callback) {
        var parameters = {};
        this.execute('info/' + code, parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Report
    *
    * callback (Function): function called with response object as first argument and error as second argument
      * http://api.iebc.or.ke/report
    **/
    Iebc.prototype.get_report = function (callback) {
        var parameters = {};
        this.execute('reporting', parameters, function (response, err) {
            return callback(response, err);
        });
    };
    /**
    *Get Report by code
    *
    * callback (Function): function called with response object as first argument and error as second argument
      * http://api.iebc.or.ke/report/code
    **/
    Iebc.prototype.get_report_by_code = function (code, callback) {
        var parameters = {};
        this.execute('reporting/' + code, parameters, function (response, err) {
            return callback(response, err);
        });
    };
    return Iebc;
}());
exports.Iebc = Iebc;
