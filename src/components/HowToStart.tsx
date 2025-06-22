import Icon from "@/components/ui/icon";

const HowToStart = () => {
  const steps = [
    {
      number: "1",
      title: "Скачай Minecraft",
      description:
        "Убедись что у тебя установлена лицензионная версия Minecraft Java Edition",
      icon: "Download",
    },
    {
      number: "2",
      title: "Подключись к серверу",
      description: "Добавь сервер с IP: svinocraft.ru в список серверов",
      icon: "Server",
    },
    {
      number: "3",
      title: "Прочитай правила",
      description: "Ознакомься с правилами сервера, чтобы избежать нарушений",
      icon: "BookOpen",
    },
    {
      number: "4",
      title: "Начни играть!",
      description:
        "Найди место для базы, знакомься с игроками и наслаждайся игрой",
      icon: "Play",
    },
  ];

  return (
    <section id="start" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Как начать играть
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Всего 4 простых шага до начала приключения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-8"></div>
                )}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="mb-4">
                  <Icon
                    name={step.icon as any}
                    className="text-green-500 mx-auto"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 max-w-md mx-auto">
            <Icon
              name="Server"
              className="text-green-500 mx-auto mb-4"
              size={40}
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              IP сервера
            </h3>
            <p className="text-3xl font-mono font-bold text-green-600">
              svinocraft.ru
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
