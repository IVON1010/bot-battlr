import React, { useState } from "react";

function BotsPage() {

  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  function enlist(bot) {
    if (army.includes(bot)) return;
    setArmy((army) => [...army, bot]);
  }
  function retire(bot) {
    setArmy((army) => army.filter((it) => it.id !== bot.id));
  }

  return (
    <div>BotsPage</div>
  )
}

export default BotsPage