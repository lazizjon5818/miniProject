export interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string; 
    rating: number;
}



export interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    rating: number;
    stock: number;
    brand: string;
    category: string;
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface ProductCardProps {
    product: { 
      id: number; 
      title: string; 
      price: number; 
      thumbnail: string; 
      rating: number; 
    };
  }


export interface LoginRequest {
    username: string;
    password: string;
  }
  
 export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
  }
  


