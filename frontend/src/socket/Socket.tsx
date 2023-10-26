import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client/dist/sockjs';
import { Stomp } from '@stomp/stompjs';

const SOCKET_SERVER_URL = `https://k9b204a.p.ssafy.io:64419/calling-websocket`;

function Socket() {
  const stompClient = useRef(null);

  // 메시지 송신
  function sendMessage() {
    connect().then(function () {
      console.log('송신 함수');
      stompClient.current.send(`/app/1`, {}, JSON.stringify({ name: 'firstman', longitude: 123.12, latitude: 456.45 }));
    });
  }

  // 메시지 수신
  function receiveMessage() {
    console.log('수신 함수');
    sendMessage();
  }

  // 구독 함수
  function subscribe() {
    console.log('구독 함수');
    stompClient.current.subscribe(`/topic/1`, receiveMessage);
  }

  // 연결 함수
  function connect() {
    if (!stompClient.current || !stompClient.current.connected) {
      stompClient.current = Stomp.over(() => new SockJS(SOCKET_SERVER_URL));
      return new Promise<void>((resolve, reject) => {
        console.log(stompClient.current);
        stompClient.current.connect(
          {},
          function () {
            console.log('연결 함수 성공');
            resolve(); // 연결 성공
            subscribe();
          },
          function () {
            console.log('연결 함수 실패');
            reject(); // 연결 실패
          },
        );
      });
    }
  }

  // 첫 연결
  useEffect(() => {
    console.log('첫 연결');
    connect();
  }, []);

  return <></>;
}

export default Socket;
