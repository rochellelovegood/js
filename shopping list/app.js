const inputTag= document.getElementsByClassName("form-control")[0]
const shoppingListTag= document.getElementsByClassName("shoppingListTagContainer")[0];
let productId=1;
{/* <i class="fa-solid fa-trash fa-bounce"></i> */}
const handleChange=(event)=>{
    const inputValue=event.target.value
    const productContainer=document.createElement("div")
    productContainer.classList.add("productContainer")
    const parentDiv=document.createElement("div")
    parentDiv.addEventListener("click",()=> {
         const classExist = parentDiv.classList.contains("purchasedItem")
         if(classExist){
            parentDiv.classList.remove("purchasedItem")
         }else{
         parentDiv.classList.add("purchasedItem")
         }
     })
    const spanTag= document.createElement("span")
    const trashIcon= document.createElement("i")
    trashIcon.classList.add("fa-solid", "fa-trash")
    trashIcon.addEventListener("click",(event)=>+productContainer.remove())
    spanTag.id=productId

    parentDiv.classList.add("productName")
    const product=productId.toString()+".    " +inputValue
    spanTag.append(product)
    parentDiv.append(spanTag)
    productContainer.append(parentDiv,trashIcon)
    shoppingListTag.append(productContainer)
    inputTag.value=""
    productId+=1
}

inputTag.addEventListener("change",handleChange)

