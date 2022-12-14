// 주석을 달 수 있다
/**
 * 주석이 된다
 * 다음줄로 주석이 넘어간다.
 */

/** 변수 규칙!
 * 변수는 라틴 문자를 써야한다
 * 라틴 문자(0-9, a-z. A-Z), _
 * 변수는 대소문자를 구분한다.
 * 변수 이름을 작성할때는 단어 두개를 연결 할때는 EX) camelCase 처럼 뒤에 오는 단어 시작을 대문자로 해야한다
 * 변수에는 예약어를 사용 불가 하다 EX) let lf;, let for;
 * 숫자로 시작 하는 방식도 안된다
 * 특수문자로 시작도 안된다( _ , & 두가지는 예외)
 * 이모지도 사용 하면 안된다.
 * 여러개의 변수를 1,2,3 숫자로 구분 하는것은 안좋다. -> 최대한 의미있게, 구체적인 이름으로 작성 하는게 좋다
 */

//변수의 네이밍 방법

//나쁜예제 1
let number = 20;

//좋은예제 1 -1
let myAge = 20;

//나쁜예제 2
let audio1;
let audio2;

//좋은예제 2 -1
let backgroundAudio;
let windAudio;

// 꿀팁! = 관련된것을 앞으로 구체적인것을 뒤로 (나중에 오디오에 관련된 요소?들을 불러 오기가 쉽다)
let audiobackground;
let audioWind;