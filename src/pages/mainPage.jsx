import React from "react";
import Navbar from "../components/navbar";
import Typed from 'react-typed'
import FooterNavbar from "../components/footer-nav";

const MainPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="xl:px-24 sm:mt-28 mt-20 lg:mt-20 text-white">
                    <section className="flex xl:w-3/4 lg:flex-row flex-col-reverse gap-y-10 justify-center items-center mx-auto gap-x-12">
                        <article className="flex flex-col gap-y-4 justify-center">
                            <div className="text-primaryGold lg:text-left text-center sm:text-2xl lg:text-lg">
                                Hello world, I'm
                            </div>
                            <div className="lg:text-4xl text-4xl sm:text-6xl font-bold lg:text-left text-center">
                                Dimas Pramantya
                            </div>
                            <div className="bg-gradient-to-r from-gradientGold to-primaryGold bg-clip-text text-transparent 
                        text-2xl lg:text-xl sm:text-4xl font-semibold lg:text-left text-center">
                                <Typed strings={[
                                    "Full-Stack Web Dev",
                                    "Informatics Student"
                                ]}
                                    typeSpeed={100}
                                    backSpeed={50}
                                    backDelay={500}
                                    loop
                                />
                            </div>
                            <div className="lg:text-left text-center sm:text-xl lg:text-lg">
                                Welcome to my personal website.
                            </div>
                        </article>
                        <div>
                            <img src="https://storage.googleapis.com/personal_image_dicoding_dimas/dimas_fix.jpeg" alt="foto dimas" className="lg:w-80 lg:h-80 sm:w-128 sm:h-128 w-72 h-72 object-cover object-top 
                        rounded-full circle-shadow border-4 border-primaryGold"/>
                        </div>
                    </section>
                </main>
                <FooterNavbar />
            </div>
        </>
    )
}

export default MainPage;