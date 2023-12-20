import React from "react";

import CustomerReviews from "../../../components/Product/CustomerReviews";
import ProductInfo from "../../../components/Product/ProductInfo";
import Content from "../../../components/Product/Content";
import HaveQuestion from "../../../components/Product/HaveQuestion";

import { connect } from "react-redux";

import { getReviewInit } from "../../../actions/review";
import { getQuestionInit } from "../../../actions/question";
import PropTypes from "prop-types";

const product = {
  images: [
    {
      title: "item1",
      description: "this is a good item.",
      price: 10,
      url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
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
//         title: "item1",
//         description: "this is a good item.",
//         price: 10,
//         url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
//         alt: "Cloud Backup Solution Workstation"
//       }
//     ],
//     title: "PaaS.",
//     content: "Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).",
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: "item1",
//         description: "this is a good item.",
//         price: 10,
//         url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
//         alt: "Cloud Backup Solution Workstation"
//       }
//     ],
//     title: "PaaS.",
//     content: "Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).",
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: "item1",
//         description: "this is a good item.",
//         price: 10,
//         url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
//         alt: "Cloud Backup Solution Workstation"
//       }
//     ],
//     title: "PaaS.",
//     content: "Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).",
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: "item1",
//         description: "this is a good item.",
//         price: 10,
//         url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
//         alt: "Cloud Backup Solution Workstation"
//       }
//     ],
//     title: "PaaS.",
//     content: "Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).",
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: "item1",
//         description: "this is a good item.",
//         price: 10,
//         url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
//         alt: "Cloud Backup Solution Workstation"
//       }
//     ],
//     title: "PaaS.",
//     content: "Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).",
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: "item1",
//         description: "this is a good item.",
//         price: 10,
//         url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
//         alt: "Cloud Backup Solution Workstation"
//       }
//     ],
//     title: "PaaS.",
//     content: "Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).",
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: "item1",
//         description: "this is a good item.",
//         price: 10,
//         url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
//         alt: "Cloud Backup Solution Workstation"
//       }
//     ],
//     title: "PaaS.",
//     content: "Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).",
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: "item1",
//         description: "this is a good item.",
//         price: 10,
//         url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
//         alt: "Cloud Backup Solution Workstation"
//       }
//     ],
//     title: "PaaS.",
//     content: "Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).",
//     rating: 0,
//     price: 25.61
//   },
//   {
//     images: [
//       {
//         title: "item1",
//         description: "this is a good item.",
//         price: 10,
//         url: "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW",
//         alt: "Cloud Backup Solution Workstation"
//       }
//     ],
//     title: "PaaS.",
//     content: "Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).",
//     rating: 0,
//     price: 25.61
//   },
// ];

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
  ],
  title: "",
  subtitle: ""
};

const maincontent = {
  list: [
  ],
  title: "Ourservice",
  subtitle: ""
};

const content2 = {
  list: [
  ],
  title: "",
  subtitle: ""
};

const content3 = {
  list: [
  ],
  title: "",
  subtitle: ""
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

function Ourservice({getReviewInit, getQuestionInit}) {

  React.useEffect(() => {
    getReviewInit(6);
    getQuestionInit(6);
  }, [getReviewInit]);

  return (
    <>
      <ProductInfo product={product} freproducts={freproducts} maincontent={maincontent} priceList={priceList} content1={content1} content2={content2} />

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
      <HaveQuestion num={6}/>
      
      <CustomerReviews product={product} num={6}/>
    </>
  );
}

Ourservice.propTypes = {
  getReviewInit: PropTypes.any,
  getQuestionInit: PropTypes.any
};


export default connect(
  null,
  { getReviewInit, getQuestionInit }
)(Ourservice);