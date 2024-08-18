function Contact() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
