import BlogCard from './BlogCard'

const data = [
    {
        img: "/post__1.png",
        title: "5 Superfoods to Boost Your Immunity This Season",
        date: "Aug 13, 2025",
        comment: 8,
    },
    {
        img: "/post__2.png",
        title: "Behind the Scenes: How Your Order is Packed with Love",
        date: "Aug 10, 2025",
        comment: 1,
    },
    {
        img: "/post__3.png",
        title: "Meal Planning Made Easy: Your Weekly Food Shopping List",
        date: "Aug 11, 2025",
        comment: 4 
       },
]

const BlogSection = () => {
  return (
    <div className="container pt-16">
        <h2 className='font-bold text-2xl'>Latest News</h2>
        <p className='text-gray-500'>
            Dont miss to check out our latest news too!
        </p> 

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
            {data.map((el) => (
                <BlogCard
                    key={el.date}
                    img={el.img}
                    title={el.title}
                    date={el.date}
                    comment={el.comment}
                />
            ))}
        </div>
    </div>
  )
}

export default BlogSection