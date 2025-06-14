import p1_img from '../assets/p1.png'
import p2_img from '../assets/men1.webp'
import p3_img from '../assets/women2.jpg'
import p4_img from '../assets/men4.jfif'

let data_product= [
     {
            id: 1,
            name: "Kurti",
            category: "women",
            image: p1_img,
            new_price: 50.0,
            old_price: 80.5
        },
    
        { id: 2, name: "Shirt", category: "men", image:p2_img, new_price: 60.0, old_price: 90.5 },
        { id: 3, name: "Saari", category: "women", image:p3_img, new_price: 75.0, old_price: 120.0 },
        { id: 4, name: "Jeans", category: "men", image: p4_img, new_price: 90.0, old_price: 140.0 }
]

export default data_product;