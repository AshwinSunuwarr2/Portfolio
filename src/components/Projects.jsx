import React from 'react'

function Projects() {
  return (
    <>
        <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">🚀 Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               
                <div className="group bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://img.freepik.com/free-vector/abstract-flat-face-recognition-background_23-2148189134.jpg?t=st=1710082557~exp=1710086157~hmac=616244771a5eb13ea54a87441b49e3b519cde8d0d376fef6b8026c0f21bc2ee3&w=740" alt="Project Image" className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">Criminal Face Recognition System</h3>
                        <p className="text-gray-700">This project is so cool that Our team was invited to showcase the project by externals! </p>
                        <a href="https://github.com/AshwinSunuwarr2/major-project.git" target='_blank' className="block text-blue-600 hover:underline mt-4">Check on GitHub! 🚀</a>
                    </div>
                </div>

                <div className="group bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1710083493~exp=1710087093~hmac=e7929d3a38249858b8d9e18e510ca9796fd22b8e61d917e79fd07a89da8d0489&w=996" alt="Project Image" className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">FreeL</h3>
                        <p className="text-gray-700">FreeL is a platform that connects freelancers with clients. Its an android app.</p>
                        <a href="https://github.com/AshwinSunuwarr2/FreeLwithKhalti.git" target='_blank' className="block text-blue-600 hover:underline mt-4">Check on GitHub! 🚀</a>
                    </div>
                </div>

                <div className="group bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://img.freepik.com/free-vector/modern-payment-receipt-flat-style_23-2147912324.jpg?t=st=1710083774~exp=1710087374~hmac=986fc7586f43c6a09ae6b475517d44394bf5410c4c581edf0e99653ee6ea6803&w=740" alt="Project Image" className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">eBilling</h3>
                        <p className="text-gray-700">This project was the minor project that effectively implemented the CRUD operation on a database.</p>
                        <a href="#" className="block text-blue-600 hover:underline mt-4">Check on GitHub! 🚀</a>
                    </div>
                </div>

                <div className="group bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://img.freepik.com/free-vector/abstract-flat-face-recognition-background_23-2148189134.jpg?t=st=1710082557~exp=1710086157~hmac=616244771a5eb13ea54a87441b49e3b519cde8d0d376fef6b8026c0f21bc2ee3&w=740" alt="Project Image" className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">Criminal Face Recognition System</h3>
                        <p className="text-gray-700">This project is so cool that Our team was invited to showcase the project by externals! 🐱</p>
                        <a href="#" className="block text-blue-600 hover:underline mt-4">Check on GitHub! 🚀</a>
                    </div>
                </div>
               
            </div>

            
        </div>

        
    </section>
    </>
  )
}

export default Projects