// WhiteNX JavaLearn Project 安全模组
// ©WhiteNX Group. 所有权利保留
// Nymph CORE 特别版本 v0.3

//初始化
var ip = returnCitySN["cip"];
var city = returnCitySN["cname"];
var url = window.location.href;

console.log("%c\n       ", "font-size:41px;background:url('https://eyling.top/image/images/2021/05/01/58149170_p0_compress15.jpg') no-repeat -135px -1px");

// iframe反制
if (window.frames.length != parent.frames.length) {
    if (location.search = "?diswgnxpt"){
        
    }else{
        　　$(document).ready(function(){
　　    $('body').replaceWith('<body><h1>403 Forbbiden</h1></body><hr><br><p><strong>WhiteNX安全模组 异常请求拦截</strong>  ID:WGNX_JS_SAFEGUARDING_IRI_mismatched_primary_and_secondary_domain_names</p><br><p>那么？我可以解决这个问题吗？</p><br><p>当然可以，我们的主站点域名为https://java.eyling.top，复制这个链接到浏览器访问即可。亦或是您处于ASNCC管辖的站点，对此，这是错误拦截，非常抱歉，您只需要点击右下角的“在新窗口内打开”按钮即可。自动跳转程序应该已经运作，您实际上无需做出以上动作，您的浏览器没有反应除外。</p>');
　　})
　　window.open("https://java.eyling.top");
    }
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