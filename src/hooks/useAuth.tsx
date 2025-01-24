import instance from '@/api/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { PATHS } from '@/constants/apiPath';
import { useDispatch } from 'react-redux';
import { clearUser, login, logout, setUser } from '@/redux/authReducers';
import { useEffect } from 'react';

function useAuth() {
  const dispatch = useDispatch();
  const {
    AUTH: { USER_INFO },
  } = PATHS;

  const fetchUserInfo = async () => {
    const response = await instance.get(USER_INFO);
    return response.data;
  };

  const {
    isSuccess,
    isError,
    error,
    data: response,
  } = useQuery({
    queryKey: ['auth'],
    queryFn: fetchUserInfo,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(login());
      dispatch(setUser(response.data));
    } else {
      dispatch(logout());
      dispatch(clearUser());
    }
  }, [response]);

  // if (isError) {
  //   console.error('useAuth 훅에서 에러가 발생했습니다.', error);
  //   dispatch(logout());
  //   dispatch(clearUser());
  // }

  return { response, isError, error };
}

export default useAuth;
