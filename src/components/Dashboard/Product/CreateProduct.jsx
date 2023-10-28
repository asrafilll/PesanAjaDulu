// pages/createInventory.js

import { useAtom } from "jotai";
import { inventoryAtom } from "../atoms/inventoryAtom";

export default function CreateInventory() {
  const [inventoryData, setInventoryData] = useAtom(inventoryAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here.
  };

  return (
    <div>
      <h1>Create New Inventory</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={inventoryData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={inventoryData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={inventoryData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={inventoryData.image}
            onChange={handleChange}
            placeholder="http://example.com/image.jpg"
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
