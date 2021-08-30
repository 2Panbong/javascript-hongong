import { createSlice } from "@reduxjs/toolkit";
import { penguin } from "../../common/data";

// redux store(리덕스 저장소)에 하나의 state를 관리하고 처리할 수 있는 모듈
// slice에는 state와 reducer가 있음
// reducer는 state를 변경하는 함수

// 내부에서만 쓰는게 아닌 외부에서 쓸꺼니 내보내기를 하는것(export)
// state 타입
export interface ProfileState {
  image: string | undefined;
  username: string | undefined;
}

// state 초기 상태를 선언
// 초기값이 없어도 넣어야함 안넣으면 에러가 생김 빈객체생성 그런거 안됨
const initialState: ProfileState = {
  image: penguin,
  username: "Hack Bong Lee",
};

// slice를 생성
export const profileSlice = createSlice({
  name: "profile", // slice의 이름(state 이름)

  // initialState: initialState, // state 초기값
  // 변수명과 속성명이 동일하기 때문에 아래처럼 작성해도 자동으로 됨
  initialState, // 이 slice의  state 초기값

  reducers: {}, // state 변경함수 목록
});

// slice.reducer
// ==state 변경함수를 여러개를 가지고 있는 객체
// == reducer를 여러개 가지고 있는 객체
// slice.reducer:{ fuction..(), function...(),.... }

// 내보내기의 기본객체를 reducer 함
export default profileSlice.reducer;
