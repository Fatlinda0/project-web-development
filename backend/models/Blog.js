import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        city: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        reviews: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Review",
            },
        ],
        featured: {
            type: Boolean,
            default: false,
        },
    },
    { timeStamps: true }
)

export default mongoose.model("Blog", blogSchema);