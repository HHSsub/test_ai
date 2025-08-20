import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { Check, Crown, Users, Building } from 'lucide-react';

const planIcons = {
  free: Users,
  pro: Crown,
  team: Building
};

export const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      key: 'free',
      popular: false,
      icon: planIcons.free,
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      key: 'pro',
      popular: true,
      icon: planIcons.pro,
      gradient: 'from-[#00E1D4] to-[#4EA6FF]'
    },
    {
      key: 'team',
      popular: false,
      icon: planIcons.team,
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-gray-300 text-lg">
            프로젝트 규모에 맞는 최적의 요금제를 선택하세요
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const planData = t.pricing[plan.key as keyof typeof t.pricing] as {
              name: string;
              price: string;
              period: string;
              features: string[];
            };
            const PlanIcon = plan.icon;

            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00E1D4] to-[#4EA6FF] text-white z-10">
                    추천
                  </Badge>
                )}
                
                <Card className={`bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 ${
                  plan.popular ? 'border-[#00E1D4] shadow-[0_0_30px_rgba(0,225,212,0.3)]' : ''
                }`}>
                  <CardHeader className="text-center pb-2">
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4`}>
                      <PlanIcon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{planData.name}</CardTitle>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-white">
                        {planData.price}
                        <span className="text-lg text-gray-400 font-normal">
                          {planData.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {planData.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-[#00E1D4] flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full rounded-xl py-3 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-[#00E1D4] to-[#4EA6FF] hover:from-[#00c5ba] hover:to-[#3d8ccc] text-white' 
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                      }`}
                    >
                      {plan.key === 'free' ? '무료 시작' : '구독하기'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm">
            모든 요금제는 언제든지 변경 가능하며, 14일 무료 체험을 제공합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};