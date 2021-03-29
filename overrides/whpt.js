console.log(window.self);
console.log(window.top);

if (window.self === window.top){
        
}else{
    console.error("Site Not Allow.");
    top.location.href = "https://java.eyling.top";
    $(document).ready(function(){
        $("body").replaceWith("<h1>ERROR：403 Iframe Not Allowed.</h1><br>Please Click <a herf='https://java.eyling.top'>Here</a>.")
    })
}

(function(window) {
 if (window.location !== window.top.location) {
  window.top.location = window.location;
 }
})(this);

if (window != window.top) {
    window.top.location.replace(window.location);}

if (top != self) {
    top.location = self.location;
}

