import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/99decb61-6bff-414a-92d3-e8410a31c906.png" 
                alt="Мозаика" 
                className="h-12 w-12 object-contain"
              />
              <h1 className="text-2xl font-bold text-primary">Навигатор Мозаика</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('teachers')} className="hover:text-primary transition-colors">Педагогам</button>
              <button onClick={() => scrollToSection('leaders')} className="hover:text-primary transition-colors">Руководителям</button>
              <button onClick={() => scrollToSection('parents')} className="hover:text-primary transition-colors">Родителям</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
              <button onClick={() => scrollToSection('search')} className="hover:text-primary transition-colors">
                <Icon name="Search" size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Образовательный навигатор для всех участников учебного процесса
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Платформа для педагогов, руководителей и родителей — единое пространство знаний и развития
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('teachers')}>
              <Icon name="GraduationCap" className="mr-2" size={20} />
              Для педагогов
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('leaders')}>
              <Icon name="Users" className="mr-2" size={20} />
              Для руководителей
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('parents')}>
              <Icon name="Heart" className="mr-2" size={20} />
              Для родителей
            </Button>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Icon name="GraduationCap" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Педагогам и учителям</h2>
            <p className="text-lg text-muted-foreground">Методические материалы, курсы повышения квалификации, обмен опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                </div>
                <CardTitle>Методические материалы</CardTitle>
                <CardDescription>Готовые разработки уроков, презентации и учебные программы</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Перейти к материалам
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-secondary" />
                </div>
                <CardTitle>Курсы повышения квалификации</CardTitle>
                <CardDescription>Онлайн и офлайн программы профессионального развития</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Смотреть курсы
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={24} className="text-accent" />
                </div>
                <CardTitle>Сообщество педагогов</CardTitle>
                <CardDescription>Форум для обмена опытом и лучшими практиками</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Присоединиться
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="leaders" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Icon name="Users" size={48} className="mx-auto mb-4 text-secondary" />
            <h2 className="text-4xl font-bold mb-4">Руководителям образовательных учреждений</h2>
            <p className="text-lg text-muted-foreground">Инструменты управления, аналитика и программы развития</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                </div>
                <CardTitle>Аналитика и отчётность</CardTitle>
                <CardDescription>Системы мониторинга качества образования</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-secondary" />
                </div>
                <CardTitle>Нормативная база</CardTitle>
                <CardDescription>Актуальные документы и методические рекомендации</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Смотреть документы
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" size={24} className="text-accent" />
                </div>
                <CardTitle>Программы развития</CardTitle>
                <CardDescription>Инновационные подходы к управлению учебным процессом</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Узнать больше
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="parents" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Icon name="Heart" size={48} className="mx-auto mb-4 text-accent" />
            <h2 className="text-4xl font-bold mb-4">Родителям</h2>
            <p className="text-lg text-muted-foreground">Советы, рекомендации и ресурсы для поддержки обучения детей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="BookMarked" size={24} className="text-primary" />
                </div>
                <CardTitle>Образовательные ресурсы</CardTitle>
                <CardDescription>Материалы для дополнительных занятий с детьми</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Смотреть ресурсы
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="UserRound" size={24} className="text-secondary" />
                </div>
                <CardTitle>Консультации специалистов</CardTitle>
                <CardDescription>Психологи, логопеды, педагоги — запись на консультацию</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Записаться
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={24} className="text-accent" />
                </div>
                <CardTitle>События и мероприятия</CardTitle>
                <CardDescription>Расписание родительских собраний и мастер-классов</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Календарь
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Icon name="Star" size={48} className="mx-auto mb-4 text-accent" />
            <h2 className="text-4xl font-bold mb-4">Отзывы</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас участники платформы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Иванова</CardTitle>
                    <CardDescription>Учитель начальных классов</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Отличная платформа для профессионального развития! Нашла много полезных материалов для работы и прошла курс повышения квалификации онлайн.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Андрей Петров</CardTitle>
                    <CardDescription>Директор школы</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Удобные инструменты аналитики помогают отслеживать качество образования. Рекомендую всем коллегам-руководителям!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария Сидорова</CardTitle>
                    <CardDescription>Родитель</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Здесь я нашла ответы на все вопросы по обучению ребёнка. Консультации специалистов очень помогли!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ольга Смирнова</CardTitle>
                    <CardDescription>Педагог-психолог</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Прекрасная возможность делиться опытом с коллегами и находить новые методики работы. Сообщество очень активное!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами — мы всегда готовы помочь</p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Ваше сообщение..." rows={5} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
              
              <Separator className="my-8" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (xxx) xxx-xx-xx</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@mozaika-navigator.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Образовательная, д. 1</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="search" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-secondary" />
            <h2 className="text-4xl font-bold mb-4">Поиск по сайту</h2>
          </div>
          <div className="flex gap-2">
            <Input 
              placeholder="Что вы ищете?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-lg"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Search" size={20} />
            </Button>
          </div>
          {searchQuery && (
            <Card className="mt-4">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-center">
                  Введите запрос для поиска материалов и ресурсов
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/99decb61-6bff-414a-92d3-e8410a31c906.png" 
                  alt="Мозаика" 
                  className="h-10 w-10 object-contain"
                />
                <h3 className="font-bold text-lg">Навигатор Мозаика</h3>
              </div>
              <p className="text-sm opacity-80">
                Образовательная платформа для педагогов, руководителей и родителей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('teachers')} className="hover:opacity-100">Педагогам</button></li>
                <li><button onClick={() => scrollToSection('leaders')} className="hover:opacity-100">Руководителям</button></li>
                <li><button onClick={() => scrollToSection('parents')} className="hover:opacity-100">Родителям</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('reviews')} className="hover:opacity-100">Отзывы</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:opacity-100">Контакты</button></li>
                <li><button onClick={() => scrollToSection('search')} className="hover:opacity-100">Поиск</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Twitter" size={20} />
                </div>
                <div className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
              </div>
            </div>
          </div>
          <Separator className="bg-background/20 mb-8" />
          <div className="text-center text-sm opacity-80">
            <p>© 2024 Навигатор Мозаика. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
