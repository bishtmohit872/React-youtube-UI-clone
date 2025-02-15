import { useState } from "react";

const SubscriptionDropdown = () => {
  const images=[
    "https://static.thenounproject.com/png/7526005-200.png",
    "https://static.thenounproject.com/png/7556840-200.png",
    "https://static.thenounproject.com/png/125698-200.png",
    "https://static.thenounproject.com/png/7252378-200.png"
  ]
  const [selectedValue, setSelectedValue] = useState("Subscribed"); // Default Subscribed

  const [image,setImage] = useState(images[0])

  const handleChange = (event) => {
    const value = event.target.value;
    // setSelectedValue(value);

    value === "All" ? (setImage(images[0]),setSelectedValue("subscribed")):""
    value === "Personalized" ? (setImage(images[1]),setSelectedValue("subscribed")):""
    value === "None" ? (setImage(images[2]),setSelectedValue("subscribed")):""
    value === "Unsubscribed" ? (setImage(images[3]),setSelectedValue("Unsubscribed")):"";
  };

  return (
    <div className="ml-4 relative bg-gray-200 flex item-center border-1 border-gray-200 rounded-xl">
      <button className="h-[38px] w-[130px] flex items-center bg-gray-200 text-sm text-gray-600 font-semibold px-3 py-2 absolute top-0 rounded-xl">
        <img className="h-[20px] w-[20px] mr-2" src={image}/>{selectedValue}
      </button>

      <select value={selectedValue} onChange={handleChange} className="h-[38px] w-[150px] block text-sm border-none rounded-xl shadow-md px-4 py-2 cursor-pointer outline-none ">
        <option className="bg-gray-200 border-1 text-gray-700 font-semibold" value="All">All</option>
        <option className="bg-gray-200 border-1 text-gray-700 font-semibold" value="Personalized">Personalized</option>
        <option className="bg-gray-200 border-1 text-gray-700 font-semibold" value="None">None</option>
        <option className="bg-gray-200 border-1 text-gray-700 font-semibold" value="Unsubscribed">Unsubscribed</option>
      </select>
    </div>
  );
};

export default SubscriptionDropdown;
