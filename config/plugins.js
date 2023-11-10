module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      breakpoints: {
        '4000w-webp': 4000,
        '4000w-avif': 4000,
        '3000w-webp': 3000,
        '3000w-avif': 3000,
        '2000w-webp': 2000,
        '2000w-avif': 2000,
        '1500w-webp': 1500,
        '1500w-avif': 1500,
        '1000w-webp': 1000,
        '1000w-avif': 1000,
        '750w-webp': 750,
        '750w-avif': 750,
        '500w-webp': 500,
        '500w-avif': 500
      },
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('DO_ACCESS_KEY_ID'),
        secretAccessKey: env('DO_ACCESS_SECRET'),
        endpoint: env('DO_ENDPOINT'), // e.g. "s3.fr-par.scw.cloud"
        region: env('DO_REGION'),
        params: {
          Bucket: env('DO_BUCKET'),
        },
      },
      actionOptions: {
        upload: {
          CacheControl: 'max-age=31536000'
        },
        uploadStream: {
          CacheControl: 'max-age=31536000'
        },
        delete: {},
      },
    },
  },
  // ...
});
