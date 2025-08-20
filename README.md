# Test AI - AI 광고 영상 생성 SaaS

키워드 몇 개만 입력하면 AI가 자동으로 광고 영상을 생성하는 혁신적인 SaaS 플랫폼입니다.

## 🚀 주요 기능

- **간편한 영상 생성**: 제품명, 타겟, 플랫폼만 입력하면 즉시 영상 생성
- **AdScore 분석**: 5개 축(Hook, Clarity, CTA, Brand Fit, Platform Fit) 기반 성과 예측
- **실시간 결과**: 3초 이내 생성 결과 확인
- **다국어 지원**: 한국어/영어 지원
- **반응형 디자인**: 모바일/데스크톱 완벽 지원

## 🛠 기술 스택

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages

## 📦 설치 및 실행

### 로컬 개발 환경

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev

# 빌드
pnpm run build

# 빌드 결과 미리보기
pnpm run preview
```

### 환경 요구사항

- Node.js 18 이상
- pnpm 8 이상

## 🌐 배포

### GitHub Pages 자동 배포

1. 이 레포지토리를 GitHub에 푸시
2. GitHub Pages 활성화 (Settings > Pages > Source: GitHub Actions)
3. `main` 브랜치에 푸시하면 자동 배포

### 수동 배포

```bash
# 빌드
pnpm run build

# GitHub Pages 배포
pnpm run deploy
```

### 배포 URL

**Live Demo**: https://jepark-hub.github.io/test_ai

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: `#00E1D4` (Cyan)
- **Secondary**: `#4EA6FF` (Blue)
- **Background**: `#0B0F14` (Dark)
- **Text**: `#E6EDF3` (Light Gray)

### 타이포그래피

- **Primary Font**: Inter (헤드라인, UI)
- **Secondary Font**: Pretendard (한국어 본문)

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ 성능 최적화

- **LCP**: < 2.0s 목표
- **CLS**: ~0 목표
- **Lighthouse Score**: 90+ 목표

### 최적화 기법

- 이미지 지연 로딩
- 코드 스플리팅
- 번들 최적화
- CDN 활용

## 🌍 국제화 (i18n)

현재 지원 언어:
- 한국어 (ko) - 기본
- 영어 (en)

## �� 라이선스

MIT License