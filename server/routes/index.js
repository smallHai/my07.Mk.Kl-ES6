var express = require('express');

var mockjs = require("mockjs");

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//用来输出数据
var makeIssue = function(){
    var date = new Date();

    var first_issue_date = new Date();
    first_issue_date.setHours(9);
    first_issue_date.setMinutes(10);
    first_issue_date.setSeconds(0);

    var end_issue_date = new Date(first_issue_date.getTime()+77*10*60*1000);
    
    var cur_issue;
    var end_time;
    var state;
    if(date.getTime()-first_issue_date.getTime()>0&&date.getTime()-end_issue_date.getTime()<0){
        //正常销售
        var cur_issue_date = new Date();
        cur_issue_date.setHours(9);
        cur_issue_date.setMinutes(0);
        cur_issue_date.setSeconds(0);

        var minus_time = date.getTime()-cur_issue_date.getTime();
        var h = Math.ceil(minus_time/1000/60/10);
        var end_date = new Date(cur_issue_date.getTime()+1000*60*10*h);
        end_time = end_date.getTime();

        var r_year = end_date.getFullYear();
        var r_month = ("0"+(end_date.getMonth()+1)).slice(-2);
        var r_day = ("0"+end_date.getDate()).slice(-2);
        var r_num = ("0"+h).slice(-2);
        cur_issue = [r_year,r_month,r_day,r_num].join(' ');
    }else{
        //停止销售
        
        first_issue_date.setDate(first_issue_date.getDate()+1);
        end_time = first_issue_date.getTime();

        var r_year = first_issue_date.getFullYear();
        var r_month = ("0"+(first_issue_date.getMonth()+1)).slice(-2);
        var r_day = ("0"+first_issue_date.getDate()).slice(-2);
        cur_issue = [r_year,r_month,r_day,01].join(' ');
    }
    var cur_date = new Date();
    if(end_time-cur_date.getTime()>1000*60*2){
        state = "正在销售";
    }else{
        state = "开奖中";
    }

    return{
        issue: cur_issue,
        state: state,
        end_time: end_time
    }
}

//设置接口
router.get("/get/omit",function(req,res,next){
    res.json(mockjs.mock({
        "data|11":[/[1-9]{1,3}|0/],
        "issue":/[1-9]{8}/
    }));
});
router.get("/get/opencode",function(req,res,next){
    var issue = makeIssue().issue;
    var data = mockjs.mock({
        "data":[/[1-3]/,/[4-5]/,/[6-7]/,/[8-9]/,/1[0-1]/]
    }).data;
    res.json({
        issue: issue,
        data: data
    });
});
router.get("/get/state",function(req,res,next){
    var state = makeIssue();
    res.json(state);
});


module.exports = router;
