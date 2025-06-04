// import React from 'react';
// import { Link } from 'react-router-dom';

// function BlogPage() {
//     const blogs = [
//         {
//             id: 1,
//             title: "The Best & Healthy Snacks in Hospet",
//             description: "Discover the most delicious, hygienic, and affordable tiffins and snacks in Hospet.",
//             image: "https://img.freepik.com/free-photo/delicious-indian-dosa-assortment_23-2149086033.jpg?uid=R92460733&ga=GA1.1.1359840518.1744883981&semt=ais_hybrid&w=740",
//             link: "/besteveningsnacks"
//         },
//         {
//             id: 2,
//             title: "Why FreshBiteZone is the Best Choice for Snacks",
//             description: "Learn why FreshBiteZone offers the best snacks and tiffins for everyone in Hospet.",
//             image: "https://img.freepik.com/free-photo/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai_188544-13491.jpg?uid=R92460733&ga=GA1.1.1359840518.1744883981&semt=ais_hybrid&w=740",
//             link: "/why-freshbitezone-is-best"
//         },
//         {
//             id: 3,
//             title: "Best Tiffin Center in Hospet",
//             description: "Discover the most delicious, hygienic, and affordable tiffins and snacks in Hospet.",
//             image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/puri-2.jpg",
//             link: "/best-tiffin-center-in-hospet"
//         },
//     ];

//     return (
//         <section className="blog-cards-container py-12 px-4 bg-[#fafafa]" id="blog">
//             {/* Section Header */}
//             <div className="text-center mb-16">
//                 <span className="inline-block mb-4 px-4 py-2 bg-rose-100 text-rose-600 rounded-full font-medium">
//                     Food Insights
//                 </span>
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                     Fresh Perspectives
//                 </h2>
//                 <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                     Discover the latest trends, tips, and stories from our food experts
//                 </p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                 {blogs.map((blog) => (
//                     <div key={blog.id} className="blog-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between h-full">
//                         <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
//                         <div className="flex-grow">
//                             <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
//                             <p className="text-gray-600">{blog.description}</p>
//                         </div>
//                         <div className="mt-6">
//                             <Link to={blog.link}>
//                                 <button className="w-full px-4 py-2 bg-[#ef0938] text-white rounded-full hover:bg-[#d80b32] transition duration-300">
//                                     Know More
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default BlogPage;


import React from 'react';
import { Link } from 'react-router-dom';

function BlogPage() {
    const blogs = [
        {
            id: 1,
            title: "The Best & Healthy Snacks in Hospet",
            description: "Discover the most delicious, hygienic, and affordable tiffins and snacks in Hospet.",
            image: "https://img.freepik.com/free-photo/delicious-indian-dosa-assortment_23-2149086033.jpg?uid=R92460733&ga=GA1.1.1359840518.1744883981&semt=ais_hybrid&w=740",
            link: "/BestEveningSnacks"
        },
        {
            id: 2,
            title: "Why FreshBiteZone is the Best Choice for Snacks",
            description: "Learn why FreshBiteZone offers the best snacks and tiffins for everyone in Hospet.",
            image: "https://img.freepik.com/free-photo/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai_188544-13491.jpg?uid=R92460733&ga=GA1.1.1359840518.1744883981&semt=ais_hybrid&w=740",
            link: "why-freshbitezone-is-best"
        },
        {
            id: 3,
            title: "Best Tiffin Center in Hospet",
            description: "Discover the most delicious, hygienic, and affordable tiffins and snacks in Hospet.",
            image: "https://img.freepik.com/free-photo/delicious-indian-dosa-assortment_23-2149086033.jpg?uid=R92460733&ga=GA1.1.1359840518.1744883981&semt=ais_hybrid&w=740",
            link: "best-tiffin-center-in-hospet"
        },
    ];

    return (
        <section className="blog-cards-container py-12 px-4 bg-[#fafafa]" id="blog">
            {/* Section Header */}
            <div className="text-center mb-16">
                <span className="inline-block mb-4 px-4 py-2 bg-rose-100 text-rose-600 rounded-full font-medium">
                    Food Insights
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Fresh Perspectives
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover the latest trends, tips, and stories from our food experts
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between h-full">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
                            <p className="text-gray-600">{blog.description}</p>
                        </div>
                        <div className="mt-6">
                            <Link to={blog.link}>
                                <button className="w-full px-4 py-2 bg-gradient-to-r from-rose-600 to-amber-500 text-white rounded-full hover:bg-[#d80b32] transition duration-300">
                                    Know More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BlogPage;
