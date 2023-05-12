import Card from './Card';
import style from './Cards.module.css';

const Cards = ({characters, onClose}) => {
   return (
      <div className={style.container}>
      {
         characters.map(({name, species, gender, origin, image, id}) => {
      return (
            <Card 
         key = {id}
         id = {id}
         name = {name}
         species = {species}
         gender = {gender}
         origin = {origin.name}
         image = {image}
         onClose = {onClose}
         />);
      }
      )
   }
   </div>
   );
};

export default Cards;