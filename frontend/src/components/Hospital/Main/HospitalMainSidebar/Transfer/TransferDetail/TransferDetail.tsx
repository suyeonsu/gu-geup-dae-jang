import { useSetRecoilState } from "recoil";
import { ItemParaType, ItemRequestAt } from "../TransferListItem/TransferListItem.style";
import {
  CloseDiv,
  DetailItemContainer,
  ItemElapseMin,
  ItemAddr,
  TransferDetailContainer,
  TransferDetailContent,
  DetailItemBetween,
  ItemLeftTime,
} from "./TransferDetail.style";
import A from "/src/components/Commons/Atoms";
import theme from "/src/styles";
import { hospitalResponse } from "/src/recoils/HospitalAtoms";
import { HospitalResponseItem } from "/src/types/map";

const TransferDetail = (props: any) => {
  const setCurResponse = useSetRecoilState(hospitalResponse);

  const clickButton = (res: boolean) => {
    const response: HospitalResponseItem = {
      id: props.id,
      responseAt: new Date().toLocaleDateString(),
      responseType: res,
    };
    setCurResponse(response);
  };
  return (
    <TransferDetailContainer>
      <TransferDetailContent>
        <DetailItemContainer>
          <A.DivKtasInfo
            $position="absolute"
            $right="0%"
            $top="0%"
            $ktas={props.ktas.toLowerCase()}
            $width="50px"
            $height="25px"
            $borderRadius="0px 0px 0px 10px"
            $fontSize={theme.font.Small5_12}
          >
            {props.ktas}
          </A.DivKtasInfo>
          <ItemRequestAt>-</ItemRequestAt>
          <DetailItemBetween>
            <ItemParaType>
              {props.ageGroup} {props.gender}
            </ItemParaType>
            <ItemElapseMin>요청 대기 -분 경과</ItemElapseMin>
          </DetailItemBetween>

          <div style={{ width: "90%", margin: "0 auto" }}>
            {props.tags.map((item: string, index: number) => (
              <A.DivTag
                key={index}
                $margin="2px 5px 10px 2px"
                $width="fit-content"
                $height="18px"
                $borderRadius="5px"
                $textAlign="center"
                $padding="2px"
                $fontSize={theme.font.Small5_12}
              >
                {item}
              </A.DivTag>
            ))}
          </div>

          {/* <video style={{ border: "1px solid gray" }}></video> */}

          <div style={{ width: "90%", margin: "0 auto" }}>
            {props.files.map((item: string, index: number) => (
              <img key={index} src={item}></img>
            ))}
          </div>

          <ItemAddr>{props.description}</ItemAddr>
          <ItemAddr>{props.address}</ItemAddr>
          <DetailItemBetween>
            <ItemElapseMin>{props.distance} km</ItemElapseMin>
            <ItemLeftTime>{props.duration}분 이내 도착 가능</ItemLeftTime>
          </DetailItemBetween>

          {/* <A.BtnToggle
            $width="50%"
            $height="50px"
            $position="absolute"
            $left="0%"
            $bottom="0%"
            $borderRadius="0px"
            $color={theme.color.pinkDrak}
            $fontSize={theme.font.Small1_16}
            $boxShadow="0 0.2px 0.1px 0px inset"
            onClick={() => clickButton(false)}
          >
            거절
          </A.BtnToggle>

          <A.BtnToggle
            $width="50%"
            $height="50px"
            $position="absolute"
            $right="0%"
            $bottom="0%"
            $borderRadius="0px"
            $color={theme.color.white}
            $fontSize={theme.font.Small1_16}
            $backgroundColor={theme.color.pinkDrak}
            $boxShadow="0 0.2px 0.1px 0px inset"
            onClick={() => clickButton(true)}
          >
            승인
          </A.BtnToggle> */}
          <A.DivTag
            $width="100%"
            $height="50px"
            $position="absolute"
            $left="0%"
            $bottom="0%"
            $color={theme.color.white}
            $borderRadius="0px"
            $fontSize={theme.font.Small1_16}
            $backgroundColor={theme.color.blue}
          >
            3분 이내 도착 예정
          </A.DivTag>
        </DetailItemContainer>
      </TransferDetailContent>
      <CloseDiv onClick={props.onclick}>&lt;</CloseDiv>
    </TransferDetailContainer>
  );
};

export default TransferDetail;

// id: number,
// addr: string,
// pos: Position,
// ktas: string,
// elapseMin: number,
// leftTime: number,
// paraType: string,
// paraTag: string[],
// paraInfo: string,
// requestAt?: string,