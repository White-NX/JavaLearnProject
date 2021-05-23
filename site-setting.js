// 设置部分

// 关闭站点上的黑白功能
$(document).ready(function(){
    $(".st-BAW").click(function(){
        Cookies.set('baw','false');
    })
})

// 关闭站点上的讣告
$(document).ready(function(){
    $(".st-RIP-msg").click(function(){
        Cookies.set('ripmsg','false');
    })
})

//行动部分

if ( typeof( Cookies.get('baw') ) == "undefined" ){
    document.write("<style>html { -webkit-filter: grayscale(100%); }</style>");
}

if ( typeof( Cookies.get('ripmsg') ) == 'false' ){
    $(document).ready(function(){
        $('.md-announce').hind();
    })
}