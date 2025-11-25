import { Sparkles, Phone, Instagram, MapPin, Clock, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-white opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRTRFOCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <Sparkles className="w-16 h-16 text-gold mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-gray-800">
            Sara Borges
            <span className="block text-gold mt-2">Studio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light tracking-wide">
            Design de Sobrancelhas • Luxo & Conforto
          </p>
          <div className="flex items-center justify-center gap-2 text-gold mb-12">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
          </div>
          <a
            href="#contato"
            className="inline-block bg-gold text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Agende Sua Sessão
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gold rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Sobre Section */}
      <section className="py-24 px-6 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">
              Experiência <span className="text-gold">Única</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Design Exclusivo</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada sobrancelha é desenhada de forma personalizada, respeitando a harmonia única do seu rosto.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300 shadow-lg">
                <Star className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-300 fill-current" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Atendimento Premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Ambiente luxuoso e acolhedor, pensado em cada detalhe para seu conforto e bem-estar.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Técnicas Avançadas</h3>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos as mais modernas técnicas e produtos de alta qualidade para resultados impecáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">
              Nossos <span className="text-gold">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border-2 border-gold border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 shadow-lg overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://i.imgur.com/wcRVNW9.jpeg"
                  alt="Design de Sobrancelhas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-50 to-transparent opacity-40"></div>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gold">Design de Sobrancelhas</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Modelagem personalizada com técnicas de visagismo para realçar sua beleza natural.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Análise facial completa
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Design sob medida
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Produtos premium
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border-2 border-gold border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 shadow-lg overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://i.imgur.com/eulzMVP.jpeg"
                  alt="Micropigmentação"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-50 to-transparent opacity-40"></div>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-gold fill-current" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gold">Micropigmentação</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sobrancelhas perfeitas por mais tempo com técnicas de micropigmentação de última geração.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Fio a fio realista
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Efeito natural
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Pigmentos de qualidade
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border-2 border-gold border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 shadow-lg overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://i.imgur.com/ImxLWL9.jpeg"
                  alt="Henna Premium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-50 to-transparent opacity-40"></div>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gold">Henna Premium</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Coloração natural com henna de alta qualidade para um olhar marcante e duradouro.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Henna importada
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Tons personalizados
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Longa duração
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border-2 border-gold border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 shadow-lg overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://i.imgur.com/vQYTQmB.jpeg"
                  alt="Laminação"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-50 to-transparent opacity-40"></div>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-gold fill-current" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gold">Laminação</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sobrancelhas alinhadas e volumosas com tratamento de laminação profissional.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Efeito penteado
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Volume natural
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Duração prolongada
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Pronta para Transformar seu Olhar?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Agende agora sua sessão e descubra o poder de sobrancelhas perfeitamente desenhadas.
          </p>
          <a
            href="#contato"
            className="inline-block bg-gold text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Quero Agendar
          </a>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 px-6 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">
              Entre em <span className="text-gold">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300 shadow-lg">
                  <Phone className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Telefone</h3>
                  <p className="text-gray-600">(00) 00000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300 shadow-lg">
                  <Instagram className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Instagram</h3>
                  <p className="text-gray-600">@saraborgesstudio</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300 shadow-lg">
                  <MapPin className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Endereço</h3>
                  <p className="text-gray-600">Rua Exemplo, 123<br />Centro - Cidade/Estado</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300 shadow-lg">
                  <Clock className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda à Sexta: 9h às 19h<br />
                    Sábado: 9h às 15h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gold shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gold">Agende Agora</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full px-4 py-3 bg-rose-50 border border-rose-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Seu Telefone"
                    className="w-full px-4 py-3 bg-rose-50 border border-rose-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-rose-50 border border-rose-200 rounded-lg text-gray-800 focus:outline-none focus:border-gold transition-colors duration-300">
                    <option value="">Selecione o Serviço</option>
                    <option value="design">Design de Sobrancelhas</option>
                    <option value="micro">Micropigmentação</option>
                    <option value="henna">Henna Premium</option>
                    <option value="laminacao">Laminação</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Mensagem (opcional)"
                    rows={4}
                    className="w-full px-4 py-3 bg-rose-50 border border-rose-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t-2 border-rose-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Sparkles className="w-12 h-12 text-gold mx-auto" />
          </div>
          <h3 className="text-3xl font-bold mb-2 text-gray-800">Sara Borges Studio</h3>
          <p className="text-gray-600 mb-6">Design de Sobrancelhas • Luxo & Conforto</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-gold hover:opacity-70 transition-opacity duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gold hover:opacity-70 transition-opacity duration-300">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-rose-100 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Sara Borges Studio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
