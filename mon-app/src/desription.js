import React from 'react'
import Card from 'react-bootstrap/Card';
export default function desription({film}) {
   const data2=[
        {id:1, description:"Le Transporteur (The Transporter) est un film franco-américain réalisé par Louis Leterrier et Corey Yuen, sorti en 2002. Le film met en vedette Jason Statham dans le rôle de Frank Martin, un « transporteur » qui livre n'importe quoi, n'importe où, sans poser de questions, et pour le bon prix.Premier opus d'une trilogie, il est suivi du Transporteur 2 en 2005 et du Transporteur 3 en 2008, avant que celle-ci ne subisse un reboot/préquel avec Le Transporteur : Héritage, sorti en 2015. Une série télévisée fut également créée en 2012 avec Chris Vance dans le rôle principal.Malgré un accueil critique mitigé, le film est un succès au box-office et permet de rapporter plus de 43 millions de dollars.", trailer:"https://youtu.be/7FnbLyv2oio"},
        {id:2,description:"Le film raconte l'histoire d'un milliardaire (Richard Attenborough) et son équipe de généticiens parvenant à ramener à la vie des dinosaures grâce au clonage. Un petit groupe de visiteurs est invité à découvrir le parc pour confirmer sa viabilité avant son ouverture. Cependant, la visite tourne à la catastrophe lorsqu'un acte de sabotage industriel provoque l'arrêt des installations électriques et du système de sécurité du parc, entrainant alors l'évasion des dinosaures. Le groupe doit alors lutter pour sa survie et s'échapper de l'île.",trailer:"https://youtu.be/RFinNxS5KN4"},
        {id:3,description:"En 1969, l'archéologue et aventurier américan Indiana Jones est opposé à la course à l'espace en raison du fait que les États-Unis ont recruté d'anciens nazis pour battre l'Union Soviétique dans cette compétition. Sa filleule Helena l'accompagne dans ce combat. Pendant ce temps, Jürgen Voller, un employé de la NASA et ex-nazi impliqué dans le programme lunaire cherche à rendre le monde meilleur à son idée.",trailer:"https://www.youtube.com/watch?v=Ov3UMve-zv8"},
        {id:4,description:"Expendables ou Les Sacrifiés au Québec (The Expendables) est une série de films d'action américains débutée avec Expendables : Unité spéciale en 2010. À ce jour la saga est composée de trois films ; un quatrième sortira en 2023.La particularité de cette série de films est que la distribution de chaque volet est une réunion de vedettes du cinéma d'action des années 1980, 1990 et 2000. Elle est scénarisée par Sylvester Stallone, réalisateur du premier volet, qui incarne également de Barney Ross, le chef de l'unité spéciale des « Expendables ».",trailer:"https://www.youtube.com/watch?v=mYBfDeiPgcg"},
        {id:5,description:"La Chute (Der Untergang) est un film allemand réalisé par Oliver Hirschbiegel et sorti en 2004. Le film évoque les événements et circonstances liés à la mort d'Adolf Hitler et à ses derniers jours, durant la bataille de Berlin en avril 1945.Le film est sélectionné pour l'Oscar du meilleur film en langue étrangère en 2005, mais n'est pas lauréat ; il remporte en 2004 trois Bayerischer Filmpreis, meilleur producteur pour Bernd Eichinger, meilleur acteur pour Bruno Ganz qui incarne Hitler, et le prix du public, ainsi que le Prix Bambi du meilleur film allemand.",trailer:"https://www.youtube.com/watch?v=zTD7r8hpOzU"},
      ]
  return (
   
       data2.id == film.id ?
   
       <Card style={{ width: '18rem' }}>
     
       <Card.Body>
         <Card.Title>{film.title}</Card.Title>
         <Card.Text>
           {data2.description}
         </Card.Text>
         <Card.Text>
         {data2.trailer}
         </Card.Text>
            
       </Card.Body>
     </Card>
     )
}
