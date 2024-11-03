import React, { useState } from "react";

function TipCalculator() {
  const [amount, setAmount] = useState("");
  const [number, setnumber] = useState("");
  const [total, settotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [option, setoption] = useState(null);
  const [isclicked, setisclicked] = useState(false);
  const [isCustomTipVisible,setCustomTipVisible] = useState(false);
  const handleTipSelection = (percentage) => {
    setoption(percentage);
    calculateTipAndTotal(amount, percentage, number);
  };
  const calculateTipAndTotal = (bill, tipPercentage, people) => {
    const billAmount = parseFloat(bill);
    const tip = parseInt(tipPercentage);
    const noOfPeople = parseInt(people);
    if (
      !isNaN(billAmount) &&
      !isNaN(tipPercentage) &&
      !isNaN(noOfPeople) &&
      noOfPeople > 0
    ) {
      const totaltip = (billAmount * tip) / 100;
      const tipPerPerson = totaltip / noOfPeople;
      const totalAmount = billAmount + totaltip;
      const totalPerPerson = totalAmount / noOfPeople;
      setTip(tipPerPerson.toFixed(2));
      settotal(totalPerPerson.toFixed(2));
    } else {
      setAmount("");
      setnumber("");
      settotal(0);
      setTip(0);
      alert("Invalid Details");
    }
  };
  const handleReset = () => {
    setAmount("");
    setnumber("");
    settotal(0);
    setTip(0);
    setoption(null);
    setisclicked(false);
    setCustomTipVisible(false);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-teal-200">
      <div className=" p-10 bg-white grid md:flex md:justify-center md:items-center rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
        <div className="w-96 h-96 mx-auto  p-6 rounded-md bg-slate-50 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <div className="mx-5">
            <label className="text-green-950 font-bold">Bill</label>
            <div className="relative flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="17"
                className="absolute top-1 left-2 m-1"
              >
                <path
                  fill="#005700"
                  d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                />
              </svg>
              <input
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                className="bg-slate-400 rounded-md w-80 pl-8 h-8 "
                type="number"
              />
            </div>
          </div>
          <div className="mx-5 mt-5">
            <label className="text-green-950 font-bold">Number of people</label>
            <div className="relative flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                className="absolute top-1 left-2 m-1"
              >
                <path
                  fill="#005700"
                  d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                />
              </svg>
              <input
                value={number}
                onChange={(e) => {
                  setnumber(e.target.value);
                }}
                className="bg-slate-400 rounded-md w-80 pl-8 p-1 h-8"
                type="number"
              />
            </div>
          </div>
          <div className="grid h-fit m-5 gap-2">
            <div className="grid  rounded-md  bg-slate-50">
              <label className="ml-2 text-green-950 font-bold">Select Tip %</label>
              <div
                className={`grid grid-cols-3 gap-2 justify-around items-center mt-5 `}
              >
                {[5, 10, 15, 20, 25].map((perc) => (
                  <button
                    key={perc}
                    onClick={() => handleTipSelection(perc)}
                    className={`${
                      option === perc ? "bg-green-600" : "bg-emerald-950"
                    } p-2 w-20 h-10 rounded-md  text-white font-semibold hover:bg-green-600 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]`}
                  >
                    {perc}%
                  </button>
                ))}
                <button
                onClick={()=>{setCustomTipVisible(!isCustomTipVisible)}}
                className="bg-emerald-950 p-2 w-20 h-10 rounded-md text-white font-semibold hover:bg-green-600"
                >
                Custom
                </button>
                
              </div>
              {isCustomTipVisible && (
                <div className="mt-5">
                      <input onChange={(e)=>{handleTipSelection(e.target.value)}} placeholder="Enter your amount" type="number" className="bg-slate-400 rounded-md w-72 p-1 h-8 placeholder:text-black"/>
                </div>

              )}
            </div>
          </div>
        </div>
        <div className="w-96 h-96 mx-auto bg-emerald-950 grid justify-center items-center rounded-md">
          <div className="flex justify-evenly">
            <div className="">
              <h1 className="text-white font-bold text-xl mr-10">Tip Amount</h1>
              <h1 className="text-teal-700">/ person</h1>
            </div>
            <h1 className="text-4xl font-bold text-teal-700 overscroll-x-contain w-20">{tip}$</h1>
          </div>
          <div className="flex justify-evenly">
            <div className="">
              <h1 className="text-white text-xl font-bold">Total</h1>
              <h1 className="text-teal-700">/ person</h1>
            </div>
            <h1 className="text-4xl font-bold text-teal-700 ml-14 overscroll-x-contain w-20">{total}$</h1>
          </div>
          <button
            onClick={() => {
              handleReset();
            }}
            className="bg-green-700 text-white font-bold rounded-md text-center h-10 w-80 mx-auto"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
