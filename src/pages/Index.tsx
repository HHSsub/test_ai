import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

// Mock Data for Storyboards (replace with actual API calls)
const storyboardsNew = [
  {
    id: 'new-1',
    mode: 'new',
    presetTags: ['UGC', 'Commercial'],
    durationSec: 15,
    thumbnailUrl: 'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=New+SB+1',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'Dynamic opening shot.', thumbnailUrl: 'https://via.placeholder.com/150x100/FF5733/FFFFFF?text=S1', camera: 'pan' },
      { index: 2, title: 'Scene 2', copy: 'Product showcase.', thumbnailUrl: 'https://via.placeholder.com/150x100/FF5733/FFFFFF?text=S2', camera: 'zoom' },
    ],
  },
  {
    id: 'new-2',
    mode: 'new',
    presetTags: ['Talking Avatar', 'VFX'],
    durationSec: 30,
    thumbnailUrl: 'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=New+SB+2',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'Avatar introduction.', thumbnailUrl: 'https://via.placeholder.com/150x100/33FF57/FFFFFF?text=S1', camera: 'dolly' },
      { index: 2, title: 'Scene 2', copy: 'Complex visual effects.', thumbnailUrl: 'https://via.placeholder.com/150x100/33FF57/FFFFFF?text=S2', camera: 'handheld' },
    ],
  },
  {
    id: 'new-3',
    mode: 'new',
    presetTags: ['Commercial', 'Action'],
    durationSec: 60,
    thumbnailUrl: 'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=New+SB+3',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'Fast-paced action.', thumbnailUrl: 'https://via.placeholder.com/150x100/3357FF/FFFFFF?text=S1', camera: 'pan' },
      { index: 2, title: 'Scene 2', copy: 'Dramatic reveal.', thumbnailUrl: 'https://via.placeholder.com/150x100/3357FF/FFFFFF?text=S2', camera: 'zoom' },
    ],
  },
  {
    id: 'new-4',
    mode: 'new',
    presetTags: ['UGC', 'VFX'],
    durationSec: 15,
    thumbnailUrl: 'https://via.placeholder.com/300x200/FF33A1/FFFFFF?text=New+SB+4',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'User-generated content.', thumbnailUrl: 'https://via.placeholder.com/150x100/FF33A1/FFFFFF?text=S1', camera: 'pan' },
      { index: 2, title: 'Scene 2', copy: 'Creative effects.', thumbnailUrl: 'https://via.placeholder.com/150x100/FF33A1/FFFFFF?text=S2', camera: 'zoom' },
    ],
  },
  {
    id: 'new-5',
    mode: 'new',
    presetTags: ['Talking Avatar', 'Commercial'],
    durationSec: 30,
    thumbnailUrl: 'https://via.placeholder.com/300x200/A1FF33/FFFFFF?text=New+SB+5',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'Professional avatar.', thumbnailUrl: 'https://via.placeholder.com/150x100/A1FF33/FFFFFF?text=S1', camera: 'dolly' },
      { index: 2, title: 'Scene 2', copy: 'Brand message.', thumbnailUrl: 'https://via.placeholder.com/150x100/A1FF33/FFFFFF?text=S2', camera: 'handheld' },
    ],
  },
  {
    id: 'new-6',
    mode: 'new',
    presetTags: ['Action', 'VFX'],
    durationSec: 60,
    thumbnailUrl: 'https://via.placeholder.com/300x200/33A1FF/FFFFFF?text=New+SB+6',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'High-energy sequence.', thumbnailUrl: 'https://via.placeholder.com/150x100/33A1FF/FFFFFF?text=S1', camera: 'pan' },
      { index: 2, title: 'Scene 2', copy: 'Stunning visual effects.', thumbnailUrl: 'https://via.placeholder.com/150x100/33A1FF/FFFFFF?text=S2', camera: 'zoom' },
    ],
  },
];

