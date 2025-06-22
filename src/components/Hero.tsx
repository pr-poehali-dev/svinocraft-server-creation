import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6">
            SVINOCRAFT
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Zap" className="text-green-400" size={24} />
            <span className="text-xl md:text-2xl text-green-400 font-semibold">
              Режим выживания
            </span>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Добро пожаловать на сервер выживания, где каждый день — это новое
          приключение. Строй, исследуй, выживай в нашем дружном сообществе
          игроков.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center space-x-2">
            <Icon name="Play" size={20} />
            <span>Начать играть</span>
          </button>

          <div className="flex items-center space-x-2 text-gray-300">
            <Icon name="Users" size={20} />
            <span>IP: svinocraft.ru</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
