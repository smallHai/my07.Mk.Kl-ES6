//接口模块

import $ from "jquery";

class Interface{

    //查看遗落数据接口
    getOmit(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url: "/get/omit",
                data:{
                    issue:issue
                },
                dataType:"json",
                success:function(res){
                    self.setOmit(res.data);
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }

    //获取开奖号码
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url: "/get/opencode",
                data:{
                    issue:issue
                },
                dataType:"json",
                success:function(res){
                    self.setOpenCode(res.data);
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }

    //获取状态
    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url: "/get/state",
                data:{
                    issue:issue
                },
                dataType:"json",
                success:function(res){
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }
}

export default Interface;