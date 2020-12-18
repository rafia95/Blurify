//some articles from previous years don't contain a trigger warning
//I came up with some words that can induce trauma in trauma survivors.
// I intend to add more words , or add a feature that will aloow the user to add a word they don't want to see

var all = document.getElementsByTagName('*');
for(var i=0;i<all.length;i++){

    var n =  all[i];
    str1 = 'rape';
    blurText(n,str1);
    var str2 = 'sexual';
    blurText(n,str2);
    var str3 = 'abuse';
    blurText(n,str3);
    var str4 = 'suicide';
    blurText(n,str4);
    var str5 = 'depression';
    blurText(n,str5);
    var str6 = 'violence';
    blurText(n,str6);
    var str7 = 'assault';
    blurText(n,str7);
    var str8 = 'death';
    blurText(n,str8);
    var str9 = 'depression';
    blurText(n,str9);
}

function blurText(n, str1){
  for(var j=0;j<n.childNodes.length;j++){ //gives all the child nodes of all the tags
    var data = n.childNodes[j]; //the child node in the tag, as in the innertext of p

    if(data.nodeType === 3){ //if the data is text
      var word = data.nodeValue;
      if(word){
        var strLength = str1.length;
        var reg = new RegExp(str1,"gi");
        var matchRes = word.match(reg);
        if(matchRes){

        var newNode = document.createElement("span");
        var index=word.search(reg);
        var word1='';
        for(var k=0;k<index;k++){
          word1+=word.charAt(k);
        }
        newNode.innerHTML = word1;
        var newNode2 = document.createElement("span");
        var word2 = word.substring(index,index+strLength); //check if there is any characters
        newNode2.innerHTML = word2;
        var newNode3=document.createElement("span");
        var word3=word.substring(index+strLength,word.length);
        newNode3.innerHTML = word3;


        newNode2.style.color="transparent";
        newNode2.style.textShadow="0 0 24px #000";
        newNode2.style.userSelect="none";
        newNode.append(newNode2);
        newNode.append(newNode3);

        n.replaceChild(newNode, data);
        j+=2; //as 2 new nodes were added
        i+=2;
      }
      }

  }
}
}
