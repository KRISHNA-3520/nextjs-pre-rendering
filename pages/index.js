import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Next JS pre-rendering</h1>
      <Link href='/posts'>
      POSTLIST
      </Link>
    </div>
  );
}

export default Home;
