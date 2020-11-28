'use strict';
const Controller = require('./base.controller');
const AuthManager = require('../biz/auth.manager');
const { MERCHANT_LOGIN, MERCHANT_SIGNUP, USER_LOGIN, USER_SIGNUP } = require('../constant/schema');
const { USER, MERCHANT } = require('../constant/model');


class Authuser extends Controller {

    constructor() {
        super();
        this._authManager = new AuthManager();
    };

    async userSignUp(req, res) {
        try {
            const userSignup = await this._authManager.SignUp(req.body, USER_SIGNUP, USER);
            this.ok(res, userSignup)
        } catch (err) {
            this.error(res, err);
        }
    }
    async userLogin(req, res) {
        try {
            const userLogin = await this._authManager.login(req.body, USER_LOGIN, USER);
            this.ok(res, userLogin)
        } catch (err) {
            this.error(res, err);
        }
    }
    async merchantSignup(req, res) {
        try{
            const merchantSignup = await this._authManager.Signup(req.body, MERCHANT_SIGNUP, MERCHANT);
            this.ok(res, merchantSignup)
        } catch (err) {
            this.error(res, err);
        }
    }
    async merchnatLogin(req, res) {
        try{
            const merchnatLogin = await this._authManager.login(req.body, MERCHANT_LOGIN, MERCHANT);
            this.ok(res, merchnatLogin)
        }catch (err) {
            this.error(res, err);
        }
    }
}


module.exports = Authuser;