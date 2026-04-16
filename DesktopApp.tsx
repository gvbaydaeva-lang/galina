import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Percent, 
  Star,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Clock,
  MessageSquare
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Преимущества', href: '#benefits' },
    { name: 'Ипотека', href: '#mortgage' },
    { name: 'Этапы', href: '#steps' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-bg/90 backdrop-blur-md border-b border-border-gold py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border border-accent rounded-full flex items-center justify-center text-accent font-display text-xl">ГС</div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight leading-none text-text-main text-sm">Галина Санджиева</span>
              <span className="text-[9px] tracking-widest text-accent opacity-70">Sanjieva.Elite</span>
            </div>
          </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] tracking-widest font-medium transition-colors text-text-dim hover:text-accent"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-accent hover:bg-accent/80 text-black px-4 py-1.5 rounded-none text-[10px] tracking-widest font-bold transition-all">
            Консультация
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-main"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border-gold p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-main text-sm tracking-widest font-medium border-b border-border-gold pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-accent text-black py-3 rounded-none font-bold mt-2 tracking-widest text-xs">
              Заказать звонок
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const headlines = [
    "Ваша идеальная квартира в Москве, СПб или Краснодаре: подбор и ипотека — 0₽",
    "Купите квартиру в новостройке с выгодой до 1,5 млн рублей без комиссии агенту",
    "Инвестируйте в жизнь: подберем надежную новостройку с ипотекой от 0.1%"
  ];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent text-[9px] font-bold tracking-[0.2em] mb-4">
              Персональный эксперт — Галина Санджиева
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-main leading-[1.2] mb-8">
              {headlines[headlineIdx]}
            </h1>
            <p className="text-lg text-text-dim mb-12 max-w-2xl leading-relaxed">
              Ваш надежный проводник в мире новостроек. <span className="text-accent">0% комиссии</span> за подбор и оформление — услуги оплачивают застройщики.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-accent hover:bg-accent/90 text-black px-10 py-5 rounded-none text-xs tracking-widest font-bold transition-all flex items-center justify-center gap-3 group">
                Получить подборку ТОП-10 ЖК
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent hover:bg-white/5 text-text-main border border-border-gold px-10 py-5 rounded-none text-xs tracking-widest font-bold transition-all flex items-center justify-center gap-3">
                Рассчитать ипотеку
                <Percent className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-20 flex items-center gap-12 border-t border-border-gold pt-10">
            <div className="flex flex-col">
              <span className="text-4xl font-display text-accent">5+ лет</span>
              <span className="text-[10px] text-text-dim tracking-widest mt-1">Опыта на рынке</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-display text-accent">500+</span>
              <span className="text-[10px] text-text-dim tracking-widest mt-1">Закрытых сделок</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-display text-accent">98%</span>
              <span className="text-[10px] text-text-dim tracking-widest mt-1">Одобрений ипотеки</span>
            </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center bg-surface p-8 border border-border-gold rounded-none shadow-2xl z-20"
      >
        <div className="w-16 h-16 border border-accent rounded-full flex items-center justify-center mb-4">
          <Percent className="text-accent w-8 h-8" />
        </div>
        <span className="text-text-main font-display text-xl text-center leading-tight">Ставка от 0.1%<br/><span className="text-text-dim font-sans text-[10px] tracking-widest">Эксклюзивные условия</span></span>
      </motion.div>
    </section>
  );
};

