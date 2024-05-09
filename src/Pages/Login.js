import { useEffect, useState } from "react"

let arr=["https://images.unsplash.com/photo-1498550744921-75f79806b8a7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1569254994521-ddbb54af5ae8?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1565023998836-962ff9d5f9be?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=1918&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593699153969-4b3a1aff4066?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1572272195904-f64d9c02c5b5?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516926401737-ba754884071a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/957777396/photo/golden-gate-bridge-in-san-francisco-california.jpg?s=2048x2048&w=is&k=20&c=T2BGNEV495IKi5Mm8kKpShb2ctf0cAPhk2vbtZmlvr0="
]

export default function Login(){
    let [url, seturl]=useState("");
    let [vis, setvis]=useState(false);
    useEffect(()=>{
        const i=Math.floor(Math.random()*arr.length);
        seturl(arr[i]);
    },[])

    return (
        <div className="logincont1">
        <div className="logincont2" style={{ backgroundImage: `url(${url})`,}}>
            <div className="graylayer">
                <div className="logincont3">
                    <div className="heading1">Login Form</div>
                    <div className="username">
                    <div>Username</div>
                    <input type="text"></input>
                    
                    </div>
                    <div className="username">
                    <div>Password</div>
                    <input type={vis? "text": "password"}></input>
                    
                    </div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
        </div>
    )
}