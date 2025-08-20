# upnexx - AI 광고 영상 생성 SaaS

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

# dist 폴더를 정적 호스팅 서비스에 업로드
```

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

언어 추가 방법:
1. `src/lib/translations.ts`에 번역 추가
2. 컴포넌트에서 `useLanguage` 훅 사용

## 📊 분석 및 추적

### 주요 이벤트

- `keyword_submitted`: 키워드 입력 완료
- `mock_generated`: 모의 결과 생성 완료
- `card_explained`: AdScore 설명 클릭
- `variation_clicked`: 변주 생성 클릭
- `signup_clicked`: 회원가입 클릭
- `demo_requested`: 데모 요청 클릭

## 🧪 테스트

```bash
# 린트 검사
pnpm run lint

# 타입 검사
pnpm run type-check
```

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 연락처

- **Email**: support@upnexx.com
- **Website**: https://upnexx.github.io

---

**⚠️ 중요 고지**: 이 프로젝트의 모든 예측치는 AI 모델 기반의 추정값이며 실제 성과와 다를 수 있습니다.