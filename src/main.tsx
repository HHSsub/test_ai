// src/main.tsx (최종 수정 코드)

import Index from './pages/Index';
import NotFound from './pages/NotFound';

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// createBrowserRouter에 두 번째 인자로 옵션 객체를 전달하고, basename을 설정합니다.
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />, // Index 컴포넌트를 올바르게 사용
    },
    {
      path: "*",
      element: <NotFound />
    }
  ],
  {
    basename: "/test_ai/", // 이 부분이 가장 중요합니다! GitHub Pages 저장소 이름과 일치해야 합니다.
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
