import { CSSProperties, FormEvent, StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const apps = [
  {
    name: 'ABC Discovery',
    tag: 'Video-commerce',
    text: 'Un flux court pour decouvrir et acheter sans friction.',
    image: '/biashara.jpeg',
  },
  {
    name: 'AfriZia Market',
    tag: 'Commerce groupe',
    text: 'Catalogue, prix village et achat communautaire.',
    image: '/afrimarket.jpeg',
  },
  {
    name: 'afrisPay',
    tag: 'Paiement',
    text: 'Wallet, carte virtuelle et parcours Mobile Money.',
    image: '/afrispay.jpeg',
  },
  {
    name: 'AfriChat',
    tag: 'Conversation',
    text: 'Messagerie marchande, traduction et synchronisation.',
    image: '/africhat.jpeg',
  },
  {
    name: 'AfriSchool',
    tag: 'Education',
    text: 'Apprentissage utile aux vendeurs et createurs.',
    image: '/afrischool.jpeg',
  },
  {
    name: 'AfriMed',
    tag: 'Sante',
    text: 'Orientation, conseils et acces aux services de sante de proximite.',
    image: '/afrimed.jpeg',
  },
  {
    name: 'A-Freelance',
    tag: 'Travail',
    text: 'Missions, talents et services locaux relies au commerce social.',
    image: '/a-freelance.jpeg',
  },
  {
    name: 'Safari',
    tag: 'Mobilite & services',
    text: 'Transport, mobilite, immobilier et services du quotidien.',
    image: '/safari.jpeg',
  },
];

const metrics = [
  ['<2s', 'chargement initial vise'],
  ['3G/H+', 'experience fluide'],
  ['Offline', 'actions en attente'],
  ['PWA', 'pret installation'],
];

const problems = [
  'Les vendeurs jonglent entre trop d outils.',
  'Les paiements et discussions sont souvent separes.',
  'Les reseaux instables cassent l experience client.',
];

const roadmap = [
  ['Lancement', 'Commerce, chat, wallet, scanner et nos apps essentielles'],
  ['Phase 2', 'PWA offline-first, synchronisation avancee et mini-services'],
  ['Phase 3', 'Ecosysteme ouvert aux partenaires et services locaux'],
];

const immersiveWorlds = [
  ['AfriSchool', 'Classes courtes, formations vendeurs, progression utile.', '/afrischool.jpeg'],
  ['AfriMed', 'Sante de proximite, orientation et services accessibles.', '/afrimed.jpeg'],
  ['A-Freelance', 'Talents, missions, prestations locales et revenus.', '/a-freelance.jpeg'],
  ['Safari', 'Mobilite, transport, immobilier et services quotidiens.', '/safari.jpeg'],
];

const demoScreens = [
  {
    id: 'abc',
    name: 'ABC Feed',
    image: '/biashara.jpeg',
    title: 'Video discovery',
    text: 'Un produit apparait dans le flux, avec prix village et action directe.',
  },
  {
    id: 'market',
    name: 'Market',
    image: '/afrimarket.jpeg',
    title: 'Achat groupe',
    text: 'Le client rejoint un groupe et debloque un meilleur prix.',
  },
  {
    id: 'pay',
    name: 'afrisPay',
    image: '/afrispay.jpeg',
    title: 'Paiement instantane',
    text: 'Wallet, scan et transaction confirmee dans le meme parcours.',
  },
  {
    id: 'chat',
    name: 'AfriChat',
    image: '/africhat.jpeg',
    title: 'Conversation marchande',
    text: 'Le vendeur repond, partage une offre et finalise la commande.',
  },
];

type DemoScreen = (typeof demoScreens)[number];

function DemoPhoneScreen({ screen }: { screen: DemoScreen }) {
  if (screen.id === 'abc') {
    return (
      <div className="demo-screen abc-demo" key={screen.id}>
        <img src="/biashara.jpeg" alt="ABC Discovery" className="demo-logo-mark" />
        <div className="video-canvas">
          <img src="/afrimarket.jpeg" alt="" />
          <div className="video-live">LIVE • ABC</div>
          <div className="video-actions">
            <span>12K</span>
            <span>482</span>
            <span>↗</span>
          </div>
          <div className="video-product">
            <small>Prix village</small>
            <strong>65$</strong>
            <button>Acheter</button>
          </div>
        </div>
        <div className="demo-overlay">
          <span>{screen.name}</span>
          <h3>{screen.title}</h3>
          <p>{screen.text}</p>
        </div>
      </div>
    );
  }

  if (screen.id === 'market') {
    return (
      <div className="demo-screen market-demo" key={screen.id}>
        <img src="/afrimarket.jpeg" alt="AfriZia Market" className="demo-logo-mark" />
        <div className="market-search">Rechercher sur le Market...</div>
        <div className="product-grid">
          {[
            ['/biashara.jpeg', 'Kit solaire', '150$'],
            ['/afrimarket.jpeg', 'Wax premium', '65$'],
            ['/a-freelance.jpeg', 'Service local', '25$'],
            ['/safari.jpeg', 'Mobilite', '12$'],
          ].map(([image, name, price]) => (
            <div className="product-tile" key={name}>
              <img src={image} alt="" />
              <strong>{name}</strong>
              <span>{price}</span>
            </div>
          ))}
        </div>
        <div className="group-bar">
          <span />
          <p>8/10 acheteurs</p>
        </div>
        <div className="demo-overlay compact">
          <span>{screen.name}</span>
          <h3>{screen.title}</h3>
        </div>
      </div>
    );
  }

  if (screen.id === 'pay') {
    return (
      <div className="demo-screen pay-demo" key={screen.id}>
        <img src="/afrispay.jpeg" alt="afrisPay" className="demo-logo-mark" />
        <div className="wallet-balance">
          <small>Solde afrisPay</small>
          <strong>$15,420.50</strong>
        </div>
        <div className="wallet-card">
          <div>
            <span>afrisPay</span>
            <small>**** **** **** 4812</small>
          </div>
          <b>SPAY.</b>
        </div>
        <div className="wallet-actions">
          {['Depot', 'Retrait', 'Transferer', 'Scan'].map((action) => (
            <button key={action}>{action}</button>
          ))}
        </div>
        <div className="transaction-list">
          <p><span>Recharge Mobile Money</span><b>+50$</b></p>
          <p><span>Achat Market</span><b>-65$</b></p>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-screen chat-demo" key={screen.id}>
      <img src="/africhat.jpeg" alt="AfriChat" className="demo-logo-mark" />
      <div className="chat-list">
        {[
          ['Mama Africa Tex', 'Votre offre groupe est prete', '2m'],
          ['EcoSun Energie', 'Kit solaire disponible', '12m'],
          ['Support AfriZia', 'Paiement confirme', '1h'],
        ].map(([name, message, time]) => (
          <div className="chat-row" key={name}>
            <span>{name.slice(0, 1)}</span>
            <div>
              <strong>{name}</strong>
              <p>{message}</p>
            </div>
            <small>{time}</small>
          </div>
        ))}
      </div>
      <div className="chat-conversation">
        <p className="bubble seller">Prix village active pour 10 acheteurs.</p>
        <p className="bubble mine">Je valide la commande.</p>
        <div className="chat-input">Message...</div>
      </div>
    </div>
  );
}

function WaitlistPage({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <main className="waitlist-page">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="floating-particles" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} style={{ '--i': index } as CSSProperties} />
        ))}
      </div>

      <nav className="nav">
        <button onClick={onBack} className="brand brand-button">
          <img src="/afrizia-icon.jpeg" alt="AfriZia" />
          <span>AfriZia</span>
        </button>
        <button onClick={onBack} className="secondary-action nav-back">Retour au site</button>
      </nav>

      <section className="waitlist-hero">
        <div className="waitlist-card">
          <img src="/afrizia-logo.jpeg" alt="AfriZia" />
          <p className="eyebrow">Notre ecosysteme</p>
          <h1>Notre ecosysteme est encore en developpement.</h1>
          <p className="lead">
            Veuillez renseigner votre mail pour etre informe au lancement.
          </p>

          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="votre@email.com"
              required
            />
            <button type="submit">Me tenir informe</button>
          </form>

          {submitted && (
            <p className="waitlist-success">
              Merci. Votre adresse est bien prise en compte pour l information de lancement.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

function App() {
  const [activeDemo, setActiveDemo] = useState(demoScreens[0]);
  const [showWaitlist, setShowWaitlist] = useState(false);

  if (showWaitlist) {
    return <WaitlistPage onBack={() => setShowWaitlist(false)} />;
  }

  return (
    <main>
      <div className="ambient-grid" aria-hidden="true" />
      <div className="floating-particles" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} style={{ '--i': index } as CSSProperties} />
        ))}
      </div>

      <nav className="nav">
        <a href="#hero" className="brand">
          <img src="/afrizia-icon.jpeg" alt="AfriZia" />
          <span>AfriZia</span>
        </a>
        <div className="nav-links">
          <a href="#ecosystem">Nos apps</a>
          <a href="#tech">Innovation</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="start-button" onClick={() => setShowWaitlist(true)}>Je commence</button>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-media" aria-hidden="true">
        <img src="/afrizia-logo.jpeg" alt="" className="hero-logo" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="signal-line line-one" />
          <div className="signal-line line-two" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">La super app africaine</p>
          <h1>Tout-en-un pour vendre, payer, discuter et grandir.</h1>
          <p className="lead">
            AfriZia relie commerce social, wallet, messagerie et services du quotidien dans un ecosysteme fluide,
            pense pour les realites africaines et les reseaux instables.
          </p>
          <div className="hero-actions">
            <a href="#ecosystem" className="primary-action">Explorer l ecosysteme</a>
            <a href="#tech" className="secondary-action">Voir l innovation</a>
          </div>
        </div>

        <div className="phone-preview">
          <div className="phone-notch" />
          <div className="phone-screen">
          <img src="/afrizia-logo.jpeg" alt="AfriZia app" />
            <div>
              <span>AfriZia OS</span>
              <strong>Nos apps connectees</strong>
            </div>
            <div className="mini-grid">
              {apps.slice(0, 4).map((app) => (
                <img key={app.name} src={app.image} alt="" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Indicateurs techniques">
        {metrics.map(([value, label]) => (
          <div key={value} className="metric">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="immersive-lab">
        <div className="lab-copy">
          <p className="eyebrow">Demo immersive</p>
          <h2>L ecosysteme AfriZia comme si tu l avais deja en main.</h2>
          <p>
            Navigue entre les experiences cles de l app : discovery, market, paiement et chat. Le site montre le
            parcours reel qu un utilisateur peut vivre dans la super app.
          </p>
          <div className="demo-tabs">
            {demoScreens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActiveDemo(screen)}
                className={screen.id === activeDemo.id ? 'active' : ''}
              >
                {screen.name}
              </button>
            ))}
          </div>
        </div>

        <div className="holo-stage">
          <div className="holo-ring ring-a" />
          <div className="holo-ring ring-b" />
          <div className="data-beam beam-a" />
          <div className="data-beam beam-b" />

          <div className="demo-phone">
            <div className="phone-notch" />
            <DemoPhoneScreen screen={activeDemo} />
          </div>

          <div className="floating-card scan-card">
            <div className="scan-frame">
              <span />
            </div>
            <strong>Scan & Pay</strong>
          </div>

          <div className="floating-card sync-card">
            <small>Offline queue</small>
            <strong>3 actions pretes</strong>
            <div className="sync-bars">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">Pourquoi AfriZia</p>
          <h2>Une seule interface pour des usages qui etaient disperses.</h2>
        </div>
        <div className="problem-list">
          {problems.map((item, index) => (
            <div key={item} className="problem-item" style={{ '--delay': `${index * 110}ms` } as CSSProperties}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ecosystem" className="ecosystem-orbit">
        <div className="orbit-copy">
          <p className="eyebrow">Ecosysteme complet</p>
          <h2>Chaque app a son role. Ensemble, elles creent un OS de services.</h2>
          <p>
            AfriZia ne se limite pas au commerce : l ecosysteme relie apprentissage, sante, travail, mobilite,
            immobilier, conversation et paiement.
          </p>
        </div>
        <div className="orbit-map">
          <div className="orbit-core">
            <img src="/afrizia-icon.jpeg" alt="AfriZia" />
            <strong>AfriZia</strong>
          </div>
          {apps.map((app, index) => (
            <div key={app.name} className={`orbit-node node-${index + 1}`}>
              <img src={app.image} alt={app.name} />
              <span>{app.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="service-worlds">
        <div className="section-heading">
          <p className="eyebrow">Au-dela du shopping</p>
          <h2>Des univers immersifs pour les besoins reels.</h2>
        </div>
        <div className="world-grid">
          {immersiveWorlds.map(([name, text, image], index) => (
            <article key={name} className="world-card" style={{ '--delay': `${index * 90}ms` } as CSSProperties}>
              <img src={image} alt={name} />
              <div className="world-hologram">
                <span />
                <span />
              </div>
              <div>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-phone">
          <div className="experience-screen">
            <img src="/afrispay.jpeg" alt="afrisPay" />
            <div className="pay-card">
              <span>afrisPay</span>
              <strong>$15,420.50</strong>
              <small>**** **** **** 4812</small>
            </div>
          </div>
        </div>
        <div className="experience-copy">
          <p className="eyebrow">Experience fluide</p>
          <h2>Du feed video au paiement, le parcours reste naturel.</h2>
          <p>
            L utilisateur decouvre un produit, discute avec le vendeur, rejoint un achat groupe et paie depuis le meme
            ecosysteme. Moins de friction, plus de conversion.
          </p>
        </div>
      </section>

      <section id="tech" className="section innovation">
        <div className="innovation-copy">
          <p className="eyebrow">Innovation utile</p>
          <h2>Concu pour les marches ou la connexion n est jamais garantie.</h2>
          <p>
            L experience priorise la vitesse, la lisibilite et la continuite : actions en attente, interface legere,
            assets optimises et parcours mobiles directs.
          </p>
        </div>
        <div className="innovation-stack">
          {['Video discovery', 'Prix village', 'Wallet hybride', 'Chat marchand', 'Mode faible connexion'].map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section roadmap">
        <div className="section-heading">
          <p className="eyebrow">Roadmap</p>
          <h2>Une plateforme pensee pour grandir sans refaire l architecture.</h2>
        </div>
        <div className="timeline">
          {roadmap.map(([step, text]) => (
            <div key={step} className="timeline-item">
              <span>{step}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <img src="/afrizia-icon.jpeg" alt="" />
        <div>
          <p className="eyebrow">Pret pour le futur</p>
          <h2>AfriZia connecte les usages, pas seulement les ecrans.</h2>
        </div>
        <a href="mailto:contact@afrissel.app" className="primary-action">Contacter l equipe</a>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/afrizia-logo.jpeg" alt="AfriZia" />
          <div>
            <strong>AfriZia</strong>
            <p>La super app africaine, tout-en-un.</p>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h3>Explorer</h3>
            <a href="#hero">Accueil</a>
            <a href="#ecosystem">Nos apps</a>
            <a href="#tech">Innovation</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Nos apps</h3>
            <span>ABC Discovery</span>
            <span>AfriZia Market</span>
            <span>afrisPay</span>
            <span>AfriChat</span>
            <span>AfriSchool</span>
            <span>AfriMed</span>
            <span>A-Freelance</span>
            <span>Safari</span>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="mailto:contact@afrissel.app">contact@afrissel.app</a>
            <span>Kinshasa, RDC</span>
            <span>2026</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AfriZia. Tous droits reserves.</span>
          <span>Commerce social • Paiement • Conversation • Services</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
