 export default function BigBadge({ title, value}) {
     return(
         <div className="badge">
             <span className="badge_title">{title}</span>
             <span className="badge_value">{value}</span>
         </div>
     );
 }