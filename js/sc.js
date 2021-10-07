let scrollMax= window.document.documentElement.scrollTopMax;
let butUp = document.querySelector('.pageup');
if (scrollMax>50) {
	butUp.style.opacity=0.8;
   } else {
   butUp.style.opacity=1;
}; 
    butUp.onclick = () => {
	let sc= window.pageYOffset;
	window.scrollBy({ top: -sc, behavior: 'smooth' });
}	