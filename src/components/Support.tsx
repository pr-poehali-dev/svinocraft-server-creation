import Icon from "@/components/ui/icon";

const Support = () => {
  const supportOptions = [
    {
      title: "Discord сервер",
      description: "Общайся с игроками и администрацией",
      icon: "MessageCircle",
      link: "#discord",
      color: "bg-blue-500",
    },
    {
      title: "Форум",
      description: "Читай новости и обсуждай игру",
      icon: "Users",
      link: "#forum",
      color: "bg-purple-500",
    },
    {
      title: "Техподдержка",
      description: "Помощь при технических проблемах",
      icon: "HelpCircle",
      link: "#support",
      color: "bg-green-500",
    },
  ];

  return (
    <section id="support" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat mb-4">
            Поддержка и сообщество
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Мы всегда готовы помочь и ответить на твои вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-200 text-center group"
            >
              <div
                className={`${option.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon
                  name={option.icon as any}
                  className="text-white"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
              <p className="text-gray-300">{option.description}</p>
            </a>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
          <p className="text-gray-300 mb-6">
            Свяжись с администрацией любым удобным способом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Написать в Discord
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Форум сервера
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
