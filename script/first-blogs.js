// let myBlog = localStorage.getItem("singleBlog");
// console.log("my blogs",myBlog);
// const blogObj =JSON.parse(myBlog);
// console.log(blogObj,":---",blogObj.image)
// document.getElementById('blog-title').innerHTML = blogObj.title;
// document.getElementById('blog-desc').innerHTML = blogObj.desc;
// document.getElementById('blog-image').innerHTML = `<img src="${blogObj.image}" alt="4" style="width:70%">`;
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let blogid = params.id //
  const baseUrl = "https://my-brand-backend-production.up.railway.app/api/v1/"

  const url = `https://my-brand-backend-production.up.railway.app/api/v1/blogs/${blogid}`;
   fetch(url)
       .then((response) => response.json())
       .then((data) => {
        console.log("data:---",data)
        document.getElementById("blog-title").innerHTML = data.data.blog.title;
        document.getElementById("blog-desc").innerHTML = data.data.blog.description;
        document.getElementById("blog-image").innerHTML =  `<img  src=${data.data.blog.blog_image} alt="Uploaded Image" accept="image/png, image/jpeg" width="100px" height="80px" ">`;
       })
       .catch(function(error) {
         console.log(error);
       });
   
     
      
    
    async function createComment(url = "", data = {}) {
        console.log("url:---", url, "data:---",data)
             const response = await fetch(url, {
               method: "POST",
               mode: "cors",
               cache: "no-cache",
               credentials: "same-origin",
               redirect: "follow",
               referrerPolicy: "no-referrer",
               headers: {
                "Content-Type": "application/json"
                // ,
                // 'Authorization':`Bearer ${accessToken}`
     
              },
               body: JSON.stringify(data),
             });
             document.getElementById("name").value ="";
            document.getElementById("comment").value = "";
            location.reload();
             return response.json();

           }

           const formComment= document.querySelector(".comment-form");

           formComment.addEventListener("submit",async (e) => {
             e.preventDefault();
             const commentInfo = {};
             console.log('hollo');
             const arr=[]
             commentInfo["name"] = formComment.name.value;
             commentInfo.comment = formComment.comment.value;
             console.log(commentInfo);
      
         createComment(`${baseUrl}blogs/${blogid}/comments`, commentInfo).then((data) => {
                
               if(data.status === "success"){
                 console.log("data:---", data)
      
                //  location.href = "first-blog.html";
               }})
             .catch((err) => {
             
             });
      
      
      
        
      
        // window.location.href = "/admin.html";
        });


    


            const getData = async  () => {
                const response = await fetch(`https://my-brand-backend-production.up.railway.app/api/v1/blogs/${blogid}/comments`)
                const result = await response.json();
                console.log("result:---",result)
               let commentsArr =result.data.comments;
               console.log("commentsArr:-",commentsArr);
               const reverseArr=commentsArr.reverse()
               const firstcommentss = reverseArr.slice(0, 4);
               console.log("commentsArr:-",commentsArr);
               const newArr = firstcommentss.map(myFunction);
               document.getElementById("comment-card").innerHTML = newArr;
                  
              }
              getData();
              
              
              function myFunction(comment) {
                console.log("my",comment.name);
                
                const commentCard = `
                <div class="card">
              
               
                <h2>${comment.name} </h2>
                <p>${comment.comment.substring(0,20)}</p>
                
               
                <div class="signs">
                  
                </div>
              </div>`
                return commentCard;
              
              }
              
              
        