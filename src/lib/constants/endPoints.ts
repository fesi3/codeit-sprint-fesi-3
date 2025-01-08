/** GPT활용해 생성하였습니다.
 * 틀린 부분이 있거나 이후 수정사항이 있을 수 있으니 더블체크 후 사용해주시길 바랍니다.
 */

// 사용자 관련
export const POST_SIGNUP = '/api/auths/signup'; // 사용자 회원가입
export const POST_CHECK_EMAIL = '/api/auths/check-email'; // 이메일 중복확인
export const POST_SIGNIN = '/api/auths/signin'; // 로그인
export const POST_SIGNOUT = '/api/auths/signout'; // 로그아웃
export const GET_USER_INFO = '/api/auths/users'; // 회원 정보 확인
export const PATCH_USER_PROFILE = '/api/auths/users/profile'; // 회원 정보 수정 요청
export const POST_PROFILE_UPLOAD = '/api/auths/profile/upload'; // 프로필 이미지 수정
export const POST_TOKEN_REISSUE = '/api/auths/reissue'; // 토큰 재발급

// 모임 관련
export const POST_MEETING_CREATE = '/api/meetings'; // 모임 생성 요청
export const POST_MEETING_UPLOAD = '/api/meetings/upload'; // 모임 생성
export const GET_MEETING_LIST = '/api/meetings'; // 모임 목록 조회 (회원/비회원)
export const GET_MEETING_DETAIL = (meetingId: string) =>
  `/api/meetings/${meetingId}`; // 모임 상세 조회
export const GET_MEETING_MEMBERS = (
  meetingId: string,
  pageNumber: number,
  size: number,
) => `/api/meetings/${meetingId}/members?page=${pageNumber}&size=${size}`; // 모임 멤버 전체 조회
export const GET_MEETING_PLANS = (
  meetingId: string,
  pageNumber: number,
  size: number,
) => `/api/meetings/${meetingId}/plans?page=${pageNumber}&size=${size}`; // 모임 일정 전체 조회
export const GET_MEETING_REVIEWS = (
  meetingId: string,
  pageNumber: number,
  size: number,
) => `/api/meetings/${meetingId}/reviews?page=${pageNumber}&size=${size}`; // 모임 후기 전체 조회
export const PATCH_MEETING_UPDATE = (meetingId: string) =>
  `/api/meetings/${meetingId}`; // 모임 수정
export const DELETE_MEETING = (meetingId: string) =>
  `/api/meetings/${meetingId}`; // 모임 삭제

// 일정 관련
export const POST_PLAN_CREATE = '/api/plans'; // 일정 생성 요청
export const POST_PLAN_UPLOAD = '/api/plans/upload'; // 일정 생성
export const GET_PUBLIC_PLAN_LIST = (params: string) =>
  `/api/plans/public?${params}`; // 일정 찾기 목록 조회 (비회원)
export const GET_PLAN_LIST = (params: string) => `/api/plans?${params}`; // 일정 찾기 목록 조회 (회원)
export const GET_PUBLIC_PLAN_DETAIL = (
  planId: string,
  pageNumber: number,
  size: number,
) => `/api/plans/public/${planId}/reviews?page=${pageNumber}&size=${size}`; // 일정 상세 조회 (비회원)
export const GET_PLAN_DETAIL = (
  planId: string,
  pageNumber: number,
  size: number,
) => `/api/plans/${planId}/reviews?page=${pageNumber}&size=${size}`; // 일정 상세 조회 (회원)
export const PATCH_PLAN_CANCEL = (planId: string) =>
  `/api/plans/${planId}/cancel`; // 일정 모집 취소
export const POST_PLAN_ATTENDANCE = (planId: string) =>
  `/api/plans/${planId}/attendance`; // 일정 참여
export const DELETE_PLAN_ATTENDANCE = (planId: string) =>
  `/api/plans/${planId}/cancel`; // 일정 참여 취소
export const POST_PLAN_LIKE = (planId: string) => `/api/plans/${planId}/like`; // 일정 좋아요
export const DELETE_PLAN_LIKE = (planId: string) => `/api/plans/${planId}/like`; // 일정 좋아요 취소
export const GET_LIKED_PLAN_LIST = (params: string) =>
  `/api/plans/like?${params}`; // 좋아요한 일정 목록 조회

// 후기 관련
export const POST_REVIEW_CREATE = (planId: string) => `/api/reviews/${planId}`; // 후기 생성/수정 요청
export const POST_REVIEW_UPLOAD = (planId: string) =>
  `/api/reviews/${planId}/upload`; // 후기 생성
export const PUT_REVIEW_UPDATE = (reviewId: string) =>
  `/api/reviews/${reviewId}`; // 후기 수정
export const DELETE_REVIEW = (reviewId: string) => `/api/reviews/${reviewId}`; // 후기 삭제
export const GET_ALL_REVIEWS = (params: string) => `/api/reviews?${params}`; // 모든 후기 목록 조회

// 지역 관련
export const GET_REGION_PROVINCES = '/api/region/province'; // 전체 지역 조회 (시/도)
export const GET_REGION_DISTRICTS = (provinceId: string) =>
  `/api/region/district?provinceId=${provinceId}`; // 전체 지역 조회 (군/구)

// 마이페이지 관련
export const GET_MY_MEETINGS = (pageNumber: number, size: number) =>
  `/api/users/meetings?page=${pageNumber}&size=${size}`; // 내 모임 목록 조회
export const GET_MY_PLANS = (pageNumber: number, size: number) =>
  `/api/users/plans?page=${pageNumber}&size=${size}`; // 내 일정 목록 조회
export const GET_MY_REVIEWS = (pageNumber: number, size: number) =>
  `/api/users/reviews?page=${pageNumber}&size=${size}`; // 내가 작성한 후기 목록 조회
export const GET_MY_AVAILABLE_REVIEWS = (pageNumber: number, size: number) =>
  `/api/users/reviews/available?page=${pageNumber}&size=${size}`; // 리뷰 작성 가능한 일정 목록 조회
