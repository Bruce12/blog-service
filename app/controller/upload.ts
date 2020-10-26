import baseController from './baseController'
const fs = require('mz/fs')
const OSS = require('ali-oss')
const crypto = require('crypto')


const aliFileInfo = {
  region: 'oss-cn-beijing',
  bucket: 'imgljh',
  accessKeyId: 'LTAI4G1N2ruoY1QXj8auTP6D',
  accessKeySecret: 'HQYek62Xr0nvpLaTNXrUDUgnItfqNC',
  cname: true,
  isRequestPay: true,
  endpoint: 'img.agatha.fun',
  secure: true
}
const client = new OSS(aliFileInfo)

/**
 * 阿里云图片上传
 */
export default class AliOssController extends baseController {
  async uploadImg() {
    const { ctx } = this
    let result: any = ''
    for (const file of ctx.request.files) {
      try {
        const hash = crypto.createHash('sha256')
        hash.update(file.filename + new Date().getTime())
        result = await client.put(hash.digest('hex'), file.filepath)
      } finally {
        await fs.unlink(file.filepath)
      }
    }
    this.success({ url: result.url, status: 0, detail: result })
  }
} 