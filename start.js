const content=[
    {
        previewImage: "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        title: "cat.jpeg"
    },
    {
        previewImage: "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        title: "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        previewImage: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        title: "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        previewImage: "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        title: "NextByk Investor Pitch 2022.ppt"
    },
    {
        previewImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        title: "interns-performance-report-may-2022.key"
    }
]
const bdy=document.querySelector(".container");

content.forEach(function(Element){

    let s1;
    if(Element.title.length>30)
    {
        s1=Element.title.substring(0,5);
        let s2=Element.title.slice(-20);
        //console.log(s2)
        s1=s1+"..."+s2;
    }
    else
    {
      s1=Element.title;
    }
   // console.log(Element.title.length)
    const newArticle=document.createElement("button");
    newArticle.setAttribute("class","cta-button")
    newArticle.classList.add("class","item")
    newArticle.setAttribute("id",Element.previewImage)
    newArticle.setAttribute("tabIndex","-1")
    design=`${s1}`
    newArticle.innerHTML=design
    bdy.append(newArticle);
})


const button=document.querySelectorAll(".item");

const keyCode={
    up:38,
    down:40
};

const newBdy=document.querySelector(".container");

newBdy.addEventListener("keydown",onkeydown)

button.forEach(function(Element){
Element.addEventListener("click", (event) => {
    const shw=document.querySelector("img").setAttribute("src",Element.id);
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

function focusNextItem() {
    const aele = document.activeElement;
    if (aele.nextElementSibling) {
      activate(aele.nextElementSibling);
    }
}

function focusPreviousItem() {
    let aele= document.activeElement;
    const shw=document.querySelector("img")
    if (aele.previousElementSibling&&aele.previousElementSibling!=shw) {
      activate(aele.previousElementSibling);
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
    const shw=document.querySelector("img");
    shw.setAttribute("src",item.id)
    item.focus()

    
  }
  



  