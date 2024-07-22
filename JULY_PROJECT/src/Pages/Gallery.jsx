import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { Data1 } from "./data";
import "primeicons/primeicons.css";

const Gallery = () => {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: "1400px",
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: "1199px",
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: "767px",
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: "575px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    // const getSeverity = (product) => {
    //     switch (product.inventoryStatus) {
    //         case "INSTOCK":
    //             return "success";

    //         case "LOWSTOCK":
    //             return "warning";

    //         case "OUTOFSTOCK":
    //             return "danger";

    //         default:
    //             return null;
    //     }
    // };

    useEffect(() => {
        Data1.getProductsSmall().then((Data1) =>
            setProducts(Data1.slice(0, 30))
        );
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="   text-center  px-3">
                <div className="mb-3 sliderimg">
                    <img
                        src={`${product.image}`}
                        alt={product.name}
                        className="  w-100 carouselimg mx-auto "
                    />
                </div>
                {/* <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 ">${product.price}</h6>
                    <Tag
                        value={product.inventoryStatus}
                        severity={getSeverity(product)}
                        className="p-2"></Tag>
                    <div className=" mt-1 flex flex-wrap  justify-content-center">
                        <Button
                            icon="pi pi-search"
                            className="p-button p-button-rounded mx-2"
                        />
                        <Button
                            icon="pi pi-star-fill"
                            className="p-button-success p-button-rounded"
                        />
                    </div> */}
                {/* </div> */}
            </div>
        );
    };
    return (
        <div className=" box ">
            <div className="   mb-5  ">
                <div className="text-center mt-0 text-danger offers">
                    <h1>Super Hours 12AM - 6AM Everday Assentials</h1>
                </div>
                <Carousel
                    value={products}
                    numScroll={1}
                    numVisible={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
                />
            </div>
        </div>
    );
};

export default Gallery;
