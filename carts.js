let cartItems=JSON.parse(localStorage.getItem("cart_items"));
console.log(cartItems);
    cartItems.forEach(function(el){
    let card = document.createElement("div");
        let total_price=cartItems.reduce(function(acc,el){
            return acc+el.price;
        },0)
        document.querySelector("#cartmiddle h3>span").innerText=total_price;
        document.querySelector("#cartmiddle h2>span").innerText=cartItems.length;
    let productImage=document.createElement("img");
    productImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6F321fRwX7vcZnrxDSOV521eMK7OWmgOzg&usqp=CAU";
    
    let title=document.createElement("h3");
    title.innerText=el.name;
    
    let price=document.createElement("p");
    price=el.price;
   
    
    card.append(productImage, title, price);

    document.querySelector("#cartcontainer").append(card);
    });
    