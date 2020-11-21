var context = cnv.getContext("2d");

for (var x = 0.5; x < cnv.width; x += 20) {
  context.moveTo(x, 0);
  context.lineTo(x, cnv.height);
}

for (var y = 0.5; y < cnv.height; y += 20) {
  context.moveTo(0, y);
  context.lineTo(cnv.width, y);
}

context.strokeStyle = "#888";
context.stroke();

pointer = document.createElement('span')
pointer.id = "pointer"
pointer.style.backgroundColor = 'rgba(255,255,255,0.5)'
pointer.style.padding = '0 7px 0 7px'
pointer.style.wordWrap = 'none'
pointer.style.whiteSpace = 'nowrap'

cnv.before(pointer);

input = document.createElement('input')
input.type = 'checkbox'
input.id = 'pointPos'
pointer.before(input)

label = document.createElement('label')
label.htmlFor = 'pointPos'
label.innerText = ' Над указателем '
input.after(label)

br = document.createElement('br')
cnv.before(br);




let scrollTempY = document.documentElement.scrollTop
let scrollY = document.documentElement.scrollTop

let scrollTempX = document.documentElement.scrollLeft
let scrollX = document.documentElement.scrollLeft


window.addEventListener('scroll',function(e){
	scrollTempY = scrollY - document.documentElement.scrollTop
	scrollY = document.documentElement.scrollTop

	scrollTempX = scrollX - document.documentElement.scrollLeft
	scrollX = document.documentElement.scrollLeft

	y -= scrollTempY
	x -= scrollTempX
	move(e)

})
pointPos.addEventListener('change',function(){
	if (pointPos.checked) {
		pointer.style.position = 'absolute'
	}
	else{
		pointer.style.position = 'static'
	}
})
pointer.addEventListener('mousemove',move)
cnv.addEventListener('mousemove',move)
function move(e) {
	console.log()
	if (e.pageX) {
		x = e.pageX - cnv.offsetLeft
		y = e.pageY - cnv.offsetTop
	}
	pointer.innerText = `x = ${x} y = ${y}`
	if (pointer.style.position == 'absolute') {
		pointer.style.left = x+20+'px'
		pointer.style.top = y+10+'px'
		rightColision = document.documentElement.clientWidth - (x+pointer.offsetWidth+20)
		topColision =(y-pointer.offsetHeight+30) -  document.documentElement.scrollTop
		if(rightColision <= 0){
			pointer.style.left = x-pointer.offsetWidth+'px'
		}
		if(topColision <= 0){
			pointer.style.top = y+7+pointer.offsetHeight+'px'
		}
	}
	
}