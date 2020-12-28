'use strict';
const Controller = require('./base.controller');
const AuthManager = require('../biz/auth.manager');
const { MERCHANT_LOGIN, MERCHANT_SIGNUP, USER_LOGIN, USER_SIGNUP } = require('../constant/schema');
const { USER, MERCHANT, SERVICE, COMPANY } = require('../constant/model');


class AuthController extends Controller {

    constructor() {
        super();
        this._authManager = new AuthManager();
    };

    userSignUp = async (req, res) => {
        try {
            const userSignup = await this._authManager.signUp(req.body, USER_SIGNUP, require(USER));
            this.ok(res, userSignup)
        } catch (err) {
            this.error(res, err);
        }
    }
    userLogin = async (req, res) => {
        try {
            const userLogin = await this._authManager.login(req.body, USER_LOGIN, require(USER));
            this.ok(res, userLogin)
        } catch (err) {
            this.error(res, err);
        }
    }
    merchantSignup = async (req, res) => {
        try {
            const merchantSignup = await this._authManager.signUp(req.body, MERCHANT_SIGNUP, require(MERCHANT));
            this.ok(res, merchantSignup)
        } catch (err) {
            this.error(res, err);
        }
    }
    merchantLogin = async (req, res) => {
        try {
            const merchnatLogin = await this._authManager.login(req.body, MERCHANT_LOGIN, require(MERCHANT));
            this.ok(res, merchnatLogin)
        } catch (err) {
            this.error(res, err);
        }
    }

    addService = async (req, res) => {
        try {
            const addingService = await this._authManager.addService(req.body, require(SERVICE));
            this.ok(res, addingService)
        } catch (err) {
            this.error(res, err);
        }
    }

    updateService = async (req, res) => {
        try {
            const updatingService = await this._authManager.updateService(req.body, require(SERVICE));
            this.ok(res, updatingService)
        } catch (err) {
            this.error(res, err);
        }
    }

    deleteService = async (req, res) => {
        try {
            const deletingService = await this._authManager.deleteService(req.body, require(SERVICE));
            this.ok(res, deletingService)
        } catch (err) {
            this.error(res, err);
        }
    }

    findAllServices = async (req, res) => {
        try {
            const allServices = await this._authManager.findServices(require(SERVICE));
            this.ok(res, allServices)
        } catch (err) {
            this.error(res, err);
        }
    }

    updateCompanyDetails = async (req, res) => {
        try {
            const updatingCompanyDetails = await this._authManager.updateCompanyDetails(req.body, require(MERCHANT));
            this.ok(res, updatingCompanyDetails)
        } catch (err){
            this.error(res, err);
        }
    }

    findAllCompanyDetails = async (req, res) => {
        try{
            const findCompanyDetails = await this._authManager.findAllCompanyDetails(require(MERCHANT));
            this.ok(res, findCompanyDetails)
        } catch (err){
            this.error(res, err);
        }
    }
}


module.exports = AuthController;