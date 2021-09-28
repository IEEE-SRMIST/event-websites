import Image from "next/image";

function Speakercard({url,id,name, designation}) {
    return (
        <div className="flex flex-col text-center gap-2">
        <div className="rounded-full">
          <Image
            src={url}
            alt={id + 1}
            width="220"
            height="220"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-300">{name}</h3>
          <h4 className="text-gray-500">{designation}</h4>
        </div>
      </div>
    )
}

export default Speakercard
