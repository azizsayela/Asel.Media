import React, { useState, useEffect, useRef } from "react";
import { AdsBanner } from "../../components/AdsBanner/AdsBanner";
import { useSearchParams } from "react-router-dom";
import "./singlePost.scss";
import SanityClient from "../../sanityClient";
import { ConverURLToImage } from "../../services/sanityService";
import { useLocation } from "react-router-dom";

export const SinglePost = ({}) => {
  const [searchParams] = useSearchParams();
  const [post, setPost] = useState(null);
  const titleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const postId = searchParams.get("id");
    const postType = searchParams.get("type");
    if (postId) {
      const query = `*[_type == $postType && _id == $postId][0]`;
      const params = { postId, postType };
      console.log(params);
      SanityClient.fetch(query, params)
        .then((data) => {
          setPost(data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [searchParams]);
  useEffect(() => {
    if (post && titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [post]);
  return (
    <>
      {post && (
        <div className="singlePostContainer">
          <AdsBanner imageUrl={"assets/Adstest2.jpg"}></AdsBanner>
          <h1 ref={titleRef}>{post?.title}</h1>
          <div className="postInfo">
            <h2>
              <strong>Publié le </strong>
              {post?.publicationDate}
            </h2>
            <div className="imageContainer">
              <img
                src={ConverURLToImage(post?.mainImage?.asset?._ref).url()}
                style={{ marginTop: "16px" }}></img>
              <p className="parag">{post.content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
