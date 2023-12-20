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

import parse from "html-react-parser";

const product = {
  images: [
    {
      title: "item1",
      description: "this is a good item.",
      price: 10,
      url: "/onsite/cloud-services.svg",
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
    "All-in-one IT services.",
    "Guaranteed customer satisfaction.",
    "No compromise on confidentiality.",
    "Secured, safe and credible IT services.",
    "24/7 available customer support service.",
    "IT consulting and guidance throughout the process.",
    "Industry-leading IT professionals, that are experts in various domains.",
    "Highly experienced team of IT technicians that are fully licensed."
  ],
  title: "Ultimate Benefits of Hiring Our Top-Notch Onsite IT Support Service!",
  subtitle: parse(`Businesses to remain competitive must keep doing what their customers are paying them for. Thus, to make sure the consistency and the constant productivity of work they need to get ultimate onsite technical support services. In Toronto and other cities’ startups and small scale, businesses trust us for our onsite technical support.<br /><br /> 
    
    One of the most tangible advantages of onsite IT support is that it helps resolve hardware problems for a company. Your laptop or server might need physical attention any time and somebody has to be there in person. Thus, the ultimate solution for such challenges is onsite IT support services for businesses. In Newmarket and across Canada you can contact us for our premium onsite IT services.<br /><br />

    Genius Tech onsite technical support is a must for your business if you want to stay constructive, deliver projects on time and grow your organization. Whether you operate in Oakville, Newmarket or in Brampton, Onsite IT support can help you process your business functions smoothly.<br /><br />

    Genius Tech’s Onsite IT Support Services in Georgina, Oakville and other regions is more than an IT service provider. We envisioned investing in the security and success of all the startup and medium level businesses with our integrated IT and technology consulting services.<br /><br />
    
    Getting hired our IT experts, you will experience:`)
};

const maincontent = {
  list: [
    {
      title: "On-Site Field Support",
      subtitle: "Our skilled and highly trained technicians are available 24/7 to visit your business or place of residence to deliver highly effective on-site services including:",
      list: [
        "CCTV Install",
        "IDF installation",
        "MDF installation",
        "Cabling maintenance",
        "Fibre Optic Installation",
        "Network Cabinet installation",
        "Datacenter and Data Network cabling",
        "Network cable run and termination services",
        "Network closet racking and cabling services",
        "Data Centre Installation and relocation services",
        "Network rack and patch panel installation services"
      ]
    },
    {
      title: "Deployment & Configuration.",
      subtitle: "Whether you want our Deployment & Configuration Center to work in-house or on-site – depending on your requirements, our experts will accommodate a broad array of customized services. A very few of our services include:",
      list: [
        "Lease refresh",
        "Rollout",
        "Version tracking",
        "Uninstalling & retiring of computers",
        "Activation, Deactivation, Installation, Adapting & Updating of all systems"
      ]
    },
    {
      title: "Data Migration.",
      subtitle: "Trusted for providing transparent and secure IT services, we will help you transfer your data or software from one location to another all securely and safely.",
      list: [
        "Data Migration",
        "Cloud Migration",
        "Storage Migration",
        "Domain Migration",
        "Application Migration"
      ]
    }
  ],
  title: "Onsite IT Support Services",
  content: "Genius Tech help businesses with a wide array of IT services",
  subtitle: "Our Onsite IT Services Feature!"
};

const content2 = {
  list: [
    "Support packages.",
    "Ad-hoc.",
    "Technical assistance.",
    "On-call services."
  ],
  title: "Why Our Service?",
  subtitle: "Genius Tech offers its on-site IT services that can best meet your distinct business needs. Our on-site Managed IT services offer that no one will offer you – including:"
};

const content3 = {
  list: [
    {
      title: "What you will obtain:",
      subtitle: "",
      list: [
        "Effective and diverse IT services.",
        "Flexible and robust IT services with the greatest benefits.",
        "Real-time output and result."
      ]
    },
    {
      title: "Hiring Our On-Site IT Services, You Will Get:",
      subtitle: "",
      list: [
        "Data Migration.",
        "On-Site Field Support",
        "Deployment & Configuration.",
        "Provide reliable and result-driven IT solutions to help you grow.",
        "Fast, effective and result-oriented IT services to maximize business growth.",
        "Customized Onsite IT Support Services to stay ahead in the competition.",
        "Our IT experts will assess your IT issues and thoroughly evaluate your IT infrastructure to develop a better understanding."
      ]
    }
  ],
  title: "Why Onsite IT Support Services for Business?",
  subtitle: parse("Most of the businesses are operating with a perfectly operational IT system, however, there comes a time when the system instantly crashes and the entire business goes into shutting down – this is the time when you need Onsite IT Support Services. In Oakville and anywhere you operate your business, feel free to get in touch with us for our support. <br /><br />")
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

function Onsite({ getReviewInit, getQuestionInit }) {

  const questionRef = React.useRef(null);
  const executeScroll = () => questionRef.current.scrollIntoView({behavior: "smooth"});

  React.useEffect(() => {
    getReviewInit(5);
    getQuestionInit(5);
  }, [getReviewInit, getQuestionInit]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
          <title>Genius Tech Inc</title>
          <meta name="description" content="Genius Tech Inc - Onsite" />
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

      {/*<Carousel title='Exceptional Availability and Stable Scaling are a Must to Stay in the Game.' products={products}/>*/}
      {/*<Carousel title='Just Embarking on the AWS Migration Journey?' products={products}/>*/}

      {/*<Compare products={products}/>*/}
      <div ref={questionRef}>
        <HaveQuestion num={5} />
      </div>

      <CustomerReviews product={product} num={5} />
    </HelmetProvider>
  );
}

Onsite.propTypes = {
  getReviewInit: PropTypes.any,
  getQuestionInit: PropTypes.any
};


export default connect(
  null,
  { getReviewInit, getQuestionInit }
)(Onsite);