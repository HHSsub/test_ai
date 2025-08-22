// src/main.tsx (수정 후)

import React from 'react'
import ReactDOM from 'react-dom/client'
// App.tsx를 사용하지 않으므로 이 라인은 제거하거나, App 컴포넌트를 사용하도록 아래 코드를 수정할 수 있습니다.
// import App from './App.tsx' 
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
      element: <div>Hello world! This is the deployed page.</div>, // 정상적으로 보이는지 확인하기 위해 텍스트를 수정했습니다.
    },
    // 필요하다면 다른 라우트들을 이곳에 추가할 수 있습니다.
    // {
    //   path: "/about",
    //   element: <div>About Page</div>
    // }
  ],
  {
    basename: "/test_ai/", // 이 부분이 가장 중요합니다!
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
