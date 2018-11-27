import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
    
  }
  ionViewDidLoad() {
    this.displayWords();
  }
  
   arrWinner = new Array();
   arrTableData = new Array();
   arrWord = new Array( 'boy','girl','toy','sun','moon','summer','winter','nappie','spring','dance','run','jog','walk',
                        'train','sleep','red','blue','white','green','yellow','song','music','fat','cook','eat');
 

   winCount=0;
  //create a new game
 newGame(){
 
    let alert = this.alertCtrl.create({
      title: 'New Game',
      message: 'Are you sure you want to start a New Game?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            document.location.reload(true);
          }
        }
      ]
    });
    alert.present();
}
 //check if all words are clicked
checkWinner(event) {

  var myId = event.target.getAttribute("id");

  var myCell = document.getElementById(String(myId));
  
  myCell.style.backgroundColor = "lightgreen";
  
  this.arrWinner[this.winCount]=myId;
  console.log('array winner ',this.arrWinner);
  console.log('array win count ',this.arrWinner[this.winCount],"count ",this.winCount);
  if(this.arrWinner.length>=5){
 
    //row arrays
    var row1=new Array();
    var row2=new Array();
    var row3=new Array();
    var row4=new Array();
    var row5=new Array();
    //column arrays
    var column1=new Array();
    var column2=new Array();
    var column3=new Array();
    var column4=new Array();
    var column5=new Array();

    var row1Count=0;
    var row2Count=0;
    var row3Count=0;
    var row4Count=0;
    var row5Count=0;
    
    var col1Count=0;
    var col2Count=0;
    var col3Count=0;
    var col4Count=0;
    var col5Count=0;
 
    var diagonal1=new Array();
    var diagonal2=new Array();
 
    var diag1Count=0;
    var diag2Count=0;
 
    for(var i=0;i<this.arrWinner.length;++i){
        //Checking for diagonal match
        if(this.arrWinner[i]=="5:1" && this.arrWinner[i]=="4:2" && this.arrWinner[i]=="3:3" && this.arrWinner[i]=="2:4" && this.arrWinner[i]=="1:5"){
            diagonal1[diag1Count]=this.arrWinner[i];
            
            diag1Count++;
 
            if(diagonal1.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        if(this.arrWinner[i]=="1:1" || this.arrWinner[i]=="2:2" || this.arrWinner[i]=="3:3" || this.arrWinner[i]=="4:4" || this.arrWinner[i]=="5:5"){
            diagonal2[diag2Count]=this.arrWinner[i];
           
            diag2Count++;
 
            if(diagonal2.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
         //Checking for column match
        if(this.arrWinner[i]=="1:1" || this.arrWinner[i]=="2:1" || this.arrWinner[i]=="3:1" || this.arrWinner[i]=="4:1" || this.arrWinner[i]=="5:1"){
            column1[col1Count]=this.arrWinner[i];
 
            col1Count++;

            if(column1.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        if(this.arrWinner[i]=="1:2" || this.arrWinner[i]=="2:2" || this.arrWinner[i]=="3:2" || this.arrWinner[i]=="4:2" || this.arrWinner[i]=="5:2"){
            column2[col2Count]=this.arrWinner[i];
 
            col2Count++;
 
            if(column2.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        if(this.arrWinner[i]=="1:3" || this.arrWinner[i]=="2:3" || this.arrWinner[i]=="3:3" || this.arrWinner[i]=="4:3" || this.arrWinner[i]=="5:3"){
            column3[col3Count]=this.arrWinner[i];
 
            col3Count++;
 
            if(column3.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        if(this.arrWinner[i]=="1:4" || this.arrWinner[i]=="2:4" || this.arrWinner[i]=="3:4" || this.arrWinner[i]=="4:4" || this.arrWinner[i]=="5:4"){
            column4[col4Count]=this.arrWinner[i];
 
            col4Count++;

            if(column4.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        if(this.arrWinner[i]=="1:5" || this.arrWinner[i]=="2:5" || this.arrWinner[i]=="3:5" || this.arrWinner[i]=="4:5" || this.arrWinner[i]=="5:5"){
            column5[col5Count]=this.arrWinner[i];
 
            col5Count++;
 
            if(column5.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        //Checking for row match
        if(this.arrWinner[i]=="1:1" || this.arrWinner[i]=="1:2" || this.arrWinner[i]=="1:3" || this.arrWinner[i]=="1:4" || this.arrWinner[i]=="1:5"){
            row1[row1Count]=this.arrWinner[i];
 
            row1Count++;
 
            if(row1.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        if(this.arrWinner[i]=="2:1" || this.arrWinner[i]=="2:2" || this.arrWinner[i]=="2:3" || this.arrWinner[i]=="2:4" || this.arrWinner[i]=="2:5"){
            row2[row2Count]=this.arrWinner[i];
 
            row2Count++;

            if(row2.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        if(this.arrWinner[i]=="3:1" || this.arrWinner[i]=="3:2" || this.arrWinner[i]=="3:3" || this.arrWinner[i]=="3:4" || this.arrWinner[i]=="3:5"){
            row3[row3Count]=this.arrWinner[i];
 
            row3Count++;
 
            if(row3.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        if(this.arrWinner[i]=="4:1" || this.arrWinner[i]=="4:2" || this.arrWinner[i]=="4:3" || this.arrWinner[i]=="4:4" || this.arrWinner[i]=="4:5"){
            row4[row4Count]=this.arrWinner[i];
 
            row4Count++;
 
            if(row4.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
 
        if(this.arrWinner[i]=="5:1" || this.arrWinner[i]=="5:2" || this.arrWinner[i]=="5:3" || this.arrWinner[i]=="5:4" || this.arrWinner[i]=="5:5"){
            row5[row5Count]=this.arrWinner[i];
 
            row5Count++;
            if(row5.length==5){
                // alert("BINGO");
                this.presentConfirm();
                // document.location.reload(true);
            }
        }
    }
  }
  this.winCount++;
}
// shuffle the words
ramdomizeSelector() {
 
  var count = 0;
 
  while (this.arrWord.length != 0) {
 
     var ranGenerator = Math.round(Math.random() * (this.arrWord.length - 1));
    
     this.arrTableData[count]=this.arrWord[ranGenerator];
     this.arrWord[ranGenerator] = this.arrWord[this.arrWord.length - 1];
     this.arrWord.length -= 1;
 
     count++;
  }
}
/*Called on page load*/
displayWords() {
    this.ramdomizeSelector();
 
    var count=0;
 
    for(var i = 1; i < 6; ++i) {
        for(var j = 1; j < 6; ++j) {
            var cellId=i+":"+j;
            
            var cell=document.getElementById(cellId);
            
            cell.appendChild(document.createTextNode(this.arrTableData[count]));
            
            count++;
        }
    }
}
// confirm alert
presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'BINGO',
    message: 'Well Done you completed the game do you wish to play again?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          document.location.reload(true);
        }
      }
    ]
  });
  alert.present();
}

}
