export const projects = [
  {
    title: 'Facial Expression Recognition',
    description: "This project aims to classify the emotion on a person's face into one of six categories, using deep convolutional neural networks. The model is trained on the FER-2013 dataset which was published on International Conference on Machine Learning (ICML). This dataset consists of 35887 grayscale, 48x48 sized face images with six emotions - angry, fearful, happy, neutral, sad and surprised.",
      image: '/images/1.jpg',
      tags: ['Python', 'Keras', 'Open CV'],
    source: 'https://github.com/adichondro/FacialExpression-Recognition',
    visit: '#',
    id: 0,
  },
  {
    title: 'Corn Leaf Diseases Detection App',
    description:"The android application was developed using the android studio framework. The application sends this image for preprocessing from where it is pushed as input to the AI model. The AI model outputs the class of the plant and disease. The AI model used convolution networks for image classification of the disease classes. We converted the model and optimized it using the tensorflowlite format to be used on the android application in memory.",
    image: '/images/2.jpg',
    tags: ['Kotlin', 'Python','Keras','Tensorflow'],
    source: 'https://github.com/adichondro/Corn-Leaf-Diseases-Detection-App',
    visit: '#',
    id: 1,
  },
  
  
  // ADD HERE
];

export const TimeLineData = [
  { year: 2016, text: 'Started my journey, majoring in Informatics Engineering', },
  { year: 2018, text: 'Worked as a Porgramming Lab Assistant', },
  { year: 2019, text: 'Worked as a Programming Lab Instructor', },
  { year: 2020, text: 'Graduated from Gunadarma University', },
  
];