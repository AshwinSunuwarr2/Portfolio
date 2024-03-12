import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gray-50 flex items-center">
      <section className="w-full bg-no-repeat bg-cover min-h-[400px] bg-fixed bg-center py-32 bg-[url(https://source.unsplash.com/random)]">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-medium mb-6">Welcome to My Portfolio</h1>
          <p className="text-xl mb-12">
          I code, I design, I drink coffee (a lot), and sometimes, I even sleep! 
          </p>
          <Link
            to="/contact"
            className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
          >
            Connect
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
