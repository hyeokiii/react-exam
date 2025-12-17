import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware"; //타입 자동 추론, 상태 변경 시 콜백 함수 호출(useEffect), 세션/쿠키에 저장
import { immer } from "zustand/middleware/immer"; //상태 업데이트 편리하게 해줌

// type Store = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine(
            {
              count: 0,
            },
            (set, get) => ({
              actions: {
                increase: () => {
                  set((state) => {
                    state.count++;
                  });
                },
                decrease: () => {
                  set((state) => {
                    state.count--;
                  });
                },
              },
            }),
          ),
        ),
      ),
      {
        name: "countStore",
        partialize: (store) => ({ count: store.count }), //저장할 상태 선택
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: "countStore",
    },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    //Listner
    console.log(count, prevCount);

    const store = useCountStore.getState();
    // useCountStore.setState((store)=>{});
  },
);

// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () => {
//       set((store) => ({ count: store.count + 1 }));
//     },
//     decrease: () => {
//       set((store) => ({ count: store.count - 1 }));
//     },
//   },
// }));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
