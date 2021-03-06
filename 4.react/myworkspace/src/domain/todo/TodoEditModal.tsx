import { useRef } from "react";
import { TodoState } from "./type";

// { 함수속성 }
// 함수속성의 타입: (매개변수타입)=>리턴타입
// 함수(ex. 부모 state제어)를 부모 컴포넌트로 부터 매개변수(prop)를 받음
// 자식 컴포넌트에서  이벤트가 발생하면 prop으로 받은 함수를 실행

interface ModalProp {
  item: TodoState;
  onClose: () => void; // 콜백함수
  onSave: (editItem: TodoState) => void; // 콜백함수
}

const TodoEditModal = ({ item, onClose, onSave }: ModalProp) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const todo: TodoState = {
      id: item.id,
      username: item.username,
      memo: inputRef.current?.value, // 수정된 입력값
      createTime: item.createTime,
    };

    onSave(todo);
  };

  // console.log("--todowithmodal--");

  return (
    <>
      {/* 회색 뒤쪽 영역 */}
      {/* <GrayLayer /> */}
      {/*  모달 영역 */}
      <div
        className="modal d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={() => {
          onClose();
        }}
      >
        <div className="modal-dialog">
          {/* 이벤트 버블링 중지시킴 잘모르겠으면 console로 확인해봐라 */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  onClose();
                }}
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                defaultValue={item.memo}
                className="w-100"
                ref={inputRef}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  onClose();
                }}
              >
                닫기
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  save();
                }}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoEditModal;
