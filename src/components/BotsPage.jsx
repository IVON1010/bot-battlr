import React, { useState } from "react";

function BotsPage() {

  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  function enlist(bot) {
    if (army.includes(bot)) return;
    setArmy((army) => [...army, bot]);
  }

  return (
    <div>BotsPage</div>
  )
}

export default BotsPage