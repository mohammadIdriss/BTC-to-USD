var url="https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR";
var request = new XMLHttpRequest();
request.onreadystatechange = function () {  
	var btc= document.getElementsByTagName("input");
	var usd= document.getElementsByClassName("result");
	if(this.status==404)  
   {
    	alert(response.message);
   }
    
	else if (this.readyState == 4 && this.status == 200){
		var response = JSON.parse(this.responseText);
		//console.log(response);
		var btcPrice= response['USD']/response['BTC'];
		 if (btcPrice===NaN){ 
			alert("Please Enter A Valid Number");
		}else if(btcPrice!==NaN){
			usd[0].innerText= btc[0].value * btcPrice.toFixed(5)+"$";}
	}
}
request.open("GET", url, true);
request.send();


 function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}