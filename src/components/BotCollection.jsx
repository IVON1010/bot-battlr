
import BotCard from "./BotCard";

function BotCollection({ collection, clickHandler, handleDelete }) {

  return (
    <div className="ui four column grid">
      {"Bot Collection click on a bot to add it to your army."}
      <div className="row">
        {collection.map((bot) => (
          <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
