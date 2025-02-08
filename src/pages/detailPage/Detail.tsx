import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useGetProductDetailQuery } from "../../redux/productsApi";
import { StarIcon as StarIconOutline } from "lucide-react";


interface StarRatingProps {
    rating: number;       
    reviewCount: number;   
}

const ProductDetail = () => {
    const { id } = useParams();
    const productId = Number(id);
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(2);
    const [selectedImage, setSelectedImage] = useState(0);

    const { data: product, isLoading, error } = useGetProductDetailQuery(productId, {
        skip: isNaN(productId),
    });

    if (isLoading) return <div className="container mx-auto p-6"><p className="text-center text-lg">Loading...</p></div>;
    if (error) return <div className="container mx-auto p-6"><p className="text-center text-red-500">Something went wrong!</p></div>;
    if (!product) return <div className="container mx-auto p-6"><p className="text-center text-gray-500">Product not found</p></div>;

    const Breadcrumb = () => (
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span>Account</span>
            <span>/</span>
            <span>Gaming</span>
            <span>/</span>
            <span className="text-gray-900">Havic HV G-92 Gamepad</span>
        </nav>
    );

    const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => (
        <div className="flex items-center gap-2">
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarIconOutline
                        key={star}
                        className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                ))}
            </div>
            <span className="text-gray-500">({reviewCount} Reviews)</span>
            <span className="text-green-500 ml-2">In Stock</span>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-6">
            <Breadcrumb />
            
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex gap-4 lg:w-2/3">
                    <div className="flex flex-col gap-4">
                        {product.images?.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`w-24 h-24 border rounded-lg overflow-hidden ${selectedImage === index ? 'border-red-500' : 'border-gray-200'}`}
                            >
                                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 border rounded-lg p-4">
                        <img
                            src={product.images?.[selectedImage]}
                            alt={product.title}
                            className="w-full h-[500px] object-contain"
                        />
                    </div>
                </div>

                <div className="lg:w-1/3 flex flex-col gap-6">
                    <h1 className="text-3xl font-medium">{product.title}</h1>
                    <StarRating rating={4} reviewCount={150} />
                    <div className="text-2xl font-medium">${product.price}</div>
                    
                    <p className="text-gray-600 leading-relaxed">
                        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                    </p>

                    <div className="space-y-3">
                        <div className="font-medium">Colours:</div>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 bg-gray-100 rounded-full border-2 border-red-500"></button>
                            <button className="w-8 h-8 bg-red-500 rounded-full"></button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="font-medium">Size:</div>
                        <div className="flex gap-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-10 h-10 rounded-md border ${
                                        selectedSize === size 
                                            ? 'bg-red-500 text-white border-red-500' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex border rounded-md">
                            <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-4 py-2 border-r hover:bg-gray-50"
                            >
                                −
                            </button>
                            <input 
                                type="text" 
                                value={quantity} 
                                readOnly 
                                className="w-12 text-center" 
                            />
                            <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-4 py-2 border-l hover:bg-gray-50"
                            >
                                +
                            </button>
                        </div>
                        <button className="flex-1 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
                            Buy Now
                        </button>
                        <button className="border p-2 rounded-md hover:bg-gray-50">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>

                    <div className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium">Free Delivery</div>
                                <button className="text-sm text-gray-500 underline">
                                    Enter your postal code for Delivery Availability
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium">Return Delivery</div>
                                <div className="text-sm">
                                    Free 30 Days Delivery Returns. <button className="underline">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;