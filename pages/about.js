import Link from "next/link";

const about = () => {
  return (
    <>
      <h1>This is About page</h1>
      <Link href="/">
        <a>Home page</a>
      </Link>
    </>
  );
};

export default about;
