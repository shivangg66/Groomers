'use strict';
const Controller = require('./base.controller');
const AuthManager = require('../biz/auth.manager');
const { MERCHANT_LOGIN, MERCHANT_SIGNUP, USER_LOGIN, USER_SIGNUP } = require('../constant/schema');
const { USER, MERCHANT, SERVICE } = require('../constant/model');


class Authuser extends Controller {

    constructor() {
        super();
        this._authManager = new AuthManager();
    };

    async userSignUp(req, res) {
        try {
            const userSignup = await this._authManager.signUp(req.body, USER_SIGNUP, require(USER));
            this.ok(res, userSignup)
        } catch (err) {
            this.error(res, err);
        }
    }
    async userLogin(req, res) {
        try {
            const userLogin = await this._authManager.login(req.body, USER_LOGIN, require(USER));
            this.ok(res, userLogin)
        } catch (err) {
            this.error(res, err);
        }
    }
    async merchantSignup(req, res) {
        try{
            const merchantSignup = await this._authManager.signUp(req.body, MERCHANT_SIGNUP, require(MERCHANT));
            this.ok(res, merchantSignup)
        } catch (err) {
            this.error(res, err);
        }
    }
    async merchnatLogin(req, res) {
        try{
            const merchnatLogin = await this._authManager.login(req.body, MERCHANT_LOGIN, require(MERCHANT));
            this.ok(res, merchnatLogin)
        }catch (err) {
            this.error(res, err);
        }
    }

    async addService(req, res){
        try{
            const addingService = await this._authManager.addService(req.body, require(SERVICE));
            this.ok(res, addingService)
        }catch (err){
            this.error(res, err);
        }
    }

    async updateService(req, res){
        try{
            const updatingService = await this._authManager.updateService(req.body, require(SERVICE));
            this.ok(res, updatingService)
        }catch (err){
            this.error(res, err);
        }
    }

    async deleteService(req, res){
        try{
            const deletingService = await this._authManager.deleteService(req.body, require(SERVICE));
            this.ok(res, deletingService)
        }catch(err){
            this.error(res, err);
        }
    }

    async findAllServices(req, res){
        try{
            const allServices = await this._authManager.findServices(require(SERVICE));
            this.ok(res, allServices)
        }catch(err){
            this.error(res, err);
        }
    }
}


module.exports = Authuser;