import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../slices/counterSlice";
import { useState } from "react";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);
  return (
    <>
      <Head>
        <title>Redux</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="font-bold">
          The value of the counter is:{" "}
          <span className="text-yellow-400">{count}</span>{" "}
        </h1>
        <button
          onClick={() => dispatch(increment())}
          className="bg-slate-800 text-white p-5"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-slate-800 text-white p-5"
        >
          -
        </button>
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (!input) return alert("Number can't be ZERO");
            dispatch(incrementByAmount(parseInt(input)));
            setInput(0);
          }}
        >
          <input
            type="number"
            className="outline-none border-cyan-800"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="submit" className="bg-slate-800 text-white p-2">
            OK
          </button>
        </form>
      </main>
    </>
  );
}
