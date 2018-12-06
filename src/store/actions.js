//通过mutation间接更新state的多个方法的对象
import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS
} from './mutation-types'

import {
	reqAddress,
	reqFoodCategorys,
	reqShops
} from '../api/interface'

import addressData from '../api/address'
import categorysData from '../api/cagetorys'
import shopsData from '../api/shops'
import searchShopsData from '../api/searchShops'

export default {
	//异步获取地址
	async getAddress({commit, state}) {
		//发送异步ajax请求
		// const geo = state.latitude + ',' + state.longitude
		// const result = await reqAddress(geo)
		const result = addressData
		//提交
		if (result.code === 200) {
			const address = result.data
			commit(RECEIVE_ADDRESS, {address})
		}
	},

	//异步获取分类
	async getCategorys({commit, state}) {
		//发送异步ajax请求
		// const result = await reqFoodCategorys()
		const result = categorysData
		//提交
		if (result.code === 200) {
			const cagetorys = result.data
			commit(RECEIVE_CATEGORYS, {cagetorys})
		}
	},

	//异步获取商家
	async getShops({commit, state}) {
		//发送异步ajax请求
		// const result = await reqShops(state.latitude, state.longitude)
		const result = shopsData
		//提交
		if (result.code === 200) {
			const shops = result.data
			commit(RECEIVE_SHOPS, {shops})
		}
	}
}
