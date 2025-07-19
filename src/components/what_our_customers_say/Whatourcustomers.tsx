import Image from "next/image";

const testimonials = [
  {
    title: "Great Work",
    text: `“Amazing design, easy to customize and a design quality superlative account 
    on its cloud platform for the optimized performance. And we didn’t on our original designs.”`,
    user: {
      name: "Leslie Alexander",
      company: "Facebook",
      image: "/image/team3-150x150.jpg.png",
    },
    icon: "/icons/SVG.png",
  },
  {
    title: "Great Work",
    text: `“Amazing design, easy to customize and a design quality superlative account 
    on its cloud platform for the optimized performance. And we didn’t on our original designs.”`,
    user: {
      name: "Floyd Miles",
      company: "Designer",
      image: "/image/Container7777.png",
    },
    icon: "/icons/SVG.png",
  },
  {
    title: "Great Work",
    text: `“Amazing design, easy to customize and a design quality superlative account 
    on its cloud platform for the optimized performance. And we didn’t on our original designs.”`,
    user: {
      name: "Dianne Russell",
      company: "Marketing",
      image: "/image/Container (177.png",
    },
    icon: "/icons/SVG.png",
  },
];

export default function Whatourcustomers() {
  return (
    <div className="flex flex-wrap gap-6 justify-center px-4 py-12 bg-gray-100">
      {testimonials.map((testimonial, idx) => (
        <div key={idx} className="bg-[#405ef2a4] rounded-lg p-6 max-w-sm w-full text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold mr-2">{testimonial.title}</h3>
            <Image className="ml-25" src={testimonial.icon} alt="icon" width={30} height={30} />
          </div>
          <p className="text-sm mb-6 whitespace-pre-line">{testimonial.text}</p>
          <div className="flex items-center">
            <Image src={testimonial.user.image} alt={testimonial.user.name} width={50} height={50} className="rounded-full mr-4" />
            <div>
              <p className="font-bold">{testimonial.user.name}</p>
              <p className="text-sm text-gray-200">{testimonial.user.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
