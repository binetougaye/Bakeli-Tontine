import Card from "./Card";
import CardTest from "./CardTest";
export default function Cards({ data }) {

  return (
    <>
    <div className="row">
      {data.map((item, index) => (
       <Card key={index} items={item}/>
      ))}
        <CardTest/>
      </div>
    
    </>
  );
}
