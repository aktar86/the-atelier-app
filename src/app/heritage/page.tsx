import { inter } from "@/src/lib/fonts";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import BookConsultation from "@/src/components/Buttons/BookConsultation";
import FeatureHeri from "@/src/components/UI/FeatureHeri";

const HeritagePage = () => {
  const location = [
    {
      city: "Mayfair, London",
      gallery_name: "The Heritage Gallery",
      address: "42 Bruton Place, Mayfair London W1J 6PA",
      phone: "+44 20 7946 0123",
      image_placeholder: "/london_interior.jpg",
      map_thumbnail: "/london_interior.jpg",
      map_embed:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.699728292161!2d-73.99931660000001!3d40.7247485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598e8dc24ed1%3A0x1df22a05df879f67!2sWestreich%20Wagner!5e1!3m2!1sen!2sbd!4v1775890475633!5m2!1sen!2sbd" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
      city: "SoHo, New York",
      gallery_name: "The Industrial Loft",
      address: "114 Greene St, SoHo New York, NY 10012",
      phone: "+1 212 555 0198",
      image_placeholder: "new_york_loft.jpg",
      map_thumbnail: "/kyoto_sanctuary.png",
      map_embed:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.699728292161!2d-73.99931660000001!3d40.7247485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598e8dc24ed1%3A0x1df22a05df879f67!2sWestreich%20Wagner!5e1!3m2!1sen!2sbd!4v1775890475633!5m2!1sen!2sbd" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
      city: "Higashiyama, Kyoto",
      gallery_name: "The Zen Sanctuary",
      address: "432 Kiyomizu-dera Lane Kyoto 605-0862",
      phone: "+81 75 555 0144",
      image_placeholder: "kyoto_sanctuary.jpg",
      map_thumbnail: "/new_york_map.png",
      map_embed:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.699728292161!2d-73.99931660000001!3d40.7247485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598e8dc24ed1%3A0x1df22a05df879f67!2sWestreich%20Wagner!5e1!3m2!1sen!2sbd!4v1775890475633!5m2!1sen!2sbd" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
  ];
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end  my-20">
        <div className="lg:col-span-7">
          <span className="label-md uppercase tracking-[0.2em] text-gray-400 mb-6 block">
            Our Heritage
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface leading-[1.1] tracking-tighter mb-8">
            Spaces defined by{" "}
            <span className="italic font-normal">quiet authority</span>.
          </h1>
        </div>
        <div className="lg:col-span-5 pb-4">
          <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-md">
            We believe furniture is more than utility. It is an architectural
            dialogue between form and soul, crafted for the discerning eye.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
        <div className=" border">
          <div className="relative w-full h-[calc(100vh-200px)] group aspect-4/5 overflow-hidden">
            <Image
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              alt="Close-up of artisan hand-carving dark walnut wood with precise tools in a sunlit dusty workshop environment"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpHUDEfe_1dI4QKOG60gwx2C3vIUOa3haBW0t2mDtkgkEvJ9g8kDq4ZHAgvucVUZ_qqTXdxJ39z2eU56OWziLCNm7k3lZxZAky3Y_s_CyVWeOxWsQTC4NV7v2yXGVdndS9H974nAIOEds8KdojgK8tsZT8ZYzrB1hCIFn5ZfkA-hlgIirbj_11cId7S8BHLG7cMJphnskyLj1mkyP3heQcZiQs9DcW-14uDh4JJPzTHB3Pb7uFuaz752vuwJ_MJIXoJPkf5RXIr0DK"
            />
            <div className="absolute bottom-8 left-8 bg-surface-container-lowest/60 backdrop-blur-md px-6 py-4">
              <span className="text-xs font-label text-white tracking-widest uppercase">
                The Workshop, Est. 1984
              </span>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-headline font-bold">
            The Pursuit of the Perfect Join
          </h1>
          <div className="space-y-6 text-on-surface-variant">
            <p className="leading-relaxed">
              Each piece at The Atelier begins with a conversation between the
              artisan and the material. We source our timber from sustainable
              forests where trees are selected for their unique grain
              narratives.
            </p>
            <p className="leading-relaxed">
              Our commitment to craftsmanship is uncompromising. We reject the
              ephemeral nature of mass production in favor of traditional
              joinery techniques that ensure each table, chair, and cabinet is a
              legacy piece, designed to endure for generations.
            </p>
            <div className="pt-8">
              <button
                type="button"
                className="inline-flex items-center gap-4 text-primary font-medium group"
              >
                <span className="border-b border-primary pb-1">
                  Discover Our Process
                </span>
                <span className=" text-sm transition-transform group-hover:translate-x-2">
                  <FaArrowAltCircleRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Showroom Locator Header  */}
      <div className=" bg-surface-container-low py-24 px-8 md:px-16">
        <div className="  text-center">
          <span className="label-md uppercase tracking-[0.2em] text-primary mb-4 block">
            Visit Us
          </span>
          <h2 className="text-5xl font-headline font-bold mb-12">
            Global Showrooms
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-16">
            Experience the tactility of our collections in person. Our curators
            are available for private consultations at any of our flagship
            locations.
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {location.map((m, i) => (
            <div key={i} className="bg-secondary dark:bg-gray-900 p-5 border">
              <div className="relative w-full h-80 overflow-hidden object-cover">
                <Image
                  src={m.map_thumbnail}
                  alt={m.map_thumbnail}
                  // width={100}
                  // height={60}
                  fill
                  className="object-cover"
                  suppressHydrationWarning
                />
              </div>
              {/* head and tag */}
              <div className="my-5">
                <h2 className="text-2xl font-extrabold">{m.city}</h2>
                <h4>{m.gallery_name}</h4>
              </div>

              {/* Location and number */}
              <div className="pl-5 border-l-3">
                <span className="flex items-center gap-5">
                  <CiLocationOn />
                  <p>{m.address}</p>
                </span>
                <span className="flex items-center gap-5">
                  <IoCallOutline />
                  <p>{m.phone}</p>
                </span>
              </div>

              {/* google map */}
              <div className="w-full h-80 mt-5">
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: m.map_embed }}
                />
              </div>
              {/* button */}
              <div className="mt-5">
                <BookConsultation />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <FeatureHeri />
      </div>
    </section>
  );
};

export default HeritagePage;

// city: "Higashiyama, Kyoto",
//     gallery_name: "The Zen Sanctuary",
//     address: "432 Kiyomizu-dera Lane Kyoto 605-0862",
//     phone: "+81 75 555 0144",
//     image_placeholder: "kyoto_sanctuary.jpg",
//     map_thumbnail: newYork,
//     map_embed:
