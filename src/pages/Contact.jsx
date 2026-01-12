import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen pt-28 bg-gradient-to-br from-slate-100 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities,
            or just a friendly chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: <Mail />, title: "Email", value: "sagarlovev143@email.com" },
              { icon: <Phone />, title: "Phone", value: "+91 8540874909" },
              { icon: <MapPin />, title: "Location", value: "India" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-600 text-white">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="bg-white p-8 rounded-xl shadow space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <button className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
