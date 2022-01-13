import axios from 'axios';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectedPost, removeSelectedPost } from '../redux/actions/Actions';

function DetailNews(props) {
    
    const baseUrl = 'https://apis.resta.vn/erest-listing/news'
    let post = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() =>{
        const fetchData = async () => {
            const result = await axios(`${baseUrl}/${id}`);
            dispatch(selectedPost(result.data));
        }
        fetchData(id);
        return () => {
            dispatch(removeSelectedPost());
        }
    }, [])
    console.log('data', post);
    console.log('id', id);
    
    return (
        <div className="container w-50 mw-75 text-start" style={{overflow: 'hidden'}}>
            {post && post.content ? parse(post.content): ''}  
        </div>
    );
}

export default DetailNews;