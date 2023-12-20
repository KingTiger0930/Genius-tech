import React from "react";

// import Carousel from '../../../components/Product/Carousel';
// import Compare from '../../../components/Product/Compare.js';
// import Manufacture from '../../../components/Product/Manufacture';
import CustomerReviews from "../../../components/Product/CustomerReviews";
import ProductInfo from "../../../components/Product/ProductInfo";
import Content from "../../../components/Product/Content";
// import ContentTitle from '../../../components/Product/ContentTitle';
import HaveQuestion from "../../../components/Product/HaveQuestion";

import { connect } from "react-redux";

import { getReviewInit } from "../../../actions/review";
import { getQuestionInit } from "../../../actions/question";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const product = {
  images: [
    {
      title: "item1",
      description: "this is a good item.",
      price: 10,
      url: "/services/cabling.webp",
      alt: "Cloud Backup Solution Workstation"
    }
  ],
  title: "MANAGED CLOUD COMPUTING SERVICES .",
  rating: 0,
  info: [
    {
      title: "Brand",
      content: "Amazon Basics"
    },
    {
      title: "MaximumSurgeRating",
      content: "4320 Joules"
    },
    {
      title: "ItemWeight",
      content: "2.2 Pounds"
    },
    {
      title: "ItemDimensionsLxWxH",
      content: "12.2 x 5 x 1.29 inches"
    },
    {
      title: "NumberofPorts",
      content: 12
    },
  ],
  price: 25.61,
  about: [
    "Basic help desk support",
    "Control IT Costs",
    "Proactive Support",
    "Fast Response Times",
    "24/7 Remote support",
    "Qualified IT Specialists",
    "24/7 Remote Monitoring",
    "Antivirus Software Management﻿",
    "Workstation HW monitoring and maintenance",
    "Workstation SW deployment, patching and inventory",
    "Workstation HW deployment with recording inventory data",
    "Workstation Operating System Updates and Patch Management"
  ]
};

// const products = [
//   {
//     images: [
//       {
//         title: 'item1',
//         description: 'this is a good item.',
//         price: 10,
//         url: 'https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW',
//         alt: 'Cloud Backup Solution Workstation'
//       }
//     ],
//     title: 'PaaS.',
//     content: 'Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).',
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: 'item1',
//         description: 'this is a good item.',
//         price: 10,
//         url: 'https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW',
//         alt: 'Cloud Backup Solution Workstation'
//       }
//     ],
//     title: 'PaaS.',
//     content: 'Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).',
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: 'item1',
//         description: 'this is a good item.',
//         price: 10,
//         url: 'https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW',
//         alt: 'Cloud Backup Solution Workstation'
//       }
//     ],
//     title: 'PaaS.',
//     content: 'Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).',
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: 'item1',
//         description: 'this is a good item.',
//         price: 10,
//         url: 'https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW',
//         alt: 'Cloud Backup Solution Workstation'
//       }
//     ],
//     title: 'PaaS.',
//     content: 'Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).',
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: 'item1',
//         description: 'this is a good item.',
//         price: 10,
//         url: 'https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW',
//         alt: 'Cloud Backup Solution Workstation'
//       }
//     ],
//     title: 'PaaS.',
//     content: 'Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).',
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: 'item1',
//         description: 'this is a good item.',
//         price: 10,
//         url: 'https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW',
//         alt: 'Cloud Backup Solution Workstation'
//       }
//     ],
//     title: 'PaaS.',
//     content: 'Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).',
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: 'item1',
//         description: 'this is a good item.',
//         price: 10,
//         url: 'https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW',
//         alt: 'Cloud Backup Solution Workstation'
//       }
//     ],
//     title: 'PaaS.',
//     content: 'Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).',
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: 'item1',
//         description: 'this is a good item.',
//         price: 10,
//         url: 'https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW',
//         alt: 'Cloud Backup Solution Workstation'
//       }
//     ],
//     title: 'PaaS.',
//     content: 'Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).',
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: 'item1',
//         description: 'this is a good item.',
//         price: 10,
//         url: 'https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW',
//         alt: 'Cloud Backup Solution Workstation'
//       }
//     ],
//     title: 'PaaS.',
//     content: 'Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).',
//     rating: 0,
//     price: 25.61
//   },
// ]

