import React, { useContext } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Items } from "../Router/Router";

export default function Statistics() {
  const itemName = [];
  const totalQuestions = [];
  const items = useContext(Items);
  items.map((item) => itemName.push(item.name));
  items.map((item) => totalQuestions.push(item.total));

  const data = [
    {
      name: itemName[0],
      Total: totalQuestions[0],
    },
    {
      name: itemName[1],
      Total: totalQuestions[1],
    },
    {
      name: itemName[2],
      Total: totalQuestions[2],
    },
    {
      name: itemName[3],
      Total: totalQuestions[3],
    },
  ];
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Total" barSize={30} fill="#8884d8" />
      </BarChart>
    </div>
  );
}
