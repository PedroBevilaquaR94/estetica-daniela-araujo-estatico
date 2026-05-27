// Procedure data for modals
const procedures = {
  drenagem: {
    title: "Drenagem linfática",
    description: "É uma técnica terapêutica essencial para promover o bem-estar, auxiliando na eliminação de toxinas e na redução do inchaço. Experimente a sensação revitalizante e descubra os benefícios para a saúde e beleza do seu corpo.\n\nBenefícios:\n• Eliminação de toxinas\n• Redução do inchaço\n• Melhora da circulação linfática\n• Sensação de leveza e bem-estar\n• Auxílio no emagrecimento\n• Melhora da aparência da pele\n\nRecomendamos sessões regulares para manter os resultados e promover o bem-estar contínuo.",
    image: "images/drenagem.jpg"
  },
  escleroterapia: {
    title: "Escleroterapia",
    description: "É um tratamento eficaz para eliminar varizes e vasinhos, melhorando a aparência das pernas e também a circulação sanguínea. Sinta-se confiante para mostrar suas pernas, procedimento seguro e minimamente invasivo.\n\nBenefícios:\n• Eliminação de varizes e vasinhos\n• Melhora da circulação sanguínea\n• Pernas com aparência mais saudável\n• Procedimento seguro e minimamente invasivo\n• Resultados progressivos\n• Aumento da autoconfiança\n\nO tratamento é realizado em sessões, com resultados visíveis progressivamente.",
    image: "images/escleroterapia.jpg"
  },
  lipoenzimatica: {
    title: "Lipo enzimática",
    description: "Reduza medidas, modele o corpo com segurança e eficácia. Uma abordagem minimamente invasiva que utiliza enzimas para quebrar células de gordura, promovendo a redução de medidas de forma natural e gradual.\n\nBenefícios:\n• Redução de medidas localizada\n• Modelagem corporal\n• Procedimento minimamente invasivo\n• Resultados naturais e graduais\n• Segurança comprovada\n• Melhora do contorno corporal\n\nOs resultados são progressivos e potencializados com hábitos saudáveis.",
    image: "images/lipoenzimatica.jpg"
  },
  bioestimulador: {
    title: "Bioestimulador de colágeno",
    description: "Revitalize sua pele, aumentando a firmeza e reduzindo sinais de envelhecimento. Descubra a juventude através da tecnologia que estimula a produção natural de colágeno, melhorando a textura e elasticidade da pele.\n\nBenefícios:\n• Aumento da firmeza da pele\n• Estímulo à produção de colágeno\n• Redução de sinais de envelhecimento\n• Melhora da textura e elasticidade\n• Resultados naturais e duradouros\n• Rejuvenescimento progressivo\n\nOs resultados são progressivos e podem durar até 2 anos.",
    image: "images/bioestimulador.jpg"
  },
  endermoterapia: {
    title: "Endermoterapia",
    description: "Combata a celulite e tonifique seu corpo com esta técnica minimamente invasiva. Aproveite os benefícios de um tratamento que melhora a circulação, reduz o inchaço e promove uma pele mais lisa e firme. Experimente a transformação.\n\nBenefícios:\n• Combate à celulite\n• Tonificação corporal\n• Melhora da circulação\n• Redução do inchaço\n• Pele mais lisa e firme\n• Técnica minimamente invasiva\n\nRecomendamos um protocolo de sessões para resultados mais expressivos.",
    image: "images/endermoterapia.jpg"
  },
  estrias: {
    title: "Tratamento para estrias",
    description: "Minimize a aparência das estrias e restaure a beleza natural da sua pele. Com técnicas avançadas e cuidados personalizados, oferecemos soluções eficazes para rejuvenescer sua pele, melhorando a textura e a elasticidade.\n\nBenefícios:\n• Redução da aparência das estrias\n• Melhora da textura da pele\n• Aumento da elasticidade\n• Rejuvenescimento da pele\n• Cuidados personalizados\n• Resultados progressivos\n\nO tratamento é adaptado ao tipo e estágio das estrias de cada cliente.",
    image: "images/estrias.jpg"
  },
  limpeza: {
    title: "Limpeza de pele",
    description: "Purifique e renove sua pele com um tratamento que remove impurezas e controla a oleosidade. Sinta o frescor de um rosto mais limpo, luminoso e saudável, pronto para enfrentar o dia com confiança e beleza natural.\n\nBenefícios:\n• Remoção profunda de impurezas\n• Controle da oleosidade\n• Pele mais luminosa e saudável\n• Desobstrução dos poros\n• Melhora da textura da pele\n• Preparação para outros tratamentos\n\nRecomendamos realizar a limpeza de pele regularmente para manter a saúde e vitalidade da sua pele.",
    image: "images/limpeza.jpg"
  },
  capilar: {
    title: "Tratamento capilar",
    description: "Revitalize seus fios com cuidados especializados que restauram a saúde do cabelo. Experimente soluções personalizadas para fortalecer, e combater a queda, revelando uma cabeleira mais forte.\n\nBenefícios:\n• Fortalecimento dos fios\n• Aumento de volume e densidade\n• Cabelos mais saudáveis e brilhantes\n• Combate à queda capilar\n• Resultados progressivos\n• Tratamento personalizado\n\nOs resultados começam a aparecer após 2-3 meses de tratamento regular.",
    image: "images/capilar.jpg"
  },
  toxina: {
    title: "Toxina botulínica",
    description: "Suavize linhas de expressão e rejuvenesça sua aparência com precisão e segurança. Este tratamento minimamente invasivo oferece resultados naturais, reduzindo rugas e prevenindo o envelhecimento precoce.\n\nBenefícios:\n• Suavização de linhas de expressão\n• Redução de rugas\n• Prevenção de novas rugas\n• Resultados naturais e harmoniosos\n• Procedimento minimamente invasivo\n• Recuperação rápida que requer poucos cuidados\n\nOs resultados aparecem gradualmente em 3-7 dias e duram aproximadamente 3-4 meses.",
    image: "images/toxina.jpg"
  },
  manchas: {
    title: "Protocolo para manchas",
    description: "Ilumine e uniformize o tom da sua pele com tratamentos avançados contra manchas. Nossa abordagem personalizada combina técnicas e produtos de ponta para minimizar a aparência de discromias, para uma pele radiante e homogênea.\n\nBenefícios:\n• Clareamento de manchas\n• Uniformização do tom da pele\n• Pele mais radiante e luminosa\n• Tratamento personalizado\n• Prevenção de novas manchas\n• Resultados progressivos\n\nO protocolo é adaptado ao tipo de mancha e tom de pele de cada cliente.",
    image: "images/manchas.jpg"
  },
  reducao: {
    title: "Redução de medidas",
    description: "Esculpa seu corpo e alcance a silhueta desejada com nosso protocolo eficaz e personalizado. Utilizamos técnicas avançadas para reduzir gordura localizada, melhorar o contorno corporal e potencializar a firmeza da pele.\n\nBenefícios:\n• Redução de gordura localizada\n• Melhora do contorno corporal\n• Pele mais firme\n• Resultados visíveis\n• Tratamento não invasivo\n• Protocolo personalizado\n\nOs tratamentos são complementados com orientações de cuidados em casa para potencializar os resultados.",
    image: "images/reducao.jpg"
  },
  glutea: {
    title: "Harmonização glútea",
    description: "Realce a beleza e o contorno dos seus glúteos com nosso tratamento especializado. Oferecemos soluções inovadoras para aumentar o volume, melhorar a forma e a textura da pele, promovendo um aspecto mais firme e jovial.\n\nBenefícios:\n• Aumento de volume\n• Melhora da forma e contorno\n• Pele mais firme\n• Textura aprimorada\n• Resultados naturais\n• Procedimento personalizado\n\nO tratamento é adaptado às necessidades e objetivos de cada cliente.",
    image: "images/glutea.jpg"
  }
};

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = !mobileNav.classList.contains('hidden');
  if (isOpen) {
    mobileNav.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  } else {
    mobileNav.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link-mobile').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// Modal functions
function openModal(key) {
  const procedure = procedures[key];
  if (!procedure) return;

  document.getElementById('modalTitle').textContent = procedure.title;
  document.getElementById('modalDescription').textContent = procedure.description;
  document.getElementById('modalImage').src = procedure.image;
  document.getElementById('modalImage').alt = procedure.title;

  const whatsappMsg = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${procedure.title} na Clínica Daniela Araujo.`);
  document.getElementById('modalWhatsApp').href = `https://wa.me/5543991503252?text=${whatsappMsg}`;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Contact form - redirect to WhatsApp
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  const whatsappMessage = encodeURIComponent(
    `Olá, meu nome é ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`
  );
  window.open(`https://wa.me/5543991503252?text=${whatsappMessage}`, '_blank');
  e.target.reset();
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});
