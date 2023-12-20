import React from "react";

// import Carousel from '../../../components/Product/Carousel';
// import Compare from '../../../components/Product/Compare.js';
// import Manufacture from '../../../components/Product/Manufacture';
import CustomerReviews from "../../../components/Product/CustomerReviews";
import ProductInfo from "../../../components/Product/ProductInfo";
import Content from "../../../components/Product/Content";
import ContentReason from "../../../components/Product/ContentReason";
// import ContentTitle from '../../../components/Product/ContentTitle';
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
      url: "/services/cloudworkstation.png",
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
    "Manage and control all forms of data protection.",
    "Use your data globally with android and ios apps.",
    "It enables remote programs and functions from anywhere.",
    "All of your data is securely stored in a single unified network.",
    "backups, or perhaps a combination – according to your needs.",
    "Cloud backup and management help maintain consistency between users.",
    "Backup each and everything including documents, files, folders, disks and others.",
    "Flexibility in cloud backups options including differential, full image, or incremental"
  ],
  title: "Benefits of Cloud Backup and Management Services for Your Business!",
  subtitle: "To ensure you have complete control and inclusive coverage of all of your data and records your business needs cloud computing services. In Ontario and businesses operating worldwide will be able to:"
};

const maincontent = {
  list: [
    "Backup and archive",
    "Automatic backups",
    "Incremental backups",
    "Remote access",
    "Flexible storage",
    "Rapid data recovery",
    "Reliable disaster recovery",
    "Cloud to cloud backup",
    "Develop, move and manage data",
    "Safest and secure content delivery",
    "Access, utilize and restore data",
    "Store and manage large media files"
  ],
  title: "Cloud Workstation Backup and Management",
  content: "Businesses always are at risk of data breach irrespective of how innovative their IT infrastructure is. Thus to reduce the risk of a data breach within their business they need cloud workstation services. In Markham and other locations in Canada, organizations trust us for our managed private cloud computing services.",
  subtitle: "Cloud Workstation Backup and Management Features",
  subcontent: "Genius Tech provides a plethora of cloud computing services for startups. In Brampton, and other locations you will get complete solutions to store, access, monitor, analyze and use your data to reduce costs and maximize end results."
};

const content2 = {
  list: [
    "Hybrid cloud architectue",
    "Redundant backups",
    "Ransomware protection",
    "Military-grade encryption"
  ],
  title: "Advantages of Cloud Backup and Management Services",
  subtitle: "Cloud backup and management services are essential for any business to operate smoothly. Here’s what we do offer to our clients:"
};

const content3 = {
  list: [
    "Scalability",
    "Reduced costs",
    "Data protection",
    "Data is accessible",
    "Maximized results",
    "Better data security",
    "Enhance productivity",
    "Improved performance",
    "Save money and resources",
    "Protection from cyberattacks"
  ],
  title: "Ultimate Benefits of Our Cloud Backup and Management Services for Your Business",
  subtitle: "Cloud backup and management services from Genius Tech will help you in numerous ways including:"
};

const content4 = {
  list: [
    "Rapid recovery",
    "LocalSpeedVault	",
    "Appliance-free backup"
  ],
  title: "Why Cloud Workstation Backup and Management?",
  subtitle1: "Workstation data loss can mean days of downtime and additional costs to re-create information or re-install utilities. Businesses need to protect cloud workstation management to help reduce further challenges whether they are operating on a global scale or particularly in Ontario. Managed backup services – most significantly central dashboard provides site-wide deployment, statuses, and alerts to keep you informed. Our device-based pricing is designed to simplify budgeting while offering affordable protection.",
  subtitle2: "Backup and verification operations can create significant increases in network traffic. This can lead to reduced performance of your servers and all of the network segments involved in the backup. One solution to the problem, of course, is scheduling backups at a time when network usage is low, like before or after hours. Since this may not always be possible, you can perform backups in smaller incremental steps during normal hours."
};

const priceList = [
  {
    title: "1 workstation $19.50 CAD",
    price: 19.50
  },
  {
    title: "2 workstations $39.00 CAD",
    price: 39.00
  },
  {
    title: "3 workstations $58.50 CAD",
    price: 58.5
  },
  {
    title: "4 workstations $78.00 CAD",
    price: 78
  },
  {
    title: "5 workstations $97.50 CAD",
    price: 97
  },
  {
    title: "6 workstations $117.00 CAD",
    price: 117
  },
  {
    title: "7 workstations $136.50 CAD",
    price: 136.5
  },
  {
    title: "8 workstations $156.00 CAD",
    price: 156
  },
  {
    title: "9 workstations $175.50 CAD",
    price: 175.5
  },
  {
    title: "10 workstations $195.00 CAD",
    price: 195.5
  },
];

function CloudWorkStation({ getReviewInit, getQuestionInit }) {

  const questionRef = React.useRef(null);
  const executeScroll = () => questionRef.current.scrollIntoView({ behavior: "smooth" });

  React.useEffect(() => {
    getReviewInit(7);
    getQuestionInit(7);
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

      <ContentReason
        value={content4.list}
        title={content4.title}
        subtitle1={content4.subtitle1}
        subtitle2={content4.subtitle2}
      />

      {/*<Carousel title='Exceptional Availability and Stable Scaling are a Must to Stay in the Game.' products={products}/>*/}
      {/*<Carousel title='Just Embarking on the AWS Migration Journey?' products={products}/>*/}

      {/*<Compare products={products}/>*/}
      <div ref={questionRef}>
        <HaveQuestion num={7} />
      </div>

      <CustomerReviews product={product} num={7} />
    </>
  );
}

CloudWorkStation.propTypes = {
  getReviewInit: PropTypes.any,
  getQuestionInit: PropTypes.any
};


export default connect(
  null,
  { getReviewInit, getQuestionInit }
)(CloudWorkStation);