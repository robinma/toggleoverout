/**
 * @author Robin ma
 * Email:ahmzj@163.com
 * 主要实现了弹出框弹出以及移出关闭的功能
 */
(function(exp){
	
	var isFunction=function(obj){
		return Object.prototype.toString.call(obj) == '[object Function]'
	}
	
	//main function
	//if have argument and greater than three parama, it self to do
	var toggle=function(target,evnOver,EvnOut,timer){
		var argLen=arguments.length,_this=this;
		this.flag=false;
		this.op=null;
		this.timer=timer||50
		
		if(argLen>=3){
			target.on('mouseover',function(){
				_this.evnOver(evnOver)
			}).on('mouseout',function(){
				_this.evnOut(EvnOut)
			})
		}
	}
	//event holder run it
	toggle.prototype.evnOver=function(overFn){
		var _this=this;
		clearTimeout(_this.flag)
		if([_this.op,_this.op=true][0])return
		setTimeout(function(){
			isFunction(overFn)&&overFn()
		},_this.timer)
		
		return this;
	};
	//event releast run it
	toggle.prototype.evnOut=function(outFn){
		var _this=this;
		_this.flag=setTimeout(function(){
			_this.op=false
			isFunction(outFn)&&outFn()
		},_this.timer)
		return this
	}
	//current version
	toggle.verson='0.0.1';
	
	//anonymous define() is called outsise of a loader request
	if(typeof define === 'function' && define.cmd){
		define(function(){
			return toggle
		})
	}else{
		exp.toggleoverout=toggle
	}
	
}(this));
