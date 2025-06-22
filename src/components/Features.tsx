import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Shield",
      title: "Защита территории",
      description: "Приватные территории и защита от гриферов",
    },
    {
      icon: "Users",
      title: "Дружное сообщество",
      description: "Активные игроки и опытные администраторы",
    },
    {
      icon: "Pickaxe",
      title: "Экономика",
      description: "Развитая игровая экономика и торговля",
    },
    {
      icon: "Home",
      title: "Города и регионы",
      description: "Стройте города и развивайте территории",
    },
    {
      icon: "Trophy",
      title: "События и конкурсы",
      description: "Регулярные события с призами и наградами",
    },
    {
      icon: "Zap",
      title: "Стабильность",
      description: "99.9% аптайм и быстрая поддержка",
    },
  ];

  return (
    <section id="info" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Особенности сервера
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Всё что нужно для комфортной игры в режиме выживания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Icon
                    name={feature.icon as any}
                    className="text-green-600"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
