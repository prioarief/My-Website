import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import React from 'react'


export default function Home() {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  const [year] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });


  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="https://avatars2.githubusercontent.com/u/49262552?s=460&u=fb8ec315faff9451a8701db4f6abbb50ed12d4b2&v=4" className='rounded-pill' />
      </Head>

      <img
        src="http://stikesmerangin.ac.id/maintenance-final.gif"
        className="img-fluid px-4"
      />
      <h5 className="mt-5">Website Under Maintenance</h5>
      <h5 className="">We'll Back Soon</h5>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}
