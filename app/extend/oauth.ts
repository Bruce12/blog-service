import { UserModel } from './../model/User'
import { Context } from 'egg'
import { ClientModel } from '../model/Client'
import { TokenModel } from '../model/Token'
import { RefreshTokenModel } from '../model/RefreshToken'


interface IToken {
  refreshToken: string
  accessToken: string
  accessTokenExpiresAt: Date
  scope: string 
  refreshTokenExpiresAt: Date
}


export default () => {
  class Model {
    ctx: Context
    constructor(ctx: Context) {
      this.ctx = ctx
    }
    /**
     * 获取客户端信息
     * @param clientId 要查询的客户端 Id
     * @param clientSecret 要校验的客户端秘钥
     */
    async getClient(clientId: string, clientSecret: string) {
      try {
        // 1.从数据库中查询客户端信息
        const client = await ClientModel.findOne({ clientId })
        if (!client) return false
        // 2.校验客户端秘钥
        if (clientSecret && (clientSecret !== client.clientSecret)) {
          return false
        }
        // 3. 返回数据
        return {
          clientId: client.clientId,
          clientSecret: client.clientSecret,
          grants: client.grants.split(',')
        }
      } catch (e) {
        return false
      }
    }
    /**
     * 校验用户信息
     * @param username 用户名
     * @param password 密码
     */
    async getUser(username: string, password: string) {
      try {
        console.log('getUser() invoked...')
        // 1.从数据库中查询用户信息
        const user = await UserModel.findOne({
          username
        })
        if (!user) return false
        // 2.校验用户密码
        if (user.password !== password) return false
        // 3. 返回用户信息
        return {
          id: user._id
        }
      } catch {
        return false
      }
    }
     /**
     * 获取访问令牌信息
     * @param accessToken 要查询的访问令牌 
     */
    async getAccessToken(accessToken: string) {
      try {
        console.log('getAccessToken() invoked...')
        // 获取秘钥信息
        const token = await TokenModel.findOne({
          token: accessToken
        })
        if (!token) return false
        // 返回数据
        return {
          accessToken: token.token,
          accessTokenExpiresAt: token.expirestAt,
          scope: token.scope,
          client: { id: token.clientId },
          user: { id: token.userId }
        }
      } catch {
        return false
      }
    }
     /**
     * 保存 token 令牌，包括访问令牌和刷新令牌
     * @param token 
     * @param client 
     * @param user 
     */
    async saveToken(token: IToken, client: { id: string }, user: { id: string }) {
      try {
        console.log('saveToken() revoked...')
        // 1.保存访问令牌
        const accessToken = await TokenModel.create({
          token: token.accessToken,
          expirestAt: token.accessTokenExpiresAt,
          scope: token.scope || '',
          clientId: client.id,
          userId: user.id
        })
        // 2. 保存刷新令牌
        const refreshToken = await RefreshTokenModel.create({
          token: token.refreshToken,
          expirestAt: token.refreshTokenExpiresAt,
          scope: token.scope || '',
          clientId: client.id,
          userId: user.id
        })
        // 3. 返回保存令牌的信息
        return {
          accessToken: accessToken.token,
          accessTokenExpiresAt: accessToken.expirestAt,
          refreshToken: refreshToken.token,
          refreshTokenExpiresAt: refreshToken.expirestAt,
          scope: accessToken.scope,
          client: { id: accessToken.clientId },
          user: { id: accessToken.userId }
        }
      } catch {
        return false
      }
    }
    // /**
    //  * 保存授权码信息
    //  * @param code 要保存的授权码信息
    //  * @param client 要保存的客户端信息
    //  * @param user 要保存的用户信息
    //  */
    // async saveAuthorizationCode(code, client, user) {
    //   try {
    //     console.log('saveAuthorizationCode() invoked...')
    //     // 1. 保存授权码信息到数据库
    //     const authCode = await this.ctx.model.AuthCode.create({
    //       code: code.autthorizationCode,
    //       expiresAt:code.expiresAt,
    //       redirectUri: code.redirectUri,
    //       scope: code.scope || '',
    //       clientId: client.id,
    //       userId: user.id
    //     })
    //     // 2. 返回数据
    //     return {
    //       authorizationCode: authCode.code,
    //       expiresAt: authCode.expiresAt,
    //       redirectUri: authCode.redirectUri,
    //       scope: authCode.scope,
    //       client: { id: authCode.clientId },
    //       user: { id: authCode.userId }
    //     }
    //   } catch {
    //     return false
    //   }
    // }
    /**
     * 获取授权码信息
     * @param authorizationCode 要查询的授权码
     */
    // async getAuthorizationCode(authorizationCode: string) {
    //   try {
    //     console.log('getAuthorizationCode() invoked...')
    //     // 1. 从数据库中查询授权码信息
    //     const authCode = await this.ctx.model.AuthCode.findOne({
    //       code: authorizationCode
    //     })
    //     if (!authCode) return false
    //     // 2.从数据库中查询客户端信息，用户信息
    //     const user = await this.ctx.model.User.findOne({
    //       userId: authCode.userId
    //     })
    //     if (!user) return false
    //     // 3. 返回数据
    //     return {
    //       code: authCode.code,
    //       expiresAt: authCode.expiresAt,
    //       redirectUri: authCode.redirectUri,
    //       scope: authCode.scope,
    //       client: { id: authCode.clientId },
    //       user: { id: authCode.userId }
    //     }
    //   } catch {
    //     return false
    //   }
    // }
   
    /**
     * 注销授权码
     * @param code 要注销的授权码
     */
    // async revokeAuthorizationCode(code) {
    //   try {
    //     console.log('revokeAuthorizationCode() invoked...')
    //     // 查询授权码并删除
    //     return await this.ctx.model.AuthCode.findOneAndRemove({
    //       code: code.code
    //     })
    //   } catch {
    //     return false
    //   }
    // }

    /**
     * 吊销刷新令牌
     * @param token 要删除的刷新令牌 Object
     */
    // async revokeToken(token) {
    //   try {
    //     console.log('revokeToken() invoked...')
    //     return await this.ctx.model.RefreshToken.findOneAndRemove({
    //       token: token.refreshToken
    //     })
    //   } catch {
    //     return false
    //   }
    // }
    /**
     * 获取刷新令牌信息
     * @param refreshToken 要查询的刷新令牌
     */
    // async getRefreshToken(refreshToken) {
    //   try {
    //     console.log('getRefreshToken() invoked...')
    //     // 获取刷新令牌
    //     const token = await this.ctx.model.RefreshToken.findOne({
    //       token: refreshToken
    //     })
    //     if (!token) return false
    //     // 2. 返回数据
    //     return {
    //       refreshToken: token.token,
    //       refreshTokenExpiresAt: token.expiresAt,
    //       scope: token.scope,
    //       client: { id: token.clientId },
    //       user: { id: token.userId }
    //     }
    //   } catch {
    //     return false
    //   }
    // }
    
    // async validateScope(user, client, scope) {
    //   if (!scope.split(' ').every(s => VALID_SCOPES.indexOf(s) >= 0)) {
    //     return false
    //   }
    //   return scope
    // }

    // async verifyScope(token, scope) {
    //   if (!token.scope) return false
    //   const requestedScopes = scope.split(' ')
    //   const authorizedScopes = token.scope.split(' ')
    //   return requestedScopes.every(s => authorizedScopes.indexOf(s) >= 0)
    // }
  }

  return Model
}