const puppeteer = require("puppeteer");
const id ="vabefow737@itwbuy.com";
const pw ="jaat@123456789"; 
let tab;
let browseropenpromise = puppeteer.launch({headless: false ,defaultviewport:null,args :["--start-maximized"]});    
console.log(browseropenpromise);    

browseropenpromise.then(function(browser){ 
    console.log("browser is opened!");
    return browser.pages();
})
.then(function(pages){
    tab = pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login");
})
.then(function(){
    return tab.type("#input-1" ,id);
})
.then(function(){
    return tab.type("#input-2" ,pw);    
})
//return isliya lega ya haa taki prev next per depend ho
.then(function(){
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
})
.then(function(){
    return tab.waitforselector('#base-card-1-link', {visible:true});
})
.then(function(){
    return tab.click('#base-card-1-link');
})
.then(function(){
    return tab.waitforselector('a[data-attr1="warmup"]' , {visible:true});
})
.then(function(){
    return tab.click('a[data-attr1="warmup"]');
});
