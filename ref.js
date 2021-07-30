var bedroomIMG;
var gardenIMG;
var washroomIMG;
var sadDogIMG;
var gamestate;
var changeState,readState;  
var backgroundIMG;

// In preload() function load images of bedroom, garden, and washroom.
 bedroomIMG = loadImage(virtual_pet_images /Bed_room.png); 
 washroomIMG = loadImage(virtual_pet_images /Wash_Room.png); 
 gardenIMG = loadImage(virtual_pet_images /Garden.png); 
 sadDogIMG = loadImage(virtual_pet_images / lazy.png); 

//In setup() function using variable read gamestate from database. 
reeadState = database.ref('gameState');
readState.on("value",function(data){
    gamestate = data.val();
});

// Create three methods - bedroom(), garden(), washroom() 
function bedroom(){
  background(bedroomIMG,550,500);  
}
function washroom(){
    background(washroomIMG,550,500);  
}
function garden(){
    background(gardenIMG,550,500);  
}

//In draw() function write condition for gamestate
if(gamestate != "hungry"){
   Dog .addImage(sadDogIMG);

}

// currentTime to background

currentTime - hour();
if(currentTime = (lastfed+1 )){
    update("Playing");
    foodObj.garden();
}


else if(currentTime = (lastfed+2 )){
    update("Sleeping");
    foodObj.bedroom();

}


else if(currentTime >(lastfed+2 ) && currentTime < (lastfed+4 )){
    update("Bathing");
    foodObj.washroom();

}

else{
    update("Hungry");
    foodObj.display();    
}


//function to update gamestes in database
function update(state){
    database.ref('/').update({
        gamestate:state
    });
}