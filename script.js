function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 3);
    let weOb= document.getElementById("we");
    let weAddButtonOb= document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);

}
function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 3);
    let aqOb= document.getElementById("aq");
    let aqAddButtonOb= document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);

}
function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("gitT").innerHTML=document.getElementById("githubField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    let wes=document.getElementsByClassName("weField");
    let str="";
    for(let e of wes){
        str = str+`<li> ${e.value} </li>`;
        document.getElementById("pT").innerHTML=str;
    }
    document.getElementById("pT").innerHTML=str;
    
    let aqs=document.getElementsByClassName("aqField");
    let str1="";
    for(let e of aqs){
        str1= str1+ `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}
function printCV(){
    window.print();
}
