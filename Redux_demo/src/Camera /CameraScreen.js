import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  PermissionsAndroid,
  Platform,
  CameraRoll,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import RNFetchBlob from 'rn-fetch-blob';

const CameraScreen = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    requestStoragePermission();
    checkCameraPermission();
  }, []);
  const requestStoragePermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your storage to save images.',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        return true;
      }
    } catch (error) {
      console.warn('Error while requesting storage permission:', error);
      return false;
    }
  };

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
  const downloadMedia = async (path, mediaType) => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your storage to save media files.',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const sourcePath = `file://${path}`;
          let ext = mediaType === 'image' ? '.jpg' : '.mp4';
          const destPath = `${RNFetchBlob.fs.dirs.DCIMDir}/${path
            .split('/')
            .pop()}${ext}`;

          await RNFetchBlob.fs.cp(sourcePath, destPath);
          RNFetchBlob.fs.scanFile([
            {
              path: destPath,
              mime: mediaType === 'image' ? 'image/jpeg' : 'video/mp4',
            },
          ]);
          console.log('Media downloaded and saved successfully.');
        } else {
          console.log('Storage permission not granted.');
        }
      } else {
        console.log(
          'Saving media to gallery is not supported on this platform.',
        );
      }
    } catch (error) {
      console.log('Error while downloading media:', error);
    }
    console.log('mediaType >>>', mediaType);
    console.log('path >>>', path);
  };

  const OpenCamera = async () => {
    // open Camera

    if (cameraPermission) {
      try {
        const image = await ImagePicker.openCamera({
          mediaType: 'image',
        });

        const originalImageSizeInMB = (image.size / (1024 * 1024)).toFixed(2);
        console.log('Original Image Size >>>', originalImageSizeInMB);

        const desiredCompressedImageSizeInMB = 0.5;

        const compressionQuality = Math.min(
          1,
          desiredCompressedImageSizeInMB / originalImageSizeInMB,
        );

        const compressedImage = await ImagePicker.openCropper({
          path: image.path,
          compressImageQuality: compressionQuality,
        });

        const compressedImageSizeInMB = (
          compressedImage.size /
          (1024 * 1024)
        ).toFixed(2);
        console.log('Compressed Image Size >>>', compressedImageSizeInMB, 'KB');
        setSelectedImage(compressedImage.path);
        // console.log('compressedImage.path >>>>', compressedImage.path);
        await downloadMedia(compressedImage.path);
      } catch (error) {
        console.log('Error:', error);
      }
    } else {
      console.log('Camera permission not granted.');
    }
  };

  const OpenCameraVideo = () => {
    if (cameraPermission) {
      ImagePicker.openCamera({
        mediaType: 'video',
      })
        .then(async video => {
          //original video
          const originalSizeInMB = (video.size / (1024 * 1024)).toFixed(2);
          console.log('Original Video Size >>>', originalSizeInMB);

          //compressed video
          const desiredCompressedVideoSizeInMB = 5;

          //needed to achieve the desired size
          const compress = Math.min(
            1,
            desiredCompressedVideoSizeInMB / originalSizeInMB,
          );

          // Calculate the compressed video
          const compressedSizeInMB = (
            (video.size * compress) /
            (1024 * 1024)
          ).toFixed(2);
          console.log('Compressed Video Size >>>', compressedSizeInMB);

          // Update for video
          const compressVideo = {
            size: compress,
          };
          // console.log('compressVideo >>>>', compressVideo.size);
          setSelectedVideo(video.path);
          // console.log('compressedSizeInMB >>>', compressedSizeInMB);
          await downloadMedia(video.path);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    } else {
      console.log('Camera permission not granted.');
    }
  };

  // const OpenGallery = () => {
  //   // Open Gallery
  //   ImagePicker.openPicker({
  //     mediaType: 'any',
  //   })
  //     .then(media => {
  //       if (media.mime && media.mime.startsWith('image')) {
  //         // Image selected
  //         const originalImageSizeInMB = (media.size / (1024 * 1024)).toFixed(2);
  //         console.log('Original Image Size MB >>>', originalImageSizeInMB);
  //         const desiredCompressedImageSizeInMB = 0.5;
  //         const compressionQuality = Math.min(
  //           1,
  //           desiredCompressedImageSizeInMB / originalImageSizeInMB,
  //         );
  //         // Calculate the compressed image
  //         const compressedImageSizeInMB = (
  //           (media.size * compressionQuality) /
  //           (1024 * 1024)
  //         ).toFixed(2);
  //         console.log('Compressed Image Size MB >>>', compressedImageSizeInMB);

  //         // Update for image
  //         const compressedImage = {
  //           ...media,
  //           path: media.path,
  //         };
  //         setSelectedImage(compressedImage.path);
  //       } else if (media.mime && media.mime.startsWith('video')) {
  //         // Video selected
  //         const originalSizeInMB = (media.size / (1024 * 1024)).toFixed(2);
  //         console.log('Original Video Size MB >>>', originalSizeInMB);
  //         const desiredCompressedVideoSizeInMB = 5;
  //         const compress = Math.min(
  //           1,
  //           desiredCompressedVideoSizeInMB / originalSizeInMB,
  //         );
  //         // Calculate the compressed video
  //         const compressedSizeInMB = (
  //           (media.size * compress) /
  //           (1024 * 1024)
  //         ).toFixed(2);
  //         console.log('Compressed Video Size MB >>>', compressedSizeInMB);

  //         // Convert video size from MB to bits
  //         const compressedSizeInBits = (
  //           compressedSizeInMB *
  //           8 *
  //           1024 *
  //           1024
  //         ).toFixed(2);
  //         console.log(
  //           'Compressed Video Size in bits >>>',
  //           compressedSizeInBits,
  //         );

  //         // Update for video
  //         const compressedVideo = {
  //           ...media,
  //           path: media.path,
  //         };

  //         setSelectedVideo(compressedVideo.path);
  //       } else {
  //         console.log('Unsupported media type');
  //       }
  //     })
  //     .catch(error => {
  //       console.log('Error:', error);
  //     });
  // };

  return (
    <SafeAreaView style={styles.container}>
      {selectedImage ? (
        <>
          <Image source={{uri: selectedImage}} style={styles.selectedPhoto} />
        </>
      ) : selectedVideo ? (
        <>
          <Video source={{uri: selectedVideo}} style={styles.selectedVideo} />
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
      {/* <TouchableOpacity style={styles.openGalleryButton} onPress={OpenGallery}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity> */}
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
