/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
	if(document.querySelector("#same").checked)
	{
		var name=document.querySelector("#shippingName").value;   //shipping name block
		var zip=document.querySelector("#shippingZip").value;     //shipping zip block
		document.querySelector("#billingName").value=name;   //initialised variables to the billing address & billing zip
		document.querySelector("#billingZip").value=zip;
	}
	    else
	    {
		    document.querySelector("#billingName").value="";
		    document.querySelector("#billingZip").value="";
	    }
}