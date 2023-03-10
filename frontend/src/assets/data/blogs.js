import blogImg1 from "../images/blog-img1.jpg";
import blogImg2 from "../images/blog-img2.jpg"
import blogImg3 from "../images/blog-img3.jpg";
import blogImg4 from "../images/blog-img4.jpg";
import blogImg5 from "../images/blog-img5.jpg";
import blogImg6 from "../images/blog-img6.jpg";

const blogs = [
  {
    id: "01",
    title: "Eiffel Tower",
    city: "France",
    maxGroupSize: 2,
    description: "This is the blog's description.",
    reviews: [
      {
        name: "charles doe",
        rating: 4.2,
      },
    ],
    photo: blogImg1,
    featured: true,
  },
  {
    id: "02",
    title: "Köln by Night",
    city: "Germany",
    maxGroupSize: 8,
    description: "This is the blog's description.",
    reviews: [
      {
        name: "charles doe",
        rating: 4.2,
      },
    ],
    photo: blogImg2,
    featured: true,
  },
  {
    id: "03",
    title: "Ceremony of Graduation",
    city: "London",
    maxGroupSize: 557,
    description: "This is the blog's description.",
    reviews: [
      {
        name: "charles doe",
        rating: 4.2
      },
    ],
    photo: blogImg3,
    featured: true,
  },
  {
    id: "04",
    title: "Home Decor",
    city: "Hometown, Kosovo",
    maxGroupSize: 6,
    description: "This is the blog's description.",
    reviews: [
      {
        name: "charles doe",
        rating: 4.2,
      },
    ],
    photo: blogImg4,
    featured: true,
  },
  {
    id: "05",
    title: "Inspiration",
    city: "Everywhere",
    maxGroupSize: 0,
    description: "This is the blog's description.",
    reviews: [
      {
        name: "charles doe",
        rating: 4.2,
      },
    ],
    photo: blogImg5,
    featured: false,
  },
  {
    id: "06",
    title: "Westminister Bridge",
    city: "London",
    maxGroupSize: 8,
    description: "This is the blog's description.",
    reviews: [
      {
        name: "charles doe",
        rating: 4.6,
      },
    ],
    photo: blogImg6,
    featured: false,
  },
];

export default blogs;