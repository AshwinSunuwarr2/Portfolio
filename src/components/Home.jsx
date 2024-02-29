import React from "react";

function Home() {
  return (
    <div className="h-screen bg-gray-50 flex items-center">
      <section className="w-full bg-cover bg-center py-32 bg-[url(https://source.unsplash.com/random)]">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-medium mb-6">Welcome to My Page</h1>
          <p className="text-xl mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae.
          </p>
          <a
            href="#"
            className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
          >
            Connect
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
