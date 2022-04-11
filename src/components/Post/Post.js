import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/11313795/pexels-photo-11313795.jpeg?cs=srgb&dl=pexels-vasily-kleymenov-11313795.jpg&fm=jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <span className="postTitle">Lorem, ipsum.</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          veniam quia iste ullam facere, illum ducimus illo! Magni, rem
          temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia veniam quia iste ullam facere, illum ducimus illo! Magni, rem
          temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia veniam quia iste ullam facere, illum ducimus illo! Magni, rem
          temporibus?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia veniam quia iste ullam facere, illum ducimus illo! Magni, rem
          temporibus?
        </p>
      </div>
    </div>
  );
}

export default Post;
