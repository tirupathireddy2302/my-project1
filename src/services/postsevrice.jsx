import http from '../common/commonhttp';
 
const getPosts =()=>{
    return http.get('/posts');
}
const getPost = id =>{
    return http.get(`/posts/${id}`);
}
const createPost = data =>{
    return  http.post('/posts',data);
}
const upadatePosts =(id,data) =>{
    return http.put(`/posts/${id}`,data);
}
const deletePost = id =>{
    return http.delete(`/posts/${id}`);
}
const deletePosts = () =>{
    return http.delete('/posts');
}

const PostService =(
    getPost,
    getPosts,
    createPost,
    upadatePosts,
    deletePost,
    deletePosts
)
export default PostService;