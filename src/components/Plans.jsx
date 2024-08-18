import { Link } from "react-router-dom";


function Plans() {
  const plans = [
    { name: 'Free', price: 0, features: ['5 tasks', '1 usuario', 'Basic features'] },
    { name: 'Basic', price: 5, features: ['20 tasks', '3 usuarios', 'Advanced features'] },
    { name: 'Pro', price: 15, features: ['Unlimited tasks', 'Unlimited usuarios', 'Premium features'] },
  ];

  return (
    <main className="bg-gray-100 py-12">
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Escolha Seu Plano</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">${plan.price}/month</p>
              <ul className="text-gray-600 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"><Link to="/register">Sign Up</Link></button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Plans;