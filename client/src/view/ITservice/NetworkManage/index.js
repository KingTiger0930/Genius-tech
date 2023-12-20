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

const product = {
  images: [
    {
      title: "item1",
      description: "this is a good item.",
      price: 10,
      url: "/services/network.webp",
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
    "Improved IT environment.",
    "Mitigate potential risks or threats.",
    "Monitor for potential malfunctions or threats.",
    "Back up your important records and business data.",
    "Erase your vulnerabilities and buffer your security.",
    "Strengthen the efficiency of your entire IT infrastructure.",
    "Network Management Services helps improve operations.",
    "It also helps improve security by taking security in a single and unified network."
  ],
  title: "Benefits of Network Management Services for Your Business!",
  subtitle: "Network Management Services will help you strengthen your business connection to help you carry out your business activities and processes without any obstacles. Below are a few of the ultimate benefits you will get hiring network management for your business:"
};

const maincontent = {
  list: [
    "Wireless",
    "Load Balancers",
    "Demand Mapping",
    "Routers and Switches",
    "WAN, LAN, SD-WLAN",
    "Capacity & performance",
    "Providing data storage",
    "Providing web hosting",
    "Connectivity and bandwidth",
    "Managing installations and upgrades",
    "Providing help desk technical support"
  ],
  title: "Network Management",
  content: "Poorly managed network security may risk breaching network privacy within a business. Thus, businesses operating in any industry need to ensure best practice standards as well as compliance with regulatory requirements to remain competitive. It also helps enhance the network privacy of your organization and reassure your employees that they can use their devices without any obstacles and doubt of privacy breach. Whether you operate on a global scale, in Canada or particularly in Ontario, network management experts at Genius Tech will help you ensure the best network security within your business. Our network management solutions will help enhance your network operations, unlock capacity, minimize operational costs and maximize the revenue of your company.",
  subtitle: "Network Management features"
};

const content2 = {
  list: [
    "Network provisioning",
    "Network monitoring and testing",
    "Performance monitoring and reporting",
    "Network security and risk mitigation"
  ],
  title: "Advantages of Network Management Services",
  subtitle: "Here are the optimal advantages of Genius Tech’s Network Management Services:"
};

const content3 = {
  list: [
    "Controlled IT Costs",
    "Fast Response Times",
    "Quick turnaround time",
    "24/7 Remote Monitoring",
    "Enhanced end-user experience",
    "Minimized operational costs",
    "Focus on day-to-day challenges",
    "Great and satisfactory end results",
    "Maximized efficiency, productivity and results."
  ],
  title: "Ultimate Benefits of Our Network Management Services for Your Business",
  subtitle: "For any business operating at a small or large scale, it is essential to get a comprehensive set of network security services. Toronto and other cities’ businesses value us for our exceptional network management services to help them overcome challenges and achieve their objectives."
};

const content4 = {
  list: [
    "Wireless",
    "Load Balancers",
    "Demand Mapping",
    "WAN, LAN, SD-WLAN",
    "Routers and Switches",
    "Capacity & performance"
  ],
  title: "Why Genius Tech Network Management Services?",
  subtitle: "Today's businesses operate in a vibrant and multifaceted IT environment. Managed network management services are the ultimate solution for providing support for a business’s IT infrastructure. You can now optimize your network operations, unlock capacity, and contain costs whether operating your business in Canada or particularly in Georgina. Managed network management service at Genius Tech provide you with a comprehensive portfolio of managed services, network operations centers (NOC), and the right tools to monitor and manage your network. Our standard-based approach and strategic planning enable organizations of all sizes to ensure data integrity and enhance mission-critical systems. Our network management experts design, implement and integrate your existing network into a completely new network that fits into your business. Our offerings include:"
};

const priceList = [
  {
    title: "1 network device $299.00 CAD",
    price: 299.00
  },
  {
    title: "2 network devices $598.00 CAD",
    price: 598.00
  },
  {
    title: "3 network devices $897.00 CAD",
    price: 897
  },
  {
    title: "4 network devices $1,196.00 CAD",
    price: 1196
  },
  {
    title: "5 network devices $1,495.00 CAD",
    price: 1495
  },
  {
    title: "6 network devices $1,794.00 CAD",
    price: 1794
  },
  {
    title: "7 network devices $2,093.00 CAD",
    price: 2093
  },
  {
    title: "8 network devices $2,392.00 CAD",
    price: 2392
  },
  {
    title: "9 network devices $2,691.00 CAD",
    price: 2691
  },
  {
    title: "10 network devices $2,990.00 CAD",
    price: 2990
  },
];

function NetworkManage({ getReviewInit, getQuestionInit }) {

  const questionRef = React.useRef(null);
  const executeScroll = () => questionRef.current.scrollIntoView({ behavior: "smooth" });

  React.useEffect(() => {
    getReviewInit(4);
    getQuestionInit(4);
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
        <HaveQuestion num={4} />
      </div>

      <CustomerReviews product={product} num={4} />
    </>
  );
}


NetworkManage.propTypes = {
  getReviewInit: PropTypes.any,
  getQuestionInit: PropTypes.any
};


export default connect(
  null,
  { getReviewInit, getQuestionInit }
)(NetworkManage);