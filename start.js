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


ind=0
bdy=document.querySelector(".image-options")
content.forEach(element => {
    s1=lchk(element.title)
    let newArticle=document.createElement("button")
    newArticle.setAttribute("class","cta-button")
    ind++;
    newArticle.setAttribute("id",element.previewImage)
    design=`<div class="aligned" id=${ind}><img src="${element.previewImage}" style="width:100px;height:30px"><span>${s1}</span></div>`
    newArticle.innerHTML=design
    bdy.append(newArticle)
});


const btn=document.querySelectorAll("button")

prev=btn[0]

activate(btn[0])

btn.forEach(element=>{
    element.addEventListener("click",(event)=>{
        activate(element)
    })

})

imgTitle=document.querySelector(".image-display").querySelector("input")
imgTitle.addEventListener("change",(event)=>{
    str=lchk(event.target.value)
    event.target.value=str
    prev.querySelector("span").innerHTML=str
    prev.focus()
})

const newBdy=document.querySelector(".container");

newBdy.addEventListener("keydown",onkeydown)

const keyCode={
    up:38,
    down:40
};


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

function focusNextItem()
{
    aele=document.activeElement
    console.log(aele.hasAttribute("alt"))
    if(!aele.hasAttribute("alt"))
    {
        if (aele.nextElementSibling) {
            activate(aele.nextElementSibling);
        }
        else
        {
            activate(btn[0])
        }
    }
}

function focusPreviousItem()
{
    aele=document.activeElement
    console.log(aele.hasAttribute("alt"))
    if(!aele.hasAttribute("alt"))
    {
        if (aele.previousElementSibling) {
            activate(aele.previousElementSibling);
        }
        else
        {
            activate(btn[btn.length-1])
        }
    }
}

function activate(item)
{
    const shw=document.querySelector(".image-display").querySelector("img")
    shw.setAttribute("src",item.id)
    prev.classList.remove("class","green")
    item.classList.add("class","green")
    changeTitle=document.querySelector(".image-display").querySelector("input")
    changeTitle.value=item.querySelector("span").innerHTML
    prev=item
    item.focus()
}