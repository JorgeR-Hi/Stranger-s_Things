import React, {useState} from "react";
import {makePost} from "../api"
import {Link} from "react-router-dom"

function CreatePost(){
    const [title, setTitle]=useState("");
    const [description, setDescription]= useState("")
    const [price, setPrice]=useState("");


    async function handleSubmit(ev){
        ev.preventDefault();
        const post ={title, description, price}

        const results= await makePost(post, token)

        if (results.success){
            getPosts();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            />
            <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            />
            <input
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
            />
            <button type="submit">Create Post</button>
           <Link to="/"></Link> 
        </form>
    )
}

export default CreatePost;