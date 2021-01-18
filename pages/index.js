import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        src="http://stikesmerangin.ac.id/maintenance-final.gif"
        className="img-fluid px-4"
      />
      <h5 className="mt-5">Website Under Maintenance</h5>
      <h5 className="">We'll Back Soon</h5>
    </div>
  );
}
