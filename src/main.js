document.documentElement.classList.add(
	'beni-external-css-loader',
	...location.hostname
		.split('.')
		.reverse()
		.slice(1)
		.reverse()
)

function appendStyleNode(id, href) {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", href, true);
	xhttp.onreadystatechange = function() {
		console.log(xhttp);
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				var cssNode = document.createElement('style');
				cssNode.type = 'text/css';
				cssNode.id = id;
				cssNode.innerHTML=xhttp.responseText;
				document.getElementsByTagName('head')[0].appendChild(cssNode);
			}
		}
	}
	xhttp.send(null);
}

appendStyleNode('beni-external-css-loader-script-1.css', 'https://raw.githubusercontent.com/benitolopez/beni-external-css-loader/master/src/custom.css' );
