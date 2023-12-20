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
// import { parse } from 'dotenv';
import PropTypes from "prop-types";

import parse from "html-react-parser";
const product = {
  images: [
    {
      title: "item1",
      description: "this is a good item.",
      price: 10,
      url: "/services/server.webp",
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
    "Server management deals with managing software, hardware, backups and security.",
    "It helps minimize server downtimes or slow times.",
    "It helps develop an effective and secure server environment.",
    "It will help you monitor and maintain servers to ensure peak performance.",
    "Server management ensures servers can efficiently meet the needs of the business as it evolves.",
    "It helps enhance end-user experience and maximizes business efficiency.",
    "Managed implement anti-virus software and monitoring."
  ],
  title: "Benefits of Server Management Services for Your Business!",
  subtitle: "Server Management services encompass everything a business needs to manage servers for a long period of time. Its benefits include:"
};

const maincontent = {
  list: [
    "Servers and system security",
    "Troubleshooting",
    "Cloud Monitoring",
    "Setup new software",
    "Capacity planning",
    "Service monitoring",
    "Server setup tasks",
    "Server optimization",
    "Web server monitoring",
    "Service Level Management",
    "Regular server maintenance",
    "End-user experience monitoring",
    "Alert on various errors and incidents",
    "Monitor servers’ performance and status"
  ],
  title: "Server Management",
  content: parse("Recording and managing business-critical information is one of the trickiest business tasks. Businesses always are at risk of losing data any time without even recognizing it. Moreover, there are always chances of outside or cyber-attacks and malware that may affect, steal or alter your data. <br /><br />To reduce such challenges and to achieve end results businesses need the help of a professional server management company. In Brampton and other locations across Canada, you can hire Genius Tech to help you obtain result-oriented server management services for your business."),
  subtitle: "Server Management Features"
};

const content2 = {
  list: [
    "Proactive Support",
    "Server migration",
    "Vulnerability scans",
    "Web server support",
    "Database service support",
    "Control panel support",
    "Linux server management",
    "Strengthens Network Security",
    "Server administration services",
    "All-in-one server management services"
  ],
  title: "Advantages of Server Management Services",
  subtitle: "Here’s why you should hire Genius Tech for its Server Management Services:"
};

const content3 = {
  list: [
    "Control IT Costs",
    "Fast Response Times",
    "24/7 Remote support",
    "Qualified IT Specialists",
    "24/7 Remote Monitoring",
    "Round the clock support",
    "Enhanced end-user experience",
    "Quick turnaround time",
    "Balanced and controlled server environment"
  ],
  title: "Ultimate Benefits of Our Server Management Services for Your Business",
  subtitle: "Server Management Services is your go-to service to make sure that your business IT infrastructure operates without any obstacle."
};

const content4 = {
  list: [],
  title: "Why Professional Server Management Company?",
  subtitle: "Want to take away the pain of managing infrastructure so that your IT department can focus on creating a competitive advantage? Genius Tech helps you to run your business smoothly and make you free to concentrate on your business and increase productivity. Hire our tailored managed server services. In Orangeville, Brampton and any other spot across Canada, feel free to get in touch with us."
};

const priceList = [
  {
    title: "1 Server $249.00 CAD",
    price: 249.00
  },
  {
    title: "2 Servers $498.00 CAD",
    price: 498.00
  },
  {
    title: "3 Servers $747.00 CAD",
    price: 747
  },
  {
    title: "4 Servers $996.00 CAD",
    price: 996
  },
  {
    title: "5 Servers $1,245.00 CAD",
    price: 1245
  },
  {
    title: "6 Servers $1,494.00 CAD",
    price: 1494
  },
  {
    title: "7 Servers $1,743.00 CAD",
    price: 1743
  },
  {
    title: "8 Servers $1,992.00 CAD",
    price: 1992
  },
  {
    title: "9 Servers $2,241.00 CAD",
    price: 2241
  },
  {
    title: "10 Servers $2,490.00 CAD",
    price: 2490
  },
];

function ServerManage({ getReviewInit, getQuestionInit }) {

  const questionRef = React.useRef(null);
  const executeScroll = () => questionRef.current.scrollIntoView({ behavior: "smooth" });

  React.useEffect(() => {
    getReviewInit(3);
    getQuestionInit(3);
  }, [getReviewInit, getQuestionInit]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductInfo executeScroll={executeScroll} product={product} freproducts={freproducts} maincontent={maincontent} priceList={priceList} content1={content1} content2={content2} />

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
      
      {/*<Carousel title='Exceptional Availability and Stable Scaling are a Must to Stay in the Game.' products={products}/>*/}
      {/*<Carousel title='Just Embarking on the AWS Migration Journey?' products={products}/>*/}

      {/*<Compare products={products}/>*/}
      <div ref={questionRef}>
        <HaveQuestion num={3} />
      </div>

      <CustomerReviews product={product} num={3} />
    </>
  );
}

ServerManage.propTypes = {
  getReviewInit: PropTypes.any,
  getQuestionInit: PropTypes.any
};

export default connect(
  null,
  { getReviewInit, getQuestionInit }
)(ServerManage);