const freproducts = [
  {
    title: "item1",
    description: "this is a good item.",
    price: 10,
    url: "/product/item1.jpg",
  },
  {
    title: "item2",
    description: "this is a bad item.",
    price: 15,
    url: "/product/item2.jpg",
  },
  {
    title: "item3",
    description: "this is a lolo item.",
    price: 18,
    url: "/product/item3.jpg",
  },
  {
    title: "item4",
    description: "this is a mr.new item.",
    price: 18,
    url: "/product/item4.jpg",
  }
];

const content1 = {
  list: [
    "Various types of network cabling are available in the market. A few of – which vary in frequency and characteristics, include Cat5e, Cat6 and Cat7. Businesses can use any of these network cablings as per their certain needs however the most advanced and commonly sued cable is Cat5e.",
    "The Cat5e – known as Ethernet is an upgraded version of the cat5e. with an increased bandwidth of 100 megahertz, the cable can reduce any business operational and functional issues. These cables are highly effective, reliable and durable."
  ],
  title: "What is the most common type of network cabling in network cable installation?",
  subtitle: ""
};

const maincontent = {
  list: [
    "Structured cabling",
    "PoE Lighting",
    "Wireless Networks",
    "Cabling maintenance",
    "Fiber optic installation",
    "Fibre Optic Installation",
    "Network Cabinet installation",
    "Distributed antenna systems",
    "Project inspection and testing",
    "Network equipment installation",
    "Wireless systems and troubleshooting",
    "Custom design solution and ongoing maintenance",
    "Network rack and patch panel installation services"
  ],
  title: "Network Cabling Services",
  content: "Often neglected by businesses, network cabling services in Toronto and worldwide keep your organisation connected to help you carry out business functions smoothly.Whether your employees, partners and external support teams need to access your hardware or you want to introduce video networking or CCTV, ITRM's Genius Tech cabling services can help you with all your network cabling requirements.",
  subtitle: "Network Cable Installation Services"
};

const content2 = {
  list: [
    "British Standards Institute (BSI)",
    "International Standards Organisation (ISO/IEC)",
    "European Committee for Electro Technical Standardization (CENELEC)",
    "American National Standards Institute (ANSI)"
  ],
  title: "Cabling Specifications and Standards in Network Cable Installation Services",
  subtitle: "Four major standards within network cabling are directly responsible for developing protocols. The standards are mentioned below:"
};

const content3 = {
  list: [
    "BS 6701 – 2010 – used for telecommunication cabling",
    "BS 7671:2008 + A3:2015 – this cable is used for any kind of electrical installation. ",
    "ISO 11801 -1 used for generic cabling.",
    "ISO 11801 -2 used in office premises."
  ],
  title: "How to choose the right network cabling?",
  subtitle: "Choosing the right network cabling services in Richmond Hills, Mississauga or at any other location in the globe is of utmost importance for your business. Although a cabling engineer can help you get the best cabling for your business, however, below mentioned are a few key codes that can help you select the right and correct cabling."
};

const content4 = {
  list: [],
  title: "Cable system and infrastructure constraints",
  subtitle: "There are various infrastructure constraints that may affect the network cable installation therefore it is important to carefully plan the design of the installation from start to finish."
};

const content5 = {
  list: [
    "Wall plates",
    "Cable jackets",
    "Repeaters",
    "Bridges",
    "Token ring",
    "Transition points",
    "Equipment rooms",
    "Entrance facilities",
    "Horizontal pathways",
    "Consolidation points",
    "Cross-connect facilities",
    "Telecommunications closets",
    "Vertical and horizontal backbone cables",
    "Vertical and horizontal backbone pathways"
  ],
  title: "Cabling system components",
  subtitle: "Structured cabling typically contains the following components:"
};

const content6 = {
  list: [],
  title: "What is a structured cabling system?",
  subtitle: "Structured cabling is a kind of system that provides a standardized and organized approach to the telecommunications infrastructure."
};

const content7 = {
  list: [],
  title: "Why is structured cabling system?",
  subtitle: "Structure cabling can be used for numerous purposes within a company. There are many key benefits of structured cabling for any business such as it helping organize the workplace for employees to work without any obstacles, reducing employee downtime within a company and many others…."
};

