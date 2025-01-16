export interface PlanData {
  planId: string;
  planName: string;
  registrationEnd: string;
  dateTime: string;
  meetingName: string;
  province: string;
  district: string;
  participants: string;
  capacity: string;
  isOpened: boolean;
  isLiked: boolean;
  planImagePath: string;
}

// category를 포함한 확장 타입
export interface PlanDataWithCategory extends PlanData {
  category: string;
}