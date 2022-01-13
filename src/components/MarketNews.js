import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from 'react-router-dom';

function MarketNews(props) {
    const baseUrl = 'https://apis.resta.vn/erest-listing/news';
    const category = 'marketNews';
    const [post, setPost] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const result = await axios(`${baseUrl}?category=${category}`);
            setPost(result.data.data);
        }
        fetchData();
    }, []); 

    const navigate = useNavigate();
    
    console.log('aab', post);
    
    return (
        
        <div className="container">
            <div className="row" style={{marginTop: '60px'}}>
                <div className="col-md-9">
                    <div className="row">
                        
                    {post.map((post, id) => {
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
                </div>
                <div className="col-md-3" style={{marginTop: '30px'}}>
                    <ul className="text-start" style={{cursor: 'pointer'}}>
                        <li onClick={() => {navigate('/project-news/1')}} >Tin thị trường</li>
                        <li onClick={() => {navigate('/planning-news')}}>Thông tin quy hoạch</li>
                        <li onClick={() => {navigate('/exterior-and-interior')}}>Nội - Ngoại thất</li>
                        <li onClick={() => {navigate('/market-news')}}>Tin quảng cáo</li>
                    </ul>
                </div>
            </div>      
        </div>
    );
}

export default MarketNews;