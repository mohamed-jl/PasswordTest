import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  password:string="";
  score:number=0;
  output:string ="empty";
  color:string="black";
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  test():void{
    console.log("******change*****")
    console.log(this.password)
    let d="";
    if(this.password.length > 8) this.score++;
    if (/[a-z]/.test(this.password)) this.score++;
    if (/[A-Z]/.test(this.password)) this.score++;
    if (/[0-9]/.test(this.password)) this.score++;
    if (/[!@#$%^&*-_,?£:;/.]/.test(this.password)) this.score++;
    switch(this.score){
      case 0:{d="password can't be empty";break;}
      case 1:{d="very weak";break;}
      case 2:{d="weak";break;}
      case 3:{d="normal";break;}
      case 4:{d="good!";break;}
      case 5:{d="very good!";break}
      default:{d="erreur";break;}
    }
    this.output=d;
    this.color=this.msgColor();
    this.score=0;
  }
  msgColor():string{
    if(this.score==0) return "black" ;
    else if(this.score==1) return "#7c2935";
    else if(this.score==2) return "#f1c74f";
    else if(this.score==3) return "#7b9cbd";
    else if(this.score==4) return "#177216";
    else return "#FFD700";
  }
  generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
    
    let password = '';
    for (let i = 0; i < length; ++i) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    this.password = password;
    this.test();
  }
}
