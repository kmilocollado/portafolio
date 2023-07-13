import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    php,
    wordpress,
    git,
    nativo,
    auge,
    jydsolutions,
    informagestudios,
    sporcks,
    wilier,
    riverspencer,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Acerca de mí",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Desarrollo Web",
      icon: web,
    },
    {
      title: "Diseño Gráfico",
      icon: mobile,
    },
    {
      title: "Marketing Digital",
      icon: backend,
    },
    {
      title: "Administración Web",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Auge",
      company_name: "Trabajando con HTML, CSS y Javascript en el generador de sitios estáticos HUGO",
      icon: auge,
      iconBg: "#383E56",
      date: "Marzo 2018 - Abril 2019",
      points: [
        "https://www.motorandtire.com.mx/",
        "https://www.llantyparsanfco.com",
        "https://www.centraldellantas.com/"
      ],
    },
    {
      title: "JYD Solutions",
      company_name: "Desarrolador web y analista Seo con Wordpress",
      icon: jydsolutions,
      iconBg: "#E6DEDD",
      date: "Enero 2020 - Febrero 2021",
      points: [
        "https://be-local.life/", 
        "https://www.shiru.com/",
        "https://www.cochesbbb.com/"
      ],
    },
    {
      title: "Infromage Studios",
      company_name: "Creación de Temas y Plugins para Wordpress",
      icon: informagestudios,
      iconBg: "#E6DEDD",
      date: "Enero 2022 - Presente",
      points: [
        "https://sporcks.com/",
        "https://www.adeslasdental.es/",
        "https://muralesundanet.ovh/"
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Sporcks",
      description:
        "Somos la marca de calcetines que te hace sentir vivo. Ofrecemos diseño, alto rendimiento y comodidad para los atletas que no pueden (ni quieren) parar. Los enganchados a “los imposibles”, hasta que dejan de serlo.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: sporcks,
      source_code_link: "https://sporcks.com/",
    },
    {
      name: "Wilier",
      description:
        "Una vez que descubres la pasión por el ciclismo, nada volverá a ser lo mismo. En Wilier compartimos esa afición y ese deseo de expandir horizontes, creando bicicletas que brindan el balance perfecto entre tradición e innovación.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: wilier,
      source_code_link: "https://www.wiliercr.com/",
    },
    {
      name: "River Spencer",
      description:
        "Rivers Spencer is a nationally and regionally published interior designer, design influencer and tastemaker based in New Orleans, Louisiana. Rivers blends elements of classic design juxtaposed with clean lines and modern accents.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: riverspencer,
      source_code_link: "https://riversspencer.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };