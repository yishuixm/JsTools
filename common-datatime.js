function DateTime(){
  var now = new Date();
  var lastMonthDate = new Date(); //上月日期
  lastMonthDate.setDate(1);
  lastMonthDate.setMonth(lastMonthDate.getMonth()-1);
  return {
    now: now, //当前日期
    nowDayOfWeek: now.getDay(), //今天本周的第几天
    nowDay: now.getDate(), //当前日
    nowMonth : now.getMonth(), //当前月
    nowYear : now.getFullYear(), //当前年
    lastMonthDate : lastMonthDate, //上月日期
    lastYear : lastMonthDate.getFullYear(),
    lastMonth : lastMonthDate.getMonth(),
    // 按格式输出日期
    formatDate: function (date) {
      var myyear = date.getFullYear();
      var mymonth = date.getMonth()+1;
      var myweekday = date.getDate();

      if(mymonth < 10){
        mymonth = "0" + mymonth;
      }
      if(myweekday < 10){
        myweekday = "0" + myweekday;
      }
      return (myyear+"-"+mymonth + "-" + myweekday);
    },
    // 获取某月的天数
    getMonthDays: function (myMonth){
      myMonth = myMonth || 1;
      myMonth = myMonth - 1;
      var monthStartDate = new Date(this.nowYear, myMonth, 1);
      var monthEndDate = new Date(this.nowYear, myMonth + 1, 1);
      var days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24);
      return days;
    },
    //获得本季度的开始月份
    getQuarterStartMonth: function (){
      var quarterStartMonth = 0;
      if(this.nowMonth<3){
        quarterStartMonth = 0;
      }
      if(2<this.nowMonth && this.nowMonth<6){
        quarterStartMonth = 3;
      }
      if(5<this.nowMonth && this.nowMonth<9){
        quarterStartMonth = 6;
      }
      if(this.nowMonth>8){
        quarterStartMonth = 9;
      }
      return quarterStartMonth;
    },
    //获得本周的开始日期
    getWeekStartDate: function () {
      var weekStartDate = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek);
      return this.formatDate(weekStartDate);
    },
    //获得本周的结束日期
    getWeekEndDate: function () {
      var weekEndDate = new Date(this.nowYear, this.nowMonth, this.nowDay + (6 - this.nowDayOfWeek));
      return this.formatDate(weekEndDate);
    },
    //获得本月的开始日期
    getMonthStartDate: function (){
      var monthStartDate = new Date(this.nowYear, this.nowMonth, 1);
      return this.formatDate(monthStartDate);
    },
    //获得本月的结束日期
    getMonthEndDate: function (){
      var monthEndDate = new Date(this.nowYear, this.nowMonth, this.getMonthDays(this.nowMonth + 1));
      return this.formatDate(monthEndDate);
    },
    //获得上月开始时间
    getLastMonthStartDate: function (){
      var lastMonthStartDate = new Date(this.nowYear, this.lastMonth, 1);
      return this.formatDate(lastMonthStartDate);
    },
    //获得上月结束时间
    getLastMonthEndDate: function (){
      var lastMonthEndDate = new Date(this.nowYear, this.lastMonth, this.getMonthDays(this.lastMonth + 1));
      return this.formatDate(lastMonthEndDate);
    },
    //获得本季度的开始日期
    getQuarterStartDate: function (){
      var quarterStartDate = new Date(this.nowYear, this.getQuarterStartMonth(), 1);
      return this.formatDate(quarterStartDate);
    },
    //获得本季度的结束日期
    getQuarterEndDate: function (){
      var quarterEndMonth = this.getQuarterStartMonth() + 2;
      var quarterStartDate = new Date(this.nowYear, quarterEndMonth, this.getMonthDays(quarterEndMonth + 1));
      return this.formatDate(quarterStartDate);
    },
    // 获得本年开始时间
    getYearStartDate: function() {
      var yearStartDate = new Date(this.nowYear, 0, 1);
      return this.formatDate(yearStartDate);
    },
    // 获得本年结束时间
    getYearEndDate: function() {
      var yearEndDate = new Date(this.nowYear, 11, 31);
      return this.formatDate(yearEndDate);
    },
    // 获得上年开始时间
    getLastYearStartDate: function() {
      var yearStartDate = new Date(this.nowYear - 1, 0, 1);
      return this.formatDate(yearStartDate);
    },
    // 获得上年结束时间
    getLastYearEndDate: function() {
      var yearEndDate = new Date(this.nowYear - 1, 11, 31);
      return this.formatDate(yearEndDate);
    }
  }
}
