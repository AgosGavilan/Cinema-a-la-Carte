import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostReview from "./PostReview";
import s from "./Review.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { getAllReviews } from "../../redux/actions";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating/StarRating";
import iconuser from "../../assets/user-icon-user-profile-icon-png.png"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  heigth: 430,
  bgcolor: "black",
  border: "0.5px solid whitesmoke",
  p: 4,
  //paddingBottom: 32,
  borderRadius: 10,
};

const Review = () => {
  //const { id } = useParams()
  const allReviews = useSelector((state) => state.reviews);
  //console.log(allReviews)
  const movieDetail = useSelector((state) => state.details);
  const userLog = useSelector((state) => state.user);
  const { user, isAuthenticated } = useAuth0();
  console.log("soy user: ", user);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getAllReviews(movieDetail.id));
  }, []);

  const handleOpen = () => {
    if (!isAuthenticated) {
      Swal.fire({
        title: "Please, login first",
        icon: "warning",
        position: "center",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={s.product_main}>
        {allReviews.length ? (
          allReviews.map((p) => (
            <div key={p.vote}>
              <section id="testimonials">
                <div className={s.testimonial_box_container}>
                  <div className={s.testimonial_box}>
                    <div className={s.box_top}>
                      <div className={s.profile}>
                        <div className={s.profile_img}>
                          <img src={user ? user.picture : iconuser} />
                        </div>
                        <div className={s.name_user}>
                          <strong>{user?.nickname}</strong>
                          <span>{user?.email}</span>
                        </div>
                      </div>
                      <div>
                          <StarRating vote={p.vote}/>
                      </div>
                    </div>
                    <div className={s.client_comment}>
                      <p>
                        {p.text}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))
        ) : (
          <p className={s.notReviews}>There are no reviews yet.</p>
        )}
      </div>

      <div>
        <div>
          <Button onClick={handleOpen}>Add Review</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description">
                <PostReview movieDetail={movieDetail} setOpen={setOpen} />
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Review;
