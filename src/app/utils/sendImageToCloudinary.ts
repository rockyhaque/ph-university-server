// Used unofficial Account

import { v2 as cloudinary } from 'cloudinary';
import config from '../config';
import multer from 'multer';

export const sendImageToCloudinary = async (imageName: string, path: string) => {
  // Configuration of cloudinary
  cloudinary.config({
    cloud_name: config.cloudinary_api_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret, // Click 'View API Keys' above to copy your API secret
  });

  // Upload an image to cloudinary
  const uploadResult = await cloudinary.uploader
    .upload(
      path,
      {
        public_id: imageName,
      },
    )
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);
};

// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
