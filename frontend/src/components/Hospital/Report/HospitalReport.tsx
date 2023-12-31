import { useEffect, useState } from 'react'
import * as S from './HospitalReport.style'
import A from '/src/components/Commons/Atoms/index'
import AgreeChart from '../../libraries/Chart/AgreeChart'
import CharacterChart from '../../libraries/Chart/CharacterChart'
import KtasChart from '../../libraries/Chart/KtasChart'
import StatusChart from '../../libraries/Chart/StatusChart'
import TimeChart from '../../libraries/Chart/TimeChart'

import { 
  getReportAge, 
  getReportHeader, 
  getReportKtas, 
  getReportResponse, 
  getReportStatus, 
  getReportTime } from '/src/apis/report'

import { 
  AgeType, 
  HeaderType, 
  KtasType, 
  ResponseType, 
  StatusType, 
  TimeType } from '/src/types/report'

function HospitalReport () {
  const [headerValue, setHeaderValue] = useState<HeaderType>()
  const [ageValue, setAgeValue] = useState<AgeType>()
  const [statusValue, setStatusValue] = useState<StatusType>()
  const [timeValue, setTimeValue] = useState<TimeType>()
  const [responseValue, setResponseValue] = useState<ResponseType>()
  const [ktasValue, setKtasValue] = useState<KtasType>()
  const [selectedYear, setSelectedYear] = useState<string>("2023");

  
  const axiosReportHeader = async (): Promise<void> => {
    try {
      const res = await getReportHeader()
      setHeaderValue(res)
    } catch(err){
      console.log(err)
    }
  }

  const axiosReportAge = async (): Promise<void> => {
    try {
      const res = await getReportAge()
      setAgeValue(res)
    } catch(err){
      console.log(err)
    }
  }
    
  const axiosReportStatus = async (): Promise<void> => {
    try {
      const res = await getReportStatus()
      setStatusValue(res)
    } catch(err){
      console.log(err)
    }
  }
  
  
  const axiosReportTime = async (): Promise<void> => {
    try {
      const res = await getReportTime()
      setTimeValue(res)
    } catch(err){
      console.log(err)
    }
  }
  
  const axiosResponse = async (): Promise<void> => {
    const info : {year : string} = {
      year: selectedYear
    }
    try {
      const res = await getReportResponse(info)
      setResponseValue(res)
    } catch(err){
      console.log(err)
    }
  }

  const axiosReportKtas = async (): Promise<void> => {
    try {
      const res = await getReportKtas()
      console.log(res)
      setKtasValue(res)
    } catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    axiosReportHeader()
    axiosReportTime()
    axiosReportStatus()
    axiosReportAge()
    axiosReportKtas()
  },[])

  useEffect(()=>{
    axiosResponse()
  },[selectedYear])

  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleBox>
          <S.Title>요청/이송 REPORT</S.Title>
        </S.TitleBox>

        <S.ContentBox>
          <S.Content1>
            <A.DivReport $width='15.3%'>요청 개수 : {headerValue?.today}</A.DivReport>
            <A.DivReport $width='15.3%'>승인 개수 : {headerValue?.todayApproved}</A.DivReport>
            <A.DivReport $width='15.3%'>거절 개수 : {headerValue?.todayRejected}</A.DivReport>
            <A.DivReport $width='23.8%'>평균 응답 시간 : {headerValue?.avgResponseTime.toFixed(1)}</A.DivReport>
            <A.DivReport $width='23.8%'>평균 이송 시간 : {headerValue?.avgTransferTime.toFixed(1)}</A.DivReport>

          </S.Content1>
          <S.Content2>
            <A.DivReport $width='49.2%'>
              {responseValue && 
                <AgreeChart
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear} 
                  responseValue={responseValue}/>}
            </A.DivReport>
            <A.DivReport $width='49.2%'>
              {ktasValue && <KtasChart ktasValue={ktasValue}/>}
            </A.DivReport>
          </S.Content2>
          
          <S.Content3>
            <A.DivReport $width='49.2%'>
              {ageValue && <CharacterChart ageValue={ageValue} />}
            </A.DivReport>
            <A.DivReport $width='23.8%'>
              {statusValue && <StatusChart statusValue={statusValue} />}
            </A.DivReport>
            <A.DivReport $width='23.8%'>
              {timeValue && <TimeChart timeValue={timeValue} />}
            </A.DivReport>
          </S.Content3>
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  )
}

export default HospitalReport