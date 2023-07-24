import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

const CameraScreen = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera.',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setCameraPermission(true);
        } else {
          setCameraPermission(false);
        }
      } catch (error) {
        console.log('Error while requesting camera permission:', error);
        setCameraPermission(false);
      }
    } else {
      setCameraPermission(true);
    }
  };

  const OpenCamera = () => {
    //image open camera
    if (cameraPermission) {
      ImagePicker.openCamera({
        compressImageQuality: 0.5,
      })
        .then(image => {
          setSelectedImage(image.path);
          const originalImageSizeInMB = (image.size / (1024 * 1024)).toFixed(2);
          console.log('Original Image Size MB >>>', originalImageSizeInMB);
          const compressedImageSizeInMB = originalImageSizeInMB * 0.5;
          console.log('Compresse Image Size MB >>>', compressedImageSizeInMB);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    } else {
      console.log('Camera permission not granted.');
    }
  };
  const OpenCameraVideo = () => {
    //Open Camera Video
    if (cameraPermission) {
      ImagePicker.openCamera({
        mediaType: 'video',
        compressVideo: {
          quality: 0.5,
        },
      })
        .then(video => {
          const originalSizeInMB = (video.size / (1024 * 1024)).toFixed(2);
          console.log('Original Video Size >>>', originalSizeInMB);
          const compressedSizeInMB = (
            (video.size * 0.5) /
            (1024 * 1024)
          ).toFixed(2);
          console.log('Compresse Video Size >>>', compressedSizeInMB);
          setSelectedVideo(video.path);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    } else {
      console.log('Camera permission not granted.');
    }
  };

  const OpenGallery = () => {
    //Open Gallery
    ImagePicker.openPicker({
      mediaType: 'any',
      compressImageQuality: 0.5,
    })
      .then(media => {
        if (media.mime && media.mime.startsWith('image')) {
          //image.
          setSelectedImage(media.path);
          //   const originalImageSizeInMB = (media.size / (1024 * 1024)).toFixed(2);
          //   console.log('Original Image Size MB >>>', originalImageSizeInMB);
          //   const compressedImageSizeInMB = originalImageSizeInMB * 0.5;
          //   console.log('Compresse Image Size MB >>>', compressedImageSizeInMB);
        } else if (media.mime && media.mime.startsWith('video')) {
          //video.
          setSelectedVideo(media.path);
          //   const originalSizeInMB = (media.size / (1024 * 1024)).toFixed(2);
          //   console.log('Original Video Size MB >>>', originalSizeInMB);
          const compressedSizeInMB = (
            (media.size * 0.5) /
            (1024 * 1024)
          ).toFixed(2);
          console.log('Compresse Video Size MB >>>', compressedSizeInMB);
        } else {
          console.log('Unsupport');
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {selectedImage ? (
        <>
          <Image source={{uri: selectedImage}} style={styles.selectedPhoto} />
        </>
      ) : selectedVideo ? (
        <>
          <Video
            source={{uri: selectedVideo}}
            style={styles.selectedVideo}
            controls
          />
        </>
      ) : (
        <Text>No Photo or Video Selected</Text>
      )}
      <TouchableOpacity style={styles.openCameraButton} onPress={OpenCamera}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.openGalleryButton}
        onPress={OpenCameraVideo}>
        <Text style={styles.buttonText}>Open Camera Video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.openGalleryButton} onPress={OpenGallery}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openCameraButton: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  openGalleryButton: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedPhoto: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
    marginVertical: 20,
  },
  imageInfo: {
    fontSize: 16,
    marginVertical: 10,
  },
  selectedVideo: {
    width: '60%',
    height: '50%',
    marginVertical: 20,
  },
});
