// alert( "2 plus 2 equals " +( 2 + 2) );


   
var name=prompt("Enter Your Name","Your Name");
var fname=prompt("Enter Your Father Name","Your Father Name");
var html =parseFloat (prompt ( " Enter your html marks "+ "%"));
var css = parseFloat(prompt(" Enter your css marks:" + "%"));
var css2 = parseFloat(prompt(" Enter your css test 2  marks:" + "%"));
var result = html + css + css2 ;
var average = (result/3);
document.getElementById('sname').innerHTML=name;
document.getElementById('fname').innerHTML=fname;
document.getElementById ('html').innerHTML = html;
document.getElementById ('css').innerHTML= css;
document.getElementById ('css2').innerHTML= css2;
document.getElementById ('avg').innerHTML=average;

/* conditions for html marks*/





if (html >=90 && html <=100 ){

   document.getElementById('html').innerHTML= html + " "+ "you great is A+";
}
else if (html<90 && html >=80){
    document.getElementById('html').innerHTML= html + " " + "your great is A";

}
else if (html>=70 && html <80){
       document.getElementById('html').innerHTML= html + " " + "your great is B";

}
else if (html>=60 && html < 70){
       document.getElementById('html').innerHTML= html + " " + "your great is c";

}
else if (html <60){
       document.getElementById('html').innerHTML= html + " " + " sorry your are fail";
}

/* conditions for css marks*/

if (css >=90 && css <=100 ){

   document.getElementById('css').innerHTML= css + " "+ "you great is A+";
}
else if (css<90 && css >=80){
    document.getElementById('css').innerHTML= css + " " + "your great is A";

}
else if (css>=70 && css <80){
       document.getElementById('css').innerHTML= css + " " + "your great is B";

}
else if (css>=60 && css < 70){
       document.getElementById('css').innerHTML= css + " " + "your great is c";

}
else if (css <60){
       document.getElementById('css').innerHTML= css + " " + " sorry your are fail";
}

/* conditions for css test 2 marks*/

if (css2 >=90 && css2 <=100 ){

   document.getElementById('css').innerHTML= css2 + " "+ "you great is A+";
}
else if (css2<90 && css2 >=80){
    document.getElementById('css2').innerHTML= css2 + " " + "your great is A";

}
else if (css2>=70 && css2 <80){
       document.getElementById('css2').innerHTML= css2 + " " + "your great is B";

}
else if (css2>=60 && css2 < 70){
       document.getElementById('css2').innerHTML= css2 + " " + "your great is c";

}
else if (css2 <60){
       document.getElementById('css2').innerHTML= css2 + " " + " sorry your are fail";
}