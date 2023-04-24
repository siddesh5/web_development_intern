
		function run(){
			let htmlCode=document.getElementById("html").value;
			let cssCode="<style>"+document.getElementById("css").value+"</style>";
			let scriptCode=document.getElementById("script").value;
			let output =document.getElementById("output1");
			output.contentDocument.body.innerHTML=htmlCode+cssCode;
			output.contentWindow.eval(scriptCode);
		}
		


