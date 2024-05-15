function label_create(tagname,attrname,attrvalue,content){
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname,attrvalue);
    label_ele.innerHTML = content;
    return label_ele
    }
   
    function break_create(){
    var break_create = document.createElement("br");
    return break_create;
    }

    function input_create(inputtag,attrname,attrval,attrname1,attrval1){
    var input_ele = document.createElement(inputtag);
    input_ele.setAttribute(attrname,attrval);
    input_ele.setAttribute(attrname1,attrval1);
    return input_ele;
    }
    
    function foo() {
        var res1 = document.getElementById("email").value;
        var res2 = document.getElementById("firstName").value;
        var res3 = document.getElementById("middleName").value;
        var res4 = document.getElementById("lastName").value;
        var res5 = document.getElementById("location").value;
        //console.log(res1,res2,res3,res4,res5);
        var p1=document.createElement("p");
        var p2=document.createElement("p");
        var p3=document.createElement("p");
        var p4=document.createElement("p");
        var p5=document.createElement("p");
        p1.innerHTML=`Email:${res1}`;
        p2.innerHTML=`First Name:${res2}`;
        p3.innerHTML=`Middle Name:${res3}`;
        p4.innerHTML=`Last Name:${res4}`;
        p5.innerHTML=`Location:${res5}`;
        document.body.append(p1,p2,p3,p4,p5);
    }
    
    var email_break = break_create();
    var fn_break = break_create();
    var mn_break = break_create();
    var ln_break = break_create();
    var loc_break = break_create();

    var email = label_create("label","for","email","Email");
    var input_email = input_create("input","type","email","id","email");

    var fn = label_create("label","for","firstName","First Name");
    var input_fn = input_create("input","type","text","id","firstName");

    var mn = label_create("label","for","middleName","Middle Name");
    var input_mn = input_create("input","type","text","id","middleName");

    var ln = label_create("label","for","lastName","Last Name");
    var input_ln= input_create("input","type","text","id","lastName");

    var loc = label_create("label","for","location","Location");
    var input_loc= input_create("input","type","text","id","location");

    var button = document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("onclick","foo()");
    button.innerHTML = "Click me"
    document.body.append(email,input_email,email_break,fn,input_fn,fn_break,mn,input_mn,mn_break,ln,input_ln,ln_break,loc,input_loc,loc_break,button);

    function toBody()
    {

    }
    