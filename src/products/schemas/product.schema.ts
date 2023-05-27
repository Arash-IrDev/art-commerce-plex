import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    currency: String,
    image: {
        src: String,
        alt: String
    },
    bestseller: Boolean,
    featured: Boolean,
    details: {
        dimmentions: {
            width: Number,
            height: Number
        },
        size: Number,
        description: String,
        recommendations: [String]
    }
});
