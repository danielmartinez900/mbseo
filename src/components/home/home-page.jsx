import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import logo from "../../../public/mole-logo.jpg";
import gopher from "../../../public/gopher.jpg";
import mole from "../../../public/mole.jpg";
import vole from "../../../public/vole.jpg";

import List_of_cities from "../Cities/List-of-Cities-Component";
import KeapForm from "./KeapForm";

const HomePage = ({ data }) => {
  return (
    <div className="mt-2">
      <Head>
        <title>Mole Busters</title>
        <meta name="description" content="Mole Busters" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <link rel="icon" href="icon.jpg" type="image/jpg" sizes="16x16" />
      <Script
        src="https://molebusters.infusionsoft.app/app/webTracking/getTrackingCode"
        strategy="afterInteractive"
      />

      <div className="flex h-[500px]">
        <div className="w-1/3 h-full">
          <h2 className="md:text-3xl sm:text-lg sm:text-black-200 text-green-700 font-bold font-sans-serif text-center">
            At Mole Busters, We Are the Experts for:
          </h2>

          <div className="h-4/5 flex flex-col justify-evenly ">
            <div className="flex sm:flex-col md:flex-col lg:flex-row justify-center items-center">
              <Image
                src={mole}
                alt="Mole Image"
                width={175}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <div className="lg:pl-3">
                <p className="font-bold self-center font-sans-serif lg:text-2xl sm:text-lg">
                  Moles
                </p>
              </div>
            </div>
            <div className="flex sm:flex-col md:flex-col lg:flex-row justify-center items-center">
              <Image
                src={vole}
                alt="Vole Image"
                width={175}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <div className="pl-3">
                <p className="font-bold font-sans-serif lg:text-2xl sm:text-lg">
                  Voles
                </p>
              </div>
            </div>
            <div className="flex sm:flex-col md:flex-col lg:flex-row justify-center items-center">
              <Image
                src={gopher}
                alt="Gopher Image"
                width={175}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <div className="">
                <p className="font-bold font-sans-serif lg:text-2xl sm:text-lg">
                  Gophers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" justify-items-center bg-green-700 rounded-lg p-1 md:w-1/3 flex flex-col flex-grow-2 bg-green-700">
          <h2 className="md:text-3xl sm:text-xl text-white font-bold font-sans-serif text-center">
            Schedule a Free Inspection Today!
          </h2>
          <KeapForm />
        </div>

        <div className="justify-center justify-items-center p-1 w-1/3">
          <div className="h[60px]">
            <h2 className="md:text-3xl sm:text-xl text-green-700 font-bold font-sans-serif text-center">
              Housecall Pro Reviews
            </h2>
          </div>

          <div className="h-full w-full">
            <iframe
              src="https://client.housecallpro.com/reviews/Mole-Busters-SERVICE-TICKET-ONLY/52e8b8de-3869-4d9a-a1f3-a187affddeb7/"
              width="100%"
              height="450"
            />
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-4xl text-green-700 font-bold text-center font-sans-serif m-3">
          The Bay Area's Trusted Source for Mole, Vole, and Gopher control.
        </h2>
        <div className="mx-10 gap-8">
          <p className="text-lg font-medium">
            At Mole Busters, we specialize in providing top-notch gopher control
            services to homes and businesses throughout the Bay Area. Our team
            of experienced professionals uses humane and effective methods to
            ensure your property is gopher-free.
          </p>

          <div className="my-5 space-y-1">
            <p className="font-bold text-green-700 text-xl my-1">
              Key benefits
            </p>
            <p className="font-bold text-l text-green-700">Humane Solutions</p>
            <p>
              We prioritize the safety and well-being of both your property and
              the gophers.
            </p>

            <p className="font-bold text-l text-green-700">Ethical Practices</p>
            <p>
              We adhere to stringent ethcial standards in all our operations.
            </p>

            <p className="font-bold text-l text-green-700">
              Eco-friendly Methods
            </p>
            <p>
              Our non-toxic and eco-friendly solutions are safe for your family
              and pets.
            </p>

            <p className="font-bold text-l text-green-700">Fast Response</p>
            <p>
              With our rapid response time, we act quickly to address gopher
              issues before they escalate.
            </p>

            <p className="font-bold text-l text-green-700">
              Comprehensive Services
            </p>
            <p>
              From inspection to removal and prevention, we handle every aspect
              of gopher control.
            </p>
          </div>
        </div>
      </div>

      <List_of_cities />
    </div>
  );
};

export default HomePage;
