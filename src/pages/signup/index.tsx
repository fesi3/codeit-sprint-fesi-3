import SignupForm from '@/components/auth/signup/signupForm';
import useSignupForm from '@/hooks/useSignupForm';
import { SignupFormTypes } from '@/components/auth/type';
import { useMutation } from '@tanstack/react-query';
import fetchData from '@/api/fetchData';
import { useRouter } from 'next/router';
import { PATHS } from '@/constants/apiPath';
import Header from '@/components/shared/layout/Header';

function Signup() {
  const { signupFormValue, handleChange, errors } = useSignupForm();
  const router = useRouter();
  const {
    AUTH: { SIGNUP },
  } = PATHS;

  const mutation = useMutation<SignupFormTypes>({
    mutationFn: () =>
      fetchData({
        param: SIGNUP,
        method: 'post',
        requestData: signupFormValue,
      }),
    onSuccess: () => {
      alert('회원가입이 완료되었습니다!');
      router.push('/login');
    },
    onError: () => {
      alert('회원가입이 실패했습니다!');
    },
  });

  // 폼 제출 함수
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    mutation.mutate();
  };

  return (
    <>
      <Header title="회원목록" />
      <div className="mt-[22.5px] flex w-full justify-center md:mt-[80px]">
        <SignupForm
          signupFormValue={signupFormValue}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      </div>
    </>
  );
}

export default Signup;
