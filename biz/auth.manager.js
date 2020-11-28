/* eslint-disable no-useless-catch */
const BaseManager = require("./base.manager");
const ValidationError = require("../exception/validation.error");
const AuthRepository = require("../repository/user-auth.repository");
const DuplicateError = require("../exception/duplicate-entity.error");
const NotFound = require("../exception/not-found.error");
const UnauthorizedError = require("../exception/unauthorize.error");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const randomize = require("randomatic");
const SCHEMA = require("../constant/schema");
const MSG = require("../constant/msg");

class AuthManager extends BaseManager {
  constructor() {
    super();
    this._authRepository = new AuthRepository();
  }

  async Login(bodyParams, SCHEMA) {
    try{
      const validationResult = this.validate(SCHEMA, bodyParams);
      if(validationResult.valid) {
        const {phone_number, email_id, password: pwd} = bodyParams;
        const checkExist = await this._authRepository.findOne(
          phone_number,
          email_id
        );
        if(checkExist) {
          const merchantData = await this._authRepository.findData(
            phone_number,
            email_id
          );
          const {merchant_id, password, isActive} = merchantData;
          const match = await bcrypt.compare(pwd, password);
          if (match) {
            //change key and salt rounds
            const accessToken = jwt.sign(
              {
                merchant_id: merchant_id,
                is_active: isActive,
              },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: 1209600 }
            );
            return accessToken;
          }
          throw new UnauthorizedError(MSG.INVALID_CLIENT_CREDENTIALS);
        }
        throw new NotFound(MSG.USER_NOT_FOUND);
      }
      throw new ValidationError(MSG.VALIDATION_ERROR, validationResult.errors);
    } catch(err) {
      throw err;
    }
  }

  async SignUp(bodyParams, SCHEMA) {
    try {
      const validationResult = this.validate(SCHEMA, bodyParams);
      if (validationResult.valid) {
        let { phone_number, email_id, password } = bodyParams;

        const checkExist = await this._authRepository.findOne(
          phone_number,
          email_id
        );

        if (!checkExist) {
          bodyParams.user_id = randomize("Aa0", 5);
          bodyParams.password = await bcrypt.hash(password, saltRounds);
          const saveUserData = await this._authRepository.saveOne(
            bodyParams
          );
          return saveUserData;
        }
        throw new DuplicateError(MSG.DUPLICATE_USER);
      }
      throw new ValidationError(MSG.VALIDATION_ERROR, validationResult.errors);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AuthManager;
