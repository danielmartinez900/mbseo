import React from "react";
import Head from "next/head";
import Image from "next/image";

import image from "../../public/gopher.jpg";

const Page = () => {
  return (
    <div className="p-2 mx-20 h-auto">
      <Head>
        <title>Top 5 Signs You Have a Gopher Problem in the Bay Area</title>
        <meta
          name="blog"
          content="Top 5 Signs You Have a Gopher Problem in the Bay Area"
        />
      </Head>

      <div >
        <h1 className="text-2xl font-bold text-green-700 my-2 h-[50] content-center">
          Top 5 Signs You Have a Gopher Problem in the Bay Area
        </h1>
        <div className='max-h-[300px] flex'>
          <Image src={image} width={"20%"} style={{ objectFit: "cover", borderRadius: 8 }} />
        </div>
        <p className="font-medium">
          Dealing with gophers can be a tricky business it you don't spot their
          signs early enough. Gophers can cause significant damage to lawns,
          gardens, and even infrastructures without making much noise. Whether
          you're a homeowner or property manager in the bay Area, it is crucial
          to recognize the early signs. Here are the top indicators that you may
          be facing a gopher problem.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">
          Mounds of Fresh Dirt
        </p>
        <p>
          One of the most visible signs of gopher activity is the presence of
          fresh mounds of dirt around your lawn or garden. These mounds are
          typically crescent-shaped and can appear overnight. Gophers push the
          dirt to the surface as they create their extensive underground tunnel
          systems.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">
          Visible Tunnels
        </p>
        <p>
          Unlike mole tunnels, gopher tunnels are broad and shallow, often
          resulting in sunken areas in your yard. These tunnel openings can
          cause the soil to sink, making it uneven. If you notice these
          depressions in your lawn, it's a clear sign of gopher activity.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">
          Damaged Plants and Roots
        </p>
        <p>
          Gophers feed on the roots and lower stems of plants, causing them to
          wilt or die. It you notice plants in your garden suddenly withering
          without any apparent reason, it could be due to gophers eating away at
          their roots. They tend to love vegetables, flowers, and ornamental
          plants.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">
          Gnaw Marks on Irrigation Systems
        </p>
        <p>
          Gophers often chew on hoses, irrigation lines, and utility cables,
          leaving behind distinctive gnaw marks. This behavior can lead to
          significant damage and costly repairs. Inspect your irrigation system
          regularly for any signs of gopher gnawing.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">
          Gopher Sightings
        </p>
        <p>
          most obvious sign of a gopher problem is actually seeing a gopher
          scurrying about in your garden. Gophers are usually active during dawn
          or dusk. If you spot one, there are likely many more hiding below the
          surface.
        </p>
      </div>

      <p className="font-medium">
        If you notice any of these signs on your property, it's time to take
        action. Gopher infestations can quickly escalate, causing more damage
        over time. At Mole Busters, we provide humane and effective gopher
        control services to tackle your gopher problems in the Bay Area!
      </p>
    </div>
  );
};

export default Page;
