import { menuItems } from '@/constants/gnbMenu';
import GNBItem from '../item';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';

// GNB 레이아웃 컴포넌트에서 렌더링 되는 footer 컴포넌트입니다.
// 페이지마다 출력이 달라 path를 조회해 조건부 렌더링 합니다.
// 로그인 여부를 전역객체에서 조회해 조건부 렌더링 합니다.
// 상위 컴포넌트로 부터 유저 정보 응답을 내려받아 라우팅 합니다.
function GNBFooter() {
  const router = useRouter();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const hideGnbFooterRoutes = ['/signup', '/login', '/start'];
  const showGnbFooter = hideGnbFooterRoutes.includes(router.pathname);
  return (
    <>
      {showGnbFooter || (
        <footer className="fixed bottom-0 z-10 flex h-[50px] w-full items-center bg-white shadow-md md:invisible">
          <ul className="flex w-full justify-around px-5">
            {menuItems.map((item) => (
              <GNBItem text={item.name} path={item.path} />
            ))}
            {isLoggedIn ? (
              <GNBItem text={'마이페이지'} path={`/user/${user?.nickname}`} />
            ) : (
              <div>
                <GNBItem text={'로그인'} path={'/start'} />
              </div>
            )}
          </ul>
        </footer>
      )}
    </>
  );
}

export default GNBFooter;
