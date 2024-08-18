function About() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Sobre o My Tasks App</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://via.placeholder.com/400x300"
              alt="My Tasks App"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              My Tasks App é um aplicativo de gerenciamento de tarefas poderoso
              e fácil de usar que ajuda você a se manter organizado e produtivo.
            </p>
            <p className="text-gray-600 mb-4">
              Nossa missão é fornecer uma plataforma simples e intuitiva para
              que indivíduos e equipes gerenciem suas tarefas diárias, colaborem
              em projetos e alcancem seus objetivos.
            </p>
            <p className="text-gray-600 mb-4">
              Com uma ampla gama de recursos e opções de personalização, Meu
              Aplicativo de Tarefas é a solução perfeita para qualquer pessoa
              que queira ter o controle do seu fluxo de trabalho e maximizar sua
              produtividade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
