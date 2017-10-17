export function dateLeave(e){
   let _date = new Date(e * 1000),
       _nowDate = new Date(),
       _differenceValue = Math.floor((_nowDate - _date)/1000)
   if(_differenceValue < 60){ //少于60秒
	  return _differenceValue + '秒前'
   }
   if(_differenceValue >= 60 && _differenceValue < 3600){ //大于60秒，少一个小时
	  return Math.floor(_differenceValue/60) + '分钟前'
   }
   if(_differenceValue >= 3600 && _differenceValue < 86400){ //大于一个小时,小于1天
	  return Math.floor(_differenceValue/3600) + '小时前'
   }
   if(_differenceValue >= 86400){ //大于1天
	  return Math.floor(_differenceValue/86400) + '天前'
   }
}
