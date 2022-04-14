import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import LoadScreen from "../Loading/LoadScreen";
import { details, addToCart, getAllReviews } from "../../redux/actions";
import poster from "../../assets/poster.jpg";
//import Swal from "sweetalert2";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import s from "./Details.module.css";
import Description from "./Description";
import Review from "../Review/Review";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loadScreen, setLoadScreen] = useState(true);
  const movieDetail = useSelector((state) => state.details);
  let cart = useSelector((state) => state.cart);
  // let searchCart = cart.find((e) => e.id === movieDetail.id);
  //const allReviews = useSelector((state) => state.reviews);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(details(id)).then(() => setLoadScreen(false));
    dispatch(getAllReviews(id));
  }, [dispatch, id]);

  if (loadScreen) return <LoadScreen />;

  // function addCart(e) {
  //   e.preventDefault();
  //   if (searchCart) {
  //     Swal.fire({
  //       title: "Movie Already In Cart",
  //       icon: "warning",
  //       position: "center",
  //       timer: 2000,
  //       showConfirmButton: false,
  //       timerProgressBar: true,
  //     });
  //     return;
  //   } else {
  //     dispatch(addToCart(movieDetail.id));
  //   }
  // }
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.card}>
          <div className={s.product_left}>
            <NavLink to="/home" className={s.nav}>
              <span className={s.navspan}>⇦</span>
            </NavLink>
            <div className={s.header}>
              <h1>{movieDetail.title}</h1>
              <h2>{movieDetail.Genres?.map((g) => g.name).join(" | ")}</h2>
            </div>

            {/* Aca tendria que ir mi Tab */}
            {/* <div className={s.product_main}>
              <div className={s.focus}>
                <span>Description</span>
                <span>Review ({allReviews.length})</span>
              </div> */}
            {/* Todo esto iria dentro de description */}
            {/* <p>{movieDetail.overview}</p>
              <p>{movieDetail.Actors?.map((a) => a.name).join(", ")}</p>
              <p>Release: {movieDetail.release_date}</p>
            </div> */}

            {/* <div className={s.product_details}>
              <div className={s.product_total}>
                <h3>Total Price</h3>
                <p>$ {movieDetail.price}</p>
              </div>
            </div> */}

            {/* <div className={s.product_btns}>
              <button
                className={searchCart ? s.product_incart : s.product_add}
                onClick={(e) => addCart(e)}
              >
                {searchCart ? "In Cart" : "Add To Cart"}
              </button>
            </div> */}

            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  centered
                >
                  <Tab label="Description" {...a11yProps(0)} />
                  <Tab label="Reviews" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Description movieDetail={movieDetail} id={id}/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Review />
              </TabPanel>
            </Box>
          </div>
          <div className={s.product_right}>
            <img src={movieDetail.img ? movieDetail.img : poster} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
