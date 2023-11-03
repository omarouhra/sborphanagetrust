export const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'About us', link: '/about' },
  { title: 'Donate', link: '/donate' },
  {
    title: 'Gallery',
    link: 'Gallery',
    submenu: [
      {
        title: 'Photo gallery',
        link: '/gallery',
      },
      {
        title: 'Video Gallery',
        link: '/video-gallery',
      },
    ],
  },
  { title: 'Sponsored a Child', link: '/sponsored' },
  { title: 'Contact us', link: '/contact-us' },
];