const TrustBlock = () => {
  return (
    <section className="py-32 bg-bg border-y border-border-gold" id="trust">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 border border-border-gold -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Галина Санджиева" 
              className="rounded-none w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 -right-10 bg-surface text-text-main p-8 border border-border-gold shadow-2xl max-w-[280px]">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
              </div>
              <p className="text-sm font-display leading-relaxed">"Я знаю изнанку каждого застройщика и не позволю вам купить квартиру в 'проблемном' доме."</p>
              <p className="mt-6 text-[10px] tracking-[0.2em] font-bold text-accent">— Галина Санджиева</p>
            </div>
          </div>

          <div>
            <div className="text-accent text-[10px] tracking-[0.3em] mb-4">Ваш адвокат</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main mb-8">Аналитический подход к выбору</h2>
            <p className="text-lg text-text-dim mb-12 leading-relaxed font-light">
              Отдел продаж застройщика всегда хвалит свой объект. Моя работа — показать вам реальную картину. Я анализирую не только планировки, но и финансовую устойчивость компаний, качество материалов и реальные перспективы развития района.
            </p>
            
            <div className="space-y-10">
              {[
                { title: "Честный рейтинг застройщиков", desc: "Скажу прямо, кто задерживает сроки на полгода, а кто сдает дома раньше времени с идеальной отделкой." },
                { title: "Доступ к закрытым базам", desc: "Вижу квартиры, которые еще не вышли в открытую продажу или находятся в резерве — часто это самые выгодные лоты." },
                { title: "Профессиональная приемка", desc: "При получении ключей я привожу эксперта, который заставит застройщика устранить косяки за его счет, экономя вам до 200 000₽ на ремонте." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 border border-border-gold flex items-center justify-center">
                    <CheckCircle2 className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-text-main mb-2">{item.title}</h4>
                    <p className="text-text-dim text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-32 bg-bg" id="benefits">
      <div className="container mx-auto px-6 text-center mb-20">
        <div className="text-accent text-[10px] tracking-[0.3em] mb-4">Риски и Решения</div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main mb-6">Почему покупать самому — это риск?</h2>
        <p className="text-text-dim max-w-2xl mx-auto font-light">Без независимого эксперта вы видите только ту часть правды, которую вам хотят продать.</p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[
          { 
            icon: <ShieldCheck className="w-8 h-8 text-accent" />, 
            title: "Ловушки маркетинга", 
            desc: "Красивый рендер на сайте ≠ реальный вид из окна. Я знаю, где завтра построят эстакаду или закроют ваш вид другой многоэтажкой." 
          },
          { 
            icon: <Percent className="w-8 h-8 text-accent" />, 
            title: "Переплата по ипотеке", 
            desc: "Банки в офисах застройщиков часто предлагают 'свои' программы. Я нахожу скрытые субсидии, которые экономят до 3 млн ₽ на процентах." 
          },
          { 
            icon: <Clock className="w-8 h-8 text-accent" />, 
            title: "Потеря времени", 
            desc: "Вы потратите 300+ часов на изучение форумов и поездки. Я сделаю экспертную выжимку под ваш запрос за 1 день." 
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-surface p-10 rounded-none border border-border-gold hover:border-accent transition-all duration-500 group">
            <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
            <h3 className="text-2xl font-display font-bold text-text-main mb-4">{item.title}</h3>
            <p className="text-text-dim leading-relaxed text-sm font-light">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 container mx-auto px-6">
        <div className="bg-surface rounded-none p-10 md:p-20 text-text-main relative overflow-hidden border border-border-gold">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="text-accent text-[10px] tracking-[0.3em] mb-4">Ваши преимущества</div>
              <h3 className="text-4xl font-display font-bold mb-10">Прозрачность и выгода</h3>
              <ul className="space-y-6">
                {[
                  "Экономия до 1,5 млн ₽ за счет эксклюзивных скидок",
                  "Одобрение ипотеки в 98% случаев, даже если вам уже отказали",
                  "Доступ к лотам, которых нет на Циан и Авито",
                  "Юридическая чистота: проверяю каждую букву в ДДУ",
                  "0₽ за все услуги — мою работу оплачивает застройщик"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 border border-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-text-dim text-sm font-light">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg border border-border-gold p-10 rounded-none">
              <div className="text-center mb-10">
                <span className="text-accent font-bold tracking-[0.2em] text-[10px]">Бесплатно</span>
                <h4 className="text-2xl font-display font-bold mt-3">Получить подборку из 10 лучших ЖК</h4>
              </div>
              <form className="space-y-6">
                <input type="text" placeholder="Ваше имя" className="w-full bg-surface border border-border-gold rounded-none px-6 py-4 text-text-main placeholder:text-text-dim/50 focus:outline-none focus:border-accent transition-colors text-sm" />
                <input type="tel" placeholder="Номер телефона" className="w-full bg-surface border border-border-gold rounded-none px-6 py-4 text-text-main placeholder:text-text-dim/50 focus:outline-none focus:border-accent transition-colors text-sm" />
                <button className="w-full bg-accent hover:bg-accent/90 text-black font-bold py-5 rounded-none tracking-widest text-xs transition-all">
                  Хочу подборку
                </button>
                <p className="text-[9px] text-text-dim text-center tracking-widest opacity-50">Ваши данные защищены и не будут переданы третьим лицам</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadMagnet = () => {
  return (
    <section className="py-20 bg-surface border-y border-border-gold">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-accent text-black text-[9px] font-bold tracking-widest rounded-none mb-6">Подарок за подписку</div>
            <h3 className="text-4xl font-display font-bold text-text-main mb-6">Гайд: «7 критических ошибок при покупке новостройки»</h3>
            <p className="text-text-dim mb-10 font-light leading-relaxed">Узнайте, как не потерять до 2 млн рублей на скрытых условиях застройщиков и выбрать действительно ликвидный объект.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Ваш Email или Telegram" className="flex-1 px-6 py-4 rounded-none bg-bg border border-border-gold text-text-main focus:outline-none focus:border-accent text-sm" />
              <button className="bg-accent text-black px-10 py-4 rounded-none font-bold tracking-widest text-xs hover:bg-accent/90 transition-colors">Получить гайд</button>
            </div>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <div className="relative">
              <div className="w-56 h-72 bg-bg shadow-2xl rounded-none border border-border-gold transform -rotate-6 flex flex-col p-6">
                <div className="w-full h-40 bg-surface rounded-none mb-6 overflow-hidden border border-border-gold">
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" alt="Guide Cover" className="w-full h-full object-cover opacity-30 grayscale" referrerPolicy="no-referrer" />
                </div>
                <div className="h-2 w-full bg-border-gold rounded-none mb-3"></div>
                <div className="h-2 w-3/4 bg-border-gold rounded-none mb-3"></div>
                <div className="h-2 w-1/2 bg-border-gold rounded-none"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-black font-bold shadow-2xl text-xs tracking-widest">PDF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Quiz = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <section className="py-32 bg-bg" id="quiz">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-surface rounded-none p-10 md:p-20 border border-border-gold shadow-2xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-bg">
            <motion.div 
              className="h-full bg-accent" 
              initial={{ width: "0%" }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>

          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-[0.3em] text-[10px]">Подбор недвижимости</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main mt-4">Узнайте свои возможности</h2>
          </div>

          <div className="min-h-[350px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-display text-center">В каком городе ищете квартиру?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {["Москва", "Санкт-Петербург", "Краснодар"].map(city => (
                      <button key={city} onClick={nextStep} className="p-8 bg-bg border border-border-gold rounded-none hover:border-accent hover:bg-surface transition-all font-display text-xl text-text-main">
                        {city}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-display text-center">Каков ваш бюджет?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["До 10 млн ₽", "10 - 20 млн ₽", "20 - 40 млн ₽", "Более 40 млн ₽"].map(price => (
                      <button key={price} onClick={nextStep} className="p-8 bg-bg border border-border-gold rounded-none hover:border-accent hover:bg-surface transition-all font-display text-xl text-text-main">
                        {price}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-display text-center">Нужна ли вам ипотека?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Да, нужна", "Нет, полная оплата", "Рассматриваю рассрочку", "Есть мат. капитал"].map(opt => (
                      <button key={opt} onClick={nextStep} className="p-8 bg-bg border border-border-gold rounded-none hover:border-accent hover:bg-surface transition-all font-display text-xl text-text-main">
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10 text-center"
                >
                  <h3 className="text-3xl font-display">Готово! Мы подобрали варианты</h3>
                  <p className="text-text-dim font-light">Оставьте контакты, чтобы получить презентацию с ценами и планировками в WhatsApp.</p>
                  <div className="max-w-sm mx-auto space-y-6">
                    <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-8 py-5 rounded-none bg-bg border border-border-gold text-text-main focus:outline-none focus:border-accent text-sm" />
                    <button className="w-full bg-accent text-black py-5 rounded-none font-bold tracking-widest text-xs shadow-2xl shadow-accent/20">Получить презентацию</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {step < totalSteps && (
            <div className="mt-16 flex justify-between items-center border-t border-border-gold pt-10">
              <button onClick={prevStep} disabled={step === 1} className="text-text-dim hover:text-accent font-bold tracking-widest text-[10px] disabled:opacity-0 transition-colors">← Назад</button>
              <span className="text-text-dim text-[10px] tracking-widest font-bold">Вопрос {step} из {totalSteps}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const MortgageSection = () => {
  return (
    <section className="py-32 bg-bg" id="mortgage">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1">
            <span className="text-accent font-bold tracking-[0.3em] text-[10px] mb-6 block underline decoration-accent/30 underline-offset-8">Ваш главный драйвер покупки</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main mb-8 leading-tight">Ипотека — это инструмент, который работает на вас</h2>
            <p className="text-lg text-text-dim mb-10 leading-relaxed font-light">
              Многие боятся ипотеки из-за бумажной волокиты или страха отказа. Я беру это на себя. Мы подберем программу, где платеж будет комфортным, а переплата — минимальной. <span className="text-accent font-bold">Одобрение за 15 минут без визита в банк.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Без первого взноса", rate: "0%", desc: "Заезжайте в свою квартиру, не имея накоплений", highlight: true },
                { title: "IT-ипотека", rate: "от 5%", desc: "Для сотрудников аккредитованных компаний" },
                { title: "Семейная ипотека", rate: "от 6%", desc: "Для родителей с детьми любого возраста" },
                { title: "Субсидии от 0.1%", rate: "0.1%", desc: "Специальные условия от моих партнеров-застройщиков" }
              ].map((item, idx) => (
                <div key={idx} className={cn(
                  "p-8 rounded-none border transition-all duration-500",
                  item.highlight ? "border-accent bg-surface shadow-2xl" : "border-border-gold bg-surface hover:border-accent"
                )}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-display font-bold text-text-main">{item.title}</h4>
                    <span className="text-accent font-bold">{item.rate}</span>
                  </div>
                  <p className="text-xs text-text-dim font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-surface border border-border-gold rounded-none text-text-main flex items-center gap-8">
              <div className="w-14 h-14 border border-accent rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl">Гарантия одобрения</h4>
                <p className="text-sm text-text-dim font-light">Если у вас есть сложности с КИ или доходом — мы найдем решение или не возьмем в работу.</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="bg-surface rounded-none p-10 text-text-main relative overflow-hidden shadow-2xl border border-border-gold">
              <div className="absolute top-0 right-0 p-6">
                <Percent className="w-32 h-32 text-accent/5" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Рассчитаем ипотеку</h3>
              <p className="text-text-dim text-sm mb-10 font-light">Узнайте, на какую сумму кредита вы можете рассчитывать</p>
              <div className="space-y-10">
                <div>
                  <label className="block text-[10px] tracking-widest text-text-dim mb-4">Стоимость квартиры</label>
                  <input type="range" className="w-full accent-accent bg-bg h-1 rounded-none appearance-none" />
                  <div className="flex justify-between mt-4 font-display text-accent">
                    <span>5 млн ₽</span>
                    <span>50 млн ₽</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest text-text-dim mb-4">Первоначальный взнос</label>
                  <input type="range" className="w-full accent-accent bg-bg h-1 rounded-none appearance-none" />
                  <div className="flex justify-between mt-4 font-display text-accent">
                    <span>0%</span>
                    <span>50%</span>
                  </div>
                </div>
                <div className="pt-10 border-t border-border-gold">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-text-dim text-sm font-light">Ваш платеж составит:</span>
                    <span className="text-4xl font-display font-bold text-accent">от 18 200 ₽</span>
                  </div>
                  <button className="w-full bg-accent text-black font-bold py-5 rounded-none hover:bg-accent/90 transition-all tracking-widest text-xs shadow-2xl shadow-accent/10">
                    Получить точный расчет
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Steps = () => {
  return (
    <section className="py-32 bg-bg" id="steps">
      <div className="container mx-auto px-6 text-center mb-20">
        <div className="text-accent text-[10px] tracking-[0.3em] mb-4">Процесс работы</div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main mb-6">4 шага к вашей новой жизни</h2>
        <p className="text-text-dim font-light">Прозрачный процесс, где я беру всю рутину на себя</p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border-gold -translate-y-1/2 z-0"></div>
          
          {[
            { step: "01", title: "Стратегия", desc: "Разбираем ваши цели: для жизни или инвестиций. Формируем четкие критерии поиска." },
            { step: "02", title: "Экспертный отбор", desc: "Я отсеиваю 90% мусора и оставляю только 5-7 ЖК с лучшим потенциалом роста и качеством." },
            { step: "03", title: "Фиксация выгоды", desc: "Бронируем квартиру по лучшей цене, одобряем ипотеку и согласовываем доп. скидки." },
            { step: "04", title: "Безопасная сделка", desc: "Подписываем документы под моим контролем. Вы становитесь владельцем без рисков." }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 bg-surface p-10 rounded-none border border-border-gold flex flex-col items-center text-center hover:border-accent transition-colors duration-500">
              <div className="w-14 h-14 border border-accent text-accent rounded-full flex items-center justify-center font-display text-xl mb-8 shadow-2xl shadow-accent/10 bg-bg">
                {item.step}
              </div>
              <h4 className="text-2xl font-display font-bold text-text-main mb-4">{item.title}</h4>
              <p className="text-text-dim text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section className="py-32 bg-bg border-y border-border-gold" id="reviews">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-xl">
            <div className="text-accent text-[10px] tracking-[0.3em] mb-4">Отзывы клиентов</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main mb-6">Результаты, которыми я горжусь</h2>
            <p className="text-text-dim font-light leading-relaxed">Реальные истории людей, сэкономивших миллионы рублей и сотни часов времени.</p>
          </div>
          <button className="text-accent font-bold tracking-widest text-[10px] flex items-center gap-3 hover:gap-5 transition-all group">
            Смотреть все кейсы <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              name: "Семья Ивановых",
              city: "Москва",
              text: "Думали, что ипотека нам не светит после двух отказов. Галина нашла банк, который одобрил нас за день, и подобрала ЖК с отделкой. Сэкономили 1,2 млн на процентах!",
              image: "https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=400"
            },
            {
              name: "Игорь",
              city: "Краснодар",
              text: "Инвестировал в студию удаленно. Галина отговорила от одного ЖК (который сейчас заморожен) и предложила другой. За год цена выросла на 40%. Экспертность на высоте.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
            }
          ].map((review, idx) => (
            <div key={idx} className="bg-surface p-10 rounded-none border border-border-gold flex flex-col md:flex-row gap-10 items-center md:items-start hover:border-accent transition-colors duration-500">
              <img src={review.image} alt={review.name} className="w-28 h-28 rounded-none object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-border-gold" referrerPolicy="no-referrer" />
              <div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                </div>
                <p className="text-text-dim italic mb-8 font-display leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-display font-bold text-text-main italic text-xl">{review.name}</h4>
                  <p className="text-[10px] text-accent uppercase tracking-[0.2em] mt-1">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Почему ваши услуги бесплатны? В чем подвох?", a: "Никакого подвоха. Я — официальный партнер застройщиков. Они платят мне за то, что я привожу лояльного клиента и беру на себя всю бумажную работу. Для вас цена квартиры остается такой же, как в отделе продаж, а часто даже ниже за счет моих партнерских скидок." },
    { q: "Я могу сам пойти к застройщику, зачем мне вы?", a: "Застройщик предложит вам только свои объекты, даже если они вам не подходят. Я же предложу 100+ вариантов, честно расскажу о минусах каждого и помогу выбить лучшие условия по ипотеке, которые застройщик может 'придержать'." },
    { q: "А если у меня плохая кредитная история?", a: "Это не приговор. У меня есть опыт работы со сложными случаями. Мы проанализируем ситуацию и подадим заявки в те банки, которые наиболее лояльны к вашей категории заемщиков." },
    { q: "Как проходит работа, если я в другом городе?", a: "Дистанционно. Мы проводим видео-экскурсии по объектам, проверяем документы онлайн и регистрируем сделку через электронную подпись. Вам нужно будет приехать только на получение ключей (или мы сделаем это за вас по доверенности)." }
  ];

  return (
    <section className="py-32 bg-bg" id="faq">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-accent text-[10px] tracking-[0.3em] mb-4">Вопросы и ответы</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main mb-6">Честно о главном</h2>
            <p className="text-text-dim font-light">Разбираем популярные сомнения при покупке недвижимости</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surface rounded-none border border-border-gold overflow-hidden hover:border-accent transition-colors duration-500">
                <button 
                  className="w-full px-10 py-8 text-left flex justify-between items-center hover:bg-bg/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-display font-bold text-text-main text-xl">{faq.q}</span>
                  <ChevronRight className={cn("w-5 h-5 transition-transform text-accent", openIndex === idx ? "rotate-90" : "")} />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-10 pb-8 text-text-dim leading-relaxed font-light text-sm"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg text-text-main pt-32 pb-16 border-t border-border-gold">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 border border-accent rounded-full flex items-center justify-center text-accent font-display text-2xl">ГС</div>
              <span className="font-display font-bold text-xl tracking-tight">Sanjieva.Elite</span>
            </div>
            <p className="text-text-dim max-w-md mb-10 font-light leading-relaxed">
              Ваш персональный эксперт по недвижимости. Помогаю находить лучшие квартиры в новостройках Москвы, Санкт-Петербурга и Краснодара с 2018 года.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 border border-border-gold rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-500">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 border border-border-gold rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-500">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 border border-border-gold rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-500">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 tracking-[0.3em] text-[10px] text-accent">Навигация</h4>
            <ul className="space-y-5 text-text-dim text-sm font-light">
              <li><a href="#trust" className="hover:text-accent transition-colors">Об эксперте</a></li>
              <li><a href="#benefits" className="hover:text-accent transition-colors">Преимущества</a></li>
              <li><a href="#mortgage" className="hover:text-accent transition-colors">Ипотека</a></li>
              <li><a href="#steps" className="hover:text-accent transition-colors">Этапы работы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 tracking-[0.3em] text-[10px] text-accent">Контакты</h4>
            <ul className="space-y-5 text-text-dim text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Москва, Пресненская наб., 12 (Москва-Сити)</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>+7 (999) 000-00-00</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>info@sanzhieva.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-gold pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-text-dim text-[10px] tracking-[0.2em] font-bold">
          <p>© 2024 Галина Санджиева. Все права защищены.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const RegionalExpertise = () => {
  return (
    <section className="py-32 bg-bg border-y border-border-gold" id="regions">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-accent text-[10px] tracking-[0.3em] mb-4">География работы</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-text-main">Экспертиза в регионах</h2>
          <p className="text-text-dim max-w-2xl mx-auto font-light leading-relaxed">Я не просто продаю метры, я знаю специфику каждого города, динамику цен и инвестиционную привлекательность районов.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              city: "Москва", 
              desc: "Новостройки Москвы: от комфорт-класса в Новой Москве до премиальных апартаментов в Сити. Знаю всё о реновации и перспективах метро.",
              keywords: ["ЖК бизнес-класса", "Инвестиции в ЦАО", "Семейные кварталы"]
            },
            { 
              city: "Санкт-Петербург", 
              desc: "Новостройки СПб: видовые квартиры на Неве, уютные кварталы в пригородах и редевелопмент промзон. Помогу найти баланс цены и локации.",
              keywords: ["Видовые квартиры", "Васильевский остров", "Приморский район"]
            },
            { 
              city: "Краснодар", 
              desc: "Новостройки Краснодара: южная столица с огромным потенциалом. Подберу надежные ЖК с развитой инфраструктурой и парками.",
              keywords: ["Южный климат", "Развитая инфраструктура", "Доступные цены"]
            }
          ].map((item, idx) => (
            <div key={idx} className="p-10 rounded-none bg-surface border border-border-gold hover:border-accent transition-all duration-500 group">
              <h3 className="text-3xl font-display font-bold mb-6 text-accent group-hover:translate-x-2 transition-transform duration-500">{item.city}</h3>
              <p className="text-text-dim mb-8 text-sm leading-relaxed font-light">{item.desc}</p>
              <div className="flex flex-wrap gap-3">
                {item.keywords.map(kw => (
                  <span key={kw} className="text-[9px] tracking-widest bg-bg border border-border-gold px-3 py-1.5 rounded-none text-text-dim">{kw}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 bg-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="text-black text-[10px] tracking-[0.4em] mb-6 font-bold">Финальный шаг</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-10">Начните новую главу</h2>
            <p className="text-xl text-black/70 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Оставьте заявку сейчас и получите персональную подборку из 10 лучших ЖК под ваш бюджет в течение 30 минут.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-black text-white px-12 py-6 rounded-none text-xs tracking-widest font-bold hover:bg-black/80 transition-all shadow-2xl">
                Получить подборку
              </button>
              <button className="bg-transparent text-black border border-black/20 px-12 py-6 rounded-none text-xs tracking-widest font-bold hover:bg-black/5 transition-all">
                Написать в WhatsApp
              </button>
            </div>
          </div>
        </section>
  );
};

export const DesktopApp = () => {
  return (
    <div className="bg-bg min-h-screen font-sans selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <TrustBlock />
      <ProblemSolution />
      <LeadMagnet />
      <Quiz />
      <MortgageSection />
      <Steps />
      <RegionalExpertise />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default DesktopApp;
