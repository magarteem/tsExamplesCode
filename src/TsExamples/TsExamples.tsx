//   !              peremennie
let a: string | number;
a = "3232";
a = 545;

//   ?
let d: string | boolean = "rerer";
d = false;

//   ?
let sex: "male" | "female";
sex = "female";
sex = "male";

//   !                     []
let mass: Array<string> = ["rer", "rererer", "rerere"];
let mass1: string[] = ["rer", "rererer", "rerere"];

//   !                      {}
type AddressType = {
  city?: string;
  country: string;
};
type ObjType = {
  name: string;
  age: number;
  isSummary: boolean;
  tre: null;
  address: AddressType | null;
  func: () => void;
  func1: (message: string) => void;
};

let obj: ObjType = {
  name: "Trefd",
  age: 54,
  isSummary: true,
  tre: null,
  address: {
    city: "Minsc",
    country: "Belorus",
  },
  func() {
    console.log("ничего не принимает");
  },
  func1(message: string) {
    console.log("принимает message" + message);
  },
};

//                ?
type Address_1_Type = {
  city?: string | null;
  country: number | null;
  trtt22?: boolean;
  trtt33?: boolean;
  trtt44?: boolean;
};
//name: null as string | null, пока null но воспринимай как string
let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSummary: null as boolean | null,
  tre: null,
  arry: [] as Array<Address_1_Type>,
  address: {
    city: null,
    country: null,
  } as Address_1_Type,
};

export type InitialStateType = typeof initialState;

let initialState_1: InitialStateType = {
  name: "Trefd",
  age: 54,
  isSummary: true,
  tre: null,
  arry: [{ city: "rere", country: 54 }],
  address: {
    city: "Minsc",
    country: 33,
  },
};
let initialState_2: InitialStateType = {
  name: "Trefd22",
  age: 5422,
  isSummary: false,
  tre: null,
  arry: [{ city: "6666e", country: 5466 }],
  address: {
    city: "Minsc66",
    country: 3366,
    trtt22: true,
    trtt33: false,
    trtt44: true,
  },
};
//                              ?

//   !                    function
//? вариант 1 но не уверен
type summType = (a: number, b: number) => void;
const summ: summType = (a: number, b: number) => {
  return a + b;
};
summ(5, 7);

//? вариант 2
const summ1: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
};
summ1(5, 7);

//!=================================       ActionCreator Type
let GET_TASKS = "APP/GetTASKS";
type GetTASKSActionType = {
  type: typeof GET_TASKS;
  id: number;
};

let action: GetTASKSActionType = {
  type: GET_TASKS,
  id: 12,
};
//!    ======================================================
//!    ======================================================
//!    ======================================================

export const TsExamples = () => {
  return <div>смотри код</div>;
};
