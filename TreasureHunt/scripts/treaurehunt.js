var count = 0;




function matrixValue(){
 
    //defined number of treasure
    var treasureQty = 2;

    //getting values of rows and columns from user
    var rowNumber = document.getElementById('rowInput').value;
var colNumber = document.getElementById('columnInput').value;
    
   
 
   //document.getElementById('block').innerHTML = rowNumber + ' ' + colNumber;

   var createBtn = document.getElementById('create');
     
    //defining an array
   var grid = [ ];
     

   for(var i=0; i< rowNumber; i++){
    
    var arr2 = [];
       for(var j=0;j< colNumber; j++){
           arr2.push(i.toString()+j);
         }    
         grid.push(arr2);
    
   }

   function displayMap(){

    //var previousGame = document.getElementById("game");

   /*if(previousGame){
        previousGame.remove();
    }*/

    var game = document.createElement("div");
    game.id = "game";
    game.className= "col-sm-12 col-md-12 col-lg-12";
    document.getElementById("block").appendChild(game);
    //var arr = [];

   
    for(var i=0; i< grid.length; i++)
    {
      
        var innerGrid = grid[i].length;
        for(var j = 0; j < innerGrid; j++){
            
           
        var btn = document.createElement("button");
        btn.className= "game-button";
        btn.id = grid[i][j];
        
        btn.onclick = checkTreasure;
            
        document.getElementById("game").appendChild(btn);

        
        
            
       var isMultipleof4 = function (n) 
					{ 
                                                
					    if ( n == 0 ){ 
					    	return false; 
						}
						else{
					    	while ( n > 0 )
					    	{ 
					        	n = n - 4; 
						  	}

						    if ( n == 0 ){ 
						        return true; 
						  	}
						  	else{
						    	return false;
						    }
						} 
                    }
                    if ( isMultipleof4(j) == true ){
						var br = document.createElement("div");
						br.className = "clear";
						document.getElementById("game").appendChild(br);
					}
        }

    }

    
   }

   var obj1 = [];

   function placeTreasure(){
       var m = new displayMap();
       for(var i= 0; i <treasureQty; i++){
           obj1.push({x: Math.floor(Math.random()*grid.length),y: Math.floor(Math.random()*grid.length)});
       }
   }

   placeTreasure();

   function checkTreasure(){
       
    var nearCount = 0;

       for(var z=0; z<treasureQty; z++){
           var x = obj1[z]['x'];
           var y = obj1[z]['y'];

           if((this.id == grid[x][y])){
               this.innerHTML = "X";
               break;
           }

           else{
               var a = grid.length;

               var xplus = x + 1;
               if(xplus==a){
                   xplus = a-1;
               }

               var xminus = x-1;
               if(xminus == -1){
                   xminus = 0;
               }

               var yplus = y + 1;
               if(yplus == a){
                   yplus = a-1;
               }

               var yminus = y - 1;
               if(yminus == -1){
                   yminus = 0;
               }

               var topleft = grid[xminus][yminus];
               var topmid = grid[xminus][y];
               var topright = grid[xminus][yplus];
               var midleft = grid[x][yminus];
               var midright = grid[x][yplus];
               var bottomleft = grid[xplus][yminus];
               var bottommid = grid[xplus][y];
               var bottomright = grid[xplus][yplus];

               if(this.id == topleft || this.id == topmid||
                   this.id == topright || this.id == midleft||
                   this.id == midright || this.id == bottomleft||
                   this.id == bottommid || this.id == bottomright)
                   {
                       nearCount++;

                       this.innerHTML = nearCount;
                       this.disabled = true;
                   }

                   else{
                       this.innerHTML = nearCount;
                       this.disabled = true;
                   }
           }
       }
   }
   
   
  
   
};

function blockReset(){
    document.getElementById('block').innerHTML= "  ";

}