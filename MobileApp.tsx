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
import { cn } from './utils';

// --- Mobile Components ---

const MobileNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
      isScrolled ? "bg-bg/95 backdrop-blur-md border-b border-border-gold" : "bg-transparent"
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border border-accent rounded-full flex items-center justify-center text-accent font-display text-sm">ГС</div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs text-text-main leading-none">Галина Санджиева</span>
            <span className="text-[8px] tracking-widest text-accent opacity-70">Sanjieva.Elite</span>
          </div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-text-main p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border-gold overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-text-main text-sm tracking-widest font-medium border-b border-border-gold/30 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-accent text-black py-4 font-bold tracking-widest text-xs">
                Заказать звонок
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MobileHero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-4 pt-20 pb-10 bg-bg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg to-bg"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-[8px] font-bold tracking-[0.2em] mb-4 block">
            Персональный эксперт — Галина Санджиева
          </span>
          <h1 className="text-3xl font-display font-bold text-text-main leading-tight mb-6">
            Ваша идеальная квартира в Москве, СПб или Краснодаре: подбор и ипотека — 0₽
          </h1>
          <p className="text-base text-text-dim mb-10 leading-relaxed font-light">
            Ваш надежный проводник в мире новостроек. <span className="text-accent">0% комиссии</span> — услуги оплачивают застройщики.
          </p>

          <div className="flex flex-col gap-4">
            <button className="bg-accent text-black px-6 py-5 font-bold text-xs tracking-widest flex items-center justify-center gap-3">
              Получить подборку ТОП-10 ЖК
              <ArrowRight size={16} />
            </button>
            <button className="bg-transparent text-text-main border border-border-gold px-6 py-5 font-bold text-xs tracking-widest flex items-center justify-center gap-3">
              Рассчитать ипотеку
              <Percent size={16} />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-border-gold pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-display text-accent">5+ лет</span>
              <span className="text-[8px] text-text-dim tracking-widest mt-1">Опыта</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display text-accent">500+</span>
              <span className="text-[8px] text-text-dim tracking-widest mt-1">Сделок</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display text-accent">98%</span>
              <span className="text-[8px] text-text-dim tracking-widest mt-1">Одобрений</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MobileTrust = () => {
  return (
    <section className="py-20 bg-bg px-4 border-y border-border-gold" id="trust">
      <div className="text-accent text-[8px] tracking-[0.3em] mb-4">Ваш адвокат</div>
      <h2 className="text-2xl font-display font-bold text-text-main mb-6">Аналитический подход к выбору</h2>
      
      <div className="relative mb-12">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
          alt="Галина Санджиева" 
          className="w-full aspect-[4/5] object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 right-4 left-4 bg-surface p-6 border border-border-gold shadow-xl">
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="fill-accent text-accent" />)}
          </div>
          <p className="text-xs font-display italic leading-relaxed">"Я знаю изнанку каждого застройщика и не позволю вам купить квартиру в 'проблемном' доме."</p>
        </div>
      </div>

      <div className="mt-16 space-y-8">
        {[
          { title: "Честный рейтинг", desc: "Скажу прямо, кто задерживает сроки, а кто сдает дома раньше времени." },
          { title: "Закрытые базы", desc: "Вижу квартиры, которые еще не вышли в открытую продажу." },
          { title: "Приемка", desc: "При получении ключей я привожу эксперта для проверки качества." }
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 border border-border-gold flex items-center justify-center">
              <CheckCircle2 size={18} className="text-accent" />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-text-main mb-1">{item.title}</h4>
              <p className="text-text-dim text-xs leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MobileQuiz = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  return (
    <section className="py-20 bg-bg px-4" id="quiz">
      <div className="bg-surface p-6 border border-border-gold relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-bg">
          <div className="h-full bg-accent transition-all duration-300" style={{ width: `${(step / totalSteps) * 100}%` }} />
        </div>

        <div className="text-center mb-10">
          <span className="text-accent font-bold tracking-[0.3em] text-[8px]">Подбор недвижимости</span>
          <h2 className="text-xl font-display font-bold text-text-main mt-2">Узнайте свои возможности</h2>
        </div>

        <div className="min-h-[300px] flex flex-col justify-center">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-display text-center">В каком городе ищете?</h3>
              <div className="grid gap-3">
                {["Москва", "Санкт-Петербург", "Краснодар"].map(city => (
                  <button key={city} onClick={() => setStep(2)} className="p-5 bg-bg border border-border-gold font-display text-base text-text-main">
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-display text-center">Ваш бюджет?</h3>
              <div className="grid gap-3">
                {["До 10 млн ₽", "10 - 20 млн ₽", "20 - 40 млн ₽", "Более 40 млн ₽"].map(price => (
                  <button key={price} onClick={() => setStep(3)} className="p-5 bg-bg border border-border-gold font-display text-base text-text-main">
                    {price}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-display text-center">Нужна ипотека?</h3>
              <div className="grid gap-3">
                {["Да, нужна", "Нет, полная оплата", "Рассрочка", "Мат. капитал"].map(opt => (
                  <button key={opt} onClick={() => setStep(4)} className="p-5 bg-bg border border-border-gold font-display text-base text-text-main">
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-8 text-center">
              <h3 className="text-xl font-display">Готово!</h3>
              <p className="text-text-dim text-xs font-light">Оставьте контакты для получения презентации в WhatsApp.</p>
              <div className="space-y-4">
                <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-6 py-4 bg-bg border border-border-gold text-text-main text-sm" />
                <button className="w-full bg-accent text-black py-4 font-bold tracking-widest text-xs">Получить варианты</button>
              </div>
            </div>
          )}
        </div>

        {step < totalSteps && (
          <div className="mt-10 flex justify-between items-center border-t border-border-gold pt-6">
            <button onClick={() => setStep(s => Math.max(1, s - 1))} className="text-text-dim text-[10px] font-bold tracking-widest">← Назад</button>
            <span className="text-text-dim text-[10px] tracking-widest font-bold">{step} / {totalSteps}</span>
          </div>
        )}
      </div>
    </section>
  );
};

const MobileMortgage = () => {
  return (
    <section className="py-20 bg-bg px-4" id="mortgage">
      <span className="text-accent font-bold tracking-[0.3em] text-[8px] mb-4 block underline decoration-accent/30 underline-offset-4">Ипотека</span>
      <h2 className="text-2xl font-display font-bold text-text-main mb-6 leading-tight">Инструмент, который работает на вас</h2>
      <p className="text-sm text-text-dim mb-10 leading-relaxed font-light">
        Одобрение за 15 минут без визита в банк. <span className="text-accent font-bold">Ставки от 0.1%.</span>
      </p>

      <div className="grid gap-4">
        {[
          { title: "Без первого взноса", rate: "0%", desc: "Заезжайте без накоплений" },
          { title: "IT-ипотека", rate: "от 5%", desc: "Для IT-специалистов" },
          { title: "Семейная", rate: "от 6%", desc: "Для семей с детьми" }
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-surface border border-border-gold">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-display font-bold text-text-main text-sm">{item.title}</h4>
              <span className="text-accent font-bold text-sm">{item.rate}</span>
            </div>
            <p className="text-[10px] text-text-dim font-light">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-surface border border-border-gold flex items-center gap-4">
        <ShieldCheck size={24} className="text-accent flex-shrink-0" />
        <div className="text-xs">
          <h4 className="font-display font-bold text-text-main">Гарантия одобрения</h4>
          <p className="text-text-dim font-light">Найдем решение даже в сложных случаях.</p>
        </div>
      </div>
    </section>
  );
};

const MobileReviews = () => {
  return (
    <section className="py-20 bg-bg px-4 border-y border-border-gold" id="reviews">
      <div className="text-accent text-[8px] tracking-[0.3em] mb-4">Отзывы</div>
      <h2 className="text-2xl font-display font-bold text-text-main mb-10">Результаты работы</h2>

      <div className="space-y-6">
        {[
          {
            name: "Семья Ивановых",
            text: "Думали, что ипотека нам не светит. Галина нашла банк и подобрала ЖК. Сэкономили 1,2 млн!",
            city: "Москва"
          },
          {
            name: "Игорь",
            text: "Инвестировал удаленно. За год цена выросла на 40%. Экспертность на высоте.",
            city: "Краснодар"
          }
        ].map((review, idx) => (
          <div key={idx} className="bg-surface p-6 border border-border-gold">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="fill-accent text-accent" />)}
            </div>
            <p className="text-text-dim italic text-sm mb-6 leading-relaxed">"{review.text}"</p>
            <div>
              <h4 className="font-display font-bold text-text-main text-base italic">{review.name}</h4>
              <p className="text-[8px] text-accent uppercase tracking-[0.2em] mt-1">{review.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MobileFooter = () => {
  return (
    <footer className="bg-bg text-text-main pt-20 pb-10 px-4 border-t border-border-gold">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 border border-accent rounded-full flex items-center justify-center text-accent font-display text-lg">ГС</div>
        <span className="font-display font-bold text-lg tracking-tight">Sanjieva.Elite</span>
      </div>
      
      <p className="text-text-dim text-xs mb-10 font-light leading-relaxed">
        Ваш персональный эксперт по недвижимости. Помогаю находить лучшие квартиры с 2018 года.
      </p>

      <div className="flex gap-4 mb-12">
        <a href="#" className="w-10 h-10 border border-border-gold rounded-full flex items-center justify-center text-accent">
          <Phone size={18} />
        </a>
        <a href="#" className="w-10 h-10 border border-border-gold rounded-full flex items-center justify-center text-accent">
          <MessageSquare size={18} />
        </a>
        <a href="#" className="w-10 h-10 border border-border-gold rounded-full flex items-center justify-center text-accent">
          <Mail size={18} />
        </a>
      </div>

      <div className="border-t border-border-gold pt-8 text-[8px] text-text-dim tracking-widest font-bold flex flex-col gap-4">
        <p>© 2024 Галина Санджиева. Все права защищены.</p>
        <div className="flex gap-6">
          <a href="#">Политика</a>
          <a href="#">Оферта</a>
        </div>
      </div>
    </footer>
  );
};

const MobileBenefits = () => {
  return (
    <section className="py-20 bg-bg px-4" id="benefits">
      <div className="text-accent text-[8px] tracking-[0.3em] mb-4">Преимущества</div>
      <h2 className="text-2xl font-display font-bold text-text-main mb-10">Почему выбирают меня</h2>
      
      <div className="space-y-4">
        {[
          "Экономия до 1,5 млн ₽ за счет скидок",
          "Одобрение ипотеки в 98% случаев",
          "Доступ к закрытым базам застройщиков",
          "Юридическая проверка каждой сделки",
          "0₽ комиссия — платит застройщик"
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-surface border border-border-gold">
            <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
            <span className="text-text-dim text-xs font-light">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export const MobileApp = () => {
  return (
    <div className="bg-bg min-h-screen font-sans selection:bg-accent selection:text-black">
      <MobileNavbar />
      <MobileHero />
      <MobileTrust />
      <MobileBenefits />
      <MobileQuiz />
      <MobileMortgage />
      <MobileReviews />
      <MobileFooter />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 left-4 right-4 z-40">
        <button className="w-full bg-accent text-black py-4 font-bold text-xs tracking-widest shadow-2xl shadow-accent/20 flex items-center justify-center gap-2">
          <Phone size={14} />
          Связаться в WhatsApp
        </button>
      </div>
    </div>
  );
};

export default MobileApp;
