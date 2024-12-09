/**
 * Function 정의
 */

// function printName(name) {
//   console.log(name);
// }

function printName(name: string) {
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}은 사귀고 있습니다.`;
}

console.log(returnTwoCouples("아이유", "코드팩토리"));

/**
 * Optional Parameter
 */
// 이 때 y는 number OR undefined (값이 안들어오면 모르니까)
function multiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}

console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

// 여기서는 y는 number로 고정 (안넣으면 디폴트값 20이 들어가니까)
function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}
console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 20));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `너무좋아 ${x}`);
}
console.log(getInfiniteParameters("아이유", "아이브", "블랙핑크"));

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number): number {
  return x + y;
}
addTwoNumbers(10, 20);

function randomNumber() {
  return Math.random() > 0.5 ? 10 : "랜덤";
}
// randomNumber(): 10 | "랜덤"
randomNumber();

function subtractTwoNumbers(x: number, y: number): number {
  return x - y;
}

const subtractTwoNumbersArrow = (x: number, y: number): number => {
  return x - y;
};
/**
 * 특수 반환 타입
 *
 * void / never
 */
// function doNotReturn(): void
function doNotReturn(): void {
  console.log("저는 반환을 하지 않습니다.");

  // return 3;
  return; // 이건 가능
}
// never : 무한루프 또는 에러를 던지기
function throwError(): never {
  while (true) {}
}
function throwError2(): never {
  throw Error();
}
