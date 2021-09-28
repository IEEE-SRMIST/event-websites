import data from "../../data/speakers.json";
import Image from "next/image";
import image1 from "../../assets/1.png";
import image2 from "../../assets/Rakshit.jpg";

function Speakers() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col mt-10">
      <div className="text-4xl ml-5">Our Speakers</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 px-10">
        {data.data.map((speaker) => (
          <div className="flex flex-col text-center gap-2">
            <div className="rounded-full">
              {speaker.id % 2 === 0 ? (
                <Image
                  src={image1}
                  alt="1"
                  width="220"
                  height="220"
                  className="rounded-full"
                />
              ) : (
                <Image
                  src={image2}
                  alt="2"
                  width="220"
                  height="220"
                  className="rounded-full"
                />
              )}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-gray-300">{speaker.name}</h3>
              <h4 className="text-gray-500">{speaker.designation}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;

// {speaker.id % 2 === 0 ? (
//   <Image
//     src={image1}
//     alt="1"
//     width="220"
//     height="220"
//     className="rounded-full"
//   />
// ) : (
//   <Image
//     src={image2}
//     alt="2"
//     width="220"
//     height="220"
//     className="rounded-full"
//   />
// )}