const storyboardsExisting = [
  {
    id: 'existing-1',
    mode: 'existing',
    presetTags: ['Brand Optimized', 'Commercial'],
    durationSec: 15,
    thumbnailUrl: 'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Existing+SB+1',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'Brand-specific intro.', thumbnailUrl: 'https://via.placeholder.com/150x100/FF5733/FFFFFF?text=S1', camera: 'pan' },
      { index: 2, title: 'Scene 2', copy: 'Product with brand guidelines.', thumbnailUrl: 'https://via.placeholder.com/150x100/FF5733/FFFFFF?text=S2', camera: 'zoom' },
    ],
    brandFitScore: 95,
  },
  {
    id: 'existing-2',
    mode: 'existing',
    presetTags: ['Corporate', 'Talking Avatar'],
    durationSec: 30,
    thumbnailUrl: 'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Existing+SB+2',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'Corporate message.', thumbnailUrl: 'https://via.placeholder.com/150x100/33FF57/FFFFFF?text=S1', camera: 'dolly' },
      { index: 2, title: 'Scene 2', copy: 'Professional tone.', thumbnailUrl: 'https://via.placeholder.com/150x100/33FF57/FFFFFF?text=S2', camera: 'handheld' },
    ],
    brandFitScore: 92,
  },
  {
    id: 'existing-3',
    mode: 'existing',
    presetTags: ['E-commerce', 'VFX'],
    durationSec: 60,
    thumbnailUrl: 'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Existing+SB+3',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'E-commerce product display.', thumbnailUrl: 'https://via.placeholder.com/150x100/3357FF/FFFFFF?text=S1', camera: 'pan' },
      { index: 2, title: 'Scene 2', copy: 'Dynamic product animation.', thumbnailUrl: 'https://via.placeholder.com/150x100/3357FF/FFFFFF?text=S2', camera: 'zoom' },
    ],
    brandFitScore: 90,
  },
  {
    id: 'existing-4',
    mode: 'existing',
    presetTags: ['Brand Optimized', 'UGC'],
    durationSec: 15,
    thumbnailUrl: 'https://via.placeholder.com/300x200/FF33A1/FFFFFF?text=Existing+SB+4',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'User-generated content with brand elements.', thumbnailUrl: 'https://via.placeholder.com/150x100/FF33A1/FFFFFF?text=S1', camera: 'pan' },
      { index: 2, title: 'Scene 2', copy: 'Authentic brand story.', thumbnailUrl: 'https://via.placeholder.com/150x100/FF33A1/FFFFFF?text=S2', camera: 'zoom' },
    ],
    brandFitScore: 98,
  },
  {
    id: 'existing-5',
    mode: 'existing',
    presetTags: ['Corporate', 'Commercial'],
    durationSec: 30,
    thumbnailUrl: 'https://via.placeholder.com/300x200/A1FF33/FFFFFF?text=Existing+SB+5',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'Professional brand presentation.', thumbnailUrl: 'https://via.placeholder.com/150x100/A1FF33/FFFFFF?text=S1', camera: 'dolly' },
      { index: 2, title: 'Scene 2', copy: 'Key message delivery.', thumbnailUrl: 'https://via.placeholder.com/150x100/A1FF33/FFFFFF?text=S2', camera: 'handheld' },
    ],
    brandFitScore: 93,
  },
  {
    id: 'existing-6',
    mode: 'existing',
    presetTags: ['E-commerce', 'Action'],
    durationSec: 60,
    thumbnailUrl: 'https://via.placeholder.com/300x200/33A1FF/FFFFFF?text=Existing+SB+6',
    scenes: [
      { index: 1, title: 'Scene 1', copy: 'Dynamic e-commerce ad.', thumbnailUrl: 'https://via.placeholder.com/150x100/33A1FF/FFFFFF?text=S1', camera: 'pan' },
      { index: 2, title: 'Scene 2', copy: 'High-impact product shots.', thumbnailUrl: 'https://via.placeholder.com/150x100/33A1FF/FFFFFF?text=S2', camera: 'zoom' },
    ],
    brandFitScore: 91,
  },
];

