import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router, io } = app
  // 后端登录
  router.post('/login', controller.login.checkLogin)
  /**
   * 公共接口
   */
  router.resources('dict' ,'/v2/dict', controller.dictValue)
  /**
   * 博客文章
   */
  router.get('/v2/essay/list', controller.essay.getList)
  router.get('/v2/essay/detail', controller.essay.getDetail)
  // app.io.of('/chat')
  io.of('/').route('chat', io.controller.chat.sendMsg)
  /**
   *  admin 后台
   */
  router.resources('interviewBank', '/v2/interviewBank' ,app.oAuth2Server.authenticate(), controller.interviewBank)

  // 图片上传
  router.post('/v2/upload/img', app.oAuth2Server.authenticate(), controller.upload.uploadImg)
  // 文章 需要对 新增和修改，删除进行授权
  router.resources('essay','/v2/essay', app.oAuth2Server.authenticate(), controller.essay)
  // 获取 token, 可以将用户信息一起返回
  router.all('/v2/login', app.oAuth2Server.token(), async(ctx, next) => {
    const query = ctx.request.body
    const uName = query.username as string
    const pwd = query.password as string
    const resData = await ctx.service.user.getUserByName({ username: uName, pwd })
    ctx.body = { 
      status: 0,
      message: '请求成功',
      data: {
        userInfo: resData || {},
        tokenInfo: ctx.response.body
      }
    }
  })
  // getAccessToken 刷新token
  router.all('/v2/refreshToken', app.oAuth2Server.authenticate(), ctx => {
    ctx.body = ctx.state.oauth;
  })
}
