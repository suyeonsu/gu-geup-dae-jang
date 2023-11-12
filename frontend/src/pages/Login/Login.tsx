import * as S from './Login.style';
import M from '/src/components/Commons/Molecules';
import GoToGuest from '/src/components/Login/GoToGuest/GoToGuest';
import LoginInput from '/src/components/Login/LoginInput/LoginInput';
import Geolocation from '/src/components/libraries/Geolocation/Geolocation';

function Login() {
  return (
    <S.Container>
      <Geolocation/>
      <S.Wrapper>
        <S.ContentBox>
          <M.Logo/>
          <GoToGuest/>
          <LoginInput/>          
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Login;
