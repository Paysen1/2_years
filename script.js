const pictureElement = document.getElementById('random-picture');
const randomizeButton = document.getElementById('randomize-button');

const pictures = [
  'Pics/IMG_2844.JPG',
  'Pics/IMG_2998.JPG',
  'Pics/IMG_3087.JPG',
  'Pics/IMG_3274.JPEG',
  'Pics/IMG_3280.JPEG',
  'Pics/IMG_3281.JPEG',
  'Pics/IMG_3282.JPEG',
  'Pics/IMG_3283.JPEG',
  'Pics/IMG_3325.JPG',
  'Pics/IMG_3390.JPEG',
  'Pics/IMG_3393.JPEG',
  'Pics/IMG_3394.JPEG',
  'Pics/IMG_3395.JPEG',
  'Pics/IMG_3420.JPG',
  'Pics/IMG_3482.JPG',
  'Pics/IMG_3599.JPG',
  'Pics/IMG_3672.JPG',
  'Pics/IMG_3675.JPEG',
  'Pics/IMG_3681.JPEG',
  'Pics/IMG_3684.JPEG',
  'Pics/IMG_3686.JPEG',
  'Pics/IMG_3709.JPEG',
  'Pics/IMG_3853.JPEG',
  'Pics/IMG_3983.JPEG',
  'Pics/IMG_3999.JPEG',
  'Pics/IMG_4065.JPEG',
  'Pics/IMG_4073.JPEG',
  'Pics/IMG_4074.JPEG',
  'Pics/IMG_4085.JPEG',
  'Pics/IMG_4108.JPEG',
  'Pics/IMG_4109.JPEG',
  'Pics/IMG_4165.JPEG',
  'Pics/IMG_4551.JPEG',
  'Pics/IMG_4553.JPEG',
  'Pics/IMG_4556.JPEG',
  'Pics/IMG_4567.JPEG',
  'Pics/IMG_4574.PNG',
  'Pics/IMG_4575.JPG',
  'Pics/IMG_4576.JPG',
  'Pics/IMG_4609.JPEG',
  'Pics/IMG_4785.JPEG',
  'Pics/IMG_4786.JPEG',
  'Pics/IMG_4963.JPEG',
  'Pics/IMG_5259.JPEG',
  'Pics/IMG_5355.JPEG',
  'Pics/IMG_5356.JPEG',
  'Pics/IMG_5599.JPEG',
  'Pics/IMG_5629.JPEG',
  'Pics/IMG_5632.JPEG',
  'Pics/IMG_5637.JPEG',
  'Pics/IMG_5639.JPEG',
  'Pics/IMG_5640.JPEG',
  'Pics/IMG_5647.JPEG',
  'Pics/IMG_5662.JPEG',
  'Pics/IMG_5663.JPEG',
  'Pics/IMG_5666.JPEG',
  'Pics/IMG_5675.JPEG',
  'Pics/IMG_5680.JPEG',
  'Pics/IMG_5717.JPEG',
  'Pics/IMG_5718.JPEG',
  'Pics/IMG_5727.JPG',
  'Pics/IMG_5784.JPG',
  'Pics/IMG_5793.JPG',
  'Pics/IMG_6018.JPG',
  'Pics/IMG_6018.JPG',
  'Pics/IMG_6019.JPG',
  'Pics/IMG_6020.JPG',
  'Pics/IMG_6021.JPG',
  'Pics/IMG_6022.JPG',
  'Pics/IMG_6023.JPG',
  'Pics/IMG_6024.JPG',
  'Pics/IMG_6025.JPG',
  'Pics/IMG_6026.JPG',
  'Pics/IMG_6027.JPG',
  'Pics/IMG_6028.JPG',
  'Pics/IMG_6029.JPG',
  'Pics/IMG_6030.JPG',
  'Pics/IMG_6031.JPG',
  'Pics/IMG_6032.JPG',
  'Pics/IMG_6033.JPG',
  'Pics/IMG_6034.JPG',
  'Pics/IMG_6035.JPG',
  'Pics/IMG_6036.JPG',
  'Pics/unknown.png',
];

// Function to get a random image from the Pics folder
function getRandomImage() {
  if (pictures.length === 0) {
    console.error('No images found in the Pics folder.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * pictures.length);
  const randomImage = pictures[randomIndex];
  pictureElement.src = randomImage;
}

// Add event listener to randomize button
randomizeButton.addEventListener('click', getRandomImage);
