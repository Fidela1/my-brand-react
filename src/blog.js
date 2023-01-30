'use strict';
const e = React.createElement;
const Blog = (props) => {
  const [blogArr, setBrogArr] = React.useState([])
  const [liked,setLiked] = React.useState(0)
  React.useEffect(() => {
    async function getData() {
      const response = await fetch("https://my-brand-backend-production.up.railway.app/api/v1/blogs")
      const result = await response.json();
      let blogArr = result.data.blog;
      const reverseArr = blogArr.reverse()
      setBrogArr(reverseArr)

    }
    getData()
  }, [])
  const singleArticle = (id) =>{
location.href = `first-blog.html?id=${id}`;
  }
   const handleLike = () =>{
    console.log("here", liked)
    if(liked===1){
      setLiked(0)
    }else{
      setLiked(1)
    }}
  return (
    <div className="blog-card">
      {blogArr.slice(0, 4).map((blog, index) => {
        console.log("blog:---",blog)
        return (<div key={index} className="card" >
          <img src={blog.blog_image} alt="4" style={{ width: '100%', height: '90px' }} />
          <h2>{blog.title} </h2>
          <div dangerouslySetInnerHTML={{__html: blog.description.substring(0, 100)}}></div>
         
           <button onClick ={ ()=> singleArticle(blog._id)} id = "single-blog blog.title" className="see-more">Read more</button>
            <div  style={{ display:"flex" }}> 
              <div className="comment">0</div>
              <div className="like" onClick={()=> handleLike()}>{liked}</div> 
              </div>
   
        </div>)

      })}

      {/* <div class="card">
   <img src=blog.blog_image alt="4" style="width:100% ;height:90px">

 
  <h2>blog.title </h2>
  <p>blog.description.substring(0,20)</p> */}

      {/* <button onclick = singleArticle('blog._id') id = "single-blog blog.title" class="see-more">Read more</button> */}

      {/* <div class="signs"> */}
      {/* <div class="comment"><img src="/img/comment.png" alt="commen" style="width:20px ">0</div>
    <div class="like"><img src="/img/like.png" alt="lk" style="width: 20px">0</div> */}
      {/* </div> */}
      {/* </div> */}


    </div>

  );
}
// ... the starter code you pasted ...

const domContainer = document.querySelector('#blog-card');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Blog));