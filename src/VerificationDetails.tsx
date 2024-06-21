import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import StoreState from '../../../_models/reduxModel';
import { RetrieveImageService } from '../../../services/S3';
// import { Grid } from '@mui/material';
import "../ImageSlider.css"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Divider, Grid, Typography } from '@mui/material';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 4 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 464 },
//     items: 2,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };


const VerificationDetails = () => {

  const detailsFromUserList = useSelector(
    (state: StoreState) => state.user?.details_from_user_list
  );

  const images = detailsFromUserList?.profilePicture || [];

  // Ensure the array has exactly 6 elements
  const imageSlots = Array(6).fill(null);
  images.forEach((image, index) => {
    imageSlots[index] = image;
  });

  // // Ensure we have at least 6 items to display
  // const imagesToDisplay = detailsFromUserList && detailsFromUserList.profilePicture && Array.isArray(detailsFromUserList.profilePicture) &&
  //   detailsFromUserList.profilePicture.length > 0 ? detailsFromUserList.profilePicture.slice(0, 6) : [];

  // Ensure we have at least 6 items to display
  // const imagesToDisplay = detailsFromUserList && detailsFromUserList.profilePicture && Array.isArray(detailsFromUserList.profilePicture) && detailsFromUserList.profilePicture.length > 0
  //   ? detailsFromUserList.profilePicture.slice(0, 6).map(item => RetrieveImageService(item?.thumbPath))
  //   : [];

  // Create an array of 6 elements to render placeholders for the rest
  // const emptyImages = Array.from({ length: 6 - (imagesToDisplay ? imagesToDisplay.length : 0) }).fill(null);

  // const [activeImageIndex, setActiveImageIndex] = useState(0)

  // const handelPreviousImageClicked = () => {
  //   setActiveImageIndex(
  //     !activeImageIndex && detailsFromUserList?.profilePicture?.length
  //       ? detailsFromUserList?.profilePicture?.length - 1
  //       : activeImageIndex - 1
  //   )
  // }


  // const handelNextImageClicked = () => {
  //   setActiveImageIndex(
  //     (activeImageIndex + 1) % (
  //       detailsFromUserList?.profilePicture?.length !== undefined
  //         ? detailsFromUserList?.profilePicture?.length
  //         : 0
  //     )
  //   )
  // }



  return (
    // <div className='my-own-custom-container'>
    // <div className='parent'>
    //   <Carousel
    //     responsive={responsive}
    //     // itemClass="carousel-item-padding-40-px"
    //     // swipeable={false}
    //     // draggable={false}
    //     // showDots={true}
    //     // infinite={true}
    //     ssr={true} // means to render carousel on server-side.
    //     autoPlaySpeed={1000}
    //     keyBoardControl={true}
    //     customTransition="all .5"
    //     transitionDuration={500}

    //     autoPlay={true}
    //     swipeable={true}
    //     draggable={true}
    //     showDots={true}
    //     infinite={true}
    //     partialVisible={false}

    //     // containerClass="carousel-container"
    //     dotListClass="custom-dot-list-style"
    //   >
    //     {!!detailsFromUserList?.profilePicture &&
    //       detailsFromUserList?.profilePicture.length > 0 &&
    //       detailsFromUserList?.profilePicture.map((m: any) => (
    //         <div>
    //           <img src={RetrieveImageService(m?.thumbPath)} />
    //         </div>
    //       ))}
    //   </Carousel>
    // </div>


    // <div className='slider'>
    //   <button className='slider_button' onClick={handelPreviousImageClicked}>Previous</button>

    //   {detailsFromUserList?.profilePicture.map((url, index) => (
    //     <img
    //       src={RetrieveImageService(url?.mainPath)}
    //       alt="Not available"
    //       style={{ width: 400, height: 350, borderRadius: "50px" }}
    //       className={`slide_image${activeImageIndex === index ? ' active' : ' hidden'}`}
    //     />
    //   ))}
    //   <button className='slider_button' onClick={handelNextImageClicked}>Next</button>
    // </div >
    // <Grid container spacing={2} marginLeft={2} marginTop={2}>
    //   {!!detailsFromUserList?.profilePicture &&
    //     Array.isArray(detailsFromUserList?.profilePicture) &&
    //     detailsFromUserList?.profilePicture.length > 0
    //     ? detailsFromUserList?.profilePicture.map((item: any) => (
    //       <Grid item >
    //         <img
    //           src={RetrieveImageService(item?.mainPath)}
    //           alt="Not available"
    //           style={{ width: 110, height: 110, borderRadius: 10 }}
    //         />
    //       </Grid>
    //     ))
    //     : "N/A"}
    // </Grid>


    <Box
      sx={{
        width: "60%",
        mb: "1.5%",
        mt: "3%",
      }}
    >
      {/* <Typography
        sx={{
          color: "grey",
          fontSize: 14,
          fontStyle: "Open Sans",
          py: 1,
          pl: "9%",
        }}
      >
        Pick the images you want
      </Typography>
      <Divider
        sx={{ width: "80%", alignSelf: "center", ml: "4%" }}
      ></Divider> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          mt: "1%",
          mx: "2%",
          gap: 1,
          justifyContent: "left",
          width: "100%",
          // justifyContent: "space-between",
        }}
      >
        {/* {detailsFromUserList && detailsFromUserList.profilePicture && detailsFromUserList.profilePicture.length > 0
          ? detailsFromUserList.profilePicture.map((item: any) => (
            <Box sx={{ height: 110, width: 110, mx: 1, my: 1 }}>
              <img
                src={RetrieveImageService(item?.thumbPath)}
                alt="Not available"
                style={{ width: 110, height: 110, borderRadius: 10 }}
              />
            </Box>
          )) : "N/A"} */}

        {/* {imagesToDisplay.map((imageUrl, index) => (
          <Box key={index} sx={{ height: 150, width: 150, mx: 0.3, my: 0.5 }}>
            <img src={RetrieveImageService(imageUrl?.thumbPath)} alt={`Image ${index}`} style={{ width: 150, height: 150, borderRadius: 10, cursor: "pointer" }} />
          </Box>
        ))}
        {emptyImages.map((_, index) => (
          <Box key={index} sx={{ height: 150, width: 150, mx: 0.3, my: 0.5, borderStyle: 'dotted', borderRadius: 4, borderWidth: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{}}><AddOutlinedIcon /></span>
          </Box>
        ))} */}

        <div className="image-grid">
          {imageSlots?.map((image, index) => (
            <div className="image-slot" key={index}>
              {image ? (
                <img src={RetrieveImageService(image.thumbPath)} alt={`Image ${index}`} />
              ) : (
                <div className="empty-slot">+</div>
              )}
            </div>
          ))}
        </div>
      </Box>
    </Box>
  )
}

export default VerificationDetails