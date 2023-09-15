export default function Tools(props){
    return(
        <p>my name is {props.name},
        my skill sets are 
            <ul>
               <li>{props.skill1},</li>
               <li>{props.skill2},</li>
               <li>{props.skill3},</li>
               <li>{props.skill4}</li>
            </ul>
        </p>
    )
}