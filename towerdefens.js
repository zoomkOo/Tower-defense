
let canvas = document.getElementById('cnv');
let ctx = canvas.getContext('2d');
let animation=requestAnimationFrame(animate)
   
  	let golden = 1000;
let sellTowers=document.querySelector("#sell")
let fireTowers=document.querySelector("#fire");
let darkTower=document.querySelector("#darks");
let magicTowers=document.querySelector("#magic");
let iceTowers=document.querySelector("#ice");
let pos1=document.querySelector("#pos1");
let pos2=document.querySelector("#pos2");
let pos3=document.querySelector("#pos3");
let pos4=document.querySelector("#pos4");
let pos5=document.querySelector("#pos5");
let pos6=document.querySelector("#pos6");
let pos7=document.querySelector("#pos7");

let byTowers;
let sell;

// fireTowers.addEventListener('click',function(){byTowers=Object.assign({},Towers3[1]) });
magicTowers.addEventListener('click',function(){byTowers=Object.assign({},Towers3[0])});
iceTowers.addEventListener('click',function(){byTowers=Object.assign({},Towers3[2])});
darkTower.addEventListener('click',function(){byTowers=Object.assign({},Towers3[1])});
sellTowers.addEventListener('click',function()
	{Position[sell].tower
      golden+=Position[sell].tower.gold/2
   let sellInd =  towers.indexOf(Position[sell].tower)
   towers.splice(sellInd,1)
   Position[sell].tower =0;
   Position[sell].placed=false

})
function placeTower(pos ) {
	
	 return function(e){
	if (byTowers&&!Position[pos].placed&&golden>=byTowers.gold&&cast.hp>0) {
        byTowers.x=Position[pos].x
        byTowers.y=Position[pos].y
        Position[pos].placed=true 
        Position[pos].tower=byTowers
        towers.push(byTowers)
        golden-=byTowers.gold 
        byTowers=null
        
        
 	}else if (Position[pos].placed&&!byTowers) 
 	{
     sell= pos
 	}
 }
}




 pos1.addEventListener('click',placeTower(0));


 pos2.addEventListener('click',placeTower(1));

 pos3.addEventListener('click',placeTower(2));

 pos4.addEventListener('click',placeTower(3));

 pos5.addEventListener('click',placeTower(4));

 pos6.addEventListener('click',placeTower(5));

 pos7.addEventListener('click',placeTower(6));
let Position = [
{
	x:149 ,
	y:165 ,
	placed: false,
	tower: 0,
},
{
	x:230 ,
	y:371 ,
	placed:false ,
	tower: 0,
},
{
	x:433 ,
	y:232 ,
	placed: false,
	tower: 0,
},
{
	x:40 ,
	y:217 ,
	placed:false ,
	tower: 0,
},
{
	x:114 ,
	y:270 ,
	placed:false ,
	tower: 0,
},
{
	x:370 ,
	y:376 ,
	placed:false ,
	tower: 0,
},
{
	x:340 ,
	y:150 ,
	placed: false ,
	tower: 0,
},
]

let cast=
{
x:320,
y:400,
hp:100,
}

let towers= [


 ]
 let Towers3=[{

	x:0,
	y:0,
	dmg:50,
    class:'magic',
coldown: 100,
lastShot: 0,
gold:0,

},
// {
// 	x:0,
// 	y:0,
// 	dmg:0.009,
// 	class:'fire',
// 	coldown: 10	,
// 	lastShot: 0,
// 	gold:700,

//  },
 {
	x:0,
	y:0,
	dmg:69,
	class:'dark',
	coldown: 1500	,
	lastShot: 0,
	gold:500,

 },
{
  x:0,
  y:0,
  dmg:20,
  class:'ice',
  coldown: 3000,
  lastShot:0,
  gold:200,
  timeCold:1000,
},


 ]


let mobs = [{
x: 40,
y:150,
hp:700,
dmg:30,
mobsclass:  "warior",
goldenfarm:200,
speed: 0.7,



},
]
let mobs2=[{
x: 40,
y:150,
hp:700,
dmg:30,
mobsclass:  "warior",
goldenfarm: 200,
speed:0.7 ,
},
{
  x: 72,
  y: 179,
  hp: 40,
  dmg: 4,
mobsclass: "tarakan",
goldenfarm:50,
speed: 5 ,


},
{
x: 40,
y:150,
hp:70,
dmg:30,
mobsclass: "vampire",
goldenfarm: 150,
speed:2 ,
},
{
	x:72,
	y:179,
	hp:1000,
	dmg: 80,
	mobsclass:"fireGolem",
	speed:0.6,
	goldenfarm: 200,

}
]
  
let wawe1 =[
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),

]
let wawe2 = [

	 Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
]
let wawe3 = [

	 Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
]

let wawe4 = [

	 Object.assign({},mobs2[0]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[0]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[0]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[0]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[0]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[0]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[0]),
     Object.assign({},mobs2[2]),
]
let wawe5 =  [
     Object.assign({},mobs2[3]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[0]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[0]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[0]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[3]),
     Object.assign({},mobs2[3]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[3]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[0]),
     Object.assign({},mobs2[1]),
     Object.assign({},mobs2[3]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[1]),
      Object.assign({},mobs2[2]),
     Object.assign({},mobs2[2]),
     Object.assign({},mobs2[0]),
     Object.assign({},mobs2[3]),
]




