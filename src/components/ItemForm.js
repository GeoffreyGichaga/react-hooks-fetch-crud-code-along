import React, { useState } from "react";

function ItemForm({onAddItem}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event){
    event.preventDefault()
    const itemData = {
      name:name,
      category:category,
      isInCart:false
    }

    console.log("name :" + name);
    console.log("category :" + category);
    console.log(itemData.isInCart);

    fetch('http://localhost:4000/items',
    {
      method:"POST",
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify(itemData)
    })
    .then(res=>res.json)
    .then(newItem=>onAddItem(newItem))

  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
