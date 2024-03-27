import React from "react";
import { AdsBanner } from "../../components/AdsBanner/AdsBanner";
import { Finance } from "../../category";
import "./singlePost.scss";

export const SinglePost = ({ post }) => {
  return (
    <div className="singlePostContainer">
      <AdsBanner imageUrl={"assets/Adstest2.jpg"}></AdsBanner>
      <h1>{Finance.headingExcept}</h1>
      <div className="postInfo">
        <h2>12 hours ago</h2>
        <h3 style={{ marginTop: "6px" }}>
          By Bernd Debusmann Jr and Tom Bateman
        </h3>
        <div className="imageContainer">
          <img src={Finance.headingImg}></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          accusantium molestiae dicta! Quaerat sint officiis deleniti saepe
          tempore consequuntur autem, eos, sed mollitia accusamus unde facilis
          dolores hic aliquam reiciendis.{""}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          accusantium molestiae dicta! Quaerat sint officiis deleniti saepe
          tempore consequuntur autem, eos, sed mollitia accusamus unde facilis
          dolores hic aliquam reiciendis. dolores hic aliquam reiciendis. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. dolores hic
          aliquam reiciendis.{""}
          Aliquid accusantium molestiae dicta! Quaerat sint officiis deleniti
          saepe tempore consequuntur autem, eos, sed mollitia accusamus unde
          facilis dolores hic aliquam reiciendis. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. dolores hic aliquam reiciendis.{""}
          Aliquid accusantium molestiae dicta! Quaerat sint officiis deleniti
          saepe tempore consequuntur autem, eos, sed mollitia accusamus unde
          facilis dolores hic aliquam reiciendis.
        </p>
      </div>
      {/* <AdsBanner imageUrl={"assets/Adstest.jpg"}></AdsBanner> */}
    </div>
  );
};
