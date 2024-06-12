import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export function Contact() {
  const contactInfo = [
    {
      name: "Location",
      icon: <FaMapMarkedAlt />,
      info: "Sousse, Tunisia",
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      info: "+216 26 187 939",
    },
    {
      name: "Mail",
      icon: <FiMail />,
      info: "Rayenmbrouk@takiacademyteam.com",
    },
  ];
  return (
    <section
      id="contact"
      className="flex h-full w-full items-center justify-start bg-white pb-20 pt-10"
    >
      <div className="mx-auto my-0 min-w-[75rem] px-16 py-0">
        <div className="flex flex-col">
          <p className="mb-4 text-[1.5rem] font-bold uppercase text-color4">
            contact
          </p>
          <h3 className="text-[2rem] font-semibold text-color1">
            {"Don't be shy! Hit me up! 👇"}
          </h3>
        </div>
        <div className="mt-14 flex flex-wrap gap-[4rem]">
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-[50%] bg-white text-[1.75rem] text-color4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                {contact.icon}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-color1">
                  {contact.name}
                </h3>
                <p className="text-[1.1rem] text-color5 no-underline">
                  {contact.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
