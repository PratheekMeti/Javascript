var fun=function()
{
    var res=document.getElementById("m1").value
    if(res.length==0)
    {
        document.getElementById("ref").innerHTML="First Name is Required"
        return false
    }
    else if(res.length<3)
    {
        document.getElementById("ref").innerHTML="Name should be more than 2 Characters"
        return false
    }
    else if(res.length>15)
    {
        document.getElementById("ref").innerHTML="Name should not be more than 15 charcaters"
        return false
    }
    var res=document.getElementById("m2").value
    if(res.length==0)
    {
        document.getElementById("ref").innerHTML="Last Name is Required"
        return false
    }
    else if(res.length<3)
    {
        document.getElementById("ref").innerHTML="Name should be more than 2 Characters"
        return false
    }
    else if(res.length>15)
    {
        document.getElementById("ref").innerHTML="Name should not be more than 15 charcaters"
        return false
    }
    var res=document.getElementById("m3").value
    if(res.length==0)
    {
        document.getElementById("ref").innerHTML="Phone Number Required"
        return false
    }
    else if(isNaN(res)==true)
    {
        document.getElementById("ref").innerHTML="Please enter Number only"
        return false
    }
    else if(res.length>10)
    {
        document.getElementById("ref").innerHTML="Number should not be more than 10 digit"
        return false
    }
    else if(res.length<10)
    {
        document.getElementById("ref").innerHTML="Number should be 10 digit"
        return false
    }
    else if(res.charAt(0)<6)
    {
        document.getElementById("ref").innerHTML="Frist digit should start from 6 or 7 or 8 or 9"
        return false
    }
    var res=document.getElementById("m4").value
    {
        if(res.length==0)
        {
            document.getElementById("ref").innerHTML="Email Required"
            return false
        }
        else if(res.length<3)
    {
        document.getElementById("ref").innerHTML="Email should be more than 2 Characters"
        return false
    }
}
var res=document.getElementById("m5").value
{
    if(res.length==0)
    {
        document.getElementById("ref").innerHTML="Password Required"
        return false
    }
    else if(res.length<8)
    {
    document.getElementById("ref").innerHTML="Password should be more than 8 Characters"
    return false
    }
    var res=document.getElementById("m8").exists
{
    if(res==false)
    {
        document.getElementById("ref").innerHTML="Resume is required"
        return false
    }
    }
    }
}