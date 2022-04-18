import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import StudentFeedBack from "./StudentFeedBack/StudentFeedBack";

const Home = () => {
  return (
    <main className="my-5">
      <Banner></Banner>
      <Services></Services>
      <StudentFeedBack></StudentFeedBack>
    </main>
  );
};

export default Home;