// Placeholder for sections that should be imported from components/sections
const HeroSection = ({ onGenerateStoryboards }) => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 text-center p-8">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4"
    >
      AI가 6개의 스토리보드를 먼저 제안합니다.
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-xl text-muted-foreground mb-8"
    >
      신규 브랜드는 트렌드 최적화, 기존 브랜드는 가이드 준수. 선택만 하면 영상이 완성됩니다.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
    >
      <Tabs defaultValue="new" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="new">신규 브랜드 (트렌드 추종 모드)</TabsTrigger>
          <TabsTrigger value="existing">기존 브랜드 (브랜드 최적화 모드)</TabsTrigger>
        </TabsList>
        <TabsContent value="new" className="mt-4">
          <Input placeholder="키워드 또는 URL 입력 (예: '새로운 커피 광고', 'https://youtube.com/...')" className="mb-4" />
          <Button className="w-full" onClick={() => onGenerateStoryboards('new')}>무료로 스토리보드 받아보기</Button>
        </TabsContent>
        <TabsContent value="existing" className="mt-4">
          <Input placeholder="브랜드 가이드 URL 또는 키워드 입력 (예: '우리 회사 로고', 'https://brand.com/guidelines')" className="mb-4" />
          <Button className="w-full" onClick={() => onGenerateStoryboards('existing')}>무료로 스토리보드 받아보기</Button>
        </TabsContent>
      </Tabs>
    </motion.div>
    {/* Background visual placeholder */}
    <div className="absolute inset-0 z-[-1] opacity-20">
      {/* <video src="/loop-visual.mp4" autoPlay loop muted className="w-full h-full object-cover"></video> */}
      {/* Or Lottie animation */}
    </div>
  </section>
);

