import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProductPage = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [qty, setQty] = useState("");
    const [qtyReq, setQtyReq] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const options = {
        position: "top-right",
        autoClose: 1000,
        pauseOnHover: true,
        draggable: false,
        theme: 'dark'
    };

    const handleValidation = () => {
        if (name === '') {
            toast.error('Name is required', options);
            return false;
        }
        else if (name.length < 3) {
            toast.error('Name should be of atleast 3 in length', options);
            return false;
        }
        if (category === '') {
            toast.error('Category is required', options);
            return false;
        }
        else if (category.length < 3) {
            toast.error('Category should be of atleast 3 in length', options);
            return false;
        }
        if (price === '') {
            toast.error('Price is required', options);
            return false;
        }
        if (qty === '') {
            toast.error('Quantity is required', options);
            return false;
        }
        if (qtyReq === '') {
            toast.error('Quantity Piece/Kg is required', options);
            return false;
        }
        if (image === '') {
            toast.error('Image is required', options);
            return false;
        }

        return true;
    }

    let navigate = useNavigate();

    useEffect(() => {
        if(url){
            const fetchDetails = async () => {
                const response = await fetch("http://localhost:5000/product/addProduct", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({productName:name, productDescription: description, productPrice: price, productCategory: category,  productImage: url, productQuantity: qty, productQuantityPiece: qtyReq})
                })
                
                const data = await response.json();
                console.log(data);
                if(data.success){
                    toast.success("Post has been created");
                    // setTimeout(() => {
                    //     navigate('/');
                    // }, 1000)
                    setName('');
                    setDescription('');
                    setCategory('');
                    setImage('');
                    setPrice('');
                    setQty('');
                    setQtyReq('');
                }
                else {
                    toast.error("Please! Try again after sometime");
                }
            }
            fetchDetails();
        }
    }, [url])

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        }
        if (e.target.name === "description") {
            setDescription(e.target.value);
        }
        if (e.target.name === "price") {
            setPrice(e.target.value);
        }
        if (e.target.name === "category") {
            setCategory(e.target.value);
        }
        if(e.target.name === 'qty') {
            setQty(e.target.value);
        }
        if(e.target.name === 'qtyReq') {
            setQtyReq(e.target.value);
        }
    };

    const postDetails = async (e) => {
        e.preventDefault();
        if(handleValidation()){
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", "jain-jalebi");
            data.append("cloud_name", "pinstagramcn");
            const response = await fetch(process.env.REACT_APP_CLOUD,{
                method: 'POST',
                body: data
            })
            const res = await response.json();
            setUrl(res.secure_url);
        }
    }

    return (
        <div className="h-[90vh] p-2">
            <div className="flex flex-col mdm:w-full w-1/2 mx-auto space-x-5 items-center space-y-5 p-4">
                <h6 className="text-center text-3xl font-bold">Add Product</h6>

                <form className="w-5/6 space-y-4 items-center justify-center">
                    <div className="flex space-x-2 smm:flex-col smm:space-x-0 smm:space-y-2">
                        <label htmlFor = 'name' className="w-[30%] smm:w-full">Name:</label>
                        <input type="text" onChange={handleChange} name="name" className="p-2 w-full border border-gray-400 rounded-lg outline-orange-500"
                            id="name" placeholder="Required" required />
                    </div>
                    <div className="flex space-x-2 smm:flex-col smm:space-x-0 smm:space-y-2">
                        <label htmlFor = 'description' className="w-[30%] smm:w-full">Description:</label>
                        <textarea
                            type="text"
                            onChange={handleChange}
                            name="description"
                            className="p-2 h-30 w-full border border-gray-400 rounded-lg outline-orange-500"
                            id="description"
                            placeholder="Optional"
                        />
                    </div>
                    <div className="flex space-x-2 smm:flex-col smm:space-x-0 smm:space-y-2">
                        <label htmlFor = 'price' className="w-[30%] smm:w-full">Price:</label>
                        <input
                            type="number"
                            onChange={handleChange}
                            name="price"
                            min={1}
                            className="p-2 w-full border border-gray-400 rounded-lg outline-orange-500"
                            id="price"
                            placeholder="Required"
                            required
                        />
                    </div>
                    <div className="flex space-x-2 smm:flex-col smm:space-x-0 smm:space-y-2">
                        <label htmlFor = 'quantity' className="w-[30%] smm:w-full">Quantity:</label>
                        <div className="qnty flex space-x-2 w-full">
                            <input
                                type="text"
                                onChange={handleChange}
                                name="qty"
                                className="p-2 w-1/2 smm:w-3/5 border border-gray-400 rounded-lg outline-orange-500"
                                id="qty"
                                placeholder="Required"
                                required
                            />
                            <select id='qntyReq' className="w-[40%] p-2 smm:text-xs border border-gray-400 rounded-lg outline-orange-500" onChange={handleChange} name = 'qtyReq'>
                                <option name = 'qtyReq' value='none'>--Select--</option>
                                <option name = 'qtyReq' value='kg'>Kg</option>
                                <option name = 'qtyReq' value='piece'>Piece</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-2 smm:flex-col smm:space-x-0 smm:space-y-2">
                        <label htmlFor = 'category' className="w-[30%] smm:w-full">Category:</label>
                        <input
                            type="text"
                            onChange={handleChange}
                            name="category"
                            className="p-2 w-full border border-gray-400 rounded-lg outline-orange-500"
                            id="category"
                            placeholder="Required"
                            required
                        />
                    </div>
                    <div className="flex space-x-2 smm:flex-col smm:space-x-0 smm:space-y-2">
                        <label htmlFor = "productImage" className="w-[30%] smm:w-full">Product Image:</label>
                        <input onChange={handleImage}  className="p-1 w-full rounded-lg outline-orange-500" type="file" id="productImage" name="productImage" required />
                    </div>
                    <div className="text-center">
                        <button onClick={postDetails} className="bg-orange-400 p-2 w-1/2 text-black rounded-full hover:bg-orange-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProductPage;