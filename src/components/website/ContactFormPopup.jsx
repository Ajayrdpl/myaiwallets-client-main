import { IoClose } from "react-icons/io5";

const ContactFormPopup = ({ show, closePopup }) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
            >
              <IoClose color='black' />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFormPopup;