const StoryboardGridSection = ({ storyboards, onSelectStoryboard }) => (
  <section className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">6개의 스토리보드 제안</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {storyboards.map((sb) => (
          <motion.div
            key={sb.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * storyboards.indexOf(sb) }}
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={sb.thumbnailUrl} alt={`Storyboard ${sb.id}`} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>Storyboard {sb.id}</CardTitle>
                <CardDescription>{sb.durationSec}초 예상</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {sb.presetTags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">상세 보기</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>Storyboard {sb.id} 상세</DialogTitle>
                      <DialogDescription>씬별 스틸컷, 카피 샘플, 카메라워크 설명</DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[400px] pr-4">
                      {sb.scenes.map((scene) => (
                        <div key={scene.index} className="mb-6">
                          <h3 className="text-lg font-semibold mb-2">Scene {scene.index}: {scene.title}</h3>
                          <img src={scene.thumbnailUrl} alt={`Scene ${scene.index}`} className="w-full h-auto object-cover mb-2" />
                          <p className="text-sm text-muted-foreground">{scene.copy}</p>
                          {scene.camera && <Badge variant="secondary" className="mt-2">Camera: {scene.camera}</Badge>}
                        </div>
                      ))}
                    </ScrollArea>
                    <Button className="w-full mt-4" onClick={() => onSelectStoryboard(sb.id)}>이 보드로 시작하기</Button>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="py-16 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">트렌드 vs 브랜드 최적화 비교</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 shadow-lg">
          <CardTitle className="mb-4">신규 브랜드 (트렌드 추종)</CardTitle>
          <CardDescription className="mb-4">시장의 최신 트렌드와 UGC 스타일을 반영하여 빠르게 시작합니다.</CardDescription>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>카테고리/목표 채널 선택</li>
            <li>최신 프리셋 조합</li>
            <li>빠른 아이디어 탐색</li>
          </ul>
        </Card>
        <Card className="p-6 shadow-lg">
          <CardTitle className="mb-4">기존 브랜드 (브랜드 최적화)</CardTitle>
          <CardDescription className="mb-4">기존 브랜드 가이드라인을 준수하여 일관된 메시지를 전달합니다.</CardDescription>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>로고/컬러/폰트 업로드</li>
            <li>레퍼런스 URL 분석</li>
            <li>정교한 브랜드 맞춤형 영상</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

const PresetGallerySection = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">기술 데모 / 프리셋 갤러리</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Badge variant="secondary">UGC</Badge>
        <Badge variant="secondary">Commercial</Badge>
        <Badge variant="secondary">Talking Avatar</Badge>
        <Badge variant="secondary">VFX</Badge>
        <Badge variant="secondary">Action Movements</Badge>
        <Badge variant="secondary">Camera Controls</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample videos/thumbnails */}
        <Card className="overflow-hidden shadow-lg">
          <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay loop muted className="w-full h-48 object-cover"></video>
          <CardHeader><CardTitle>Commercial Ad</CardTitle></CardHeader>
          <CardContent><Badge>UGC</Badge> <Badge>Upscale</Badge></CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg">
          <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay loop muted className="w-full h-48 object-cover"></video>
          <CardHeader><CardTitle>Talking Avatar Demo</CardTitle></CardHeader>
          <CardContent><Badge>Talking Avatar</Badge> <Badge>Inpaint</Badge></CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg">
          <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay loop muted className="w-full h-48 object-cover"></video>
          <CardHeader><CardTitle>VFX Showcase</CardTitle></CardHeader>
          <CardContent><Badge>VFX</Badge> <Badge>Multi-reference</Badge></CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="py-16 bg-white dark:bg-gray-800 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12">신뢰할 수 있는 성능과 보안</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="p-6 shadow-lg">
          <CardTitle className="mb-2">초고속 생성</CardTitle>
          <CardDescription>평균 3초 이내 영상 생성</CardDescription>
        </Card>
        <Card className="p-6 shadow-lg">
          <CardTitle className="mb-2">최대 4K 해상도</CardTitle>
          <CardDescription>다양한 해상도 옵션 제공</CardDescription>
        </Card>
        <Card className="p-6 shadow-lg">
          <CardTitle className="mb-2">강력한 보안</CardTitle>
          <CardDescription>데이터 암호화 및 브랜드 세이프티</CardDescription>
        </Card>
      </div>
      <h3 className="text-2xl font-semibold mb-8">우리를 신뢰하는 기업들</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
        {/* Logo Wall Placeholder */}
        <img src="https://via.placeholder.com/100x50?text=Company+A" alt="Company A" className="h-12" />
        <img src="https://via.placeholder.com/100x50?text=Company+B" alt="Company B" className="h-12" />
        <img src="https://via.placeholder.com/100x50?text=Company+C" alt="Company C" className="h-12" />
        <img src="https://via.placeholder.com/100x50?text=Company+D" alt="Company D" className="h-12" />
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">가격 & 플랜</h2>
      {/* This section would ideally use the existing pricing-section.tsx component */}
      <Card className="p-6 shadow-lg text-center">
        <CardTitle className="mb-4">기본 플랜</CardTitle>
        <CardDescription className="mb-4">월 20 크레딧, HD 해상도</CardDescription>
        <Button>플랜 선택</Button>
      </Card>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-16 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">자주 묻는 질문 (FAQ)</h2>
      <div className="space-y-4">
        <Card className="p-4 shadow-sm">
          <CardTitle className="text-lg mb-2">제작권/저작권은 어떻게 되나요?</CardTitle>
          <CardDescription>생성된 영상의 제작권과 저작권은 사용자에게 귀속됩니다.</CardDescription>
        </Card>
        <Card className="p-4 shadow-sm">
          <CardTitle className="text-lg mb-2">상업적 이용이 가능한가요?</CardTitle>
          <CardDescription>네, 생성된 모든 영상은 상업적 이용이 가능합니다.</CardDescription>
        </Card>
        <Card className="p-4 shadow-sm">
          <CardTitle className="text-lg mb-2">음원/폰트 라이선스는 어떻게 되나요?</CardTitle>
          <CardDescription>제공되는 모든 음원과 폰트는 상업적 이용이 가능한 라이선스를 포함합니다.</CardDescription>
        </Card>
      </div>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="py-8 bg-gray-950 text-white text-center">
    <div className="container mx-auto px-4">
      <p>&copy; 2025 Test AI. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:underline">개인정보처리방침</a>
        <a href="#" className="hover:underline">이용약관</a>
      </div>
    </div>
  </footer>
);

export default function Index() {
  const [currentStoryboards, setCurrentStoryboards] = useState([]);

  const handleGenerateStoryboards = (mode) => {
    // In a real application, this would call an API
    if (mode === 'new') {
      setCurrentStoryboards(storyboardsNew);
    } else {
      setCurrentStoryboards(storyboardsExisting);
    }
  };

  const handleSelectStoryboard = (storyboardId) => {
    console.log(`Storyboard selected: ${storyboardId}`);
    // Implement navigation or further action here
    alert(`Storyboard ${storyboardId}를 선택하셨습니다!`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection onGenerateStoryboards={handleGenerateStoryboards} />
      {currentStoryboards.length > 0 && (
        <StoryboardGridSection storyboards={currentStoryboards} onSelectStoryboard={handleSelectStoryboard} />
      )}
      <ComparisonSection />
      <PresetGallerySection />
      <TrustSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
