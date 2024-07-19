import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Pages/Product";
import { Link, Element } from "react-scroll";
import Cart from "../Pages/Cart";
import About from "../Pages/About";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Button, Drawer } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

const initialvalue = {
    image: "",
    name: "",
    price: "",
};

const Navbar = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(initialvalue);
    const [showComponent, setShowComponent] = useState(false);
    let cartData = JSON.parse(localStorage.getItem("ecommercedata")) || [];

    const handleClick = () => {
        setShowComponent(!showComponent);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handlechange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const getData = async () => {
        try {
            let apidata = await axios.get(
                "https://renderjsondata.onrender.com/men"
            );
            setData(apidata.data);
            console.log(apidata.data);
        } catch (error) {
            console.log(error);
        }
    };

    const postData = async (newData) => {
        try {
            await axios.post(
                `https://renderjsondata.onrender.com/men`,
                newData
            );
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = () => {
        postData(details);
        setDetails(initialvalue);
        onClose();
        alert("success");
        console.log(details);
    };

    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 1000,
            easing: "ease-out-cubic",
        });
        getData();
    }, []);

    return (
        <div>
            <nav className="d-flex navbar1 justify-content-between align-items-center px-5 position-sticky sticky-top bg-primary text-white p-2">
                <div className="hemburger-icon ">
                    <span>&#9776;</span>
                </div>
                <div className="d-inline-flex w-50 justify-content-between cursor-pointer nav_link">
                    <Link to={"/"} smooth={true} duration={500}>
                        Home
                    </Link>
                    <Link to={"/about"} smooth={true} duration={500}>
                        About
                    </Link>
                    <Link to={"/contact"} smooth={true} duration={500}>
                        Contact
                    </Link>
                    <Link to={"/"} smooth={true} duration={500}>
                        Service
                    </Link>
                </div>
                <div>
                    <div className="">
                        <div className="d-flex align-items-center gap-2">
                            <InputText
                                style={{ height: "40px", color: "black" }}
                                placeholder="Search "
                                type="text"
                                className=" bg-none px-2 inputsearch"
                            />
                            <Avatar
                                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                                shape="circle"
                                className="cursor-pointer "
                                onClick={showDrawer}
                            />
                            <Avatar
                                className="mx-3"
                                image="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png"
                                shape="circle"
                                onClick={handleClick}>
                                {cartData.length}
                            </Avatar>
                        </div>
                    </div>
                </div>
            </nav>
            <section>
                <div className="container-fluid">
                    <Element name="/">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <Gallery />
                        </div>
                    </Element>
                    <Element name="/about">
                        <div data-aos="zoom-in" data-aos-delay="100">
                            <Product />
                        </div>
                    </Element>
                    <Element name="/about">
                        <div data-aos="zoom-out" data-aos-delay="100">
                            <About />
                        </div>
                    </Element>

                    <Element name="/contact">
                        <div data-aos="fade-out" data-aos-delay="100">
                            <Contact />
                        </div>
                    </Element>
                    {showComponent && (
                        <div>
                            <Cart />
                        </div>
                    )}
                </div>
            </section>

            <Drawer
                className="drawer mt-5"
                title="Basic Drawer"
                onClose={onClose}
                open={open}>
                <input
                    type="text"
                    placeholder="Image"
                    name="image"
                    value={details.image}
                    onChange={handlechange}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={details.name}
                    onChange={handlechange}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={details.price}
                    onChange={handlechange}
                />
                <br />
                <br />

                <div className="btnnn">
                    <button className="btn btn-success" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;
