function validateform1(){  
    var name=document.myform1.name.value;  
      
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }
    }  

    function matchpass(){  
        var firstpassword=document.f1.password.value;  
        var secondpassword=document.f1.password2.value;  
          
        if(firstpassword==secondpassword){  
        return true;  
        }  
        else{  
        alert("password must be same!");  
        return false;  
        }  
        }  

        function validate(){  
            var num=document.myform.num.value;  
            if (isNaN(num)){  
              document.getElementById("numloc").innerHTML="Enter Numeric value only";  
              return false;  
            }else{  
              return true;  
              }  
            }  

function validateemail()  
{  
var x=document.myform2.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  