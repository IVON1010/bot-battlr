import BotCard from "./BotCard";

unction YourBotArmy({ collection, clickHandler, handeleDelete }) {

  return (
    <div className="ui segment inverted olive bot-army bg-green-500">
      <div className="ui five column grid">
        {"Click on a Bot on the bot collection to enlist it to your army."}
        <div className="row bot-army-row">
          {collection.map((bot) => (
            <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handeleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}