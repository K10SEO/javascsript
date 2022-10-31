{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  // console.log(y);
}

const text = "global"; // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = "inside block1"; // 지역 변수(로컬변수), 지역 스코프(로컬스코프)
  {
    const text = "inside block2";
    console.log(text); // 가장 근접한 상위에 요소를 참조하게 된다.(변수명이 같을경우!! 그럴경우는 없겠지만)
  }
}