const BlogPosts = () => {
    const posts = [
      {
        date: "September 12",
        time: "6 minutes",
        title: "Cactus & Succulent Care Tips",
        description: "Cacti are succulents are easy care plants for any home or patio.",
        link: "#",
        image: "./01.png",
      },
      {
        date: "September 13",
        time: "2 minutes",
        title: "Top 10 Succulents for Your Home",
        description: "Best in hanging baskets. Prefers medium to high light.",
        link: "#",
        image: "./02.png", 
      },
      {
        date: "September 15",
        time: "3 minutes",
        title: "Cacti & Succulent Care Tips",
        description: "Cacti and succulents thrive in containers and because most are...",
        link: "#",
        image: "./03.png", 
      },
      {
        date: "September 15",
        time: "2 minutes",
        title: "Best Houseplants Room By Room",
        description: "The benefits of houseplants are endless. In addition to...",
        link: "#",
        image: "./04.png",
      },
    ];
  
    return (
      <div className="py-10 mt-[138px]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Our Blog Posts</h2>
          <p className="text-gray-600">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <li
              key={index}
              className="bg-white overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-green-600 text-sm mb-1">
                  {post.date} | Read in {post.time}
                </p>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <a
                  href={post.link}
                  className="text-green-600 hover:underline font-medium"
                >
                  Read More &rarr;
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BlogPosts;
  