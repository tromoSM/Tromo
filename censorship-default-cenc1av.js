  
/*
© 2025 - tromoSM. This code is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0).
You can obtain a copy of the license at https://creativecommons.org/licenses/by-nc/4.0/

<========= DEV INFO ==========>
Last updated : 2025.09.05 00.13am as YYYY.MM.DD HH.MM.TT 
Originaly written for : Complexx censorship

- @tromoSM 
*/
     
function censorOne(){
$word_fucking.forEach(fuckthisshii => {  
    switch (fuckthisshii.innerText.toLowerCase()){
    case("fucking"):
    fuckthisshii.innerText="f*cking" 
    break;
    case("bitch"):
    fuckthisshii.innerText="b*tch"
    break;
   case ("ass"):
    fuckthisshii.innerText="a$$"
    break;
    case("damn"):
    fuckthisshii.innerText="d*mn";
   break;
   case("chatgpt"):
   fuckthisshii.innerText="ch*tgpt";
   break;
   case("yt shorts"):
   fuckthisshii.innerText="Y* $horts"
   break;
  case("mac os"):
  fuckthisshii.innerText="m*c os";
  break;
   case("cunt"):
   fuckthisshii.innerText="¢unt";
   break;
   case("slut"):
   fuckthisshii.innerText="$lut"
   break;
   case("fuck"): 
   fuckthisshii.innerText="f*ck"
   break;
   case("hoe"):
   fuckthisshii.innerText="h*e"
   break;
   case("john pork"):
   fuckthisshii.innerText="j*hn pork"
   break;
   case("asshole"):
   fuckthisshii.innerText="asshole";
  case("pussy"):
  fuckthisshii.innerText="pu$$y"
  break;
  case("dick"):
  fuckthisshii.innerText="d!ck"
  break;
  case("tits"):
  fuckthisshii.innerText="t!ts"
  break;
   case("faggot"):
   fuckthisshii.innerText="f*ggot"
   break;
   case("whore"):
   fuckthisshii.innerText="whɵre"

}
});
}

 switch(_CensorshipForWords$all_){
    case("Y"):
    censorOne()
     $varCensorValve = "1"
    break;
    case("N"):
     $varCensorValve = "None"
     break;
    default : 
$word_fucking.forEach(fuckthisshii => {  
    fuckthisshii.innerText="SYNTAX ERROR. TR.ERR 51. INVALID VALUE. MUST BE 'Y' or 'N'."
    fuckthisshii.style.backgroundColor="red"
    fuckthisshii.style.color="aliceblue" 
})
 }   
