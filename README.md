# introduce-myself-app

## 🙆‍♀️ 소개

제 자신을 소개하는 내용을 담은 간단한 어플입니다. 리액트 네이티브 CLI와 타입스크립트를 사용하여 만들었습니다.

## 📄 화면구성

맨 처음에 앱을 어떻게 만들지 아래처럼 대강 구성해봤다.

<img src="https://github.com/lyj-ooz/my-screenshots/blob/master/plan.jpg" width="250" height="150"/>

앱의 화면들은 아래처럼 크게 4 부분으로 구성되어 있다.

<img src="https://github.com/lyj-ooz/my-screenshots/blob/master/1.png" width="150" height="300"/>
<img src="https://github.com/lyj-ooz/my-screenshots/blob/master/1-1.png" width="150" height="300"/>
<img src="https://github.com/lyj-ooz/my-screenshots/blob/master/2.png" width="150" height="300"/>
<img src="https://github.com/lyj-ooz/my-screenshots/blob/master/3.png" width="150" height="300"/>

## 😅 어려웠던 점

- 안드로이드 에러 디버깅
  - 안드로이드 개발에 익숙하지 않아서 에러 메세지가 정말 무엇 때문에 발생한 것인지 파악하기 어려웠다.
- 네비게이터 안의 네비게이터
  - bottom tab bar를 사용하고 첫번째 탭 내에서 한번 더 네비게이션을 구현하는데 이 구조를 적용하는 것이 조금 어려웠다.
- ScrollView를 적용했는데 스크롤이 안 내려갈 때
  - ScrollView 안에 들어있던 ImageCarousel 컴포넌트의 컨테이너 스타일에서 height를 %로 줬기 때문이었다.
  - 어찌저찌 스택오버플로우 글을 발견해서 해결은 했는데 처음엔 어떻게 디버깅 해야 하는지 난감했다.

## 🤔 아쉬웠던 점

- 모바일 개발은 아직 미숙해서 당장 에러를 해결하는데에 더 촛점이 맞춰져 있는데 앞으로 왜 이런 에러가 발생했는지 원인도 이해하는 것에 집중해서 공부해 나가야 겠다고 생각했다.
- 소켓 통신을 한번도 해본 적이 없어서 시간이 되면 간단한거라도 구현하고 싶었는데 시간이 모자라서 소켓 통신을 이용한 기능을 추가하지 못했다.
- 프로젝트 중간 중간 안드로이드도 확인해보면서 개발해야 했는데 아이폰만 보면서 만들었더니 다 만든 후에 안드로이드에서 앱 실행이 안되어서 난감했다. (사실 지금도 안되어서 더 디버깅 필요하다.....)

## 🤝 도움 받았던 문서들

- 캐러셀 구현
  - https://maruzzing.github.io/study/rnative/React-Native-%EC%BA%90%EB%9F%AC%EC%85%80(carousel)-%EB%A7%8C%EB%93%A4%EA%B8%B0/
  - https://codecraft.tistory.com/entry/React-Native-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%8F%99%EC%98%81%EC%83%81-%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%8A%A4%EC%99%80%EC%9D%B4%ED%94%84-%EA%B5%AC%ED%98%84-%EC%82%BD%EC%A7%88%EA%B8%B0
  - https://snack.expo.dev/KJl_IKU3D
- 스크롤뷰 스크롤 안 내려가는 문제
  - https://stackoverflow.com/a/68892585
- 탭, 스택 네비게이션
  - https://velog.io/@yhe228/React-NavigationTab-navigation
- 스플래시 스크린
  - https://ingg.dev/rn-splash/
  - https://focus-on-my.tistory.com/260
  - https://www.npmjs.com/package/react-native-splash-screen
