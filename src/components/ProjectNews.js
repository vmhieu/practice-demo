import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../redux/actions/Actions';

function ProjectNews(props) {
    const baseUrl = 'https://apis.resta.vn/erest-listing/news'
     const category = 'projectNews';

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);

    const posts = useSelector((state) => state.allPosts.posts)
    const dispatch = useDispatch();
    
    useEffect(() =>{
        const fetchData = async () => {
            const result = await axios(`${baseUrl}?category=${category}`);
            dispatch(setPosts(result.data.data));
        }
        fetchData();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    console.log('currentPosts', currentPosts);
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const navigate = useNavigate();
    
    console.log('aab', posts);
   
    
    return (
        
        <div className="container">
            <div className="row" style={{marginTop: '60px'}}>
                <div className="col-lg-9">
                    <div className="row">
                      
                    {currentPosts.map((post, id) => {
                    return (
                    <>
                    <div className="col-md-6" key={id} onClick={() => {navigate(`/detail-news/${post.id}`)}} style={{cursor: 'pointer'}}>
                        <img src={post.thumbnailUrl} style={{width: '360px', height: '240px'}}></img>
                        <p className=" text-center fw-bold" style={{width: '350px', marginLeft: '60px'}}>{post.title}</p>
                    </div>
                    </>
                    )
                    
                    })}
                    </div>
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> 
                </div>
                <div className="col-lg-3" style={{marginTop: '30px'}}>
                    <ul className="text-start" style={{cursor: 'pointer'}}>
                        <li onClick={() => {navigate('/project-news/:pageNumber')}} >Tin thị trường</li>
                        <li onClick={() => {navigate('/planning-news')}}>Thông tin quy hoạch</li>
                        <li onClick={() => {navigate('/exterior-and-interior')}}>Nội - Ngoại thất</li>
                        <li onClick={() => {navigate('/market-news')}}>Tin quảng cáo</li>
                    </ul>
                </div>
            </div>     
            
        </div>
    );
}

export default ProjectNews;