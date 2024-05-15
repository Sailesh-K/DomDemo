//Step 1:Create an HTML tag
var element=document.createElement("div");
//Step 2:Add content
element.innerHTML="It's a div";
//Step 3:Add element to the body of the doc
document.body.append(element);


//DAY2
//Using Func.

function input_create(tag,att1,val1,att2,val2)
{
    var ip=document.createElement(tag);
    ip.setAttribute(att1,val1);
    ip.setAttribute(att2,val2);
    return ip;
}

function createLabel(tag,att1,val1,content)
{
    var label= document.createElement(tag);
    label.setAttribute(att1,val1);
    label.innerHTML=content;
    return label;
}

/*function createBreak()
{
    var br= document.createElement("br");
    return br;
}*/


//var f=input_create("form","action","action_page.php","method","post");
var br= document.createElement("br");
var fn=createLabel("label","for","fname","First Name");
var ip_fn=input_create("input","type","text","id","fname");


var mn=createLabel("label","for","mname","Middle Name");
var ip_mn=input_create("input","type","text","id","mname");

var ln=createLabel("label","for","lname","Last Name");
var ip_ln=input_create("input","type","text","id","lname");


var em=createLabel("label","for","email","Email");
var ip_em=input_create("input","type","email","id","email");


var lc=createLabel("label","for","loc","Location");
var ip_lc=input_create("input","type","text","id","loc");

var bt=document.createElement("button");
bt.setAttribute("type","button");
bt.innerHTML="Submit";

var br= document.createElement("br");

document.body.append(fn,ip_fn,mn,ip_mn,ln,ip_ln,em,ip_em,lc,ip_lc,bt)



/*var fn=document.createElement("input");
fn.setAttribute("type","text");
fn.setAttribute("id","fname");

var mn=document.createElement("input");
mn.setAttribute("type","text");
mn.setAttribute("id","mname");

var ln=document.createElement("input");
ln.setAttribute("type","text");
ln.setAttribute("id","lname");

var em=document.createElement("input");
em.setAttribute("type","email");
em.setAttribute("id","email");

var lc=document.createElement("input");
lc.setAttribute("type","text");
lc.setAttribute("id","loc");*/
