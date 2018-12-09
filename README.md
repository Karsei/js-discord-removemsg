# 디스코드 특정 서버 내 채팅 메시지들 삭제

## 사용법

1. [디스코드 홈페이지](https://discordapp.com/) 으로 들어가서 브라우저로 접속합니다. 단, 개발자 모드를 지원하는 브라우저이어야 합니다. (크롬 추천)

2. 자기 채팅 메시지를 지우기를 원하는 서버로 이동합니다. 이때, 브라우저 주소는 아래와 같은 형식이어야 합니다.

**https://discordapp.com/channels/XXXXXXXXXXXXXXXXXX** 또는 **https://discordapp.com/channels/XXXXXXXXXXXXXXXXXX/YYYYYYYYYYYYYYYYYY**

3. 디스코드에서의 자기의 고유 ID(`Author ID`)와 네트워크 인증 토큰(`AuthToken`) 값을 알아야합니다.
이를 위해, F12를 눌러 개발자 모드를 열고 네트워크(Network) 탭으로 이동합니다.

4. 디스코드 검색에서 '보낸이'를 자기 아이디로 놓고 검색합니다. 그러면 네트워크 창에서 'search?author_id=' 로 시작하는 것이 보이는데 이것을 클릭하고 헤더(Headers)를 봅니다.

요청 주소(Request URL)를 보면 **https://discordapp.com/api/v6/guilds/XXXXXXXXXXXXXXXXXX/messages/search?author_id=ZZZZZZZZZZZZZZZZZZ** 이런 형식으로 되어 있는데 저 **ZZZZZZZZZZZZZZZZZZ** 부분을 따로 복사합니다. 이것이 `Author ID`입니다.

그리고 authorization 이라는 이름을 찾으면 **MTY2NTQ0MjEwMzWI04cwMTc2.Du4PQQ.V4NTSE0RFhhXh80vHWE4hA9SRYF** 이런 형식으로 된 것이 있는데 이 문자열을 따로 복사합니다. 이것이 `AuthToken`입니다.

5. 콘솔(Console) 탭으로 이동합니다.

6. 제공하고 있는 소스코드 내에 있는 `YOUR_AUTHORID_HERE`, `YOUR_AUTHTOKEN_HERE` 부분을 위에서 복사했던 것을 넣고 소스코드를 전부 복사하여 콘솔에 입력한 후 엔터칩니다.

7. 0.5초 간격으로 지워지는 것을 확인할 수 있습니다. 끝.