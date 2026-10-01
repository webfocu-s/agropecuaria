export const site = {
  name: "Soluções AgroPecuária",
  tagline: "Cuidamos da terra, das plantas e dos animais",
  phones: ["+244 940 440 477", "+244 926 633 699", "+244 958 168 398", "+244 956 404 018"],
  whatsapp: "+244940440477",
  address: "Rua da Amizade e Centralidade da Quilemba, bloco A 186, Arimba, Lubango",
  email: "geral@solucoesagropecuaria.co.ao",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "planos-de-negocio",
    title: "Planos de negócios e estudos de viabilidade",
    short: "Estruturamos o seu projecto agropecuário do papel ao terreno.",
    description:
      "Elaboramos planos de negócios e estudos de viabilidade técnica e económica para explorações agrícolas e pecuárias, avaliando terreno, investimento, retorno esperado e riscos antes de qualquer obra começar.",
  },
  {
    slug: "consultoria-agraria",
    title: "Consultoria agrária",
    short: "Acompanhamento técnico para decisões mais seguras na exploração.",
    description:
      "Apoio técnico contínuo na gestão da exploração agrícola: escolha de culturas, calendário agrícola, uso do solo e correcção de práticas que limitam a produtividade.",
  },
  {
    slug: "veterinaria-nutricao",
    title: "Veterinária e nutrição animal",
    short: "Saúde e alimentação do efectivo, do curral ao aviário.",
    description:
      "Cuidados veterinários, planos de vacinação e programas de nutrição ajustados a cada espécie e fase de produção, para reduzir perdas e melhorar o rendimento do rebanho ou do plantel.",
  },
  {
    slug: "fitoterapia-fitosanidade",
    title: "Fitoterapia e fitossanidade",
    short: "Plantas e culturas protegidas com tratamentos adequados.",
    description:
      "Diagnóstico e tratamento fitossanitário das culturas, incluindo soluções fitoterapêuticas, para prevenir pragas e doenças e manter a plantação saudável.",
  },
  {
    slug: "material-agropecuario",
    title: "Venda de material agropecuário",
    short: "Equipamento e insumos para o dia a dia da exploração.",
    description:
      "Fornecimento de material e insumos agropecuários seleccionados para as necessidades reais de cada exploração, com orientação sobre o que usar e quando.",
  },
  {
    slug: "incubadoras",
    title: "Construção e manutenção de incubadoras",
    short: "Instalações de incubação construídas e mantidas por nós.",
    description:
      "Construção, reparação e manutenção periódica de incubadoras avícolas, garantindo condições estáveis de temperatura e humidade para melhores taxas de eclosão.",
  },
  {
    slug: "tanques-mangas",
    title: "Construção de tanques e mangas de vacinação",
    short: "Infra-estruturas para maneio e vacinação do gado.",
    description:
      "Projecto e construção de tanques e mangas de vacinação dimensionados ao efectivo da exploração, facilitando um maneio sanitário seguro e eficiente do gado.",
  },
  {
    slug: "jardinagem",
    title: "Jardinagem",
    short: "Espaços verdes cuidados com o mesmo rigor técnico.",
    description:
      "Concepção, plantação e manutenção de jardins e espaços verdes, residenciais ou institucionais, com plantas adequadas ao clima e ao terreno.",
  },
];
