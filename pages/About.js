import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-page-bg">
      <div className=" mx-auto p-4 mt-40">
        <h1 className="text-3xl font-semibold mb-4 text-white text-center uppercase">
          Filmmakers
        </h1>
        <div className="flex flex-wrap justify-center">
          {/* Director 1 */}
          <div className=" p-2 relative mb-8">
            <div className="group">
              <img
                src="/images/Momo.jpg"
                alt="Momo"
                className="w-150 h-150 rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white overflow-y-auto">
                <div className="flex flex-col justify-center items-center h-full overflow-y-auto p-4 ">
                  <p className="text-2xl text-center mt-2">Momo Dione</p>
                  <div className="sm:overflow-container mt-90">
                    <p className="text-center ">
                      Momo Dione was born in Riyadh, Saudi Arabia. He is of
                      Guinean and Senegalese descent. His father is a Guinean
                      diplomat and his mother is an entrepreneur specializing in
                      event production and African fashion. Before reaching high
                      school, the actor/filmmaker had already seen a great deal
                      of the world. He came to the United States in 1993 when
                      his father was appointed to the Guinea mission in New York
                      City. While doing plays in elementary school on Roosevelt
                      Island, he realized that acting was his true passion. He
                      began auditioning for projects while in high school. But
                      playing basketball and football, being class president for
                      three consecutive terms, prom king, and carrying a heavy
                      academic load left him with little time to follow his
                      heart. He graduated from Yonkers International
                      Baccalaureate High School in 2004. He has since been
                      featured in plays, TV shows, commercials, music videos,
                      student films, independent films, and feature films. Some
                      of his credits are "Law and Order: Criminal Intent",
                      "Across the Universe", "Notorious", the upcoming "Restless
                      City" premiering at the 2011 Sundance Film Festival and
                      several commercials. He is a graduate of the All Stars
                      Project/Youth Onstage/Castillo Theater youth development
                      acting programs. Momo was a member of the original cast
                      and co-author of the All Stars Projects' original
                      production of "Our City." He's also posed for paintings by
                      Afro-American painter Kehinde Wiley. He is bi-coastal;
                      living in Los Angeles and New York. Frequent travel is a
                      way of life for Mohamed. He co-owns Caramel Cappuccino
                      films, a production company that writes films that
                      articulate relevant issues of life and relationship in
                      under-served or under acknowledged communities with aims
                      of producing them. He enjoys horseback riding, opera,
                      Congolese soukous, sports, and anything that has to do
                      with cinema. Dione is constantly auditioning and working
                      on new projects in search of the role that will allow him
                      to make his mark in the Hollywood and Broadway
                      markets...and then the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Director 2 */}
          <div className="p-2 relative">
            <div className="group">
              <img
                src="/images/Tejay.jpg"
                alt="Tejay"
                className="w-250 h-150 rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white ">
                <div className="flex flex-col justify-center items-center h-full overflow-y-auto p-4">
                  <p className="text-2xl text-center mt-2">Tejay Bah</p>
                  <div className="sm:overflow-container">
                    <p className="text-center">
                      Tejay Bah is a Sierra Leonean/American, Stage/Film Actor,
                      writer and director who was born in Freetown. He graduated
                      from the University of Missouri with a degree in Business.
                      He moved to California to pursue his true passion and
                      become an actor. He has appeared on the Tracey Ullman
                      show, State of the Union, Tim and Eric Awesome Show and
                      has also performed at the Hollywood Fringe Festival,
                      Nesona Play Reading Festival and many plays around the Los
                      Angeles areas and still continues. He is the Co-Founder of
                      Mansa Nzinga Productions LLC. He also studied with the
                      Robey Theatre Company., founded by Danny Glover and Ben
                      Guillory. He is passionate about African cinema and the
                      untold stories of immigrants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
