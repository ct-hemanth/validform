const body = document.body;
const div= document.createElement('div');
body.appendChild(div);
div.setAttribute("id","divid")
const form= document.createElement('form');
div.appendChild(form)
form.setAttribute("onsubmit","submitFunction()")
const fieldset=document.createElement('fieldset')
fieldset.setAttribute("id","inid")
fieldset.setAttribute("name","formname")
form.append(fieldset)
 const legend=document.createElement('legend')
fieldset.append(legend)
legend.innerHTML="<h3>SIGNIN FORM</h3>"


const input1=document.createElement('input')
const input2=document.createElement('input')
const input3=document.createElement('input')
const input4=document.createElement('input')
const input=document.createElement('button')
const br=document.createElement('br')

input1.setAttribute("type","text")

input1.setAttribute("id","input1")
input1.setAttribute("name","myform")


input1.setAttribute("size","60")
input2.setAttribute("type","text")
input2.setAttribute("id","input2")
input2.setAttribute("size","60")
input3.setAttribute("type","password")
input3.setAttribute("id","input3")
input3.setAttribute("size","56")
input4.setAttribute("type","password")
input4.setAttribute("id","input4")
input4.setAttribute("size","60")
input.setAttribute("id","input")
input.innerHTML="<strong>SUBMIT</strong>"
input.setAttribute("size","60")
const h1 =document.createElement('h1')
h1.innerText="Sign Up"
fieldset.appendChild(h1)
fieldset.append("UserName:")
fieldset.appendChild(document.createElement('p'))
fieldset.appendChild(input1)
const para1 =document.createElement('p')
fieldset.appendChild(para1)
para1.setAttribute("id","para1")
para1.innerHTML="Username should of length between 3 to 25 characters";
fieldset.appendChild(document.createElement('p'))
fieldset.append("Email:")
fieldset.appendChild(document.createElement('p'))
fieldset.appendChild(input2)
const para2 =document.createElement('p')
fieldset.appendChild(para2)
para2.setAttribute("id","para2")
para2.innerHTML="Enter valid Email";
fieldset.appendChild(document.createElement('p'))
fieldset.append("Password:")
fieldset.appendChild(document.createElement('p'))
// fieldset.appendChild(input3)
const div3=document.createElement('div')
div3.setAttribute("id","div3")
fieldset.appendChild(div3)
div3.appendChild(input3)
const span=document.createElement('span')
span.setAttribute("id","spanid")
div3.appendChild(span)
const i =document.createElement('i')
span.appendChild(i)
i.setAttribute("id","togglePassword")
i.setAttribute("class","far fa-eye")
const para3 =document.createElement('p')
fieldset.appendChild(para3)
para3.setAttribute("id","para3")
para3.innerHTML="Password should have atleast 1 character , atleast 1 Capital letter, atleast 1 Number, atleast 1 special character(!@#$%^&*)";
fieldset.appendChild(document.createElement('p'))
fieldset.append("Confirm Password:")
fieldset.appendChild(document.createElement('p'))
fieldset.appendChild(input4)
const para4 =document.createElement('p')
fieldset.appendChild(para4)
para4.setAttribute("id","para4")
para4.innerHTML="Password should match the actual password";
fieldset.appendChild(document.createElement('p'))
fieldset.appendChild(document.createElement('p'))
fieldset.appendChild(input)
fieldset.appendChild(document.createElement('p'))
document.getElementById("input").addEventListener("click",alertbox)

document.getElementById("input1").addEventListener("blur", usname);

// document.getElementById("input").addEventListener("click", function(e){
//     e.preventDefault();
// });
var a=0;
function usname(){
   
    var s1=document.getElementById("input1").value;
    
        if(s1.length<3){
            document.getElementById("para1").style.display="block";
            document.getElementById("input1").style.border= "4px solid red";
        }
        else
        {
            document.getElementById("input1").style.border= "4px solid green";
            document.getElementById("para1").style.display="none";
            a++
        }
    
}
document.getElementById("input2").addEventListener("blur",emailfun);
var b=0;
function emailfun(){
    
    var s2=document.getElementById("input2").value;
    if(s2.length>=10&&s2.includes('@gmail.com')||s2.includes('@cartrade.com')||s2.includes('@carwale.com')||s2.includes('@bikewale.com')||s2.includes('@hotmail.com.com')||s2.includes('@outlook.com'))
    {
        document.getElementById("input2").style.border= "4px solid green";
        document.getElementById("para2").style.display="none";
        b++;
    }
    else
    {
        document.getElementById("para2").style.display="block";
        document.getElementById("input2").style.border= "4px solid red";
    }
}
document.getElementById("input3").addEventListener("blur",passwordfun);
var c=0;
function passwordfun(){
   
    var s3= document.getElementById("input3").value;
    function validpassword(password)
    {
        var passkey = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[! @ # $ % ^ & * ( ) _ - = +]).+$/;
        return passkey.test(password);
    }
    var isvalid=validpassword(s3);
    if(s3.length>=8){
        if(isvalid===true)
        {
            document.getElementById("div3").style.border= "4px solid green";
            document.getElementById("para3").style.display="none"; 
            c++;
        }
        else{
            document.getElementById("div3").style.border= "4px solid red";
            document.getElementById("para3").style.display="block";
        }
    }
    else{
        document.getElementById("div3").style.border= "4px solid red";
        document.getElementById("para3").style.display="block";
    }
}

document.getElementById("input4").addEventListener("blur", confirm_password);
var d=0;
function confirm_password(){
    var d=0;
    var s5=document.getElementById("input3").value
    var s4=document.getElementById("input4").value;
    if(s5==s4){
        document.getElementById("input4").style.border="4px solid green";
        document.getElementById("para4").style.display="none";
        d++;
    }
    else{
        document.getElementById("input4").style.border="4px solid red";
        document.getElementById("para4").style.display="block";

    }
}
document.getElementById("togglePassword").addEventListener("click",fun3)
function fun3(){
    var clickCount=0;
    if (clickCount%2===0){
    let eyeEl =document.getElementById('togglePassword');
    eyeEl.setAttribute('class',"fa fa-eye-slash icon");
    input3.setAttribute('type','text');}

else{
    let eyeEl =document.getElementById('togglePassword');
    eyeEl.setAttribute('class',"fa fa-eye icon");
    input3.setAttribute('type','password');
}

    clickCount+=1;
}
function alertbox(){
    if(a==1&& b==1&&c==1&&d==1){
        alert("your response is taken")
    }
    else{
        alert("give valid details")
    }
    
}

