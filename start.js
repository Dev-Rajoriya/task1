const content=[
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2022.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-may-2022.key"
    }
]
const bdy=document.querySelector(".container");
console.log(bdy)

function lchk(str){
    let s1;
    if(str.length>30)
    {
        s1=str.substring(0,15);
        let s2=str.slice(-15);
        //console.log(s2)
        s1=s1+"..."+s2;
    }
    else
    {
      s1=str;
    }
   return s1;
}

content.forEach(function(Element){

    let s1=lchk(Element.title)
   // console.log(Element.title.length)
    let newArticle=document.createElement("button");
    newArticle.setAttribute("class","cta-button")
    newArticle.classList.add("class","item")
    newArticle.setAttribute("id",Element.previewImage)
    newArticle.setAttribute("tabIndex","-1")
    design=`${s1}`
    newArticle.innerHTML=design
    bdy.append(newArticle);
})
 


const keyCode={
    up:38,
    down:40
};

var prev=undefined; 

const newBdy=document.querySelector(".container");

newBdy.addEventListener("keydown",onkeydown)

const imgTitle=document.querySelector("input")

imgTitle.addEventListener("change",(event)=>{
   //console.log(event.target.value)
   let str=lchk(event.target.value)
   event.target.value=str
   if(prev!=undefined)
   {
      prev.innerHTML=str
      prev.focus()
   }
})


const button=document.querySelectorAll(".item");
button.forEach(function(Element){
Element.addEventListener("click", (event) => {
    console.log(Element.getAttribute("class"))
    const classChk=Element.getAttribute("class")
        activate(Element)
  }, false);})




function onkeydown(event)
{
    switch (event.keyCode) {
        case keyCode.down:
          event.preventDefault();
          focusNextItem();
          break;
        case keyCode.up:
          event.preventDefault();
          focusPreviousItem();
          break;
    }
}
const first="cta-button class item"
const second="cta-button item"

function focusNextItem() {
    const aele = document.activeElement;
   // const classChk=aele.nextElementSibling.getAttribute("class")
    if (aele.nextElementSibling) {
      activate(aele.nextElementSibling);
    }
}

function focusPreviousItem() {
    let aele= document.activeElement;
    const classChk=aele.previousElementSibling.getAttribute("class")
    if (aele.previousElementSibling&&(classChk==first||classChk==second)) {
      activate(aele.previousElementSibling);
    }
}

function activate(item) {
    // Set all of the buttons to tabindex -1
    const btn=document.querySelectorAll(".item");
    console.log(btn)
    for(let x in btn)
    {
       x.tabIndex=-1
    }
    // Make the current button "active"
    item.tabIndex = 0;
    imgTitle.value=item.innerHTML
    const shw=document.querySelector("img");
    shw.setAttribute("src",item.id)
    if(prev!=undefined)
    {
       prev.classList.remove("class","green")
       prev.tabIndex=-1;
    }
    prev=item
    item.classList.add("class","green")
    item.focus()
  }
  



  