
//nav bar

var header=document.createElement('nav');
header.setAttribute('class','parent');
header.setAttribute('id','header');
header.setAttribute('style','position: sticky');


//logo
var logo=document.createElement('div');

logo.setAttribute('id','logo');
var logotxt=document.createElement('span');
logotxt.setAttribute('class','logotxt');
logotxt.innerText="CATPICS";
var icon= document.createElement('img');
icon.setAttribute('class','icon-img');
icon.setAttribute('src','cat-32.png');
icon.setAttribute('alt','img');
logo.append(icon,logotxt);
//search bar
var searchbox=document.createElement('span');
searchbox.setAttribute('id','searchbox');
var inputbox=document.createElement('input');
inputbox.setAttribute('type','text');
inputbox.setAttribute('id','input');
inputbox.setAttribute("placeholder"," search");
var searchbtn=document.createElement('button');
searchbtn.setAttribute('type','button');
searchbtn.setAttribute('onclick','search()');
searchbtn.innerHTML="Search";
var home=document.createElement('span');
home.setAttribute('class','home');
var hometext=document.createElement('a');
hometext.setAttribute('class','hometext');
hometext.setAttribute('href','../../index.html');
hometext.innerHTML="Home";

home.append(hometext);
searchbox.append(inputbox,searchbtn);
header.append(logo,searchbox,home);
document.body.append(header);

//Instructions
var instruction=document.createElement('div');
instruction.setAttribute('class','child1');
instruction.setAttribute('id',"instruct");
instruction.innerHTML=`<h3>Instructions:</h3>
                        <ul class="content">
                        <li> Best free Cat images are availabe for Cat Lovers</li>
                        <li> To find the tag name based cat images</li>
                        <li> Go to the search box and search the tag name inside the search box which tag you want. <b>Example:-</b> tags:cute,jump,gif,etc. </li>
                        <li> Now you can get the images of searched tag</li>
                        <li> If you want to go the home page, click the 'Home'-button in the nav bar.</li>
                        </ul> `;
document.body.append(instruction);

//Image cards
var cards=document.createElement('div');
cards.setAttribute('class','child2');
cards.setAttribute('id','cards');
document.body.append(cards);

async function search(){
    
    try {
       
    
        var inp=document.getElementById('input').value;
        let url=await fetch(`https://cataas.com/api/cats?tags=${inp}`);
        let data=await url.json();
        // console.log(data);
        var data1 = "";
        data.map((val)=>{
            data1 += `
                <span class="card">
                    <div class="card-image"><img class="image" src="https://cataas.com/cat/${val.id}" alt="img"></div>
                    <div class="details">
                        Created At: ${val.created_at}<br>
                        ID: ${val.id} <br>
                        Tags: ${val.tags} <br>
                    </div>
                </span>`;
        });
        document.getElementById('cards').innerHTML=data1;

    } catch (error) {
        console.log(error);
    }
} search();


