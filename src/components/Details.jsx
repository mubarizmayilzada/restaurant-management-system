import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/scss/main.scss";
import DetailsTable from "./DetailsTable";
import SectionTitle from "./SectionTitle";

const Details = () => {
  const [order, setOrder] = useState({});
  let point = window.location.pathname.substring(9);
  useEffect(() => {

    async function fetchData() {
      const data = await axios.get(`http://localhost:3500/orders/${point}`);
      console.log(data.data);
      setOrder(data.data)
    }
    fetchData();
  }, [point]);
  return (
    <div className="details-wrapper">
      <SectionTitle>{`Table: ${order.order?.product?.[0].table} | Worker: ${order.order?.product?.[0].worker}`}</SectionTitle>
      <DetailsTable order={order} />
    </div>
  );
};

export default Details;
