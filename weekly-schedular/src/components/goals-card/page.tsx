'use client'

import { Button, Input } from "@headlessui/react";
import { Dispatch, SetStateAction, useState } from "react";
import CrossButton from "@/components/cross-button/page";
import GoalsCrossButton from "../goals-cross-button/page";

interface RoleGoals {
    role: string;
    goals: string[];
  }

type Props = {
    role: string
    setRolesGoals : Dispatch<SetStateAction<RoleGoals[]>>
}

export default function GoalsCard({role,setRolesGoals} : Props){
        const [newGoal,setNewGoal] = useState("");
        const [goals,setGoals] = useState<string[]>([]);

        function handleOnChange(e: { target: { value: SetStateAction<string>; }; }){
            return setNewGoal(e.target.value);
        }
        function AddNewGoal(){
            if(!role || !newGoal) return;
            setRolesGoals((prevRolesGoals) => 
            prevRolesGoals.map((rg)=>
            rg.role === role
            ? {...rg,goals:[...rg.goals,newGoal]}
            : rg))
        }
    return <div>
        {(role && (
            <div className="flex flex-col border-2 rounded-lg w-96 m-5">
                 <h2 className="font-bold text-center text-2xl text-white m-3">{role}</h2>
        <ul className="flex flex-col justify-center">
            {goals.length > 0 && (
                goals.map((goal,index)=>(
                    <li className="font-bold break-words text-2xl text-wrap text-white p-3" key={index}>{index + 1}.{goal}
                    <GoalsCrossButton role={role} goal={goal} setRolesGoals={setRolesGoals}/> 
                    </li>  
                ))
            )}
        </ul>
        <div className="flex justify-center mx-4 my-8">
                        <Input 
                        value={newGoal} 
                        onChange={handleOnChange}
                        className="pr-20"
                        type="text" 
                        placeholder="Add New Goal"
                        />
                        <Button 
                       onClick={AddNewGoal}
                        className="rounded bg-sky-600 py-2 mx-2 px-4 text-lg font-bold text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700"
                        >
                        +
                        </Button>
                    </div>
            </div>
        ))}
        </div>
}