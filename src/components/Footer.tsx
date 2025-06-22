import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                <span className="text-lg font-bold">🏠</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat">SVINOCRAFT</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Лучший сервер выживания в Minecraft. Присоединяйся к нашему
              сообществу и создавай незабываемые приключения вместе с друзьями.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <Icon name="Server" size={20} />
              <span className="font-mono">svinocraft.ru</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#info"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Информация
                </a>
              </li>
              <li>
                <a
                  href="#start"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Как начать
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Поддержка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Сообщество</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#discord"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center space-x-2"
                >
                  <Icon name="MessageCircle" size={16} />
                  <span>Discord</span>
                </a>
              </li>
              <li>
                <a
                  href="#forum"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center space-x-2"
                >
                  <Icon name="Users" size={16} />
                  <span>Форум</span>
                </a>
              </li>
              <li>
                <a
                  href="#vk"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center space-x-2"
                >
                  <Icon name="Share2" size={16} />
                  <span>ВКонтакте</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SVINOCRAFT. Все права защищены. Minecraft является товарным
            знаком Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
