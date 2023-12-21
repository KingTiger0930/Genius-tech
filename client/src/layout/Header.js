import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
// import Button from '@mui/material/Button';
import Modal from "@mui/material/Modal";
import Badge from "@mui/material/Badge";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Menu as DropMenu, MenuItem as DropMenuItem, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

import { connect } from "react-redux";

import { logout } from "../actions/auth";
import PropTypes from "prop-types";
import "./styles.css";

const pages = [
  {
    name: "Home",
    url: "/",
    children: []
  },
  {
    name: "Managed IT Service",
    url: "/managed-it-services",
    children: [
      {
        name: "Workstation/Desktop management & Remote support",
        url: "/desktop-management-and-remote-support-service"
      },
      {
        name: "Server Management",
        url: "/server-management"
      },
      {
        name: "Network Management",
        url: "/network-management"
      },
    ]
  },
  {
    name: "On site IT services",
    url: "/onsite-it-support-services",
    children: []
  },
  {
    name: "Cloud Service",
    url: "/our-services",
    children: [
      {
        name: "Cloud Backup Solution Workstation",
        url: "/cloud-backup-solution-workstation"
      },
      {
        name: "Cloud backup solution Server",
        url: "/cloud-backup-solution-server"
      }
    ]
  },
  {
    name: "IT Consulting",
    url: "/our-it-solutions",
    children: []
  },
  {
    name: "Network",
    url: "/network-cabling",
    children: []
  },
  {
    name: "About",
    url: "/about-us",
    children: []
  },
  {
    name: "Contact",
    url: "/subscribe",
    children: []
  },
  {
    name: "Blog",
    url: "/blog",
    children: []
  }
];

