// WhiteNX JavaLearn Project 安全模组
// ©WhiteNX Group. 所有权利保留
// Nymph CORE 特别版本 v0.1

//初始化
var ip = returnCitySN["cip"];
var city = returnCitySN["cname"];
var url = window.location.href;

console.log("%c\n       ", "font-size:41px;background:url('https://eyling.top/image/images/2021/05/01/58149170_p0_compress15.jpg') no-repeat -135px -1px");

// iframe反制
if (window.frames.length != parent.frames.length) {
　　console.error('[WhiteNX安全中心]在iframe中');
　　$(document).ready(function(){
　　    $('body').replaceWith('<body><h1>403 Forbbiden</h1></body>');
　　})
　　window.open("https://java.eyling.top");
}

//统计数据
/**
 * 基于root服务器的nymph-api
 * 请求方式：POST，返回结果：无
 * 传入内容：ip（字符串），URL（字符串）
 */
$(document).ready(function(){
    $.post('https://eyling.top/lab/nymph-system-api/statistics/api.php',{
        ip:ip,
        url:url,
        last_page:document.referrer
      },
    function(data,status){
      }
    );
});