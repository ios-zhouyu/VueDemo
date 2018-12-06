
import ajax from './httpAjax'

//config/index的跨域设置
// const BaseUrl = 'http://localhost:9000'
const BaseUrl = '/api'

//获取地址
export const reqAddress = (geo) => ajax('${BaseUrl}/position/${geo}')
//获取分类
export const reqFoodCategorys = () => ajax(BaseUrl + './index_category')
//获取商家
export const reqShops = (longitude, latitude) => ajax(BaseUrl + '/shops', {longitude, latitude})
//搜索商家

//获取验证码

//用户密码登录

//发送短信验证码

//手机号验证码登录

//获取用户信息

//用户登录


