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

// fucntion to check if the length of the title of the image is more than space allowed
// then return a string which fits in to that
function lchk(str){
    let s1;
    if(str.length>20)
    {
        s1=str.substring(0,15);
        let s2=str.slice(-10);
        s1=s1+"..."+s2;
    }
    else
    {
      s1=str;
    }
   return s1;
}


// fucntion to create a button element for each image 
// where text is images's title 
ind=0;
content.forEach(function(Element){

    let s1=lchk(Element.title)
    let newArticle=document.createElement("button");
    newArticle.setAttribute("class","cta-button")
    newArticle.classList.add("class","item")
    newArticle.setAttribute("id",Element.previewImage)
    newArticle.setAttribute("tabIndex","-1")
    ind++;
    design=`<div class="aligned" id=${ind}><img src="${Element.previewImage}" style="width:50px;height:30px"><span>${s1}</span></div>`
    newArticle.innerHTML=design
    bdy.append(newArticle);
})
 


// key code for up and down arrow key for keyboard navigation
const keyCode={
    up:38,
    down:40
};


var prev=undefined; // it is declared to store the element which is in focus previously


const newBdy=document.querySelector(".container");

newBdy.addEventListener("keydown",onkeydown) // adding keydown event in the container

const imgTitle=document.querySelector("input") // Title of image which is showing just below the image



// adding feature to edit the imgTitle
imgTitle.addEventListener("change",(event)=>{

   let str=lchk(event.target.value)  // checking the length of text whether it can fit in the button or not

   event.target.value=str // title of image get updated

   if(prev!=undefined) // prev can be undefined becuse if we try to edit the image tile before selecting any image
   {
      prev.querySelector("span").innerHTML=str  // here the edited title of image get update in the left bar

      prev.focus()  // here the button element retain focus 
   }
})

// adding on click event in the button
const button=document.querySelectorAll(".item");
button.forEach(function(Element){
Element.addEventListener("click", (event) => {
    console.log(button[0])
    activate(Element)
  }, false);})


// fucntion to navigate in the bar with the help of arrow keys
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

// this function will help to find the next sibling of the current active element
function focusNextItem() {
    const aele = document.activeElement;
    if (aele.nextElementSibling) {
        activate(aele.nextElementSibling);
      }
    else if(aele.querySelector("div").id==container.children.length-1)
    {
        activate(container.children[1])
    }
}

// this function will help to find the previous sibling of the current active element
function focusPreviousItem() {
    let aele= document.activeElement;

    // aele.querySelector("div").id>1 this condition is required to stop the arrow key navigation taking focus to image
    // because that is previousElementSibling of the first button
    if (aele.previousElementSibling&&aele.querySelector("div").id>1) {
      activate(aele.previousElementSibling);
    }
    else
    {
        activate(container.children[container.children.length-1])
    }
}

function activate(item) {
    // Set all of the buttons to tabindex -1
    const btn=document.querySelectorAll(".item");

    for(let x in btn)
    {
       x.tabIndex=-1
    }
    // Make the current button "active"
    item.tabIndex = 0;
    
    const y=item.querySelector("span").innerHTML
    
    imgTitle.value=y // imgTitle gets updated corresponding to the current active element

    const shw=document.querySelector("img");
    shw.setAttribute("src",item.id) // here img get updated corresponding to the current active button

    if(prev!=undefined)
    {
       prev.classList.remove("class","green")//previously active element loses the green colour as its background colour
       prev.tabIndex=-1;
    }

    prev=item

    item.classList.add("class","green") // the active button changes it background colour
    item.focus() // this will make the item active
  }
  