const content8 = {
  list: [
    "Troubleshoot and maintain copper cables, fibre-optic cables, etc",
    "Aid in arranging routers and hubs within office premises",
    "Building the infrastructure of telecom networks – including Wide Area Networks (WANs) and Local Area Networks (LANs)",
    "Designing and installing networks to meet a client’s bespoke requirements",
    "Explain and verify network cable systems, including specifications and instructions",
    "Install support structures, including racks, switches, etc",
    "Verify cable and pull pathways (including copper cabling)",
    "Conduct surveys across a site for customers to showcase the best location for the system and how it will integrate into the premise",
    "Oversee the progress of all cabling projects undertaken",
    "In an incredible specialised role, they must keep up to date with the latest standards within network cable installation and internet cabling installation and be aware of the best practices and techniques to use. Working with a business from the start, they will suggest the best network cabling services for a business's unique requirements"
  ],
  title: "What Is a Structured Cabling Technician?",
  subtitle: "Doesn’t matter if you need a network cabling specialist in Mississauga or any other part of the world, he will help set up, maintain and provide network cable maintenance and infrastructure for your business needs."
};


const priceList = [
  {
    title: "1 workstation $49.00 CAD",
    price: 49.00
  },
  {
    title: "2 workstations $98.00 CAD",
    price: 98.00
  },
  {
    title: "3 workstations $147.00 CAD",
    price: 147
  },
  {
    title: "4 workstations $196.00 CAD",
    price: 196
  },
  {
    title: "5 workstations $245.00 CAD",
    price: 245
  },
  {
    title: "6 workstations $294.00 CAD",
    price: 294
  },
  {
    title: "7 workstations $343.00 CAD",
    price: 343
  },
  {
    title: "8 workstations $392.00 CAD",
    price: 392
  },
  {
    title: "9 workstations $441.00 CAD",
    price: 441
  },
  {
    title: "10 workstations $490.00 CAD",
    price: 490
  },
];

function NetworkCabling({ getReviewInit, getQuestionInit }) {

  const questionRef = React.useRef(null);
  const executeScroll = () => questionRef.current.scrollIntoView({ behavior: "smooth" });
  
  React.useEffect(() => {
    getReviewInit(9);
    getQuestionInit(9);
  }, [getReviewInit, getQuestionInit]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
          <title>Genius Tech Inc</title>
          <meta name="description" content="Genius Tech Inc - Network Cabling" />
      </Helmet>
      <ProductInfo request={true} executeScroll={executeScroll} product={product} freproducts={freproducts} maincontent={maincontent} priceList={priceList} content1={content1} content2={content2} />

      {/*<Content
        value={content2}
        title="Advantages of Workstation Desktop Management!"
        subtitle="Genius Tech ranks among the top managed IT services for providing distinct IT services. Here’s why you should hire our services:"
      />*/}
      <Content
        value={content3.list}
        title={content3.title}
        subtitle={content3.subtitle}
      />
      <Content
        value={content4.list}
        title={content4.title}
        subtitle={content4.subtitle}
      />
      <Content
        value={content5.list}
        title={content5.title}
        subtitle={content5.subtitle}
      />
      <Content
        value={content6.list}
        title={content6.title}
        subtitle={content6.subtitle}
      />
      <Content
        value={content7.list}
        title={content7.title}
        subtitle={content7.subtitle}
      />
      <Content
        value={content8.list}
        title={content8.title}
        subtitle={content8.subtitle}
      />
      {/*<Carousel title='Exceptional Availability and Stable Scaling are a Must to Stay in the Game.' products={products}/>*/}
      {/*<Carousel title='Just Embarking on the AWS Migration Journey?' products={products}/>*/}

      {/*<Compare products={products}/>*/}
      <div ref={questionRef}>
        <HaveQuestion num={9} />
      </div>

      <CustomerReviews product={product} num={9} />
    </HelmetProvider>
  );
}

NetworkCabling.propTypes = {
  getReviewInit: PropTypes.any,
  getQuestionInit: PropTypes.any
};

export default connect(
  null,
  { getReviewInit, getQuestionInit }
)(NetworkCabling);