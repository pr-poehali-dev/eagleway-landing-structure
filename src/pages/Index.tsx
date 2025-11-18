import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative bg-[#215AC0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#215AC0] to-[#1a4a9f]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA4IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm">
                <Icon name="Award" size={16} className="mr-2" />
                10+ лет на рынке
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm">
                <Icon name="Users" size={16} className="mr-2" />
                10 000+ клиентов
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm">
                <Icon name="Shield" size={16} className="mr-2" />
                БИН 201140009407
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Потеряли 2 млн тенге на доставке из Китая?<br />
              <span className="text-[#E9F1FF]">Мы возим БЕЗ ПОСРЕДНИКОВ</span> уже 10 лет
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-semibold">
              500+ своих контейнеров • 56 грузовиков • Склады в 3 странах
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-10 text-left max-w-3xl mx-auto">
              {[
                { icon: 'Clock', text: 'Доставка от 7 дней (реально, не на словах)' },
                { icon: 'CreditCard', text: 'Оплата ПОСЛЕ получения груза' },
                { icon: 'CheckCircle2', text: 'Проверяем товар на складе в Китае бесплатно' },
                { icon: 'FileText', text: 'Оформляем таможню под ключ' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Icon name={item.icon} size={24} className="text-[#E9F1FF] flex-shrink-0 mt-1" />
                  <span className="text-lg">{item.text}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-[#215AC0] hover:bg-[#1a4a9f] text-white text-lg px-8 py-6 h-auto shadow-xl border-2 border-white/20">
              Узнать точную стоимость доставки
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            
            <p className="mt-6 text-sm text-white/80">
              Официальный участник программы «Один пояс — один путь»
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Пока другие теряют товары и переплачивают посредникам...
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Сравните сами и примите решение
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-2 border-red-200 bg-red-50/50">
                <h3 className="text-2xl font-bold mb-6 text-red-700 flex items-center gap-2">
                  <Icon name="XCircle" size={28} />
                  Другие компании
                </h3>
                <div className="space-y-4">
                  {[
                    '5-6 посредников = +40% к цене',
                    'Непонятно где груз (нет отслеживания)',
                    'Меняют цену после отправки',
                    'Таможня отдельно = еще +$500-1000',
                    'Предоплата 100%'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="X" size={20} className="text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-8 border-2 border-[#215AC0] bg-[#E9F1FF] shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#215AC0] flex items-center gap-2">
                  <Icon name="CheckCircle" size={28} />
                  Eagleway
                </h3>
                <div className="space-y-4">
                  {[
                    'Прямая доставка = от $0.5/кг',
                    'GPS-трекинг 24/7 + фото с каждого этапа',
                    'Цена фиксируется в договоре',
                    'Таможня включена в стоимость',
                    'Оплата после получения'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-[#215AC0] flex-shrink-0 mt-1" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <Card className="mt-8 p-6 bg-[#E9F1FF] border-[#215AC0]/20">
              <div className="flex items-start gap-4">
                <Icon name="TrendingDown" size={32} className="text-[#215AC0] flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Мини-кейс</h4>
                  <p className="text-foreground/80">
                    <strong>Асель из Алматы</strong> сэкономила <span className="text-[#215AC0] font-bold">850 000 тенге</span> на партии телефонов, 
                    потому что мы возим напрямую с завода Xiaomi
                  </p>
                </div>
              </div>
            </Card>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-[#215AC0] hover:bg-[#1a4a9f] text-white">
                Рассчитать экономию
                <Icon name="Calculator" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Цифры, которые можно проверить прямо сейчас
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Мы не скрываем статистику — всё прозрачно
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: 'Package', number: '32 млн тонн', label: 'Объем Китай-Казахстан 2024', sub: 'Мы везем 0.5% всего рынка' },
                { icon: 'DollarSign', number: '16.5 млн ₸', label: 'Наши налоги в 2024', sub: 'Рост в 3200 раз за 4 года' },
                { icon: 'Star', number: '4.9/5.0', label: 'Рейтинг на 2GIS', sub: '1048 реальных отзывов' },
                { icon: 'Truck', number: '7-10 дней', label: 'Срок доставки авто', sub: 'В среднем по маршруту' },
                { icon: 'CheckCircle2', number: '90%', label: 'Без проблем на таможне', sub: 'Благодаря опыту' },
                { icon: 'Shield', number: '10+ лет', label: 'На рынке логистики', sub: 'Надежность проверена временем' }
              ].map((stat, idx) => (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#E9F1FF] flex items-center justify-center">
                      <Icon name={stat.icon} size={32} className="text-[#215AC0]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-[#215AC0] mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sub}</div>
                </Card>
              ))}
            </div>
            
            <Card className="p-8 bg-[#E9F1FF] border-2 border-[#215AC0]/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#2A2A2A]">
                <Icon name="ShieldCheck" size={32} className="text-[#215AC0]" />
                ГАРАНТИРУЕМ в договоре:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Сроки доставки с точностью до дня',
                  'Фиксированную цену (не меняется)',
                  'Возврат денег при повреждении груза',
                  'Бесплатное хранение 7 дней'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name="BadgeCheck" size={20} className="text-[#215AC0] flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="mt-8 p-6 bg-[#F5F5F5] rounded-lg text-center">
              <p className="text-foreground/80">
                <strong>Проверьте нас:</strong> БИН 201140009407, офис в БЦ Turar (Сейфуллина 502), 
                звоните в любое время <a href="tel:+77089130403" className="text-[#215AC0] font-bold hover:underline">+7 708 913 0403</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Как это работает? Проще, чем заказать еду
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              4 простых шага от заявки до получения груза
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: 'MessageCircle', title: 'Скидываете ссылку товара', desc: 'WhatsApp/Telegram → Отвечаем за 5 минут' },
                { icon: 'Search', title: 'Мы выкупаем и проверяем', desc: 'Фото товара на нашем складе в Гуанчжоу' },
                { icon: 'Truck', title: 'Везем и оформляем таможню', desc: 'Отслеживание онлайн + уведомления каждый день' },
                { icon: 'CheckCircle', title: 'Получаете и платите', desc: 'Проверяете груз → Довольны → Оплачиваете' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#215AC0] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="flex justify-center mb-4 mt-4">
                      <div className="w-16 h-16 rounded-full bg-[#E9F1FF] flex items-center justify-center">
                        <Icon name={step.icon} size={28} className="text-[#215AC0]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-center">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{step.desc}</p>
                  </Card>
                </div>
              ))}
            </div>
            
            <Card className="p-6 bg-[#E9F1FF] border-[#215AC0]/20 text-center">
              <p className="text-lg font-semibold text-foreground/90">
                <Icon name="Sparkles" size={20} className="inline mr-2 text-[#215AC0]" />
                Не нужно знать китайский. Не нужно разбираться в таможне. Просто отправьте ссылку.
              </p>
            </Card>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-[#215AC0] hover:bg-[#1a4a9f] text-white">
                Отправить ссылку на товар
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              1048 предпринимателей уже возят через нас
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Вот что они пишут:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: 'Марат',
                  role: 'Владелец магазина электроники',
                  text: 'Заказываю телефоны каждый месяц. За год сэкономил 4 млн тенге только на доставке. Главное — могу проверить товар ДО оплаты китайцам',
                  rating: 5
                },
                {
                  name: 'Айгерим',
                  role: 'Онлайн-бутик',
                  text: 'Раньше ждала товар 40 дней через других. Сейчас 10 дней — и вещи у меня. Клиенты довольны, я зарабатываю больше',
                  rating: 5
                },
                {
                  name: 'Данияр',
                  role: 'Строительная компания',
                  text: 'Везу стройматериалы контейнерами. Они единственные, кто реально имеет свои грузовики. Никаких сюрпризов с ценой',
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#E9F1FF] flex items-center justify-center">
                      <Icon name="User" size={24} className="text-[#215AC0]" />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-[#215AC0] text-[#215AC0] hover:bg-[#215AC0] hover:text-white">
                Все 1048 отзывов на 2GIS
                <Icon name="ExternalLink" size={20} className="ml-2" />
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Мы не покупаем отзывы. Проверьте сами — позвоните любому клиенту из отзывов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-[#215AC0] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#215AC0] to-[#1a4a9f]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Узнайте точную стоимость доставки ВАШЕГО товара за 37 секунд
            </h2>
            <p className="text-center text-white/90 mb-8 text-lg">
              Ответим в WhatsApp/Telegram за 5 минут даже в 2 часа ночи
            </p>
            
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваш WhatsApp или Telegram
                  </label>
                  <Input
                    type="text"
                    placeholder="+7 708 123 4567"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="text-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ссылка на товар или опишите, что везете
                  </label>
                  <Textarea
                    placeholder="Например: https://1688.com/... или 'Телефоны Samsung, 100 штук'"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-[#215AC0] hover:bg-[#1a4a9f] text-white text-lg border-2 border-white/20">
                  Получить расчет бесплатно
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
              
              <div className="mt-8 space-y-3 text-sm text-foreground/80">
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Flame" size={18} className="text-[#E9F1FF]" />
                  <span>Прямо сейчас 47 человек оформляют доставку</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Plane" size={18} className="text-[#E9F1FF]" />
                  <span>Ближайшая отправка: послезавтра (осталось 3 места)</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Coins" size={18} className="text-[#E9F1FF]" />
                  <span>Средняя экономия наших клиентов: 340 000 ₸ на партии</span>
                </div>
              </div>
            </Card>
            
            <p className="mt-6 text-center text-white/90 text-sm">
              <strong>P.S.</strong> Если не ответим за 5 минут — доставим ваш первый груз со скидкой 20%
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A2A2A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Eagleway</h3>
              <p className="text-white/70 mb-4">
                Прямая доставка из Китая без посредников уже 10 лет
              </p>
              <div className="flex gap-3">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/30">
                  БИН 201140009407
                </Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+77089130403" className="hover:text-white">+7 708 913 0403</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>БЦ Turar, Сейфуллина 502</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <p className="text-white/70">
                Круглосуточно, 7 дней в неделю<br />
                Отвечаем даже ночью
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/70 text-sm">
            <p>© 2024 Eagleway. Все права защищены. Официальный участник программы «Один пояс — один путь»</p>
          </div>
        </div>
      </footer>
    </div>
  );
}