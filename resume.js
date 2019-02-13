(function () {
   function loadJson(file,callback) {
      var rawFile=new XMLHttpRequest();
       rawFile.overrideMimeType("application/json");
       rawFile.open("GET",file,true);
       rawFile.onreadystatechange =function(){
         if (rawFile.readyState === 4 & rawFile.status == "200") {
           callback(rawFile.responseText)

         }

       }
       rawFile.send(null);

}
loadJson("resume.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  leftData(data.profile);
  console.log(data);
  Education(data.Education);
console.log(data);
skills(data.skills);
});
var left=document.querySelector(".leftDiv");
var right=document.querySelector(".rightDiv");
function leftData(leftdetails) {
  var image=document.createElement("img");
  image.src=leftdetails.image;
image.alt="profile Image";
  left.appendChild(image);
  var name=document.createElement("h2");
  name.textContent=leftdetails.name;
  left.appendChild(name);
  var Branch=document.createElement("h2");
  Branch.textContent=leftdetails.Branch;
  left.appendChild(Branch);
  var number=document.createElement("h2");
  number.textContent=leftdetails.number;
  left.appendChild(number);
  var gmail=document.createElement("h2");
  gmail.textContent=leftdetails.gmail;
  left.appendChild(gmail);

// rightDiv Data
var co=document.createElement("h1");
co.textContent="career object";
right.appendChild(co);
right.appendChild(document.createElement("hr")
);
let p=document.createElement("p");
p.textContent=leftdetails.careerobject;
right.appendChild(p);
}
//create Education details
function Education(edu) {
  var
  educational=document.createElement("h1");
  educational.textContent="Education Information";
  right.appendChild(educational);
  right.appendChild(document.createElement("hr"));
  for (i in edu) {
    let h3=document.createElement("h3");
    h3.textContent=edu[i].degree;
    right.appendChild(h3);

    let ul=document.createElement("ul");
    right.appendChild(ul);

    //create list's (li1,li2 & li3)

    let li1=document.createElement("li");
    li1.textContent="College : "+edu[i].College;
    ul.appendChild(li1);

    let li2=document.createElement("li");
    li2.textContent="Branch : "+edu[i].Branch;
    ul.appendChild(li2);

    let li3=document.createElement("li");
    li3.textContent="Marks : "+edu[i].Marks;
    ul.appendChild(li3);

    let li4=document.createElement("li");
    li4.textContent="Education completion : "+edu[i].endDate;
    ul.appendChild(li4);

  }
}
function skills(skill) {
  var sk=document.createElement("h1");
  sk.textContent="skills";
  right.appendChild(sk);
  right.appendChild(document.createElement("hr"));

  var p=document.createElement("p");
  p.textContent=skill.os;
  right.appendChild(p);

  var p1=document.createElement("p");
  p1.textContent=skill.ps;
  right.appendChild(p1);
}
})();
