var vaisseau1 = new ObjectConstruct("images/vaisseau1.png", (document.body.clientWidth / 2) - 37, 550);
var userMissile = new ObjectConstruct("images/missile.png", 0, 0);
var ennemyMissile2 = new ObjectConstruct("images/missile2.png", 0, 20);

userMissile.display = "none";
ennemyMissile2.display = "none";

function shootByBoard(event) {

    //deplacements
    if(event.keyCode == 37 ) { /*deplacement a gauche*/
        vaisseau1.left -= 10;
    }
    else if(event.keyCode == 39 ){ /*deplacement a droite*/
        vaisseau1.left += 10;
    }
    else if(event.keyCode == 38 ){ /*deplacement en haut*/
        vaisseau1.top -= 10;
    }
    else if(event.keyCode == 40 ){ /*deplacement en bas*/
        vaisseau1.top += 10;
    }
    else if(event.keyCode == 32) {
                if(userMissile.display == "none"){
                    userMissile.display = "block";
                    userMissile.left = vaisseau1.left + (vaisseau1._node.width - userMissile._node.width) / 2;
                    userMissile.top = vaisseau1.top;
                    userMissile.startAnimation(shootMissile, 10);
                }
    }

    /* pour la delimitaion du vaisseau par rapport la surface du jeux*/
    if(vaisseau1.left < 0) { //delimitation par rapport a la borne gauche
        vaisseau1.left = 0;
    }

    if(vaisseau1.left > document.body.clientWidth - vaisseau1._node.width) { //delimitation par rapport a la borne droite
        vaisseau1.left = document.body.clientWidth - vaisseau1._node.width;
    }

    if(vaisseau1.top < 0) { //delimitation par rapport a la borne superieur
        vaisseau1.top = 0;
    }

    if(vaisseau1.top > document.body.clientHeight - vaisseau1._node.height) { //delimitation par rapport a la borne inferieur
        vaisseau1.top = document.body.clientHeight - vaisseau1._node.height;
    }
    //tir missile


};

function shootByMouse(event) {
    if(userMissile.display == "none") {
        userMissile.display = "block";
        userMissile.left = vaisseau1.left + (vaisseau1._node.width - userMissile._node.width) / 2;
        userMissile.top = vaisseau1.top;
        userMissile.startAnimation(shootMissile, 20);
    }
}

function shootMissile(missile) {
    userMissile.top -= 10;
    if(userMissile.top < -40) {
        userMissile.stopAnimation();
        userMissile.display = "none";
    }
}

/**
 * Momo code
 */
//Creation des ennemies
var ennemi1 = new ObjectConstruct('images/ennemie1.png',50,50);
var ennemi2 = new ObjectConstruct('images/ennemie1.png',350,50);
var ennemi3 = new ObjectConstruct('images/ennemie1.png',650,50);
var ennemi4 = new ObjectConstruct('images/ennemie1.png',950,50);
var ennemi5 = new ObjectConstruct('images/ennemie1.png',1250,50);
// setTimeout(function(){
//     var ennemi1 = new ObjectConstruct('images/ennemie1.png',50,50);
//       ennemi1.style.transition = '2s';
//   },2000)
//   setTimeout(function(){
//     var ennemi1 = new ObjectConstruct('images/ennemie1.png',950,50);
//       ennemi1.style.transition = '2s';
//   },5000)
//   setTimeout(function(){
//     var ennemi1 = new ObjectConstruct('images/ennemie1.png',400,100);
//       ennemi1.style.transition = '2s';
//   },2000)
//   setTimeout(function(){
//     var ennemi1 = new ObjectConstruct('images/ennemie1.png',550,70);
//       ennemi1.style.transition = '5s';
//   },3000)
//   setTimeout(function(){
//     var ennemi1 = new ObjectConstruct('images/ennemie1.png',250,80);
//       ennemi1.style.transition = '5s';
//   },8000)
//   setTimeout(function(){
//     var ennemi1 = new ObjectConstruct('images/ennemie1.png',1300,30);
//       ennemi1.style.transition = '7s';
//   },4000)
//   setTimeout(function(){
//     var ennemi1 = new ObjectConstruct('images/ennemie1.png',700,20);
//       ennemi1.style.transition = '7s';
//   },4000)
//   setTimeout(function(){
//     var ennemi1 = new ObjectConstruct('images/ennemie1.png',250,300);
//       ennemi1.style.transition = '10s';
//   },9000)

//deplacement des ennemies vers la droite
function moveEnnemiToRight(ennemi){
  ennemi.left += 3;
  if (ennemi.left > document.body.clientWidth - ennemi._node.width) {
    ennemi.top += 50;
    ennemi.startAnimation( moveEnnemiToLeft, 20 );
  }
}
//deplacement des ennemies vers la gauche
function moveEnnemiToLeft(ennemi){
  ennemi.left -= 3;
  if (ennemi.left <= 0) {
    ennemi.top += 50;
    ennemi.startAnimation( moveEnnemiToRight, 20 );
  }
}
ennemi1.startAnimation(moveEnnemiToRight, 20);
ennemi2.startAnimation(moveEnnemiToRight, 20);
ennemi3.startAnimation(moveEnnemiToRight, 20);
ennemi4.startAnimation(moveEnnemiToRight, 20);
ennemi5.startAnimation(moveEnnemiToRight, 20);
