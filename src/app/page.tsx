/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import { AppStoreButton, PlayStoreButton } from '@/components/app-download-button';
import Header from '@/components/header';
import { Icons } from '@/components/ui/icon';
import { appConfig } from '@/config';
import { Typography } from '@/lib/mixin';
import { cn } from '@/lib/utils';

// 랜딩 본문에 이미 있는 기능 설명만 옮긴다. 가격·지원 기기처럼 확정되지 않은 내용은 넣지 않는다.
const faqs = [
  {
    question: '건강해짐은 어떤 앱인가요?',
    answer:
      '피트니스 센터, 트레이너와 회원을 위한 PT 관리 앱이에요. 수업 스케줄, 회원과 수강권, 수업 피드백을 한곳에서 관리해요.',
  },
  {
    question: 'PT 일정 예약과 변경은 어떻게 하나요?',
    answer: '복잡한 스케줄 관리를 자동화해 일정 예약, 변경, 취소를 앱에서 간편하게 처리할 수 있어요.',
  },
  {
    question: '회원이 예고 없이 수업에 오지 않으면 어떻게 되나요?',
    answer: '예약 정책에 따른 사전 취소 없이 결석하면 시스템이 수강권 횟수를 자동으로 차감해요.',
  },
  {
    question: '회원별로 어떤 기록을 남길 수 있나요?',
    answer:
      '회원별 진행 상황과 수강권 이용 내역을 한눈에 볼 수 있고, 수업일지·식단·운동기록으로 회원에게 피드백을 남길 수 있어요.',
  },
  {
    question: '회원 참여를 높이는 기능이 있나요?',
    answer: '포인트 리워드 제도와 헬스장별 커뮤니티로 회원 간 유대감과 장기적인 고객 충성도를 높일 수 있어요.',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <section className='flex h-fit w-full items-center justify-center bg-[#1990FF] pt-16 lg:h-screen'>
          <div className='relative m-auto flex h-full w-full max-w-[1140px] flex-col items-center justify-between px-10 lg:block'>
            <div className='flex flex-col items-center gap-8 py-20 pb-10 lg:items-start lg:gap-14 lg:pb-20'>
              <h1
                className={cn(
                  Typography.TITLE_1,
                  'whitespace-pre-wrap text-center text-[40px] font-extrabold text-white lg:text-left lg:text-[56px]'
                )}>
                피트니스 센터,
                <br className='lg:hidden' />
                {` `}트레이너와
                <br className='hidden lg:block' /> 회원을 위한 필수 앱
              </h1>
              <div className='flex gap-3'>
                <PlayStoreButton />
                <AppStoreButton />
              </div>
            </div>
            <img
              src='/images/landing-section-01.webp'
              width={600}
              height={601}
              loading='eager'
              fetchPriority='high'
              alt='건강해짐 앱의 트레이너 홈 화면'
              className='relative w-[342px] lg:absolute lg:bottom-0 lg:right-0 lg:w-fit'
            />
          </div>
        </section>
        <section className='h-fit w-full bg-[#EEF7FF]  px-10 pt-[50px] lg:h-[750px] lg:pt-0'>
          <div className='m-auto flex h-full max-w-[1140px] flex-col-reverse items-center lg:flex-row lg:items-end lg:justify-between'>
            <img
              src='/images/landing-section-02.webp'
              width={488}
              height={645}
              loading='lazy'
              alt='PT 일정 예약·변경·취소를 관리하는 스케줄 화면'
              className='w-[360px] lg:w-fit'
            />
            <div className='mb-[40px] lg:mb-[200px]'>
              <div className='mb-[16px] flex w-full justify-center text-center lg:mb-[30px] lg:justify-start'>
                <Icons.calendar className='h-[36px] w-[36px] lg:h-fit lg:w-fit' />
              </div>
              <h2 className='mb-[6px] text-center text-[24px] font-bold text-black lg:mb-[20px] lg:text-left lg:text-[48px]'>
                자유롭고 간편한
                <br className='hidden lg:block' /> 스케줄 관리
              </h2>
              <p className='text-center text-[14px] font-medium text-[#4C4E52] lg:text-left lg:text-[24px]'>
                복잡한 스케줄 관리를 자동화하여 일정 예약,
                <br /> 변경, 취소 등 스케줄을 쉽게 관리해요!
              </p>
            </div>
          </div>
        </section>
        <section className='h-fit w-full bg-[#FFFAF2]  px-10 pt-[50px] lg:h-[750px] lg:pt-0'>
          <div className='m-auto flex h-full max-w-[1140px] flex-col items-center lg:flex-row lg:items-end lg:justify-between'>
            <div className='mb-[40px] lg:mb-[200px]'>
              <div className='mb-[16px] flex w-full justify-center text-center lg:mb-[30px] lg:justify-start'>
                <Icons.xCircle className='h-[36px] w-[36px] lg:h-fit lg:w-fit' />
              </div>
              <h2 className='mb-[6px] text-center text-[24px] font-bold text-black lg:mb-[20px] lg:text-left lg:text-[48px]'>
                당일 일정 변경, <br className='hidden lg:block' />
                노쇼 방지
              </h2>
              <p className='text-center text-[14px] font-medium text-[#4C4E52] lg:text-left lg:text-[24px]'>
                예약 정책에 따른 사전 취소 없이 결석할 경우, <br />
                시스템을 통해 횟수가 자동으로 차감돼요.
              </p>
            </div>
            <img
              src='/images/landing-section-03.webp'
              width={514}
              height={541}
              loading='lazy'
              alt='노쇼 시 수강권 횟수가 자동 차감되는 예약 정책 화면'
              className='w-[360px] lg:w-fit'
            />
          </div>
        </section>
        <section className='h-fit w-full bg-[#EEF7FF]  px-10 pt-[50px] lg:h-[750px] lg:pt-0'>
          <div className='m-auto flex h-full max-w-[1140px] flex-col-reverse items-center lg:flex-row lg:items-end lg:justify-between'>
            <img
              src='/images/landing-section-04.webp'
              width={630}
              height={750}
              loading='lazy'
              alt='회원별 진행 상황과 수강권 이용 내역을 보는 회원 관리 화면'
              className='w-[360px] lg:w-fit'
            />
            <div className='lg:mb-[200px]'>
              <div className='mb-[16px] flex w-full justify-center text-center lg:mb-[30px] lg:justify-start'>
                <Icons.documentPerson className='h-[36px] w-[36px] lg:h-fit lg:w-fit' />
              </div>
              <h2 className='mb-[6px] text-center text-[24px] font-bold text-black lg:mb-[20px] lg:text-left lg:text-[48px]'>
                체계적인 회원 관리
              </h2>
              <p className='text-center text-[14px] font-medium text-[#4C4E52] lg:text-left lg:text-[24px]'>
                회원별 진행 상황을 한눈에 파악하고,
                <br />
                수강권 이용 내역까지 간편하게 관리해요.
              </p>
            </div>
          </div>
        </section>
        <section className='h-fit w-full bg-white  px-10 pt-[50px] lg:h-[750px] lg:pt-0'>
          <div className='m-auto flex h-full max-w-[1140px] flex-col items-center lg:flex-row lg:items-end lg:justify-between'>
            <div className='flex h-full flex-col justify-center'>
              <div className='mb-[16px] flex w-full justify-center text-center lg:mb-[30px] lg:justify-start'>
                <Icons.documentPencil className='h-[36px] w-[36px] lg:h-fit lg:w-fit' />
              </div>
              <h2 className='mb-[6px] text-center text-[24px] font-bold text-black lg:mb-[20px] lg:text-left lg:text-[48px]'>
                회원별 피드백
              </h2>
              <p className='text-center text-[14px] font-medium text-[#4C4E52] lg:text-left lg:text-[24px]'>
                건강해짐 하나로 수업일지, 식단, <br />
                운동기록까지! 체계적으로 관리해요.
              </p>
            </div>
            <img
              src='/images/landing-section-05.webp'
              width={630}
              height={750}
              loading='lazy'
              alt='수업일지·식단·운동기록을 남기는 회원 피드백 화면'
              className='w-[360px] lg:w-fit'
            />
          </div>
        </section>
        <section className='h-fit w-full bg-[#EEF7FF]  px-10 pt-[50px] lg:h-[750px] lg:pt-0'>
          <div className='m-auto flex h-full max-w-[1140px] flex-col-reverse items-center lg:flex-row lg:items-end lg:justify-between'>
            <img
              src='/images/landing-section-06.webp'
              width={630}
              height={750}
              loading='lazy'
              alt='포인트 리워드와 헬스장 커뮤니티 화면'
              className='w-[360px] lg:w-fit'
            />
            <div className='lg:mb-[200px]'>
              <div className='mb-[16px] flex w-full justify-center text-center lg:mb-[30px] lg:justify-start'>
                <Icons.coinPoint className='h-[36px] w-[36px] lg:h-fit lg:w-fit' />
              </div>
              <h2 className='mb-[6px] text-center text-[24px] font-bold text-black lg:mb-[20px] lg:text-left lg:text-[48px]'>
                리워드 시스템과
                <br className='hidden lg:block' />
                회원 간 연결
              </h2>
              <p className='text-center text-[14px] font-medium text-[#4C4E52] lg:text-left lg:text-[24px]'>
                포인트 리워드 제도와 우리 헬스장만의 <br />
                커뮤니티로 회원 간 유대감과 장기적인 <br />
                고객 충성도를 높여요.
              </p>
            </div>
          </div>
        </section>
        <section className='h-fit w-full bg-white px-10 pt-[80px] lg:pt-[120px]'>
          <div className='m-auto max-w-[1140px]'>
            <h2 className='mb-[24px] text-center text-[24px] font-bold text-black lg:mb-[48px] lg:text-left lg:text-[48px]'>
              자주 묻는 질문
            </h2>
            <dl className='divide-y divide-[#E4E5E7] border-y border-[#E4E5E7]'>
              {faqs.map(({ question, answer }) => (
                <div key={question} className='py-[20px] lg:py-[28px]'>
                  <dt className='mb-[8px] text-[16px] font-bold text-black lg:text-[22px]'>
                    {question}
                  </dt>
                  <dd className='text-[14px] font-medium text-[#4C4E52] lg:text-[18px]'>
                    {answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <footer className='h-fit w-full bg-white pb-[60px] pt-[120px] lg:py-[100px]'>
        <div className='m-auto mt-[30px] max-w-[1140px] px-10'>
          <Icons.logo className='mb-4 h-[60px] w-[60px]' />
          <p className='mb-[20px] text-[20px] font-bold text-black lg:mb-[36px]'>
            건강해짐
          </p>
          <dl className='mb-[20px] lg:mb-[36px]'>
            <dt className='mb-[6px] text-[15px] font-medium text-[#4C4E52]'>고객센터</dt>
            <dd className='text-[16px] font-medium text-black'>{appConfig.csEmail}</dd>
          </dl>
          <div>
            <Link
              href={appConfig.termsLink}
              passHref={true}
              target='_blank'
              className='text-[15px] font-medium text-[#6B6D72] underline'>
              서비스 이용약관
            </Link>
            <Link
              href={appConfig.privacyLink}
              passHref={true}
              target='_blank'
              className='ml-[12px] text-[15px] font-medium text-[#6B6D72] underline'>
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
