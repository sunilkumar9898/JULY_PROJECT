import React, { useEffect, useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProgressSpinner } from "primereact/progressspinner";


const Product = () => {
    const[loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const notify = () =>
        toast.success("Successfully Added In cart", {
            autoClose: 2000,
            position: "top-center",
        });
    const notifyerror = () =>
        toast.error("Already Added In cart", { autoClose: 2000 });

    const addtocart = (item) => {
        let arr = JSON.parse(localStorage.getItem("ecommercedata")) || [];
        let found = arr.some((ele) => ele.id === item.id);
        if (found) {
            notifyerror();
        } else {
            arr.push(item);
            localStorage.setItem("ecommercedata", JSON.stringify(arr));
            notify();
            window.location.reload()
        }
    };


    const getData = async () => {
        try {
            setLoading(true);
            let apidata = await axios.get(
                "https://renderjsondata.onrender.com/men"
            );
            setData(apidata.data);
            console.log(apidata.data);
            setLoading(false)

        } catch (error) {
            console.log(error);
        }
    };

    // const deldata = async (id) => {
    //     try {
    //         let res = axios.delete(
    //             `https://renderjsondata.onrender.com/men/${id}`
    //         );
    //         alert("deleted successfully");
    //         getData();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="box">
            <ToastContainer />
            {loading ? (
                <div className="text-center">
                    <ProgressSpinner />
                </div>
            ) : (
                <div className=" grid w-100  ">
                    {data.map((ele) => {
                        return (
                            <div className=" px-2 card p-2 mx-auto griddiv ">
                                <img src={ele.image} alt="" />
                                <p className="pt-4">{`${
                                    ele.name ? ele.name.slice(1, 25) : null
                                } ......`}</p>
                                <p> $ {ele.price ? ele.price : "99.99"}</p>
                                <p>{ele.rating}</p>
                                <div className="d-flex gap-2  ">
                                    <button
                                        onClick={() => addtocart(ele)}
                                        className="btn btn-secondary ">
                                        Add To Cart
                                    </button>
                                    <button className="btn btn-warning">
                                        Add To Favourite
                                    </button>
                                    {/* <button onClick={() => deldata(ele.id)}>
                                    delete
                                </button> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Product;
