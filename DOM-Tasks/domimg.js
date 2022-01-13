// Add images in HTML using JS
  // Task1 -- Add Five images using JavaScript
  // Approach 1:
  const imageURL="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg";
  console.log(imageURL)
  const image=document.createElement("img");
  image.setAttribute("src",imageURL);
  document.body.append(image);
  const imageURL1="https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879__340.jpg";
  const image1=document.createElement("img");
  image1.setAttribute("src",imageURL1);
  document.body.append(image1);
  const imageURL2="https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300";
  const image2=document.createElement("img");
  image2.setAttribute("src",imageURL2);
  document.body.append(image2);
  const imageURL3="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?size=626&ext=jpg";
  const image3=document.createElement("img");
  image3.setAttribute("src",imageURL3);
  document.body.append(image3);
  const imageURL4="https://live.staticflickr.com/65535/49170920587_dc11c0bb88.jpg";
  const image4=document.createElement("img");
  image4.setAttribute("src",imageURL4);
  document.body.append(image4);

// Approach 2:
  const imageurl=["https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg","https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879__340.jpg","https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300","https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?size=626&ext=jpg","https://live.staticflickr.com/65535/49170920587_dc11c0bb88.jpg"];
  const imageitem=document.createElement("ul");
  for(var images of imageurl){
      const imagelist=document.createElement('li');
      const imagelist1=document.createElement('img');
      imagelist1.setAttribute("src",images);
      imageitem.append(imagelist1);
     }
     document.body.append(imageitem);
  // const imageURL=["https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg","https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300","https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879__340.jpg"];
  // const imglist=document.createElement("img")
  // document.body.append(imglist);
  // const images=document.querySelectorAll("img");
  // for(var url of imageURL){
  //     url.setAttribute("src","imageURL")
  // }
  // image.append(imglist);