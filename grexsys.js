/* by Grexsys, LLC  */

/*   */ 
/*   */ 
/*   */ 
/*   */ 
/*   */ 
/*   */ 
/* =========== Add Commmas =========== */
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
/* =========== Format Phone Number =========== */
function formatPhone(obj) {
            var numbers = obj.value.replace(/\D/g, ''),
        	char = {0:'(',3:') ',6:' - '};
    		obj.value = '';
    		for (var i = 0; i < numbers.length; i++) {
        	obj.value += (char[i]||'') + numbers[i];
    }
}