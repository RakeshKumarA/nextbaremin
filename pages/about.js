import Link from "next/link";
import { useEffect, useState } from "react";
import sanityClient from "../lib/sanity";

const about = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
    }`
      )
      .then((data) => setPostData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>This is About page</h1>
      <Link href="/">
        <a>Home page</a>
      </Link>
      {postData.map((post) => (
        <div key={post.slug.current}>
          <h1>{post.title}</h1>
          <h1>{post.slug.current}</h1>
        </div>
      ))}
    </>
  );
};

export default about;
