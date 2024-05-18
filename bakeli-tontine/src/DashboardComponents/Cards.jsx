import Card from "./Card";
import CardTest from "./CardTest";
export default function Cards({ data }) {

  return (
    <>
    <div className="row mt-3 p-4">
      {data.map((item, index) => (
       <Card key={index} items={item}/>
      ))}
        <CardTest/>
      </div>
    
    </>
  );
}
