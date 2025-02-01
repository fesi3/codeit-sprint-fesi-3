/* eslint-disable no-useless-escape */
import { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import { SignupFormTypes } from '@/components/auth/type';
import { useMutation } from '@tanstack/react-query';
import fetchData from '@/api/fetchData';
import { useRouter } from 'next/router';
import { PATHS } from '@/constants/apiPath';

interface SignupFormType {
  email: string;
  nickname: string;
  companyName: string;
  password: string;
  passwordCheck: string;
}
type SignupErrorType = Record<keyof SignupFormType, string | null>;

function useSignupForm() {
  const [signupFormValue, setSignupFormValue] = useState<SignupFormType>({
    email: '',
    nickname: '',
    companyName: '',
    password: '',
    passwordCheck: '',
  });
  const [errors, setErrors] = useState<SignupErrorType>({
    nickname: null,
    companyName: null,
    email: null,
    password: null,
    passwordCheck: null,
  });

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

  const validateField = (
    name: string,
    value: string,
    formValues: SignupFormType,
  ) => {
    let errorMessage;
    switch (name) {
      case 'nickname':
        if (!value) {
          errorMessage = '닉네임을 작성해주세요.';
        } else if (value.length < 2 || value.length > 20) {
          errorMessage = '닉네임은 최소 2자, 최대 20자 이어야 합니다.';
        }
        break;
      case 'companyName':
        if (!value) {
          errorMessage = '회사명을 작성해주세요.';
        }
        break;
      case 'email':
        if (!value) {
          errorMessage = '이메일을 작성해주세요.';
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value)) {
          errorMessage = '이메일 형식이 아닙니다.';
        }
        break;
      case 'password':
        if (!value) {
          errorMessage = '비밀번호를 작성해주세요.';
        } else if (
          !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/g.test(
            value,
          )
        ) {
          errorMessage = '문자, 숫자, 특수기호를 하나 이상 포함해야 합니다.';
        } else if (value.length < 8) {
          errorMessage = '비밀번호는 8자리 이상 이어야 합니다.';
        }
        break;
      case 'passwordCheck':
        if (!value) {
          errorMessage = '비밀번호를 작성해주세요.';
        } else if (value !== formValues.password) {
          errorMessage = '비밀번호가 일치하지 않습니다.';
        }
        break;
      default:
        errorMessage = '';
        break;
    }
    return errorMessage;
  };

  const validateForm = () => {
    const newErrors: SignupErrorType = {
      nickname: null,
      companyName: null,
      email: null,
      password: null,
      passwordCheck: null,
    };

    // 닉네임 검사
    if (!signupFormValue.nickname) {
      newErrors.nickname = '닉네임을 작성해주세요.';
    } else if (signupFormValue.nickname.length < 2) {
      newErrors.nickname = '닉네임은 최소 2자 이상이어야 합니다.';
    }

    // 회사명 검사
    if (!signupFormValue.companyName) {
      newErrors.companyName = '회사명을 작성해주세요.';
    }

    // 이메일 검사
    if (!signupFormValue.email) {
      newErrors.email = '이메일을 작성해주세요.';
    } else if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(signupFormValue.email)
    ) {
      newErrors.email = '이메일 형식이 아닙니다.';
    }

    // 비밀번호 검사
    if (!signupFormValue.password) {
      newErrors.password = '비밀번호를 작성해주세요.';
    } else if (signupFormValue.password.length < 8) {
      newErrors.password = '비밀번호는 최소 8자 이상이어야 합니다.';
    } else if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(signupFormValue.password)) {
      newErrors.password = '비밀번호는 영문 + 숫자 조합이어야 합니다.';
    }

    // 비밀번호 확인 검사
    if (!signupFormValue.passwordCheck) {
      newErrors.passwordCheck = '비밀번호 확인을 작성해주세요.';
    } else if (signupFormValue.password !== signupFormValue.passwordCheck) {
      newErrors.passwordCheck = '비밀번호가 일치하지 않습니다.';
    }

    // 오류가 있으면 상태 업데이트 후 false 반환
    if (
      newErrors.nickname ||
      newErrors.companyName ||
      newErrors.email ||
      newErrors.password ||
      newErrors.passwordCheck
    ) {
      setErrors(newErrors);
      return false;
    }

    // 모든 유효성 검사를 통과하면 true 반환
    return true;
  };

  // 디바운스된 유효성 검사 함수
  const debouncedValidate = useCallback(
    debounce((name: string, value: string, currentValues) => {
      const error = validateField(name, value, currentValues);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }, 300),
    [],
  );

  // 입력창 제어 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id: name, value } = e.target;

    setSignupFormValue((prev) => {
      const newValues = { ...prev, [name]: value };

      debouncedValidate(name, value, newValues); // ✅ Pass latest form values
      return newValues;
    });
  };

  // 폼 제출 함수
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 폼 검증 실행
    const isValid = validateForm();

    // 폼이 유효하면 mutation 호출
    if (isValid) {
      mutation.mutate();
    }
  };

  return { signupFormValue, handleChange, handleSubmit, errors };
}

export default useSignupForm;
