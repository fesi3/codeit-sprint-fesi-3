import { StaticImageData } from 'next/image';

//index페이지에서 사용하는 유저데이터
export interface UserData {
  email: string;
  nickname: string;
  profileImagePath: string | StaticImageData;
  companyName: string;
  loginType: string;
  createdAt: string;
  joinedPlanCount: number;
  likedPlanCount: number;
  writtenReviewCount: number;
}

// 일정 데이터
export interface PlanData {
  email: string;
  planId: number;
  planName: string;
  category: string;
  province: string;
  district: string;
  planImagePath: StaticImageData | string;
  dateTime: string;
  meetingId: number;
  meetingName: string;
  capacity: number;
  participants: number;
  registrationEnd: string; // 마감 날짜
  isOpened: boolean;
  isCancled: boolean;
  isFulled: boolean;
  isLiked: boolean;
}

// 모임 데이터
export interface MeetingData {
  email: string;
  meetingId: number;
  meetingName: string;
  meetingImagePath: StaticImageData;
  category: string;
  memberCount: number;
}

// 리뷰 데이터
export interface ReviewData {
  reviewId: number; // 리뷰 상세로 이동
  planName: string;
  dateTime: string;
  category: string;
  address: string;
  score: number;
  comment: string;
  reivewImagePath: string | StaticImageData;
  planImagePath: string | StaticImageData;
  planId: number; // 일정 상세로 이동
}

// 리뷰 가능한 일정 데이터
export interface ReviewPlanData {
  planId: number;
  planName: string;
  dateTime: string;
  category: string;
  address: string;
  planImagePath: string | StaticImageData;
}
