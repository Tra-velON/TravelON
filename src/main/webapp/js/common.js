/**
 * 공통 영역 header
 */
fetch('include/header.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('header').innerHTML = data;
	});
	
/**
 * 공통 영역 footer
 */
fetch('include/footer.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('footer').innerHTML = data;
	});