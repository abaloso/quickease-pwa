import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'QuickEase PWA',
        short_name: 'QuickEase',
        description: 'A simple note-taking Progressive Web App',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4f46e5',
        icons: [
            {
                src: '/icons/192.svg',
                sizes: '192x192',
                type: 'image/svg',
            },
            {
                src: '/icons/512.svg',
                sizes: '512x512',
                type: 'image/svg',
            },
        ],
    };
}