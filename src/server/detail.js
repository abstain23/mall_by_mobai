import {request} from './request'

export function getDetail(iid) {
  return request({
    url: 'detail',
    params: {
      iid
    }
  })
}

export function getRecommends(){
  return request({
    url: 'recommend'
  })  
}

export function Goods(itemInfo,columns,services,color){
  this.title = itemInfo.title
  this.desc = itemInfo.desc
  this.newPrice = itemInfo.price
  this.oldPrice = itemInfo.oldPrice
  this.realPrice = itemInfo.lowNowPrice
  this.discount = itemInfo.discountDesc
  this.columns = columns
  this.services = services
  this.color = color
}

export class Shop {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount = shopInfo.cGoods
	}
}