function clear() {
ctx.clearRect(0,0,cnv.width,cnv.height);

 }


 function render() {
    for (var i = 0 ; i < mobs.length; i++) {//console.log(mobs[i].x,mobs[i].y)//
    if ("timeCold" in mobs[i]) {
    	if ((new Date).getTime()- mobs[i].timeCold<1000) {continue}
    }
    if (mobs[i].x<=90) {
    mobs[i].y+=0.4*mobs[i].speed;
    mobs[i].x+=0.4*mobs[i].speed;
    }

else if (mobs[i].x>=200) {
	mobs[i].y+=0.4*mobs[i].speed;
 	mobs[i].x+=0.2*mobs[i].speed;

 }
 

 else{
 	mobs[i].x+=0.4*mobs[i].speed;

 }
 if (mobs[i].x>=300&&mobs[i].y>=460) {
 	cast.hp-=mobs[i].dmg 
    mobs.splice(i,1) 


    if (cast.hp<=0) {
         mobs=[]
         towers=[]
         clearInterval(setik)
         golden =0 ;
     
  
    }

}
     if ("timeIgnite" in mobs[i]) {
    	if ((new Date).getTime()- mobs[i].timeIgnite<5000) {mobs[i].hp-=0.5
    		if (mobs[i].hp<=0){ golden+=mobs[i].goldenfarm
						mobs.splice(i,1)
						
					} 

    	}

    }




   }
   for (var i = 0; i < towers.length; i++) {
   	let firedmg= false;
  for (var j = 0;j < mobs.length ; j++) {

		if ((mobs[j].x - towers[i].x)**2 +(mobs[j].y - towers[i].y)**2 <= 100**2) {
			firedmg=true
			if ((new Date).getTime()-towers[i].lastShot>towers[i].coldown) 
				{mobs[j].hp-=towers[i].dmg
					if (mobs[j].hp<=0){ golden+=mobs[j].goldenfarm
						mobs.splice(j,1)
						
					} 

						switch(towers[i].class){

							case "ice":
							 mobs[j].timeCold=(new Date).getTime();
							break
							case "dark":
                              
                             mobs[j].timeIgnite=(new Date).getTime();
							// case "fire": towers[i].dmg*=1.09
							

							 break
						}
					
			towers[i].lastShot=(new Date).getTime();}
           
		}

	} 
	// if (!firedmg&&towers[i].class=="fire") {
 //        towers[i].dmg= 0.1 
	// }

}

 }


 function draw(){
 for (var i = 0 ; i < towers.length; i++) {
   let td = new Image();
   
   switch(towers[i].class){
   	case "magic": td.src="towerkop.png" 
   	break
   	// case "fire" : td.src="tower2.png"
   	// break
   	case "ice"  : td.src="ice.png"
   	break
   	case "dark": td.src="darksTower.png"
   	break
   }
   ctx.drawImage(td,towers[i].x,towers[i].y-20);
 }
 
  for (var i = 0 ; i < mobs.length; i++) {
 	let mobssprite = new Image()
 	



 	
 	switch(mobs[i].mobsclass){
							case "vampire":mobssprite.src="vam.png"
						     
							break
							case "tarakan":mobssprite.src="tarakan.png"
							

							break
							case "warior":mobssprite.src="fr.png"
							break
							case "fireGolem":mobssprite.src="FireGolem.png"
						}
 	ctx.drawImage(mobssprite,mobs[i].x,mobs[i].y,50,50);

    ctx.font = 'bold 15px sans-serif';
    ctx.fillStyle='red';
  	ctx.fillText(Math.floor(mobs[i].hp),mobs[i].x ,mobs[i].y);

 }
 let castle = new Image();
   castle.src="Castle2.png"
   ctx.drawImage(castle,cast.x,cast.y-20,150,150)

ctx.font = 'bold 30px sans-serif';
ctx.fillStyle='red';
  	ctx.fillText(cast.hp, 20, 30);


  	ctx.font='bold 20px sans-serif';
  	ctx.fillStyle='yellow'
  	ctx.fillText(golden,440,25);



  
  	if (cast.hp<=0) 
  	{
  	ctx.font='bold 100px sans-serif';
  	ctx.fillStyle='red'
  	ctx.fillText("GAME",100,230);
  	ctx.fillText("OVER",110,305);
  }	    
 }

 
 
 

 function animate(){
 	animation=requestAnimationFrame(animate)
    clear() 	
 	render()
 	draw()

 }
animate()
    let corentWawe = wawe1;

  let setik = setInterval(function(){

      if (corentWawe.length == 0) {
  
      	if (corentWawe == wawe1) {
      		corentWawe =  wawe2
      	}
        else if (corentWawe == wawe2) {
        	corentWawe = wawe3
        	 if (corentWawe == wawe3) {
        		corentWawe = wawe4
        	}
        	if (corentWawe==wawe4) {
        		corentWawe=wawe5
        	}
        }
      }
     

  	 let newmobs = corentWawe[0]

  	 corentWawe.shift()
 	
	  mobs.push( Object.assign({}, newmobs)); },1000)