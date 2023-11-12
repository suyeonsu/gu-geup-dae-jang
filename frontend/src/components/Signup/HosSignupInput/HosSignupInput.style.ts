import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 3px solid green; */
`;

// atoms
export const Row1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* border: 3px solid skyblue; */
  width: 90%;
  height: 6.2vh;
  margin-bottom: 2.3vh;
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid skyblue; */
  width: 90%;
  height: 3vh;
  margin-bottom: 4vh;
`;

export const LoginToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid purple; */
  width: 40%;
  height: 100%;
  font-size: 2vh;
  @media (max-width: 500px) {
    font-size: 1.8vh;
    width: 48%;
  }
  cursor: pointer;
`;

export const TxtContent1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: '120%';
`;

export const TxtContent2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: '180%';
`;

export const ImgPassword = styled.img`
  position: absolute;
  right: 5%;
  height: 40%;
`;