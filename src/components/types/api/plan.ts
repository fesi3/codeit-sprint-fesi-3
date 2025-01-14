export interface User {
  nickname: string;
  profileImagePath: string;
  createdAt: string;
}

interface MeetingInfo {
  meetingId: number;
  meetingName: string;
  description: string;
  meetingImagePath: string;
}

export interface PlanData {
  planId: number;
  nickname: string;
  profileImagePath: string;
  planName: string;
  category: string;
  address: string;
  longitude: number;
  latitude: number;
  planImagePath: string;
  content: string;
  dateTime: string;
  registrationEnd: string;
  capacity: number;
  participants: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  userList: User[];
  meetingInfo: MeetingInfo[];
  isCanceled: boolean;
  isLiked: boolean;
  isOpened: boolean;
  isFulled: boolean;
}

export interface GET_PLAN_DETAIL_RESPONSE {
  success: boolean;
  message: string;
  data: PlanData;
}