// const pages = [
//   {
//     name: 'Home',
//     url: '/',
//     children: []
//   },
//   {
//     name: 'Managed IT Service',
//     url: '/managed-it-services',
//     children: [
//       {
//         name: 'Workstation/Desktop management & Remote support',
//         url: '/desktop-management-and-remote-support-service'
//       },
//       {
//         name: 'Server Management',
//         url: '/server-management'
//       },
//       {
//         name: 'Network Management',
//         url: '/network-management'
//       },
//     ]
//   },
//   {
//     name: 'On site IT services',
//     url: '/onsite-it-support-services',
//     children: []
//   },
//   {
//     name: 'Cloud service',
//     url: '/our-services',
//     children: [
//       {
//         name: 'Cloud Backup Solution Workstation',
//         url: '/cloud-backup-solution-workstation'
//       },
//       {
//         name: 'Cloud backup solution Server',
//         url: '/cloud-backup-solution-server'
//       }
//     ]
//   },
//   {
//     name: 'IT consulting',
//     url: '/our-it-solutions',
//     children: []
//   },
//   {
//     name: 'Network cabling',
//     url: '/network-cabling',
//     children: []
//   },
//   {
//     name: 'About us',
//     url: '/about-us',
//     children: []
//   },
//   {
//     name: 'Contact us',
//     url: '/subscribe',
//     children: []
//   },
//   {
//     name: 'Blog',
//     url: '/blog',
//     children: []
//   }
// ];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Header = ({ isAuthenticated, user, logout, carts }) => {
  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);

  const handleLoginOpen = () => {
    setLogin(true);
  };

  const handleLoginClose = () => {
    setLogin(false);
  };

  const handleRegisterOpen = () => {
    setRegister(true);
  };

  const handleRegisterClose = () => {
    setRegister(false);
  };

  React.useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `var $zoho=$zoho || { };
    $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "7b13b6b280884f73681a8256c6d23c1739cb3067d00c37faa4e41988524c78c0", 
        values: { },
        ready: function () { }
    }; 
    var d=document;
    var s=d.createElement("script");
    s.type="text/javascript";
    s.id="zsiqscript";
    s.defer=true;
    s.src="https://salesiq.zoho.com/widget";
    var t=d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s,t);`;
  
    document.body.appendChild(script);
  }, []);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff", boxShadow: "none", px: 0, borderTopLeftRadius: 0,
    borderTopRightRadius: 0, }}>
      <Box>
        <Toolbar sx={{ justifyContent: "space-between", pt: 2 }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "flex", paddingBottom: "5px"},
            }}
            className="search-box"
          >
            <Typography
              color="black"
              edge="end"
              component="div"
              className="search-p"
              spacing={2}
            >
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Link rel="search-result" to="/search-result">
                    <SearchIcon />
                  </Link>
                </Grid>
                <Grid item className="search-input-grid">
                  <input
                    id="input-search-grid"
                    placeholder="Search..."
                    className="search-input"
                  />
                </Grid>
              </Grid>
            </Typography>
            <Typography
              color="black"
              edge="end"
              spacing={2}
              className="contact-us"
            >
              Contact Us: +1 647 951 8664
            </Typography>
          </Box>
          <Box sx={{ marginTop: "7px" }}>
            <Link rel="canonical" to='/'>
              <Box
                component="img"
                alt="logo"
                src="/logo.svg"
                sx={{ mr: 2, py: 0 }}
              />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {
              pages.map((item, i) => (
                item.children.length > 0 ? (
                  <DropMenu key={i} menuButton={<Link rel="canonical" to={item.url} className="header-menu-link"><Typography id="headerTitle2" component='p' varient='p' color='#000' sx={{ margin: "auto 10px", display: "flex", cursor: "pointer", paddingRight: "7px", fontWeight: "bold", color: "#233030" }} fontSize={16}>{item.name}<KeyboardArrowDownIcon /></Typography></Link>}>
                    {/*<DropMenuItem>
                      <Link
                        to={item.url}
                        style={{ textDecoration: 'none', color: '#000'}}
                      >
                        <Typography textAlign="left">{item.name}</Typography>
                      </Link>
                    </DropMenuItem>*/}
                    {
                      item.children.map((child, j) => (
                        <DropMenuItem key={j}>
                          <Link
                            to={child.url}
                            className="header-menu-link"
                          >
                            <Typography textAlign="left" fontSize={16}>{child.name}</Typography>
                          </Link>
                        </DropMenuItem>
                      ))
                    }
                  </DropMenu>
                ) : (
                  <Link
                    key={i}
                    to={item.url}
                    className="header-menu-link2"
                  >
                    <Typography id="headerTitle1" textAlign="left" fontSize={16}>{item.name}</Typography>
                  </Link>
                )
              ))
            }
            <Stack direction="row" sx={{ display: { xs: "none", xl: "flex" }, paddingLeft: 5 }}>
              <a href='https://twitter.com/geniustechinc' rel="noreferrer" target='_blank' className="social-icon-link">
                <TwitterIcon sx={{ color: "#00abf3" }} />
              </a>
              <a href='mailto:support@genius-tech.ca' rel="noreferrer" target='_blank' className="social-icon-link">
                <MailOutlineIcon sx={{ color: "#707070" }} />
              </a>
              <a href='https://www.facebook.com/geniustechinc' rel="noreferrer" target='_blank' className="social-icon-link">
                <FacebookIcon sx={{ color: "#4b68a2" }} />
              </a>
              <a href='https://www.instagram.com/geniustechinc/?hl=en' rel="noreferrer" target='_blank' className="social-icon-link">
                <InstagramIcon sx={{ color: "#01e675" }} />
              </a>
              <a href='https://ca.linkedin.com/company/genius-tech-inc-' rel="noreferrer" target='_blank' className="social-icon-link">
                <LinkedInIcon sx={{ color: "#0079b4" }} />
              </a>
              <Link rel="canonical" to='/cart' className="social-icon-link">
                <Badge badgeContent={carts.length} color="secondary">
                  <ShoppingCartIcon
                    color='primary'
                    sx={{ mr: 2, height: { xs: "auto", md: "20px" } }}
                  />
                </Badge>
              </Link>
            </Stack>
          </Box>

          <Box sx={{ display: { xs: "flex", lg: "none" } }} alignItems='center'>
            <Typography varient='h5' color='#003187' fontWeight={800} component='h5' sx={{ cursor: "pointer", mr: 2 }}>{user ? user.name : null}</Typography>
            <DropMenu
              menuButton={
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  sx={{ "& svg": { fontSize: "30px" } }}
                >
                  <MenuIcon color="disabled" />
                </IconButton>
              }
            >
              {
                pages.map((item, i) => (
                  item.children.length > 0 ? (
                    <SubMenu label={item.name} key={i}>
                      {
                        item.children.map((child, j) => (
                          <DropMenuItem key={j}>
                            <Link
                              to={child.url}
                              className="dropdown-menu-sub-link"
                            >
                              <Typography textAlign="left">{child.name}</Typography>
                            </Link>
                          </DropMenuItem>
                        ))
                      }
                    </SubMenu>
                  ) : (
                    <DropMenuItem key={i}>
                      <Link rel="canonical" key={i} to={item.url} className="dropdown-menu-link">
                        <Typography textAlign="center" color="#000">{item.name}</Typography>
                      </Link>
                    </DropMenuItem>
                  )
                ))
              }
              <DropMenuItem>
                <a href='https://twitter.com/geniustechinc' className="social-icon-link">
                  <TwitterIcon
                    sx={{ color: "#00abf3", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">Twitter</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <a href='mailto:support@genius-tech.ca' className="social-icon-link">
                  <MailOutlineIcon
                    sx={{ color: "#707070", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">Mail</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <a href='https://www.facebook.com/geniustechinc' className="social-icon-link">
                  <FacebookIcon
                    sx={{ color: "#4b68a2", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">Facebook</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <a href='https://www.instagram.com/geniustechinc/?hl=en' className="social-icon-link">
                  <InstagramIcon
                    sx={{ color: "#01e675", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">Instagram</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <a href='https://ca.linkedin.com/company/genius-tech-inc-' className="social-icon-link">
                  <LinkedInIcon
                    sx={{ color: "#0079b4", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">LinkedIn</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <Link rel="canonical" to='/cart' className="social-icon-link">
                  <Badge badgeContent={carts.length} color="secondary">
                    <ShoppingCartIcon
                      color='primary'
                      sx={{ mr: 1, height: { xs: "auto", md: "20px" } }}
                    />
                  </Badge>
                </Link>
                <Typography textAlign="center" color="#000">Cart</Typography>
              </DropMenuItem>

              {
                isAuthenticated ?
                  <DropMenuItem>
                    <Typography textAlign="center" color="#000" fontSize={14} onClick={logout}>SignOut</Typography>
                  </DropMenuItem>
                  : (
                    <>
                      <DropMenuItem>
                        <Typography textAlign="center" color="#000" fontSize={14} onClick={handleRegisterOpen}>Register</Typography>
                      </DropMenuItem>
                      <DropMenuItem>
                        <Typography textAlign="center" color="#000" fontSize={14} onClick={handleLoginOpen}>Login</Typography>
                      </DropMenuItem>
                    </>
                  )
              }
            </DropMenu>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex", xl: "none" } }} alignItems='center'>
            <Typography varient='h5' color='#003187' fontWeight={800} component='h5' sx={{ cursor: "pointer", mr: 2 }}>{user ? user.name : null}</Typography>
            <DropMenu
              menuButton={
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  sx={{ "& svg": { fontSize: "30px" } }}
                >
                  <MenuIcon color="disabled" />
                </IconButton>
              }
            >
              <DropMenuItem>
                <a href='https://twitter.com/geniustechinc' rel="noreferrer" target='_blank' className="social-icon-link">
                  <TwitterIcon
                    sx={{ color: "#00abf3", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">Twitter</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <a href='mailto:support@genius-tech.ca' rel="noreferrer" target='_blank' className="social-icon-link">
                  <MailOutlineIcon
                    sx={{ color: "#707070", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">Mail</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <a href='https://www.facebook.com/geniustechinc' rel="noreferrer" target='_blank' className="social-icon-link">
                  <FacebookIcon
                    sx={{ color: "#4b68a2", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">Facebook</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <a href='https://www.instagram.com/geniustechinc/?hl=en' rel="noreferrer" target='_blank' className="social-icon-link">
                  <InstagramIcon
                    sx={{ color: "#01e675", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">Instagram</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <a href='https://ca.linkedin.com/company/genius-tech-inc-' rel="noreferrer" target='_blank' className="social-icon-link">
                  <LinkedInIcon
                    sx={{ color: "#0079b4", mr: 1, height: { xs: "auto", md: "20px" } }}
                  />
                </a>
                <Typography textAlign="center" color="#000">LinkedIn</Typography>
              </DropMenuItem>
              <DropMenuItem>
                <Link rel="canonical" to='/cart' className="social-icon-link">
                  <Badge badgeContent={carts.length} color="secondary">
                    <ShoppingCartIcon
                      color='primary'
                      sx={{ mr: 1, height: { xs: "auto", md: "20px" } }}
                    />
                  </Badge>
                </Link>
                <Typography textAlign="center" color="#000">Cart</Typography>
              </DropMenuItem>

              {
                isAuthenticated ?
                  <DropMenuItem>
                    <Typography textAlign="center" color="#000" fontSize={14} onClick={logout}>SignOut</Typography>
                  </DropMenuItem>
                  : (
                    <>
                      <DropMenuItem>
                        <Typography textAlign="center" color="#000" fontSize={14} onClick={handleRegisterOpen}>Register</Typography>
                      </DropMenuItem>
                      <DropMenuItem>
                        <Typography textAlign="center" color="#000" fontSize={14} onClick={handleLoginOpen}>Login</Typography>
                      </DropMenuItem>
                    </>
                  )
              }
            </DropMenu>
          </Box>
          <Stack direction="row" sx={{ display: { xs: "none", xl: "flex" } }}>
            {
              isAuthenticated ? (
                <>
                  <Typography varient='p' color='black' component='p' sx={{ cursor: "pointer", mr: 1 }} fontSize={12} fontWeight={"bold"} textTransform={"uppercase"}>{user ? user.name : null}</Typography>
                  <Typography varient='p' color='black' component='p' onClick={logout} sx={{ cursor: "pointer", mr: 1 }} fontSize={12} fontWeight={"bold"} textTransform={"uppercase"}>SignOut</Typography>
                </>
              ) : (
                <>
                  <Typography varient='p' color='black' component='p' onClick={handleLoginOpen} sx={{ cursor: "pointer", mr: 1 }} fontSize={14} fontWeight={"bold"} textTransform={"uppercase"} paddingRight={3}>LOGIN</Typography>
                  <Typography varient='p' color='black' component='p' onClick={handleRegisterOpen} sx={{ cursor: "pointer", mr: 1 }} fontSize={14} fontWeight={"bold"} textTransform={"uppercase"}>REGISTER</Typography>
                </>
              )
            }
          </Stack>
        </Toolbar>
      </Box>
      <Modal
        keepMounted
        open={register}
        onClose={handleRegisterClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <RegisterModal closeModal={handleRegisterClose} />
        </Box>
      </Modal>
      <Modal
        keepMounted
        open={login}
        onClose={handleLoginClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <LoginModal closeModal={handleLoginClose} />
        </Box>
      </Modal>
    </AppBar>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.any,
  user: PropTypes.any,
  logout: PropTypes.any,
  carts: PropTypes.any
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  carts: state.cart.carts
});

export default connect(mapStateToProps, { logout })(Header);