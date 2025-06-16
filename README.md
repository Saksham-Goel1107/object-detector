# Object Detector

![Object Detection Demo](https://img.shields.io/badge/Demo-Live-brightgreen)
![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-2.x-orange)
![React](https://img.shields.io/badge/React-18.3.0-blue)

A real-time object detection application built with React and TensorFlow.js. This web application uses your webcam to identify and classify objects in real-time, drawing bounding boxes around them and displaying confidence scores.

## 📋 Features

- **Real-time object detection** through your webcam
- **Fast inference** using TensorFlow.js and COCO-SSD model
- **Beautiful UI** with loading indicators
- **Responsive design** for various screen sizes
- **Color-coded labels** for different object classes
- **Performance optimization** for smooth detection

## 🚀 Demo

![Object Detection Demo Screenshot](https://via.placeholder.com/800x450.png?text=Object+Detection+Demo)

## 🔧 Technologies Used

- React 18.3.0
- TensorFlow.js 4.21.0
- COCO-SSD Model 2.2.3
- React Webcam 7.2.0
- CSS for styling

## 🔍 How It Works

The application leverages the COCO-SSD (Common Objects in Context - Single Shot MultiBox Detection) pre-trained model, which can detect and classify 80 different types of common objects, such as:

- People
- Vehicles (cars, trucks, bicycles)
- Animals (dogs, cats, birds)
- Common household items (cups, bottles, chairs)
- And many more!

When you grant camera access, the app:

1. Loads the TensorFlow.js COCO-SSD model
2. Captures frames from your webcam
3. Processes each frame for object detection
4. Draws bounding boxes and labels around detected objects
5. Displays the confidence score of each detection

## ⚙️ Installation and Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Saksham-Goel1107/object-detector.git
   cd object-detector
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

5. Grant camera permissions when prompted to start object detection.

## 🏗️ Project Structure

```
object-detector/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.jsx        # Main application with object detection logic
│   ├── App.css        # Styling
│   ├── index.jsx      # Entry point
│   └── index.css      # Global styling
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## 📊 Performance Optimization

- Model loading state provides user feedback
- Detection frequency optimized for smooth performance
- Backend selection for best performance on different devices

## 🔮 Future Enhancements

- [ ] Add ability to switch between different pre-trained models
- [ ] Implement screenshot functionality
- [ ] Add video recording capabilities
- [ ] Support for custom model training
- [ ] Display statistics and analytics for detections
- [ ] Enable offline functionality with model caching

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Saksham Goel**

- GitHub: [Saksham-Goel1107](https://github.com/Saksham-Goel1107)
- Portfolio: [Your Portfolio Website]
- LinkedIn: [Your LinkedIn Profile]

---

Made with ❤️ by Saksham Goel
