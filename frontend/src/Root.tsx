import { BrowserRouter as Switch, Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import Socket from '/src/socket/Socket';
import { ImgLogo } from "./components/Commons/Atoms/Image";
import { IptUserInfo } from './components/Commons/Atoms/Input';
import { BtnSubmit } from './components/Commons/Atoms/Button';
import theme from './styles';

//기본 틀 위치 (변경 가능)
const Container = styled.div`
  background-color: white;
  font-family: 'Pretendard-Regular';  
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background-color: #00d5ff;
  display: flex;
  margin-top: 90px;
`;
const OutletBox = styled.div`
  background-color: white;
  width: 100%;
  margin-right: 50px;
  margin-left: 250px;
  margin-top: 10px;
`;

function App() {
  // const isLogIn = useRecoilValue(LoginState);
  // console.log('로그인 여부=', isLogIn)

  return (
    <Container>
      <Wrapper>
        <OutletBox>
          {/* 여기에서 페이지 끼워짐 */}
          <Socket />
          <Outlet />
        </OutletBox>
      </Wrapper>

      <ImgLogo
        $width="400px"
        $height="200px"/>
      
      <IptUserInfo
        $width='250px'
        $height="70px"
        placeholder='이메일'></IptUserInfo>

      <BtnSubmit
        $width='100px'
        $height='60px'
        $fontSize='23px'
        $backgroundColor={theme.color.pinkLight}>
        로그인</BtnSubmit>

    </Container>
  );
}

function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default Root;
