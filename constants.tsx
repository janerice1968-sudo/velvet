
import React from 'react';
import { Model, Testimonial } from './types';

// ==========================================
// ⚙️ 全局配置 (Global Configuration)
// ==========================================
export const GLOBAL_CONFIG = {
  SITE_NAME: "Velvet",
  REGION: "United States",
  MIN_AGE: 18,
  CURRENCY: "USD",
};

// ==========================================
// 🔗 在这里更换您的追踪链接 (Tracking Links)
// ==========================================
export const TRACKING_LINKS = {
  MAIN_CTA: "https://t.acrsmartcam.com/402888/7083?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN", // 主行动按钮 (Hero, Footer, Matching)
  LIVE_WATCH: "https://t.acrsmartcam.com/402888/7083?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN", // 模特点击观看链接
  NAV_JOIN: "https://t.acrsmartcam.com/402888/7083?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN", // 导航栏注册链接
};

// ==========================================
// 🖼️ 在这里更换全局图片资源 (Global Assets)
// ==========================================
export const ASSETS = {
  // 主背景图
  MAIN_BACKGROUND: "https://i.ibb.co/21Mjzf2b/909ad0683961a413845897548483698b.jpg",
  // 中间/底部展示区域的特色图片
  INTERACTION_PREVIEW: "https://i.ibb.co/JjRncbr2/5eb3be187b9fab08f76405d7d497d8f3.jpg",
  // 评论区/在线人数小头像 (Avatar list for Hero section)
  AVATARS: [
    "https://i.ibb.co/tMpgLhy6/20201014213922-fd65f.jpg",
    "https://i.ibb.co/F4CcV7Y7/20230326221613-7e73d-thumb-400-0.jpg",
    "https://i.ibb.co/4gRWTH5W/myyf255rzvn.jpg",
    "https://i.ibb.co/1fsnTYtz/sljpiz0y2ht.jpg"
  ]
};

export const MODELS: Model[] = [
  {
    id: '1',
    name: 'Elena',
    age: 24,
    location: 'Miami, FL',
    imageUrl: 'https://i.ibb.co/bj3G0p8n/655f0628a14b9051310717494c1ffac7.jpg',
    isLive: true,
    viewerCount: 1240,
    tags: ['Seductive', 'Latin Vibes', 'Midnight Dance']
  },
  {
    id: '2',
    name: 'Sasha',
    age: 26,
    location: 'Los Angeles, CA',
    imageUrl: 'https://i.ibb.co/pjL3rX5J/67b8d531db19e8716821372f8e2b3636.jpg',
    isLive: true,
    viewerCount: 856,
    tags: ['Elegant Queen', '1-on-1 Private']
  },
  {
    id: '3',
    name: 'Jordan',
    age: 22,
    location: 'New York, NY',
    imageUrl: 'https://i.ibb.co/hx7vLwM6/047d9cbf26c8e71e5f82f3f3db982477.jpg',
    isLive: false,
    tags: ['Sweet Temptation', 'Artistic Shoot']
  },
  {
    id: '4',
    name: 'Chloe',
    age: 25,
    location: 'Austin, TX',
    imageUrl: 'https://i.ibb.co/4xVNHMm/7b47d1160fc3530748f2964a7f98743c.jpg',
    isLive: true,
    viewerCount: 3200,
    tags: ['Top Elite', 'High Challenge']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    user: 'Mark S.',
    content: "The quality of the live shows here is unparalleled. Finally, a platform that feels high-end, safe, and extremely exciting.",
    rating: 5
  },
  {
    id: 't2',
    user: 'Jessica R.',
    content: "Met some incredible people through the private matching system. The UI design is simply beautiful.",
    rating: 5
  }
];

export const ICONS = {
  Heart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  ),
  Camera: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  )
};
