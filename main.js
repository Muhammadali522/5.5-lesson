fetch("https://fakestoreapi.com/products?limit=10")
.then(response => response.json())

.then(data => {
    const userList = document.querySelector(".warpper");
    
    data.forEach(user => {
        const Card = document.createElement("div");
        Card.className = "card";
        
        const id = document.createElement("h1");
        const img = document.createElement("img");
        const price = document.createElement("p");
        
        id.textContent = user.id;
        img.src = user.image;  
        price.textContent = `price: ${user.price}`;
        
        Card.append(id, img, price);
        userList.append(Card);
    });
})
.catch(error => {
    console.error("Xato");
});




